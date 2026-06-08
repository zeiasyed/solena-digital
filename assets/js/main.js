(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (typeof SITE !== "undefined") {
    document.querySelectorAll("[data-site-email]").forEach(function (el) {
      el.textContent = SITE.email;
      if (el.tagName === "A") el.href = "mailto:" + SITE.email;
    });
    document.querySelectorAll("[data-site-company]").forEach(function (el) {
      el.textContent = SITE.company;
    });
    document.querySelectorAll("[data-site-domain]").forEach(function (el) {
      el.textContent = SITE.domain;
    });
    document.querySelectorAll(".contact-form[data-site-mailto]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const fd = new FormData(form);
        const name = fd.get("name") || "";
        const phone = fd.get("phone") || "";
        const service = fd.get("service") || "";
        const message = fd.get("message") || "";
        const subject = encodeURIComponent("New inquiry from " + name);
        const body = encodeURIComponent(
          "Name: " + name + "\nPhone: " + phone + "\nService: " + service + "\n\n" + message
        );
        window.location.href = "mailto:" + SITE.email + "?subject=" + subject + "&body=" + body;
      });
    });
  }

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const revealEls = document.querySelectorAll(".reveal, .reveal-stagger > *");
  if (revealEls.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  document.querySelectorAll("[data-count]").forEach(function (el) {
    const target = parseFloat(el.getAttribute("data-count"));
    const suffix = el.getAttribute("data-suffix") || "";
    const prefix = el.getAttribute("data-prefix") || "";
    const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    let started = false;
    function animate() {
      if (started) return;
      started = true;
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = prefix + val.toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    if ("IntersectionObserver" in window) {
      const cio = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          animate();
          cio.disconnect();
        }
      }, { threshold: 0.5 });
      cio.observe(el);
    } else {
      animate();
    }
  });

  document.querySelectorAll("[data-report-tab]").forEach(function (tab) {
    tab.addEventListener("click", function () {
      const group = tab.closest("[data-report-group]");
      if (!group) return;
      const id = tab.getAttribute("data-report-tab");
      group.querySelectorAll("[data-report-tab]").forEach(function (t) {
        t.classList.toggle("active", t === tab);
      });
      group.querySelectorAll("[data-report-panel]").forEach(function (panel) {
        panel.classList.toggle("active", panel.getAttribute("data-report-panel") === id);
      });
    });
  });

  const hero = document.querySelector(".hero-parallax");
  if (hero) {
    window.addEventListener(
      "scroll",
      function () {
        const y = window.scrollY * 0.28;
        hero.style.transform = "translate3d(0, " + y + "px, 0)";
      },
      { passive: true }
    );
  }
})();
