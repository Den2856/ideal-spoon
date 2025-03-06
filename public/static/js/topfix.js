document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const offsetTrigger = header.offsetHeight;
  const navItem = document.querySelector('.move');
  
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  }); 

  window.addEventListener('scroll', () => {
    if (window.scrollY > offsetTrigger) {
      header.classList.add('fixed');
      navItem.style.borderRadius = '0 0 10px 10px';
      
    } else {
      header.classList.remove('fixed');
      navItem.style.borderRadius = '10px';
    }
    

    document.getElementById("about").addEventListener("click", function () {
      const target = document.querySelector(".main-content");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      header.classList.add('fixed')
    });

    document.getElementById("services").addEventListener("click", function () {
      const target = document.querySelector(".block-container");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("contact").addEventListener("click", function () {
      const target = document.querySelector(".form-section");
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});

