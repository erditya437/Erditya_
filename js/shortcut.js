document.addEventListener("DOMContentLoaded", () => {
  const shortcutBtn = document.getElementById("shortcutBtn");
  const overlayMenu = document.getElementById("overlayMenu");
  const closeOverlay = document.getElementById("closeOverlay");
  const toggleDark = document.getElementById("toggleDarkMode");
  const langSelect = document.getElementById("languageSelect");

  // Aktifkan dark mode jika sudah disimpan
  const savedDark = localStorage.getItem("dark-mode");
  if (savedDark === "true") {
    document.body.classList.add("dark-mode");
  }

  // Tampilkan bahasa yang disimpan
  const savedLang = localStorage.getItem("lang") || "id";
  langSelect && (langSelect.value = savedLang);

  // Buka overlay
  shortcutBtn && shortcutBtn.addEventListener("click", () => {
    overlayMenu.classList.add("active");
  });

  // Tutup overlay
  closeOverlay && closeOverlay.addEventListener("click", () => {
    overlayMenu.classList.remove("active");
  });

  // Toggle dark mode
  toggleDark && toggleDark.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDark ? "true" : "false");
  });

  // Ganti bahasa dan reload supaya sinkron di semua halaman
  langSelect && langSelect.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem("lang", selectedLang);
    location.reload(); // reload agar lang.js aktif di semua halaman
  });
});
