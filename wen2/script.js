const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => observer.observe(element));

const nav = document.querySelector("#nav");
const burger = document.querySelector("#burger");
const navLinks = document.querySelectorAll(".nav__links a");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const form = document.querySelector(".guest-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Анкета пока тестовая. Позже сюда можно подключить Google Forms или Яндекс Форму.");
});
