// Show navbar after scrolling past hero section
const navbar = document.querySelector(".navbar");
const hero = document.getElementById("home");

window.addEventListener("scroll", () => {
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight - 100) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }

  // Update active nav links
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    if (window.innerWidth <= 768) {
      document.querySelector(".navbar-nav").classList.remove("show");
    }
  });
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  document.querySelector(".navbar-nav").classList.toggle("show");
}