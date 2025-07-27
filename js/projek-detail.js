document.addEventListener("DOMContentLoaded", function () {
  // === Carousel Logic ===
  const dots = document.querySelectorAll(".dot");
  const images = document.querySelectorAll(".carousel-img");

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      images.forEach((img) => img.classList.remove("active"));
      dots.forEach((d) => d.classList.remove("active"));

      images[idx].classList.add("active");
      dot.classList.add("active");
    });
  });

  // === Toggle Fitur Selengkapnya ===
  const toggleBtn = document.getElementById("toggleFitur");
  const fiturList = document.querySelector(".projek-fitur");

  toggleBtn.addEventListener("click", () => {
    fiturList.classList.toggle("show-all");
    toggleBtn.innerText = fiturList.classList.contains("show-all")
      ? "Sembunyikan"
      : "Lihat Selengkapnya";
  });
});
