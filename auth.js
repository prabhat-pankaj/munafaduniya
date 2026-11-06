import { firebaseConfig, firebaseReady } from "./firebase-config.js";

var fb = null;
var confirmationResult = null;
var authFlowActive = false;

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

function redirectHome() {
  window.location.replace("/");
}

function delay(ms) {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, ms);
  });
}

async function completeAuth(user, extra) {
  try {
    await Promise.race([saveProfile(user, extra || {}), delay(1500)]);
  } finally {
    redirectHome();
  }
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
    "auth/configuration-not-found":
      "Firebase Authentication is not set up for this project. In Firebase Console, open Authentication and click Get started.",
    "auth/api-key-not-valid":
      "The Firebase API key is invalid. Check firebase-config.js against the Web app settings.",
    "auth/invalid-api-key":
      "The Firebase API key is invalid. Check firebase-config.js against the Web app settings.",
    "auth/app-not-authorized":
      "This domain is not authorized to use Firebase Authentication.",
    "auth/internal-error":
      "Firebase returned an internal error. Check that Authentication is set up, then try again.",
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
  if (!messages[code]) {
    console.warn("Unhandled Firebase Auth error:", code, error && error.message);
  }
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
  name = String(name).trim() || "Account";
  var initial = name.charAt(0).toUpperCase() || "A";
  var contact = user.email || user.phoneNumber || "";

  slot.innerHTML =
    '<a class="header-wallet" id="headerWallet" href="wallet.html" aria-label="Open your wallet earnings">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h13a2 2 0 002-2v-2"/><path d="M21 12h-6a2 2 0 000 4h6z"/></svg>' +
    '<strong class="header-wallet-amount" id="headerWalletAmount">₹0.00</strong></a>' +
    '<div class="auth-menu">' +
    '<button class="auth-user" type="button" data-auth-menu-toggle aria-haspopup="menu" aria-expanded="false" aria-controls="authMenu" aria-label="Open account menu">' +
    '<span class="auth-avatar" aria-hidden="true">' +
    escapeHtml(initial) +
    "</span>" +
    '<span class="auth-name">' +
    escapeHtml(name) +
    "</span>" +
    '<svg class="auth-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>' +
    "</button>" +
    '<div class="auth-menu-panel" id="authMenu" role="menu" hidden>' +
    '<div class="auth-menu-head">' +
    '<span class="auth-menu-avatar" aria-hidden="true">' +
    escapeHtml(initial) +
    "</span>" +
    '<span class="auth-menu-identity">' +
    '<strong class="auth-menu-name">' +
    escapeHtml(name) +
    "</strong>" +
    (contact
      ? '<span class="auth-menu-email">' + escapeHtml(contact) + "</span>"
      : "") +
    "</span>" +
    "</div>" +
    '<div class="auth-menu-list">' +
    '<a class="auth-menu-item" href="account.html" role="menuitem">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0115 0"/></svg>' +
    "<span>My account</span></a>" +
    '<a class="auth-menu-item" href="wallet.html" role="menuitem">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h13a2 2 0 002-2v-2"/><path d="M21 12h-6a2 2 0 000 4h6z"/></svg>' +
    "<span>Wallet &amp; earnings</span></a>" +
    '<button class="auth-menu-item auth-menu-signout" type="button" role="menuitem" data-auth-signout>' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M14 3h5a2 2 0 012 2v14a2 2 0 01-2 2h-5"/></svg>' +
    "<span>Sign out</span></button>" +
    "</div>" +
    "</div>" +
    "</div>";

  loadHeaderWallet(user);
}

function closeHeaderMenus() {
  document.querySelectorAll("[data-auth-menu-toggle]").forEach(function (button) {
    button.setAttribute("aria-expanded", "false");
  });
  document.querySelectorAll(".auth-menu-panel").forEach(function (panel) {
    panel.hidden = true;
  });
}

