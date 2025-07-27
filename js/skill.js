document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector(".skill-section");
  let hasAnimated = false; // supaya gak jalan terus-terusan
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        hasAnimated = true;
      } else {
        resetSkills(); // reset saat keluar dari view
        hasAnimated = false;
      }
    });
  }, {
    threshold: 0.3 // mulai animasi saat 30% bagian terlihat
  });

  observer.observe(skillSection);

  function animateSkills() {
    const percents = document.querySelectorAll(".percent-text");

    percents.forEach(el => {
      const target = parseInt(el.dataset.percent, 10);
      let current = 0;
      el.textContent = "0%";

      const interval = setInterval(() => {
        if (current >= target) {
          clearInterval(interval);
        } else {
          current++;
          el.textContent = `${current}%`;
        }
      }, 20);
    });
  }

  function resetSkills() {
    const percents = document.querySelectorAll(".percent-text");
    percents.forEach(el => {
      el.textContent = "0%";
    });
  }
});
