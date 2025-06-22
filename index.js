document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".data-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const texto = btn.nextElementSibling;
            texto.classList.toggle("active");
        });
    });
});