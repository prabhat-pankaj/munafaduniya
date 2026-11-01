(function () {
  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var themeColor = document.getElementById("themeColor");

  function applyTheme(theme) {
    root.dataset.theme = theme;

    if (themeColor) {
      themeColor.setAttribute("content", theme === "light" ? "#fdf9f4" : "#0d0c0b");
    }

    if (themeToggle) {
      var isLight = theme === "light";
      themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
      themeToggle.setAttribute(
        "title",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
      themeToggle.setAttribute("aria-pressed", isLight ? "true" : "false");
    }
  }

  applyTheme(root.dataset.theme === "light" ? "light" : "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.dataset.theme === "light" ? "dark" : "light";
      applyTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch (error) {
        /* storage can be unavailable in private mode */
      }
    });
  }

  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var form = document.getElementById("offerForm");
  if (!form) {
    return;
  }

  var status = document.getElementById("formStatus");
  var success = document.getElementById("formSuccess");
  var resetBtn = document.getElementById("resetFormBtn");
  var card = form.closest(".form-card");
  var submitBtn = form.querySelector(".btn-submit");
  var btnLabel = form.querySelector(".btn-label");
  var defaultLabel = btnLabel ? btnLabel.textContent : "Send quotation request";
  var ajaxEndpoint = "https://formsubmit.co/ajax/munafaduniya@gmail.com";
  var emailAddress = "munafaduniya@gmail.com";

  function setLoading(isLoading) {
    if (card) {
      card.classList.toggle("is-loading", isLoading);
    }
    if (submitBtn) {
      submitBtn.disabled = isLoading;
      submitBtn.setAttribute("aria-busy", isLoading ? "true" : "false");
    }
    if (btnLabel) {
      btnLabel.textContent = isLoading ? "Sending..." : defaultLabel;
    }
  }

  function showError(message) {
    status.innerHTML = message;
    status.classList.add("is-error");
  }

  function showSuccess() {
    form.hidden = true;
    success.hidden = false;
    success.focus({ preventScroll: true });
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var honey = form.querySelector('[name="_honey"]');
    if (honey && honey.value.trim() !== "") {
      return;
    }

    status.textContent = "";
    status.classList.remove("is-error");
    setLoading(true);

    fetch(ajaxEndpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then(function (result) {
        if (result && (result.success === "true" || result.success === true)) {
          showSuccess();
          return;
        }
        throw new Error("Request failed");
      })
      .catch(function () {
        showError(
          'We could not send your request. Please try again, or email <a href="mailto:' +
            emailAddress +
            '">' +
            emailAddress +
            "</a> directly."
        );
      })
      .finally(function () {
        setLoading(false);
      });
  });

  form.addEventListener("input", function () {
    if (status.classList.contains("is-error")) {
      status.textContent = "";
      status.classList.remove("is-error");
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      form.hidden = false;
      success.hidden = true;
      status.textContent = "";
      status.classList.remove("is-error");
      var firstName = document.getElementById("full_name");
      if (firstName) {
        firstName.focus();
      }
    });
  }
})();
