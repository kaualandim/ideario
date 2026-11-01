
console.log("IDEARIO — Ideias em movimento.");

// MENU MOBILE

const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );
});

// FECHAR MENU AO CLICAR EM UM LINK

navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});

// ANIMAÇÕES DE ENTRADA

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".about, .solutions, .projects, .contact, .solution-card, .project-card"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        const whatsappNumber = "5561992845249";

        const whatsappMessage =
            `Olá! Vim pelo site da IDEARIO.%0A%0A` +
            `*Nome:* ${encodeURIComponent(name)}%0A` +
            `*Serviço:* ${encodeURIComponent(service)}%0A` +
            `*Projeto:* ${encodeURIComponent(message)}`;

        const whatsappUrl =
            `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappUrl, "_blank");
    });
}
