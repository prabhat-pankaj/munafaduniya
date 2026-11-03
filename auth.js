import { firebaseConfig, firebaseReady } from "./firebase-config.js";

var fb = null;
var confirmationResult = null;

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, function (
    character
  ) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[character];
  });
}

function setText(id, value) {
  var element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function setStatus(message, type) {
  var element = document.getElementById("authStatus");
  if (!element) {
    return;
  }
  element.textContent = message || "";
  element.className =
    "form-status" +
    (message ? " is-visible" : "") +
    (type === "error" ? " is-error" : "") +
    (type === "success" ? " is-success" : "");
}

function friendlyAuthError(error) {
  var code = (error && error.code) || "";
  var messages = {
    "auth/invalid-email": "Enter a valid email address.",
    "auth/user-not-found": "No account found for that email.",
    "auth/wrong-password": "Incorrect email or password.",
    "auth/invalid-credential": "Incorrect email or password.",
    "auth/invalid-login-credentials": "Incorrect email or password.",
    "auth/email-already-in-use": "An account already exists for that email. Try signing in.",
    "auth/weak-password": "Use a password with at least 6 characters.",
    "auth/missing-password": "Enter your password.",
    "auth/popup-closed-by-user": "Google sign-in was closed before finishing.",
    "auth/popup-blocked": "Your browser blocked the sign-in popup. Allow popups and try again.",
    "auth/operation-not-allowed":
      "This sign-in method is not enabled in Firebase yet.",
    "auth/invalid-phone-number":
      "Enter a valid phone number, including the country code.",
    "auth/invalid-verification-code":
      "That verification code is not valid. Check it and try again.",
    "auth/code-expired": "That code has expired. Request a new one.",
    "auth/too-many-requests": "Too many attempts. Please wait a few minutes.",
    "auth/unauthorized-domain":
      "This domain is not authorized in Firebase Authentication settings.",
    "auth/network-request-failed":
      "Network error. Check your connection and try again."
  };
  return messages[code] || "Something went wrong. Please try again.";
}

function setLoading(scope, isLoading, idleLabel) {
  var card = scope.closest(".form-card");
  var button = scope.querySelector(".btn-submit");
  if (card) {
    card.classList.toggle("is-loading", isLoading);
  }
  if (button) {
    button.disabled = isLoading;
    button.setAttribute("aria-busy", isLoading ? "true" : "false");
    var label = button.querySelector(".btn-label");
    if (label) {
      label.textContent = isLoading ? "Please wait…" : idleLabel;
    }
  }
}

function renderHeaderAuth(user) {
  var slot = document.getElementById("authSlot");
  if (!slot) {
    return;
  }

  if (!user) {
    slot.innerHTML = '<a class="auth-link" href="signin.html">Sign in</a>';
    return;
  }

  var name =
    user.displayName || (user.email ? user.email.split("@")[0] : "Account");
  var firstName = name.trim().split(/\s+/)[0] || "Account";
  var initial = firstName.charAt(0).toUpperCase() || "A";
  slot.innerHTML =
    '<a class="auth-user" href="account.html" aria-label="Open your account">' +
    '<span class="auth-avatar" aria-hidden="true">' +
    escapeHtml(initial) +
    "</span>" +
    '<span class="auth-name">' +
    escapeHtml(firstName) +
    "</span></a>" +
    '<a class="auth-wallet-link" href="wallet.html" aria-label="Wallet and earnings">Wallet</a>';
}

function formatPaise(paise) {
  var amount = Number(paise);
  if (!Number.isFinite(amount)) {
    amount = 0;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount / 100);
}

function showConfigNotice() {
  var notice = document.getElementById("authConfigNotice");
  if (notice) {
    notice.hidden = false;
  }

  document
    .querySelectorAll(
      "#signinForm, #signupForm, #phoneForm, #otpForm, #googleSignin, #googleSignup"
    )
    .forEach(function (item) {
      if (item.matches("button, input, select")) {
        item.disabled = true;
      }
      item
        .querySelectorAll("button, input, select")
        .forEach(function (control) {
          control.disabled = true;
        });
    });
}

async function loadFirebase() {
  if (!firebaseReady) {
    return false;
  }

  var version = "10.12.5";
  var base = "https://www.gstatic.com/firebasejs/" + version + "/";
  var modules = await Promise.all([
    import(base + "firebase-app.js"),
    import(base + "firebase-auth.js"),
    import(base + "firebase-firestore.js")
  ]);

  var appModule = modules[0];
  var authModule = modules[1];
  var dbModule = modules[2];
  var app = appModule.initializeApp(firebaseConfig);

  fb = {
    auth: authModule.getAuth(app),
    db: dbModule.getFirestore(app),
    authModule: authModule,
    dbModule: dbModule
  };

  return true;
}

async function saveProfile(user, extra) {
  if (!fb || !fb.db) {
    return;
  }

  extra = extra || {};
  var ref = fb.dbModule.doc(fb.db, "users", user.uid);

  try {
    var snapshot = await fb.dbModule.getDoc(ref);
    var data = {
      name: extra.name || user.displayName || "",
      email: user.email || "",
      phone: user.phoneNumber || extra.phone || "",
      photoURL: user.photoURL || "",
      provider: user.providerData[0] ? user.providerData[0].providerId : "password",
      updatedAt: fb.dbModule.serverTimestamp()
    };

    if (!snapshot.exists()) {
      data.createdAt = fb.dbModule.serverTimestamp();
      data.savedDeals = [];
      await fb.dbModule.setDoc(ref, data);
    } else {
      await fb.dbModule.setDoc(ref, data, { merge: true });
    }
  } catch (error) {
    console.warn("Could not save the user profile.", error);
  }
}

function providerLabel(providerId) {
  var labels = {
    password: "Email and password",
    "google.com": "Google",
    "phone": "Phone number",
    "facebook.com": "Facebook",
    "apple.com": "Apple",
    "github.com": "GitHub"
  };
  return labels[providerId] || "Firebase account";
}

function initGoogleAuth(buttonId) {
  var button = document.getElementById(buttonId);
  if (!button) {
    return;
  }

  button.addEventListener("click", async function () {
    setStatus("");
    button.disabled = true;
    try {
      var provider = new fb.authModule.GoogleAuthProvider();
      var result = await fb.authModule.signInWithPopup(fb.auth, provider);
      await saveProfile(result.user, {});
      window.location.href = "account.html";
    } catch (error) {
      setStatus(friendlyAuthError(error), "error");
    } finally {
      button.disabled = false;
    }
  });
}

function initPhoneAuth() {
  var phoneForm = document.getElementById("phoneForm");
  if (!phoneForm) {
    return;
  }

  var recaptcha = null;

  function getRecaptcha() {
    if (!recaptcha) {
      recaptcha = new fb.authModule.RecaptchaVerifier(
        fb.auth,
        "recaptcha-container",
        { size: "invisible" }
      );
    }
    return recaptcha;
  }

  phoneForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    var country = document.getElementById("phoneCountry").value || "+91";
    var number = (document.getElementById("phoneNumber").value || "").replace(
      /\D/g,
      ""
    );

    if (number.length < 6) {
      setStatus("Enter a valid phone number.", "error");
      return;
    }

    var phone = country + number;
    setLoading(phoneForm, true, "Send code");

    try {
      confirmationResult = await fb.authModule.signInWithPhoneNumber(
        fb.auth,
        phone,
        getRecaptcha()
      );

      var otpForm = document.getElementById("otpForm");
      setText("otpPhoneLabel", phone);
      if (otpForm) {
        otpForm.hidden = false;
      }
      phoneForm.hidden = true;
      setStatus("We sent a 6-digit code to " + phone + ".", "success");

      var codeInput = document.getElementById("otpCode");
      if (codeInput) {
        codeInput.focus();
      }
    } catch (error) {
      setStatus(friendlyAuthError(error), "error");
      if (recaptcha) {
        try {
          recaptcha.clear();
        } catch (clearError) {
          /* ignore */
        }
        recaptcha = null;
      }
    } finally {
      setLoading(phoneForm, false, "Send code");
    }
  });

  var otpForm = document.getElementById("otpForm");
  if (!otpForm) {
    return;
  }

  otpForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    var code = (document.getElementById("otpCode").value || "").trim();
    if (!confirmationResult) {
      setStatus("Request a verification code first.", "error");
      return;
    }

    setLoading(otpForm, true, "Verify code");

    try {
      var result = await confirmationResult.confirm(code);
      await saveProfile(result.user, {});
      window.location.href = "account.html";
    } catch (error) {
      setStatus(friendlyAuthError(error), "error");
    } finally {
      setLoading(otpForm, false, "Verify code");
    }
  });

  var changeButton = document.getElementById("changePhoneBtn");
  if (changeButton) {
    changeButton.addEventListener("click", function () {
      otpForm.hidden = true;
      phoneForm.hidden = false;
      setStatus("");
    });
  }
}

