document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const offsetTrigger = header.offsetHeight;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > offsetTrigger) {
      header.classList.add('fixed');
      
    } else {
      header.classList.remove('fixed');
    }
    document.getElementById("about").addEventListener("click", function () {
      const target = document.querySelector(".main-content");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      header.classList.add('fixed')
    });

    document.getElementById("services").addEventListener("click", function () {
      const target = document.querySelector(".block-container");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById("contact").addEventListener("click", function () {
      const target = document.querySelector(".form-section");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});

