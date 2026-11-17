(() => {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.querySelector("#interest-form");
  const feedback = document.querySelector("#form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        feedback.textContent = "Please complete the required fields correctly.";
        feedback.classList.add("error");
        return;
      }

      // Deliberately do not store, log, or transmit form values.
      feedback.textContent = "Validation successful. This demonstration form has not submitted or stored your information.";
      feedback.classList.remove("error");
      form.reset();
    });
  }
})();