function initSignIn() {
  var form = document.getElementById("signinForm");
  if (!form) {
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("");
    setLoading(form, true, "Sign in");

    try {
      var result = await fb.authModule.signInWithEmailAndPassword(
        fb.auth,
        document.getElementById("signinEmail").value.trim(),
        document.getElementById("signinPassword").value
      );
      await saveProfile(result.user, {});
      window.location.href = "account.html";
    } catch (error) {
      setStatus(friendlyAuthError(error), "error");
    } finally {
      setLoading(form, false, "Sign in");
    }
  });

  var resetButton = document.getElementById("resetPasswordBtn");
  if (resetButton) {
    resetButton.addEventListener("click", async function () {
      var email = document.getElementById("signinEmail").value.trim();
      if (!email) {
        setStatus("Enter your email address first, then choose reset.", "error");
        return;
      }

      try {
        await fb.authModule.sendPasswordResetEmail(fb.auth, email);
        setStatus("Password reset email sent to " + email + ".", "success");
      } catch (error) {
        setStatus(friendlyAuthError(error), "error");
      }
    });
  }

  initGoogleAuth("googleSignin");
  initPhoneAuth();
}

function initSignUp() {
  var form = document.getElementById("signupForm");
  if (!form) {
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var name = document.getElementById("signupName").value.trim();
    var email = document.getElementById("signupEmail").value.trim();
    var phone = document.getElementById("signupPhone").value.trim();
    var password = document.getElementById("signupPassword").value;
    var confirm = document.getElementById("signupConfirm").value;

    if (password !== confirm) {
      setStatus("Passwords do not match.", "error");
      return;
    }

    setStatus("");
    setLoading(form, true, "Create account");

    try {
      var credential = await fb.authModule.createUserWithEmailAndPassword(
        fb.auth,
        email,
        password
      );

      if (name) {
        await fb.authModule.updateProfile(credential.user, {
          displayName: name
        });
      }

      await saveProfile(credential.user, { name: name, phone: phone });
      window.location.href = "account.html";
    } catch (error) {
      setStatus(friendlyAuthError(error), "error");
    } finally {
      setLoading(form, false, "Create account");
    }
  });

  initGoogleAuth("googleSignup");
  initPhoneAuth();
}

