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
    var searchForm = document.getElementById("searchForm");
    var searchInput = document.getElementById("searchInput");
    var searchResults = document.getElementById("searchResults");
    var searchResultsGrid = document.getElementById("searchResultsGrid");
    var resultsTitle = document.getElementById("resultsTitle");
    var emptyState = document.getElementById("emptyState");
    var clearSearchBtn = document.getElementById("clearSearch");
    var featuredSection = document.getElementById("featured");
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

    function renderSpotlight(product) {
      if (!spotlight) {
        return;
      }

      var url = product ? safeProductUrl(product.url) : null;
      if (!product || !url) {
        spotlight.innerHTML =
          '<div class="spotlight-loading"><span class="spotlight-kicker">Today\'s spotlight</span><p>No spotlight deal right now. Browse the deals below.</p></div>';
        return;
      }

      var image = safeImageUrl(product.image);
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

      spotlight.innerHTML =
        '<div class="spotlight-card">' +
        '<div class="spotlight-head"><span class="spotlight-kicker">Today\'s spotlight</span>' +
        discount +
        "</div>" +
        '<a class="spotlight-link" href="' +
        escapeHtml(url) +
        '" target="_blank" rel="sponsored noopener noreferrer">' +
        '<div class="spotlight-media"><img src="' +
        escapeHtml(image) +
        '" alt="' +
        escapeHtml(product.title) +
        '" width="400" height="400" loading="eager" decoding="async"></div>' +
        '<div class="spotlight-body">' +
        '<p class="spotlight-brand">' +
        escapeHtml(product.brand || product.categoryLabel || "Flipkart deal") +
        "</p>" +
        '<h3 class="spotlight-title">' +
        escapeHtml(product.title) +
        "</h3>" +
        '<div class="spotlight-price-row"><span class="spotlight-price">' +
        formatPrice(product.price) +
        "</span>" +
        mrp +
        "</div>" +
        '<span class="spotlight-cta">View deal on Flipkart' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>' +
        "</span>" +
        "</div>" +
        "</a>" +
        "</div>";

      attachImageFallbacks(spotlight);
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

    function showSearch(query, shouldScroll) {
      var term = String(query || "").trim().toLowerCase();
      if (!term) {
        clearSearch();
        return;
      }

      var matches = products
        .filter(function (product) {
          return (
            (product.title || "").toLowerCase().indexOf(term) !== -1 ||
            (product.brand || "").toLowerCase().indexOf(term) !== -1 ||
            (product.categoryLabel || "").toLowerCase().indexOf(term) !==
              -1 ||
            (product.categoryPath || "").toLowerCase().indexOf(term) !== -1
          );
        })
        .sort(function (a, b) {
          return b.discount - a.discount || b.price - a.price;
        });

      if (resultsTitle) {
        resultsTitle.textContent =
          matches.length +
          " deal" +
          (matches.length === 1 ? "" : "s") +
          " for \u201C" +
          query.trim() +
          "\u201D";
      }

      if (searchResultsGrid) {
        searchResultsGrid.innerHTML = matches
          .map(function (product) {
            return productCard(product, { showCategory: true });
          })
          .join("");
        attachImageFallbacks(searchResultsGrid);
      }

      if (emptyState) {
        emptyState.hidden = matches.length > 0;
      }

      if (searchResults) {
        searchResults.hidden = false;
      }
      if (featuredSection) {
        featuredSection.hidden = true;
      }
      if (categorySections) {
        categorySections.hidden = true;
      }

      if (shouldScroll && searchResults) {
        searchResults.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    function clearSearch() {
      if (searchInput) {
        searchInput.value = "";
      }
      if (searchResults) {
        searchResults.hidden = true;
      }
      if (featuredSection) {
        featuredSection.hidden = false;
      }
      if (categorySections) {
        categorySections.hidden = false;
      }
      if (searchResultsGrid) {
        searchResultsGrid.innerHTML = "";
      }
      if (emptyState) {
        emptyState.hidden = true;
      }
      if (resultsTitle) {
        resultsTitle.textContent = "Deals";
      }
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

    if (searchForm && searchInput) {
      searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        showSearch(searchInput.value, true);
      });

      searchInput.addEventListener(
        "input",
        debounce(function () {
          var query = searchInput.value.trim();
          if (query.length >= 2) {
            showSearch(query, false);
          } else {
            clearSearch();
          }
        }, 250)
      );
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", function () {
        clearSearch();
        if (searchInput) {
          searchInput.focus();
        }
      });
    }

    document.addEventListener("click", function (event) {
      var link = event.target.closest('a[href^="#cat-"]');
      if (!link || !searchResults || searchResults.hidden) {
        return;
      }

      event.preventDefault();
      var target = link.getAttribute("href");
      clearSearch();

      window.setTimeout(function () {
        var section = target ? document.querySelector(target) : null;
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    });

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

        var featuredProducts = (Array.isArray(data.featured) ? data.featured : [])
          .map(function (id) {
            return productById[id];
          })
          .filter(Boolean);

        if (!featuredProducts.length) {
          featuredProducts = products.slice(0, 10);
        }

        var spotlightProduct =
          productById[data.spotlight] ||
          featuredProducts[0] ||
          products[0];

        renderSpotlight(spotlightProduct);
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
            '<div class="spotlight-loading"><span class="spotlight-kicker">Today\'s spotlight</span><p>Deals are taking a short break. Please refresh in a moment.</p></div>';
        }
      });
  }
})();
