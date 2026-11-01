(function () {
  "use strict";

  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var themeColor = document.getElementById("themeColor");

  function applyTheme(theme) {
    root.dataset.theme = theme;

    if (themeColor) {
      themeColor.setAttribute(
        "content",
        theme === "light" ? "#fdf9f4" : "#0d0c0b"
      );
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

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  var revealObserver = null;

  function initRevealAnimations() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var element = entry.target;
          revealObserver.unobserve(element);
          element.classList.add("is-visible");

          function finishReveal(event) {
            if (event.target !== element) {
              return;
            }
            element.classList.remove("reveal", "is-visible");
            element.style.removeProperty("--reveal-delay");
            element.removeEventListener("animationend", finishReveal);
          }

          element.addEventListener("animationend", finishReveal);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
  }

  function observeReveals(scope) {
    if (!revealObserver) {
      return;
    }

    var elements = (scope || document).querySelectorAll(
      ".section-head, .product-card, .disclosure, .contact-panel, .form-card, .thanks-card"
    );
    var index = 0;

    Array.prototype.forEach.call(elements, function (element) {
      if (element.dataset.revealReady === "true") {
        return;
      }

      element.dataset.revealReady = "true";
      element.classList.add("reveal");
      element.style.setProperty(
        "--reveal-delay",
        Math.min(index, 8) * 45 + "ms"
      );
      index += 1;
      revealObserver.observe(element);
    });
  }

  initRevealAnimations();
  observeReveals(document);

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

  var form = document.querySelector("form[data-ajax-form]");
  if (form) {
    initForm(form);
  }

  var featuredTrack = document.getElementById("featuredTrack");
  if (featuredTrack) {
    initDealsPage(featuredTrack);
  }

  function initForm(contactForm) {
    var status = document.getElementById("formStatus");
    var success = document.getElementById("formSuccess");
    var resetBtn = document.getElementById("resetFormBtn");
    var card = contactForm.closest(".form-card");
    var submitBtn = contactForm.querySelector(".btn-submit");
    var btnLabel = contactForm.querySelector(".btn-label");
    var defaultLabel = btnLabel ? btnLabel.textContent : "Send enquiry";
    var ajaxEndpoint =
      contactForm.getAttribute("data-endpoint") ||
      "https://formsubmit.co/ajax/munafaduniya@gmail.com";
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

    function clearStatus() {
      if (!status) {
        return;
      }
      status.textContent = "";
      status.classList.remove("is-error");
    }

    function showError(message) {
      if (!status) {
        return;
      }
      status.textContent = message + " You can also email ";
      var link = document.createElement("a");
      link.href = "mailto:" + emailAddress;
      link.textContent = emailAddress;
      status.appendChild(link);
      status.appendChild(document.createTextNode(" directly."));
      status.classList.add("is-error");
    }

    function showSuccess() {
      contactForm.hidden = true;
      if (!success) {
        return;
      }
      success.hidden = false;
      success.focus({ preventScroll: true });
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      var honey = contactForm.querySelector('[name="_honey"]');
      if (honey && honey.value.trim() !== "") {
        return;
      }

      clearStatus();
      setLoading(true);

      fetch(ajaxEndpoint, {
        method: "POST",
        body: new FormData(contactForm),
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
          if (result && result.message) {
            throw new Error(result.message);
          }
          throw new Error("Request failed");
        })
        .catch(function (error) {
          var message = error && error.message ? error.message : "";
          if (
            !message ||
            message === "Request failed" ||
            /^failed to fetch$/i.test(message)
          ) {
            message = "We could not send your request. Please try again.";
          }
          showError(message);
        })
        .finally(function () {
          setLoading(false);
        });
    });

    contactForm.addEventListener("input", clearStatus);

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        contactForm.reset();
        contactForm.hidden = false;
        if (success) {
          success.hidden = true;
        }
        clearStatus();
        var firstName = document.getElementById("full_name");
        if (firstName) {
          firstName.focus();
        }
      });
    }
  }

  function initDealsPage(carousel) {
    var spotlight = document.getElementById("spotlight");
    var categorySections = document.getElementById("categorySections");
    var catalogStatus = document.getElementById("catalogStatus");
    var carouselPrev = document.getElementById("carouselPrev");
    var carouselNext = document.getElementById("carouselNext");
    var carouselControls = carouselPrev
      ? carouselPrev.closest(".carousel-controls")
      : null;

    var catalog = null;
    var products = [];
    var productById = Object.create(null);
    var carouselTimer = null;
    var carouselPaused = false;
    var spotlightTimer = null;
    var spotlightPaused = false;
    var spotlightIndex = 0;
    var spotlightSlides = [];
    var spotlightDots = [];
    var spotlightCounter = null;
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    var priceFormatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    });

    var categoryIcons = {
      mobiles:
        '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10.5 5h3M11 18.5h2"/>',
      electronics:
        '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
      fashion:
        '<path d="M9 4l3 2 3-2 3 3-2 2v10H8V9L6 7z"/><path d="M9 4c0 1.5 1.3 2.5 3 2.5S15 5.5 15 4"/>',
      home:
        '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
      beauty:
        '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M5 17l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/>',
      sports:
        '<circle cx="12" cy="12" r="9"/><path d="M12 3a14 14 0 000 18M3 12a14 14 0 0018 0"/>',
      appliances:
        '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'
    };

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

    function formatPrice(value) {
      var number = Number(value);
      return Number.isFinite(number) ? priceFormatter.format(number) : "";
    }

    function safeProductUrl(rawUrl) {
      try {
        var url = new URL(rawUrl);
        if (
          url.protocol === "https:" &&
          /(^|\.)flipkart\.com$/.test(url.hostname)
        ) {
          return url.href;
        }
      } catch (error) {
        return null;
      }
      return null;
    }

    function safeImageUrl(rawUrl) {
      try {
        var url = new URL(rawUrl);
        if (
          url.protocol === "https:" &&
          (/(^|\.)flixcart\.com$/.test(url.hostname) ||
            /(^|\.)fkcdn\.com$/.test(url.hostname) ||
            /(^|\.)flipkart\.com$/.test(url.hostname))
        ) {
          return url.href;
        }
      } catch (error) {
        return "logo.png";
      }
      return "logo.png";
    }

    function categoryIcon(key) {
      var paths =
        categoryIcons[key] ||
        '<path d="M4 7h16M4 12h16M4 17h16"/>';
      return (
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        paths +
        "</svg>"
      );
    }

    function attachImageFallbacks(container) {
      container.querySelectorAll("img").forEach(function (image) {
        image.addEventListener("error", function () {
          if (image.dataset.fallback === "true") {
            return;
          }
          image.dataset.fallback = "true";
          image.src = "logo.png";
          image.classList.add("img-fallback");
        });
      });
    }

    function productCard(product, options) {
      options = options || {};

      var url = safeProductUrl(product.url);
      if (!url) {
        return "";
      }

      var image = safeImageUrl(product.image);
      var discount =
        product.discount > 0
          ? '<span class="discount-badge">' +
            Math.round(product.discount) +
            "% off</span>"
          : "";
      var mrp =
        product.mrp > product.price
          ? '<span class="product-mrp">' +
            formatPrice(product.mrp) +
            "</span>"
          : "";
      var savings =
        product.mrp > product.price ? product.mrp - product.price : 0;
      var savingLabel =
        savings > 0
          ? '<span class="product-off">Save ' + formatPrice(savings) + "</span>"
          : "";
      var category =
        options.showCategory && product.categoryLabel
          ? ' <span class="product-category">' +
            escapeHtml(product.categoryLabel) +
            "</span>"
          : "";
      var brand = escapeHtml(
        product.brand || product.categoryLabel || "Flipkart deal"
      );
      var hiddenAttr = options.hidden ? ' hidden data-extra="true"' : "";

      return (
        '<a class="product-card" href="' +
        escapeHtml(url) +
        '" target="_blank" rel="sponsored noopener noreferrer" aria-label="' +
        escapeHtml(product.title + " on Flipkart") +
        '"' +
        hiddenAttr +
        ">" +
        '<div class="product-media">' +
        discount +
        '<img src="' +
        escapeHtml(image) +
        '" alt="' +
        escapeHtml(product.title) +
        '" width="400" height="400" loading="lazy" decoding="async">' +
        "</div>" +
        '<div class="product-body">' +
        '<p class="product-brand">' +
        brand +
        category +
        "</p>" +
        '<h3 class="product-title">' +
        escapeHtml(product.title) +
        "</h3>" +
        '<div class="product-price-row">' +
        '<span class="product-price">' +
        formatPrice(product.price) +
        "</span>" +
        mrp +
        savingLabel +
        "</div>" +
        '<span class="product-cta"><span>View on Flipkart</span>' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>' +
        "</span>" +
        "</div>" +
        "</a>"
      );
    }

    function pickBestDeals(allProducts, limit) {
      var byCategory = Object.create(null);

      allProducts.forEach(function (product) {
        if (
          !product ||
          !product.id ||
          product.price < 299 ||
          product.discount < 10
        ) {
          return;
        }

        var key = product.category || "other";
        if (!byCategory[key]) {
          byCategory[key] = [];
        }
        byCategory[key].push(product);
      });

      var pool = [];
      var selectedIds = Object.create(null);

      Object.keys(byCategory).forEach(function (key) {
        var ranked = byCategory[key].slice().sort(function (a, b) {
          var aSaving = Math.max(0, (a.mrp || a.price) - a.price);
          var bSaving = Math.max(0, (b.mrp || b.price) - b.price);
          return (
            bSaving - aSaving ||
            (b.discount || 0) - (a.discount || 0) ||
            (b.price || 0) - (a.price || 0)
          );
        });

        var shortlist = ranked.slice(0, Math.min(3, ranked.length));
        var roll = Math.random();
        var pickIndex = roll > 0.85 ? 2 : roll > 0.6 ? 1 : 0;
        var pick = shortlist[Math.min(pickIndex, shortlist.length - 1)];

        if (pick) {
          pool.push(pick);
          selectedIds[pick.id] = true;
        }
      });

      if (pool.length < limit) {
        var fillers = allProducts
          .filter(function (product) {
            return (
              product &&
              product.id &&
              !selectedIds[product.id] &&
              product.price >= 299 &&
              product.discount >= 10
            );
          })
          .sort(function (a, b) {
            var aSaving = Math.max(0, (a.mrp || a.price) - a.price);
            var bSaving = Math.max(0, (b.mrp || b.price) - b.price);
            return (
              bSaving - aSaving ||
              (b.discount || 0) - (a.discount || 0) ||
              (b.price || 0) - (a.price || 0)
            );
          });

        for (var i = 0; i < fillers.length && pool.length < limit; i += 1) {
          pool.push(fillers[i]);
          selectedIds[fillers[i].id] = true;
        }
      }

      return pool
        .sort(function (a, b) {
          var aSaving = Math.max(0, (a.mrp || a.price) - a.price);
          var bSaving = Math.max(0, (b.mrp || b.price) - b.price);
          return (
            bSaving - aSaving ||
            (b.discount || 0) - (a.discount || 0) ||
            (b.price || 0) - (a.price || 0)
          );
        })
        .slice(0, limit);
    }

    function spotlightSlideMarkup(product, index, total) {
      var url = safeProductUrl(product.url);
      if (!url) {
        return "";
      }

      var image = safeImageUrl(product.image);
      var category = product.categoryLabel || "Flipkart deal";
      var discount =
        product.discount > 0
          ? '<span class="spotlight-discount">' +
            Math.round(product.discount) +
            "% off</span>"
          : "";
      var mrp =
        product.mrp > product.price
          ? '<span class="spotlight-mrp">' +
            formatPrice(product.mrp) +
            "</span>"
          : "";
      var savings =
        product.mrp > product.price ? product.mrp - product.price : 0;
      var savingLabel =
        savings > 0
          ? '<span class="spotlight-save">Save ' +
            formatPrice(savings) +
            "</span>"
          : "";
      var active = index === 0;

      return (
        '<div class="spotlight-slide' +
        (active ? " is-active" : "") +
        '" role="group" aria-roledescription="slide" aria-label="' +
        (index + 1) +
        " of " +
        total +
        '"' +
        (active ? "" : ' aria-hidden="true"') +
        ">" +
        '<div class="spotlight-card">' +
        '<div class="spotlight-head"><span class="spotlight-kicker">Best deal \u00b7 ' +
        escapeHtml(category) +
        "</span>" +
        discount +
        "</div>" +
        '<a class="spotlight-link" href="' +
        escapeHtml(url) +
        '" target="_blank" rel="sponsored noopener noreferrer">' +
        '<div class="spotlight-media"><img src="' +
        escapeHtml(image) +
        '" alt="' +
        escapeHtml(product.title) +
        '" width="400" height="400" loading="' +
        (active ? "eager" : "lazy") +
        '" decoding="async"></div>' +
        '<div class="spotlight-body">' +
        '<p class="spotlight-brand">' +
        escapeHtml(product.brand || category) +
        "</p>" +
        '<h3 class="spotlight-title">' +
        escapeHtml(product.title) +
        "</h3>" +
        '<div class="spotlight-price-row"><span class="spotlight-price">' +
        formatPrice(product.price) +
        "</span>" +
        mrp +
        savingLabel +
        "</div>" +
        '<span class="spotlight-cta">View deal on Flipkart' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>' +
        "</span>" +
        "</div>" +
        "</a>" +
        "</div>" +
        "</div>"
      );
    }

    function stopSpotlight() {
      if (spotlightTimer) {
        window.clearInterval(spotlightTimer);
        spotlightTimer = null;
      }
    }

    function setSpotlightSlide(index, restart) {
      if (!spotlightSlides.length) {
        return;
      }

      spotlightIndex =
        ((index % spotlightSlides.length) + spotlightSlides.length) %
        spotlightSlides.length;

      spotlightSlides.forEach(function (slide, slideIndex) {
        var active = slideIndex === spotlightIndex;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
        if ("inert" in slide) {
          slide.inert = !active;
        }
      });

      spotlightDots.forEach(function (dot, dotIndex) {
        var active = dotIndex === spotlightIndex;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
        dot.tabIndex = active ? 0 : -1;
      });

      if (spotlightCounter) {
        spotlightCounter.textContent =
          spotlightIndex + 1 + " / " + spotlightSlides.length;
      }

      if (restart) {
        startSpotlight();
      }
    }

    function startSpotlight() {
      stopSpotlight();
      if (reduceMotion || spotlightSlides.length <= 1) {
        return;
      }

      spotlightTimer = window.setInterval(function () {
        if (spotlightPaused || document.hidden || !spotlight.offsetParent) {
          return;
        }
        setSpotlightSlide(spotlightIndex + 1, false);
      }, 5000);
    }

    function bindSpotlightControls() {
      var prev = document.getElementById("spotlightPrev");
      var next = document.getElementById("spotlightNext");

      spotlightDots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          setSpotlightSlide(
            parseInt(dot.getAttribute("data-spotlight-index"), 10),
            true
          );
        });
      });

      if (prev) {
        prev.addEventListener("click", function () {
          setSpotlightSlide(spotlightIndex - 1, true);
        });
      }

      if (next) {
        next.addEventListener("click", function () {
          setSpotlightSlide(spotlightIndex + 1, true);
        });
      }
    }

    function renderSpotlightCarousel(spotlightProducts) {
      if (!spotlight) {
        return;
      }

      stopSpotlight();
      spotlightSlides = [];
      spotlightDots = [];
      spotlightCounter = null;
      spotlightIndex = 0;

      var carouselProducts = spotlightProducts.filter(function (product) {
        return product && safeProductUrl(product.url);
      });

      var slides = carouselProducts
        .map(function (product, index) {
          return spotlightSlideMarkup(product, index, carouselProducts.length);
        })
        .filter(Boolean);

      if (!slides.length) {
        spotlight.innerHTML =
          '<div class="spotlight-loading"><span class="spotlight-kicker">Today\'s best deals</span><p>No best deals right now. Browse the deals below.</p></div>';
        return;
      }

      var dots = carouselProducts
        .map(function (product, index) {
          return (
            '<button class="spotlight-dot' +
            (index === 0 ? " is-active" : "") +
            '" type="button" aria-label="Show deal ' +
            (index + 1) +
            ": " +
            escapeHtml(product.title) +
            '" aria-current="' +
            (index === 0 ? "true" : "false") +
            '" tabindex="' +
            (index === 0 ? "0" : "-1") +
            '" data-spotlight-index="' +
            index +
            '"></button>'
          );
        })
        .join("");

      var footer =
        carouselProducts.length > 1
          ? '<div class="spotlight-footer">' +
            '<div class="spotlight-dots" role="group" aria-label="Choose a best deal">' +
            dots +
            "</div>" +
            '<div class="spotlight-footer-end">' +
            '<span class="spotlight-counter" id="spotlightCounter">1 / ' +
            carouselProducts.length +
            "</span>" +
            '<div class="spotlight-nav">' +
            '<button class="spotlight-arrow" id="spotlightPrev" type="button" aria-label="Previous best deal">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>' +
            "</button>" +
            '<button class="spotlight-arrow" id="spotlightNext" type="button" aria-label="Next best deal">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>' +
            "</button>" +
            "</div>" +
            "</div>" +
            "</div>"
          : "";

      spotlight.innerHTML =
        '<div class="spotlight-slides">' + slides.join("") + "</div>" + footer;

      spotlightSlides = Array.prototype.slice.call(
        spotlight.querySelectorAll(".spotlight-slide")
      );
      spotlightDots = Array.prototype.slice.call(
        spotlight.querySelectorAll(".spotlight-dot")
      );
      spotlightCounter = document.getElementById("spotlightCounter");

      attachImageFallbacks(spotlight);
      bindSpotlightControls();
      setSpotlightSlide(0, false);
      startSpotlight();
    }

    function renderFeatured(featuredProducts) {
      if (!featuredProducts.length) {
        carousel.innerHTML = "";
        if (catalogStatus) {
          catalogStatus.hidden = false;
          catalogStatus.textContent =
            "No featured deals are available right now. Please check back soon.";
        }
        return;
      }

      carousel.innerHTML = featuredProducts
        .map(function (product) {
          return productCard(product);
        })
        .join("");

      attachImageFallbacks(carousel);
      observeReveals(carousel);
      if (catalogStatus) {
        catalogStatus.hidden = true;
      }
      updateCarouselControls();
      startCarousel();
    }

    function renderCategories() {
      if (!categorySections || !catalog) {
        return;
      }

      var markup = catalog.categories
        .map(function (category) {
          var categoryProducts = products.filter(function (product) {
            return product.category === category.key;
          });

          if (!categoryProducts.length) {
            return "";
          }

          var cards = categoryProducts
            .map(function (product, index) {
              return productCard(product, { hidden: index >= 8 });
            })
            .join("");

          var showMore =
            categoryProducts.length > 8
              ? '<button class="btn btn-ghost show-more" type="button" data-show-more="' +
                escapeHtml(category.key) +
                '" data-total="' +
                categoryProducts.length +
                '">Show all ' +
                categoryProducts.length +
                " deals</button>"
              : "";

          return (
            '<section class="section container category-section" id="cat-' +
            escapeHtml(category.key) +
            '">' +
            '<div class="section-head">' +
            '<div class="section-title-wrap">' +
            '<span class="category-icon" aria-hidden="true">' +
            categoryIcon(category.key) +
            "</span>" +
            '<div class="section-title"><p class="section-kicker">Shop</p><h2>' +
            escapeHtml(category.label) +
            "</h2></div>" +
            "</div>" +
            '<span class="section-count">' +
            categoryProducts.length +
            " deals</span>" +
            "</div>" +
            '<div class="product-grid">' +
            cards +
            "</div>" +
            showMore +
            "</section>"
          );
        })
        .join("");

      categorySections.innerHTML = markup;
      attachImageFallbacks(categorySections);
      observeReveals(categorySections);
    }

    function updateCategoryChips() {
      document.querySelectorAll(".cat-chip").forEach(function (chip) {
        var key = chip.getAttribute("data-category");
        var category = catalog
          ? catalog.categories.find(function (item) {
              return item.key === key;
            })
          : null;
        if (!category) {
          chip.hidden = true;
        }
      });
    }

    function updateUpdatedDates(isoDate) {
      var date = new Date(isoDate);
      var dateText = "recently";

      if (!isNaN(date.getTime())) {
        dateText = date.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric"
        });
      }

      document.querySelectorAll("[data-updated]").forEach(function (element) {
        var prefix = element.getAttribute("data-updated-prefix");
        element.textContent = prefix ? prefix + " " + dateText : dateText;
      });
    }

    function carouselStep() {
      var card = carousel.querySelector(".product-card");
      if (!card) {
        return carousel.clientWidth * 0.8;
      }

      var styles = window.getComputedStyle(carousel);
      var gap = parseFloat(styles.columnGap || styles.gap || "16") || 16;
      return card.getBoundingClientRect().width + gap;
    }

    function scrollCarousel(direction) {
      var maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (maxScroll <= 8) {
        return;
      }

      if (direction > 0 && carousel.scrollLeft >= maxScroll - 8) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      if (direction < 0 && carousel.scrollLeft <= 8) {
        carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
        return;
      }

      carousel.scrollBy({
        left: carouselStep() * direction,
        behavior: "smooth"
      });
    }

    function updateCarouselControls() {
      if (!carouselControls) {
        return;
      }
      var hasOverflow = carousel.scrollWidth > carousel.clientWidth + 8;
      carouselControls.hidden = !hasOverflow;
    }

    function pauseCarousel() {
      carouselPaused = true;
    }

    function resumeCarousel() {
      carouselPaused = false;
    }

    function startCarousel() {
      if (reduceMotion || carouselTimer) {
        return;
      }

      carouselTimer = window.setInterval(function () {
        if (
          carouselPaused ||
          document.hidden ||
          !carousel.offsetParent ||
          carousel.scrollWidth <= carousel.clientWidth + 8
        ) {
          return;
        }
        scrollCarousel(1);
      }, 4500);
    }

    function debounce(callback, wait) {
      var timeout;
      return function () {
        var args = arguments;
        var context = this;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(function () {
          callback.apply(context, args);
        }, wait);
      };
    }

    if (categorySections) {
      categorySections.addEventListener("click", function (event) {
        var button = event.target.closest("[data-show-more]");
        if (!button) {
          return;
        }

        var section = button.closest(".category-section");
        if (!section) {
          return;
        }

        var extraCards = section.querySelectorAll('.product-card[data-extra="true"]');
        var isExpanded = button.getAttribute("data-expanded") === "true";
        var total = button.getAttribute("data-total") || "";

        extraCards.forEach(function (card) {
          card.hidden = !isExpanded ? false : true;
        });

        button.setAttribute("data-expanded", isExpanded ? "false" : "true");
        button.textContent = isExpanded
          ? "Show all " + total + " deals"
          : "Show fewer deals";
      });
    }

    if (carouselPrev) {
      carouselPrev.addEventListener("click", function () {
        pauseCarousel();
        scrollCarousel(-1);
      });
    }

    if (carouselNext) {
      carouselNext.addEventListener("click", function () {
        pauseCarousel();
        scrollCarousel(1);
      });
    }

    carousel.addEventListener("pointerenter", pauseCarousel);
    carousel.addEventListener("pointerleave", resumeCarousel);
    carousel.addEventListener("focusin", pauseCarousel);
    carousel.addEventListener("focusout", function (event) {
      if (!carousel.contains(event.relatedTarget)) {
        resumeCarousel();
      }
    });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollCarousel(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollCarousel(-1);
      }
    });

    if (spotlight) {
      spotlight.addEventListener("pointerenter", function () {
        spotlightPaused = true;
      });
      spotlight.addEventListener("pointerleave", function () {
        spotlightPaused = false;
      });
      spotlight.addEventListener("focusin", function () {
        spotlightPaused = true;
      });
      spotlight.addEventListener("focusout", function (event) {
        if (!spotlight.contains(event.relatedTarget)) {
          spotlightPaused = false;
        }
      });
      spotlight.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          setSpotlightSlide(spotlightIndex + 1, true);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          setSpotlightSlide(spotlightIndex - 1, true);
        }
      });
    }

    document.addEventListener("visibilitychange", function () {
      carouselPaused = document.hidden;
    });

    window.addEventListener(
      "resize",
      debounce(function () {
        updateCarouselControls();
      }, 150)
    );

    fetch("data/catalog.json", { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        if (!data || !Array.isArray(data.products) || !data.products.length) {
          throw new Error("Catalog is empty");
        }

        catalog = data;
        products = data.products.filter(function (product) {
          return product && product.id;
        });

        products.forEach(function (product) {
          productById[product.id] = product;
        });

        updateUpdatedDates(data.generatedAt);

        var spotlightProducts = pickBestDeals(products, 7);
        if (!spotlightProducts.length) {
          var fallbackSpotlight = productById[data.spotlight] || products[0];
          spotlightProducts = fallbackSpotlight ? [fallbackSpotlight] : [];
        }

        var spotlightIds = Object.create(null);
        spotlightProducts.forEach(function (product) {
          spotlightIds[product.id] = true;
        });

        var featuredProducts = (Array.isArray(data.featured) ? data.featured : [])
          .map(function (id) {
            return productById[id];
          })
          .filter(function (product) {
            return product && !spotlightIds[product.id];
          });

        var featuredIds = Object.create(null);
        featuredProducts.forEach(function (product) {
          featuredIds[product.id] = true;
        });

        if (featuredProducts.length < 12) {
          var fillers = products
            .filter(function (product) {
              return (
                product &&
                product.id &&
                !spotlightIds[product.id] &&
                !featuredIds[product.id] &&
                product.discount > 0
              );
            })
            .sort(function (a, b) {
              return (
                (b.discount || 0) - (a.discount || 0) ||
                (b.price || 0) - (a.price || 0)
              );
            });

          for (
            var i = 0;
            i < fillers.length && featuredProducts.length < 12;
            i += 1
          ) {
            featuredProducts.push(fillers[i]);
            featuredIds[fillers[i].id] = true;
          }
        }

        renderSpotlightCarousel(spotlightProducts);
        renderFeatured(featuredProducts);
        renderCategories();
        updateCategoryChips();
      })
      .catch(function () {
        if (catalogStatus) {
          catalogStatus.hidden = false;
          catalogStatus.textContent =
            "We could not load today's deals. Please refresh the page or email munafaduniya@gmail.com.";
        }

        carousel.innerHTML = "";

        if (spotlight) {
          spotlight.innerHTML =
            '<div class="spotlight-loading"><span class="spotlight-kicker">Today\'s best deals</span><p>Deals are taking a short break. Please refresh in a moment.</p></div>';
        }
      });
  }
})();
