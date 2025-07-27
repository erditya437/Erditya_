document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("languageSelect");

  const savedLang = localStorage.getItem("lang") || "id";
  languageSelect && (languageSelect.value = savedLang); // kalau ada dropdown

  applyLanguage(savedLang);

  if (languageSelect) {
    languageSelect.addEventListener("change", function () {
      const selectedLang = this.value;
      localStorage.setItem("lang", selectedLang);
      applyLanguage(selectedLang);
    });
  }
});

function applyLanguage(lang) {
  fetch(`/json/${lang}.json`)
    .then((res) => res.json())
    .then((data) => {
      for (const id in data) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = data[id];
      }
    })
    .catch((err) => console.error("Gagal memuat file bahasa:", err));
}
