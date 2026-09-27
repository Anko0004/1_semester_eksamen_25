document.addEventListener("DOMContentLoaded", function () {
  //Koden udføres når HTML er indlæst
  const menuLinks = document.querySelectorAll(".menu a"); // Vælger alle <a>-elementer i .menu og gemmer dem som en NodeList i variablen menuLinks

  // Hent pathname "stien" fra den nuværende URL (fx "Om mig")
  const currentPath = window.location.pathname;

  // Gennemgår hvert link i menuLinks (NodeList) ved hjælp af en forEach-loop
  menuLinks.forEach((link) => {
    //Inde i forEach sammenlignes stien (pathname) for hvert link med den aktuelle sti (currentPath).
    if (link.pathname === currentPath) {
      link.classList.add("active"); // Tilføj 'active' klasse til det link, der svarer til den nuværende side
    }
  });
});

function toggleMenu() {
  document.querySelector(".menu").classList.toggle("show");
}

// Find scroll-knappen
const scrollBtn = document.querySelector(".scroll-down");

// Skjul pilen, når man scroller ned
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollBtn.classList.add("hidden"); // Skjul pilen
  } else {
    scrollBtn.classList.remove("hidden"); // Vis pilen igen
  }
});