async function renderAccount(user) {
  var loading = document.getElementById("accountLoading");
  var signedOut = document.getElementById("accountSignedOut");
  var signedIn = document.getElementById("accountSignedIn");

  if (loading) {
    loading.hidden = true;
  }

  if (!user) {
    if (signedOut) {
      signedOut.hidden = false;
    }
    if (signedIn) {
      signedIn.hidden = true;
    }
    return;
  }

  if (signedOut) {
    signedOut.hidden = true;
  }
  if (signedIn) {
    signedIn.hidden = false;
  }

  var name =
    user.displayName || (user.email ? user.email.split("@")[0] : "Member");
  var initial = name.trim().charAt(0).toUpperCase() || "M";

  setText("accountAvatar", initial);
  setText("accountName", name);
  setText("accountEmail", user.email || "Not provided");
  setText("accountPhone", user.phoneNumber || "Not provided");
  setText(
    "accountProvider",
    providerLabel(user.providerData[0] && user.providerData[0].providerId)
  );

  if (!fb || !fb.db) {
    return;
  }

  try {
    var snapshot = await fb.dbModule.getDoc(
      fb.dbModule.doc(fb.db, "users", user.uid)
    );
    if (!snapshot.exists()) {
      return;
    }

    var profile = snapshot.data();
    if (profile.name) {
      setText("accountName", profile.name);
      setText("accountAvatar", profile.name.trim().charAt(0).toUpperCase() || initial);
    }
    if (profile.phone) {
      setText("accountPhone", profile.phone);
    }
    if (profile.createdAt && typeof profile.createdAt.toDate === "function") {
      setText(
        "accountMemberSince",
        profile.createdAt.toDate().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })
      );
    }

    var walletCard = document.getElementById("accountWalletCard");
    if (walletCard) {
      var wallet = profile.wallet || {};
      walletCard.hidden = false;
      setText("accountWalletAvailable", formatPaise(wallet.availablePaise));
      setText("accountWalletPending", formatPaise(wallet.pendingPaise));
      setText("accountWalletLifetime", formatPaise(wallet.lifetimeEarnedPaise));
    }
  } catch (error) {
    console.warn("Could not load the user profile.", error);
  }
}

function initAccount() {
  var signOutButton = document.getElementById("signoutBtn");
  if (signOutButton) {
    signOutButton.addEventListener("click", async function () {
      signOutButton.disabled = true;
      try {
        await fb.authModule.signOut(fb.auth);
      } finally {
        window.location.href = "index.html";
      }
    });
  }
}

function handleAuthState(user) {
  var uid = user ? user.uid : null;
  window.__munaAffiliateUid = uid;
  if (typeof window.__munaSetAffiliateUid === "function") {
    window.__munaSetAffiliateUid(uid);
  }
  document.dispatchEvent(
    new CustomEvent("muna:auth", { detail: { uid: uid } })
  );

  renderHeaderAuth(user);

  var page = document.body.dataset.page;
  if (page === "account") {
    renderAccount(user);
  } else if (page === "signin" || page === "signup") {
    if (user) {
      setStatus(
        "You are already signed in. Open your account to continue.",
        "success"
      );
    }
  }
}

(async function initAuth() {
  renderHeaderAuth(null);

  var configured = false;
  try {
    configured = await loadFirebase();
  } catch (error) {
    console.error("Firebase failed to load.", error);
  }

  if (!configured) {
    showConfigNotice();
    var page = document.body.dataset.page;
    if (page === "account") {
      var loading = document.getElementById("accountLoading");
      var signedOut = document.getElementById("accountSignedOut");
      if (loading) {
        loading.hidden = true;
      }
      if (signedOut) {
        signedOut.hidden = false;
      }
    }
    return;
  }

  var page = document.body.dataset.page;
  if (page === "signin") {
    initSignIn();
  } else if (page === "signup") {
    initSignUp();
  } else if (page === "account") {
    initAccount();
  }

  fb.authModule.onAuthStateChanged(fb.auth, handleAuthState);
})();
