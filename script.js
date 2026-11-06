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
        theme === "light" ? "#f6f7f9" : "#0e1014"
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

  var affiliateUid = null;

  function isCuelinksUrl(url) {
    return (
      url.protocol === "https:" &&
      (/(^|\.)linksredirect\.com$/.test(url.hostname) ||
        /(^|\.)clnk\.in$/.test(url.hostname) ||
        /(^|\.)cuelinks\.com$/.test(url.hostname))
    );
  }

  function isCJUrl(url) {
    return (
      url.protocol === "https:" &&
      (/(^|\.)cj\.com$/.test(url.hostname) ||
        /(^|\.)(tkqlhce|anrdoezrs|dpbolvw|jdoqocy|kqzyfj|emjcd|ftjcfx|awltovhc|lduhtrp|tqlkg|yceml|qksrv)\.(com|net)$/.test(
          url.hostname
        ))
    );
  }

  function isAliExpressUrl(url) {
    return (
      url.protocol === "https:" &&
      /(^|\.)aliexpress\.(com|us|ru)$/.test(url.hostname)
    );
  }

  function withAffiliateTracking(rawUrl) {
    try {
      var url = new URL(rawUrl);

      if (isCuelinksUrl(url)) {
        url.searchParams.set("subid", affiliateUid || "site");
        return url.href;
      }

      if (isCJUrl(url)) {
        if (affiliateUid) {
          url.searchParams.set("sid", affiliateUid);
        } else {
          url.searchParams.delete("sid");
        }
        return url.href;
      }

      return rawUrl;
    } catch (error) {
      return rawUrl;
    }
  }

  function applyAffiliateTracking(scope) {
    (scope || document)
      .querySelectorAll(
        'a[href*="linksredirect.com"], a[href*="clnk.in"], a[href*="cuelinks.com"], a[href*="cj.com"], a[href*="tkqlhce.com"], a[href*="anrdoezrs.net"], a[href*="dpbolvw.net"], a[href*="jdoqocy.com"], a[href*="kqzyfj.com"], a[href*="emjcd.com"], a[href*="ftjcfx.com"], a[href*="awltovhc.com"], a[href*="lduhtrp.net"], a[href*="tqlkg.com"], a[href*="yceml.net"], a[href*="qksrv.net"], a[href*="aliexpress.com"], a[href*="aliexpress.us"], a[href*="aliexpress.ru"]'
      )
      .forEach(function (link) {
        link.href = withAffiliateTracking(link.href);
      });
  }

  function setAffiliateUid(uid) {
    affiliateUid =
      typeof uid === "string" && /^[A-Za-z0-9]{6,128}$/.test(uid) ? uid : null;
    applyAffiliateTracking(document);
  }

  window.__munaSetAffiliateUid = setAffiliateUid;

  document.addEventListener("muna:auth", function (event) {
    setAffiliateUid(event.detail && event.detail.uid);
  });

  document.addEventListener(
    "click",
    function (event) {
      var target = event.target;
      var link = target && target.closest ? target.closest("a[href]") : null;
      if (link) {
        link.href = withAffiliateTracking(link.href);
      }
    },
    true
  );

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
    var featuredStatus = document.getElementById("featuredStatus");
    var carouselPrev = document.getElementById("carouselPrev");
    var carouselNext = document.getElementById("carouselNext");
    var carouselControls = carouselPrev
      ? carouselPrev.closest(".carousel-controls")
      : null;
    var cuelinksSection = document.getElementById("cuelinksDeals");
    var cuelinksGrid = document.getElementById("cuelinksGrid");
    var cuelinksStatus = document.getElementById("cuelinksStatus");
    var cuelinksCount = document.getElementById("cuelinksCount");
    var cuelinksMore = document.getElementById("cuelinksMore");

    var carouselTimer = null;
    var carouselPaused = false;
    var spotlightTimer = null;
    var spotlightPaused = false;
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    var priceFormatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    });

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

    var blockedMerchantPattern = /(?:flipkart|flixcart|fkrt\.it|fkcdn)/i;

    function isBlockedMerchantOffer(offer) {
      if (!offer) {
        return false;
      }

      var fields = [
        offer.campaignName,
        offer.campaignDomain,
        offer.trackingUrl,
        offer.title,
        offer.description,
        offer.terms,
        offer.productImage
      ];

      if (
        fields.some(function (value) {
          return blockedMerchantPattern.test(String(value || ""));
        })
      ) {
        return true;
      }

      return (
        Array.isArray(offer.categories) &&
        offer.categories.some(function (category) {
          return blockedMerchantPattern.test(String(category || ""));
        })
      );
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
          (/(^|\.)linksredirect\.com$/.test(url.hostname) ||
            /(^|\.)clnk\.in$/.test(url.hostname) ||
            /(^|\.)cuelinks\.com$/.test(url.hostname) ||
            isCJUrl(url) ||
            isAliExpressUrl(url))
        ) {
          return url.href;
        }
      } catch (error) {
        return null;
      }
      return null;
    }

    function safeLogoUrl(rawUrl) {
      try {
        var url = new URL(rawUrl);
        if (
          url.protocol === "https:" &&
          /(^|\.)cuelinks\.com$/.test(url.hostname)
        ) {
          return url.href;
        }
      } catch (error) {
        return "";
      }
      return "";
    }

    function safeOfferImageUrl(rawUrl) {
      try {
        var url = new URL(rawUrl);
        if (url.protocol === "https:") {
          return url.href;
        }
      } catch (error) {
        return "";
      }
      return "";
    }

    function campaignInitials(name) {
      return (
        String(name || "")
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 2)
          .map(function (part) {
            return part.charAt(0).toUpperCase();
          })
          .join("") || "CL"
      );
    }

    function offerImageMarkup(offer) {
      var productImage = safeOfferImageUrl(offer.productImage || "");
      if (productImage) {
        return (
          '<img class="offer-logo offer-product-image" src="' +
          escapeHtml(productImage) +
          '" alt="' +
          escapeHtml(offer.title || offer.campaignName || "Partner offer") +
          '" width="400" height="400" loading="lazy" decoding="async">'
        );
      }

      var logo = safeLogoUrl(offer.campaignLogo);
      if (logo) {
        return (
          '<img class="offer-logo" src="' +
          escapeHtml(logo) +
          '" alt="' +
          escapeHtml((offer.campaignName || "Partner") + " logo") +
          '" width="120" height="120" loading="lazy" decoding="async">'
        );
      }

      return (
        '<span class="offer-logo offer-logo-fallback" aria-hidden="true">' +
        escapeHtml(campaignInitials(offer.campaignName)) +
        "</span>"
      );
    }

    function formatShortDate(value) {
      var text = String(value || "").trim();
      var match = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (!match) {
        return text;
      }
      var date = new Date(
        Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
      );
      return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short"
      });
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

    function bestDealOfferCard(offer, index) {
      var url = safeProductUrl(offer.trackingUrl);
      if (!url) {
        return "";
      }

      var discount =
        offer.percentOff > 0
          ? '<span class="best-deal-badge">' +
            Math.round(offer.percentOff) +
            "% off</span>"
          : "";
      var typeLabel = offer.offerType === "coupon" ? "Coupon" : "Deal";
      var chips = ['<span class="offer-chip">' + typeLabel + "</span>"];
      if (offer.couponCode) {
        chips.push(
          '<span class="offer-chip offer-code">Code: ' +
            escapeHtml(offer.couponCode) +
            "</span>"
        );
      }
      var price =
        offer.discountPrice > 0
          ? '<div class="best-deal-price-row"><span class="best-deal-price">' +
            formatPrice(offer.discountPrice) +
            "</span>" +
            (offer.originalPrice > offer.discountPrice
              ? '<span class="best-deal-mrp">' +
                formatPrice(offer.originalPrice) +
                "</span>"
              : "") +
            "</div>"
          : "";
      var validity = offer.endDate
        ? '<span class="offer-validity">Valid till ' +
          escapeHtml(formatShortDate(offer.endDate)) +
          "</span>"
        : "";

      return (
        '<a class="best-deal-card" href="' +
        escapeHtml(withAffiliateTracking(url)) +
        '" target="_blank" rel="sponsored noopener noreferrer" aria-label="' +
        escapeHtml(offer.title + " on " + offer.campaignName) +
        '" style="--deal-delay:' +
        Math.min(index, 8) * 55 +
        'ms">' +
        discount +
        '<div class="best-deal-media">' +
        offerImageMarkup(offer) +
        "</div>" +
        '<div class="best-deal-body">' +
        '<p class="best-deal-brand">' +
        escapeHtml(offer.campaignName) +
        "</p>" +
        '<h3 class="best-deal-title">' +
        escapeHtml(offer.title) +
        "</h3>" +
        '<div class="offer-meta">' +
        chips.join("") +
        "</div>" +
        price +
        validity +
        '<span class="best-deal-save">View offer</span>' +
        "</div>" +
        "</a>"
      );
    }

    function offerCard(offer, options) {
      options = options || {};
      var url = safeProductUrl(offer.trackingUrl);
      if (!url) {
        return "";
      }
      var hiddenAttr = options.hidden ? " hidden" : "";
      var extraAttr = options.hidden ? ' data-extra="true"' : "";

      var typeLabel = offer.offerType === "coupon" ? "Coupon" : "Deal";
      var chips = ['<span class="offer-chip">' + typeLabel + "</span>"];
      if (offer.percentOff > 0) {
        chips.push(
          '<span class="offer-chip offer-chip-accent">' +
            Math.round(offer.percentOff) +
            "% off</span>"
        );
      }
      if (offer.couponCode) {
        chips.push(
          '<span class="offer-chip offer-code">Code: ' +
            escapeHtml(offer.couponCode) +
            "</span>"
        );
      }
      var price =
        offer.discountPrice > 0
          ? '<div class="product-price-row"><span class="product-price">' +
            formatPrice(offer.discountPrice) +
            "</span>" +
            (offer.originalPrice > offer.discountPrice
              ? '<span class="product-mrp">' +
                formatPrice(offer.originalPrice) +
                "</span>"
              : "") +
            "</div>"
          : "";
      var validity = offer.endDate
        ? '<span class="offer-validity">Valid till ' +
          escapeHtml(formatShortDate(offer.endDate)) +
          "</span>"
        : "";

      return (
        '<a class="product-card offer-card" href="' +
        escapeHtml(withAffiliateTracking(url)) +
        '" target="_blank" rel="sponsored noopener noreferrer" aria-label="' +
        escapeHtml(offer.title + " on " + offer.campaignName) +
        '"' +
        hiddenAttr +
        extraAttr +
        ">" +
        '<div class="product-media offer-media">' +
        offerImageMarkup(offer) +
        "</div>" +
        '<div class="product-body">' +
        '<p class="product-brand">' +
        escapeHtml(offer.campaignName) +
        "</p>" +
        '<h3 class="product-title">' +
        escapeHtml(offer.title) +
        "</h3>" +
        (offer.description
          ? '<p class="offer-description">' +
            escapeHtml(offer.description) +
            "</p>"
          : "") +
        '<div class="offer-meta">' +
        chips.join("") +
        "</div>" +
        price +
        validity +
        '<span class="product-cta"><span>View offer</span>' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>' +
        "</span>" +
        "</div>" +
        "</a>"
      );
    }

    function loadJson(url) {
      return fetch(url, { cache: "no-store" })
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP " + response.status);
          }
          return response.json();
        })
        .catch(function () {
          return null;
        });
    }

    function productToOffer(product, network) {
      if (!product) {
        return null;
      }

      var trackingUrl =
        product.trackingUrl ||
        product.promotionLink ||
        (product.linkCode && product.linkCode.clickUrl) ||
        "";
      var resolvedNetwork = product.network || network || "Partner";

      return {
        id:
          String(resolvedNetwork).toLowerCase() +
          "-product-" +
          (product.id || trackingUrl),
        title: String(product.title || "").trim(),
        description: String(product.description || "").trim(),
        couponCode: "",
        offerType: "deal",
        campaignName: String(
          product.advertiserName ||
            product.shopName ||
            (resolvedNetwork === "AliExpress"
              ? "AliExpress"
              : resolvedNetwork + " partner")
        ),
        campaignLogo: "",
        productImage: String(product.imageLink || product.productImage || ""),
        categories: Array.isArray(product.categories) ? product.categories : [],
        trackingUrl: String(trackingUrl),
        startDate: "",
        endDate: "",
        originalPrice: Number.isFinite(product.originalPrice)
          ? product.originalPrice
          : null,
        discountPrice: Number.isFinite(product.discountPrice)
          ? product.discountPrice
          : null,
        percentOff: Number.isFinite(product.percentOff)
          ? product.percentOff
          : null,
        updatedAt: String(product.updatedAt || ""),
        network: resolvedNetwork
      };
    }

    function collectOffers(results) {
      var offers = [];
      var seen = Object.create(null);

      function add(offer) {
        if (
          !offer ||
          isBlockedMerchantOffer(offer) ||
          !safeProductUrl(offer.trackingUrl)
        ) {
          return;
        }
        var key = String(offer.trackingUrl);
        if (seen[key]) {
          return;
        }
        seen[key] = true;
        offers.push(offer);
      }

      [results[0], results[1]].forEach(function (payload) {
        if (payload && Array.isArray(payload.offers)) {
          payload.offers.forEach(add);
        }
      });

      [results[2], results[3]].forEach(function (payload) {
        if (!payload || !Array.isArray(payload.products)) {
          return;
        }
        payload.products.forEach(function (product) {
          add(productToOffer(product, payload.network));
        });
      });

      return offers;
    }

    function interleaveOffers(offers) {
      var groups = Object.create(null);
      var order = [];

      offers.forEach(function (offer) {
        var key = offer.network || "Partner";
        if (!groups[key]) {
          groups[key] = [];
          order.push(key);
        }
        groups[key].push(offer);
      });

      var result = [];
      var index = 0;
      var added = true;

      while (added) {
        added = false;
        order.forEach(function (key) {
          if (groups[key][index]) {
            result.push(groups[key][index]);
            added = true;
          }
        });
        index += 1;
      }

      return result;
    }

    function renderPartnerOffers(offers) {
      var ordered = interleaveOffers(offers);
      var bestCount = Math.min(12, Math.ceil(ordered.length / 2));
      var bestOffers = ordered.slice(0, bestCount);
      var featuredOffers = ordered.slice(bestCount, bestCount + 12);
      var shown = Object.create(null);

      bestOffers.concat(featuredOffers).forEach(function (offer) {
        shown[String(offer.trackingUrl)] = true;
      });

      var gridOffers = ordered.filter(function (offer) {
        return !shown[String(offer.trackingUrl)];
      });

      renderBestDealsOffers(bestOffers);
      renderFeaturedOffers(featuredOffers);

      if (!cuelinksSection || !cuelinksGrid) {
        return;
      }

      if (!gridOffers.length) {
        cuelinksSection.hidden = true;
        return;
      }

      cuelinksGrid.innerHTML = gridOffers
        .map(function (offer, index) {
          return offerCard(offer, { hidden: index >= 12 });
        })
        .filter(Boolean)
        .join("");

      cuelinksSection.hidden = false;
      cuelinksSection.dataset.loaded = "true";

      if (cuelinksCount) {
        cuelinksCount.textContent =
          gridOffers.length + (gridOffers.length === 1 ? " offer" : " offers");
      }
      if (cuelinksStatus) {
        cuelinksStatus.hidden = true;
      }
      if (cuelinksMore) {
        cuelinksMore.hidden = gridOffers.length <= 12;
        cuelinksMore.setAttribute("data-expanded", "false");
        cuelinksMore.setAttribute("data-total", String(gridOffers.length));
        cuelinksMore.textContent = "Show all " + gridOffers.length + " offers";
      }

      attachImageFallbacks(cuelinksGrid);
      observeReveals(cuelinksGrid);
    }

    function loadPartnerOffers() {
      Promise.all([
        loadJson("data/cuelinks-offers.json"),
        loadJson("data/cj-offers.json"),
        loadJson("data/cj-products.json"),
        loadJson("data/aliexpress-products.json")
      ]).then(function (results) {
        var generatedAt = results
          .map(function (payload) {
            return payload && payload.generatedAt;
          })
          .filter(Boolean)
          .sort()
          .pop();

        if (generatedAt) {
          updateUpdatedDates(generatedAt);
        }

        renderPartnerOffers(collectOffers(results));
      });
    }

    function stopSpotlight() {
      if (spotlightTimer) {
        window.clearInterval(spotlightTimer);
        spotlightTimer = null;
      }
    }

    function spotlightStep() {
      var card = spotlight.querySelector(".best-deal-card");
      if (!card) {
        return spotlight.clientWidth * 0.8;
      }

      var styles = window.getComputedStyle(spotlight);
      var gap = parseFloat(styles.columnGap || styles.gap || "16") || 16;
      return card.getBoundingClientRect().width + gap;
    }

    function scrollSpotlight(direction) {
      var maxScroll = spotlight.scrollWidth - spotlight.clientWidth;
      if (maxScroll <= 8) {
        return;
      }

      if (direction > 0 && spotlight.scrollLeft >= maxScroll - 8) {
        spotlight.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      if (direction < 0 && spotlight.scrollLeft <= 8) {
        spotlight.scrollTo({ left: maxScroll, behavior: "smooth" });
        return;
      }

      spotlight.scrollBy({
        left: spotlightStep() * direction,
        behavior: "smooth"
      });
    }

    function updateSpotlightControls() {
      var prev = document.getElementById("spotlightPrev");
      var next = document.getElementById("spotlightNext");
      if (!prev || !next) {
        return;
      }
      var hasOverflow = spotlight.scrollWidth > spotlight.clientWidth + 8;
      prev.hidden = !hasOverflow;
      next.hidden = !hasOverflow;
    }

    function startSpotlight() {
      stopSpotlight();
      if (reduceMotion || !spotlight) {
        return;
      }

      spotlightTimer = window.setInterval(function () {
        if (
          spotlightPaused ||
          document.hidden ||
          !spotlight.offsetParent ||
          spotlight.scrollWidth <= spotlight.clientWidth + 8
        ) {
          return;
        }
        scrollSpotlight(1);
      }, 3800);
    }

    function bindSpotlightControls() {
      var prev = document.getElementById("spotlightPrev");
      var next = document.getElementById("spotlightNext");

      if (prev && prev.dataset.bound !== "true") {
        prev.dataset.bound = "true";
        prev.addEventListener("click", function () {
          scrollSpotlight(-1);
          startSpotlight();
        });
      }

      if (next && next.dataset.bound !== "true") {
        next.dataset.bound = "true";
        next.addEventListener("click", function () {
          scrollSpotlight(1);
          startSpotlight();
        });
      }
    }

    function renderBestDealsOffers(offers) {
      if (!spotlight) {
        return;
      }

      stopSpotlight();

      var validOffers = offers.filter(function (offer) {
        return offer && safeProductUrl(offer.trackingUrl);
      });

      if (!validOffers.length) {
        spotlight.innerHTML =
          '<div class="best-deals-loading"><span class="best-deals-kicker">Today\'s best deals</span><p>No best deals right now. Browse the deals below.</p></div>';
        return;
      }

      spotlight.innerHTML = validOffers
        .map(function (offer, index) {
          return bestDealOfferCard(offer, index);
        })
        .join("");

      attachImageFallbacks(spotlight);
      bindSpotlightControls();
      updateSpotlightControls();
      startSpotlight();
    }

    function renderFeaturedOffers(offers) {
      if (!offers.length) {
        carousel.innerHTML = "";
        if (featuredStatus) {
          featuredStatus.hidden = false;
          featuredStatus.textContent =
            "No featured deals are available right now. Please check back soon.";
        }
        return;
      }

      carousel.innerHTML = offers
        .map(function (offer) {
          return offerCard(offer);
        })
        .join("");

      attachImageFallbacks(carousel);
      observeReveals(carousel);
      if (featuredStatus) {
        featuredStatus.hidden = true;
      }
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

    if (cuelinksMore && cuelinksGrid) {
      cuelinksMore.addEventListener("click", function () {
        var extraCards = cuelinksGrid.querySelectorAll(
          '.offer-card[data-extra="true"]'
        );
        var isExpanded = cuelinksMore.getAttribute("data-expanded") === "true";
        var total = cuelinksMore.getAttribute("data-total") || "";

        extraCards.forEach(function (card) {
          card.hidden = !isExpanded ? false : true;
        });

        cuelinksMore.setAttribute("data-expanded", isExpanded ? "false" : "true");
        cuelinksMore.textContent = isExpanded
          ? "Show all " + total + " offers"
          : "Show fewer offers";
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
        startSpotlight();
      });
      spotlight.addEventListener("focusin", function () {
        spotlightPaused = true;
      });
      spotlight.addEventListener("focusout", function (event) {
        if (!spotlight.contains(event.relatedTarget)) {
          spotlightPaused = false;
          startSpotlight();
        }
      });
      spotlight.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollSpotlight(1);
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollSpotlight(-1);
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
        updateSpotlightControls();
      }, 150)
    );

    loadPartnerOffers();
  }
})();
