// Parallax logic
window.addEventListener("scroll", () => {
  const heroLogo = document.getElementById("hero-logo");
  const topNavbar = document.getElementById("top-navbar");

  if (window.scrollY > 100) {
    heroLogo.classList.add("shrink");
    topNavbar.classList.add("show");
  } else {
    heroLogo.classList.remove("shrink");
    topNavbar.classList.remove("show");
  }
});

// Hamburger menu logic
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}

function closeMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.remove("active");
}


// Scroll otomatis dari bawah ke atas setelah loading
window.addEventListener("load", () => {
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    // Pertama kali kunjungan: tampilkan loader + scroll
    localStorage.setItem("hasVisited", "true");

    // Scroll ke bawah tanpa animasi
    window.scrollTo(0, document.body.scrollHeight);

    // Setelah 1 detik, scroll naik pelan-pelan
    setTimeout(() => {
      document.body.classList.add("loaded");

      let currentScroll = document.body.scrollHeight;
      const scrollStep = 20;

      function smoothScrollUp() {
        currentScroll -= scrollStep;
        if (currentScroll > 0) {
          window.scrollTo(0, currentScroll);
          requestAnimationFrame(smoothScrollUp);
        } else {
          window.scrollTo(0, 0);
          startRevealObserver();
        }
      }

      smoothScrollUp();
    }, 1000);
  } else {
    // Sudah pernah buka: langsung tampilkan tanpa scroll animasi
    document.body.classList.add("loaded");
    startRevealObserver(); // langsung aktifkan reveal
  }
});


// Scroll Reveal logic
function startRevealObserver() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}