function initHeaderMenu() {
  if (document.body.dataset.authMenuReady === "true") {
    return;
  }
  document.body.dataset.authMenuReady = "true";

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("[data-auth-menu-toggle]");
    if (toggle) {
      event.preventDefault();
      var menu = toggle.closest(".auth-menu");
      var panel = menu ? menu.querySelector(".auth-menu-panel") : null;
      var willOpen = panel ? panel.hidden : false;
      closeHeaderMenus();
      if (willOpen && panel) {
        panel.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
        var firstItem = panel.querySelector('[role="menuitem"]');
        if (firstItem) {
          firstItem.focus({ preventScroll: true });
        }
      }
      return;
    }

    if (!event.target.closest(".auth-menu")) {
      closeHeaderMenus();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
      return;
    }
    if (!document.querySelector(".auth-menu-panel:not([hidden])")) {
      return;
    }
    closeHeaderMenus();
    var toggle = document.querySelector("[data-auth-menu-toggle]");
    if (toggle) {
      toggle.focus({ preventScroll: true });
    }
  });

  document.addEventListener("click", function (event) {
    var signout = event.target.closest("[data-auth-signout]");
    if (!signout) {
      return;
    }
    signout.disabled = true;
    if (!fb || !fb.authModule) {
      redirectHome();
      return;
    }
    fb.authModule
      .signOut(fb.auth)
      .catch(function (error) {
        console.warn("Could not sign out.", error);
      })
      .finally(function () {
        redirectHome();
      });
  });
}

function updateHeaderIdentity(name) {
  var label = String(name || "").trim();
  if (!label) {
    return;
  }

  var nameElement = document.querySelector("#authSlot .auth-name");
  if (nameElement) {
    nameElement.textContent = label;
  }

  var menuName = document.querySelector("#authSlot .auth-menu-name");
  if (menuName) {
    menuName.textContent = label;
  }

  var initial = label.charAt(0).toUpperCase() || "A";
  document
    .querySelectorAll("#authSlot .auth-avatar, #authSlot .auth-menu-avatar")
    .forEach(function (avatar) {
      avatar.textContent = initial;
    });
}

async function loadHeaderWallet(user) {
  if (!user || !fb || !fb.db) {
    return;
  }

  try {
    var snapshot = await fb.dbModule.getDoc(
      fb.dbModule.doc(fb.db, "users", user.uid)
    );
    var amount = document.getElementById("headerWalletAmount");
    if (!amount) {
      return;
    }
    var profile = snapshot.exists() ? snapshot.data() : {};
    var wallet = profile.wallet || {};
    amount.textContent = formatPaise(wallet.availablePaise);
    if (profile.name) {
      updateHeaderIdentity(profile.name);
    }
  } catch (error) {
    console.warn("Could not load wallet earnings.", error);
  }
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
    authFlowActive = true;
    try {
      var provider = new fb.authModule.GoogleAuthProvider();
      var result = await fb.authModule.signInWithPopup(fb.auth, provider);
      await completeAuth(result.user, {});
    } catch (error) {
      authFlowActive = false;
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
    authFlowActive = true;

    try {
      var result = await confirmationResult.confirm(code);
      await completeAuth(result.user, {});
    } catch (error) {
      authFlowActive = false;
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
    authFlowActive = true;

    try {
      var result = await fb.authModule.signInWithEmailAndPassword(
        fb.auth,
        document.getElementById("signinEmail").value.trim(),
        document.getElementById("signinPassword").value
      );
      await completeAuth(result.user, {});
    } catch (error) {
      authFlowActive = false;
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
    authFlowActive = true;

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

      await completeAuth(credential.user, { name: name, phone: phone });
    } catch (error) {
      authFlowActive = false;
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
        window.location.href = "/";
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
    if (user && !authFlowActive) {
      redirectHome();
    }
  }
}

(async function initAuth() {
  initHeaderMenu();
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
