// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Cargar Navbar
    const navbarElement = document.getElementById("global-navbar");
    if (navbarElement) {
        fetch("components/navbar.html")
            .then(response => response.text())
            .then(html => {
                navbarElement.innerHTML = html;
                inicializarNavbar();
            })
            .catch(error => console.error("Error cargando navbar:", error));
    }

    // 2. Cargar Footer
    const footerElement = document.getElementById("global-footer");
    if (footerElement) {
        fetch("components/footer.html")
            .then(response => response.text())
            .then(html => {
                footerElement.innerHTML = html;
            })
            .catch(error => console.error("Error cargando footer:", error));
    }
});

function inicializarNavbar() {
    // Lógica del menú hamburguesa para teléfonos
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Marcar pestaña activa según la URL
    const paginaActual = window.location.pathname.split("/").pop();
    if (paginaActual === "index.html" || paginaActual === "") {
        const link = document.getElementById("link-inicio");
        if (link) {
            link.classList.remove("text-slate-400");
            link.classList.add("text-brandCyan", "border-b-2", "border-brandCyan");
        }
    }
}
