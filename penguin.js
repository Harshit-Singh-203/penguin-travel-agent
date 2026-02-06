
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

  /* =========================================
   Penguin Travel Agent - Global JS
   Handles:
   - Responsive navbar toggle
   - Safe DOM loading
   - Mobile menu open / close
   ========================================= */

(function () {
  function initNavbar() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (!toggle || !nav) {
      console.warn("Navbar elements not found");
      return;
    }

    // Toggle menu on click
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      nav.classList.toggle("show");
    });

    // Close menu when clicking a link (mobile)
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
      });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener("click", function (e) {
      if (
        window.innerWidth <= 1024 &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        nav.classList.remove("show");
      }
    });
  }

  // Run after DOM is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})
/* Penguin Travel Agent – SAFE NAV TOGGLE */

window.onload = function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav-links");

  if (!toggle || !nav) return;

  toggle.onclick = function () {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  };
};