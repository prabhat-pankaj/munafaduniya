import { firebaseConfig, firebaseReady, functionsRegion } from "./firebase-config.js";

var fb = null;
var currentUser = null;
var FIREBASE_VERSION = "10.12.5";

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

function money(paise) {
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

function dateText(value) {
  if (!value) {
    return "—";
  }
  var date =
    typeof value.toDate === "function" ? value.toDate() : new Date(value);
  if (isNaN(date.getTime())) {
    return "—";
  }
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function statusClass(status) {
  var text = String(status || "").toLowerCase();
  if (text === "approved" || text === "paid") {
    return "is-success";
  }
  if (text === "cancelled" || text === "disapproved" || text === "rejected") {
    return "is-danger";
  }
  return "is-pending";
}

function setStatus(message, type) {
  var element = document.getElementById("withdrawStatus");
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

function renderHeader(user) {
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
    '<a class="header-wallet" id="headerWallet" href="wallet.html" aria-current="page" aria-label="Open your wallet earnings">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h13a2 2 0 002-2v-2"/><path d="M21 12h-6a2 2 0 000 4h6z"/></svg>' +
    '<strong class="header-wallet-amount" id="headerWalletAmount">₹0.00</strong></a>' +
    '<a class="auth-user" href="account.html" aria-label="Open your account">' +
    '<span class="auth-avatar" aria-hidden="true">' +
    escapeHtml(initial) +
    "</span>" +
    '<span class="auth-name">' +
    escapeHtml(firstName) +
    "</span></a>";
}

async function loadFirebase() {
  if (!firebaseReady) {
    return false;
  }

  var base = "https://www.gstatic.com/firebasejs/" + FIREBASE_VERSION + "/";
  var modules = await Promise.all([
    import(base + "firebase-app.js"),
    import(base + "firebase-auth.js"),
    import(base + "firebase-firestore.js"),
    import(base + "firebase-functions.js")
  ]);

  var app = modules[0].initializeApp(firebaseConfig);
  fb = {
    auth: modules[1].getAuth(app),
    db: modules[2].getFirestore(app),
    functions: modules[3].getFunctions(app, functionsRegion),
    authModule: modules[1],
    dbModule: modules[2],
    fnModule: modules[3]
  };

  return true;
}

function showSignedOut() {
  var loading = document.getElementById("walletLoading");
  var signedOut = document.getElementById("walletSignedOut");
  var signedIn = document.getElementById("walletSignedIn");
  if (loading) {
    loading.hidden = true;
  }
  if (signedOut) {
    signedOut.hidden = false;
  }
  if (signedIn) {
    signedIn.hidden = true;
  }
}

function showSignedIn() {
  var loading = document.getElementById("walletLoading");
  var signedOut = document.getElementById("walletSignedOut");
  var signedIn = document.getElementById("walletSignedIn");
  if (loading) {
    loading.hidden = true;
  }
  if (signedOut) {
    signedOut.hidden = true;
  }
  if (signedIn) {
    signedIn.hidden = false;
  }
}

function renderSummary(wallet) {
  var values = wallet || {};
  document.getElementById("walletAvailable").textContent = money(
    values.availablePaise
  );
  var headerAmount = document.getElementById("headerWalletAmount");
  if (headerAmount) {
    headerAmount.textContent = money(values.availablePaise);
  }
  document.getElementById("walletPending").textContent = money(
    values.pendingPaise
  );
  document.getElementById("walletLifetime").textContent = money(
    values.lifetimeEarnedPaise
  );
  document.getElementById("walletWithdrawn").textContent = money(
    values.withdrawnPaise
  );

  var rate = Number(values.shareRate);
  var shareLabel = document.getElementById("walletShareRate");
  if (shareLabel && Number.isFinite(rate)) {
    shareLabel.textContent = Math.round(rate * 100) + "% share";
  }
}

function renderEarnings(earnings) {
  var body = document.getElementById("earningsBody");
  if (!body) {
    return;
  }

  if (!earnings.length) {
    body.innerHTML =
      '<tr><td colspan="6" class="wallet-empty">No earnings yet. Shop through a tracked Flipkart link while signed in.</td></tr>';
    return;
  }

  body.innerHTML = earnings
    .map(function (earning) {
      var title = earning.title || "Flipkart order";
      var orderId = earning.orderId || earning.orderItemId || "";
      var status = earning.statusLabel || earning.status || "pending";
      var expected =
        earning.status === "approved"
          ? "Est. " + dateText(earning.expectedCreditAt)
          : earning.status === "cancelled" || earning.status === "disapproved"
            ? "—"
            : "After approval";

      return (
        "<tr>" +
        '<td><span class="wallet-order-title">' +
        escapeHtml(title) +
        "</span>" +
        (orderId
          ? '<span class="wallet-order-id">' + escapeHtml(orderId) + "</span>"
          : "") +
        "</td>" +
        '<td><span class="wallet-status ' +
        statusClass(earning.status) +
        '">' +
        escapeHtml(status) +
        "</span></td>" +
        "<td>" +
        dateText(earning.orderDate) +
        "</td>" +
        "<td>" +
        money(earning.commissionPaise) +
        "</td>" +
        '<td class="wallet-amount">' +
        money(earning.userSharePaise) +
        "</td>" +
        "<td>" +
        expected +
        "</td>" +
        "</tr>"
      );
    })
    .join("");
}

function renderWithdrawals(withdrawals) {
  var body = document.getElementById("withdrawalsBody");
  if (!body) {
    return;
  }

  if (!withdrawals.length) {
    body.innerHTML =
      '<tr><td colspan="5" class="wallet-empty">No withdrawal requests yet.</td></tr>';
    return;
  }

  body.innerHTML = withdrawals
    .map(function (item) {
      var method =
        item.method === "bank"
          ? "Bank" + (item.ifsc ? " · " + item.ifsc : "")
          : "UPI" + (item.upiId ? " · " + item.upiId : "");
      return (
        "<tr>" +
        "<td>" +
        dateText(item.requestedAt) +
        "</td>" +
        "<td>" +
        escapeHtml(method) +
        "</td>" +
        '<td class="wallet-amount">' +
        money(item.amountPaise) +
        "</td>" +
        '<td><span class="wallet-status ' +
        statusClass(item.status) +
        '">' +
        escapeHtml(item.status) +
        "</span></td>" +
        "<td>" +
        escapeHtml(item.note || "—") +
        "</td>" +
        "</tr>"
      );
    })
    .join("");
}

async function loadWallet(user) {
  currentUser = user;
  showSignedIn();

  try {
    var userSnap = await fb.dbModule.getDoc(
      fb.dbModule.doc(fb.db, "users", user.uid)
    );
    var profile = userSnap.exists() ? userSnap.data() : {};
    renderSummary(profile.wallet || {});

    var earningsQuery = fb.dbModule.query(
      fb.dbModule.collection(fb.db, "users", user.uid, "earnings"),
      fb.dbModule.orderBy("orderDate", "desc"),
      fb.dbModule.limit(50)
    );
    var earningsSnap = await fb.dbModule.getDocs(earningsQuery);
    var earnings = earningsSnap.docs.map(function (item) {
      return item.data();
    });
    renderEarnings(earnings);

    var withdrawalsQuery = fb.dbModule.query(
      fb.dbModule.collection(fb.db, "users", user.uid, "withdrawals"),
      fb.dbModule.orderBy("requestedAt", "desc"),
      fb.dbModule.limit(25)
    );
    var withdrawalsSnap = await fb.dbModule.getDocs(withdrawalsQuery);
    renderWithdrawals(
      withdrawalsSnap.docs.map(function (item) {
        return item.data();
      })
    );
  } catch (error) {
    console.warn("Could not load the wallet.", error);
    setStatus(
      "We could not load your wallet. Check your connection and refresh.",
      "error"
    );
  }
}

function initWithdrawForm() {
  var form = document.getElementById("withdrawForm");
  var method = document.getElementById("withdrawMethod");
  var upiFields = document.getElementById("upiFields");
  var bankFields = document.getElementById("bankFields");
  if (!form || !method || !upiFields || !bankFields) {
    return;
  }

  function updateMethodFields() {
    var isBank = method.value === "bank";
    upiFields.hidden = isBank;
    bankFields.hidden = !isBank;
  }

  method.addEventListener("change", updateMethodFields);
  updateMethodFields();

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    setStatus("");

    if (!currentUser) {
      setStatus("Sign in again to request a withdrawal.", "error");
      return;
    }

    var amount = Number(document.getElementById("withdrawAmount").value);
    var amountPaise = Math.round(amount * 100);

    if (!Number.isFinite(amountPaise) || amountPaise < 10000) {
      setStatus("Enter an amount of at least ₹100.", "error");
      return;
    }

    var payload = {
      amountPaise: amountPaise,
      method: method.value,
      upiId: document.getElementById("withdrawUpi").value.trim(),
      accountName: document.getElementById("withdrawAccountName").value.trim(),
      accountNumber: document
        .getElementById("withdrawAccountNumber")
        .value.trim()
        .replace(/\s+/g, ""),
      ifsc: document.getElementById("withdrawIfsc").value.trim().toUpperCase()
    };

    if (payload.method === "upi" && !payload.upiId) {
      setStatus("Enter your UPI ID.", "error");
      return;
    }

    if (
      payload.method === "bank" &&
      (!payload.accountName || !payload.accountNumber || !payload.ifsc)
    ) {
      setStatus("Enter your account name, account number, and IFSC code.", "error");
      return;
    }

    var button = form.querySelector(".btn-submit");
    if (button) {
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
    }

    try {
      var request = fb.fnModule.httpsCallable(fb.functions, "requestWithdrawal");
      await request(payload);
      setStatus(
        "Withdrawal requested. It is now reserved until an admin reviews it.",
        "success"
      );
      form.reset();
      updateMethodFields();
      await loadWallet(currentUser);
    } catch (error) {
      setStatus(
        (error && error.message) ||
          "We could not submit the withdrawal request. Please try again.",
        "error"
      );
    } finally {
      if (button) {
        button.disabled = false;
        button.removeAttribute("aria-busy");
      }
    }
  });
}

function initWalletPage() {
  showSignedOut();
}

(async function init() {
  renderHeader(null);
  initWalletPage();

  var configured = false;
  try {
    configured = await loadFirebase();
  } catch (error) {
    console.error("Firebase failed to load.", error);
  }

  if (!configured) {
    var notice = document.getElementById("authConfigNotice");
    if (notice) {
      notice.hidden = false;
    }
    showSignedOut();
    return;
  }

  initWithdrawForm();

  fb.authModule.onAuthStateChanged(fb.auth, function (user) {
    var uid = user ? user.uid : null;
    window.__munaAffiliateUid = uid;
    if (typeof window.__munaSetAffiliateUid === "function") {
      window.__munaSetAffiliateUid(uid);
    }
    document.dispatchEvent(
      new CustomEvent("muna:auth", { detail: { uid: uid } })
    );
    renderHeader(user);
    if (!user) {
      currentUser = null;
      showSignedOut();
      return;
    }
    loadWallet(user);
  });
})();
