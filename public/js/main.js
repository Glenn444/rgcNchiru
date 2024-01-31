const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const btn = document.querySelectorAll(".btn");
  const btnText = document.querySelectorAll(".btn-text");
  const year = document.getElementById("year");

  //implementing the arrow down functionality
  btn.forEach(function (e) {
    e.addEventListener("click", function () {
      e.classList.toggle("arrowDown");
      e.classList.add('transtn')
      const dataNum = e.getAttribute("data-value");

      btnText.forEach((txt, _) => {
        if (
          e.classList.contains("arrowDown") &&
          txt.getAttribute("data-value") === dataNum
        ) {
            txt.classList.add("animate-open-menu");
          txt.classList.remove("hidden");
        } else if (dataNum === txt.getAttribute("data-value")) {
            setTimeout(() => {
                txt.classList.add("hidden");
            }, 100);
        }
      });
    });
  });

  //footer date automatic update
  const yearUpdate = () => {
    const date = new Date();
    year.innerHTML = date.getFullYear();
  };
yearUpdate();

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

initApp();
