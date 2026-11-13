document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    if (!form) {
        alert("Forma topilmadi!");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name  || !email || !message) {
            alert("Barcha maydonlarni to‘ldiring!");
            return;
        }

        alert("Rahmat, " + name + "! Xabaringiz qabul qilindi.");

        form.reset();
    });

    console.log("DarkFolio ishlayapti!");

});