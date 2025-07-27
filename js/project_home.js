 document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-selengkapnya");

    buttons.forEach(btn => {
      const fiturList = btn.nextElementSibling;
      if (fiturList && fiturList.tagName === "UL") {
        fiturList.style.display = "none"; // Sembunyikan awal
        btn.addEventListener("click", () => {
          const isVisible = fiturList.style.display === "block";
          fiturList.style.display = isVisible ? "none" : "block";
          btn.innerText = isVisible ? "Lihat Selengkapnya" : "Tutup Detail";
        });
      }
    });
  });