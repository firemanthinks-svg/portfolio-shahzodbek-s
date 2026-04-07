// Typed.js animatsiya
let typed = new Typed('.text', {
    strings: ["Frontend Developer", "UI/UX Designer", "Figma Specialist", "QA Tester"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});

// Light/Dark mode toggle
let btn = document.getElementById("mode");
let icon = btn.querySelector("i");

btn.onclick = () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
};

// Smooth scroll navbar
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Scroll button
document.querySelector('.btn[href="#about"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Change language
function changeLang(lang) {
    if (lang === "uz") window.location.href = "./index.html";
    else if (lang === "ru") window.location.href = "./russ.html";
    else if (lang === "en") window.location.href = "./english.html";
}

// Contact 
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector(".name").value;
        const surname = form.querySelector(".surname").value;
        const phone = form.querySelector(".phone").value;
        const email = form.querySelector(".email").value;
        const message = form.querySelector(".message").value;

        const nameError = form.querySelector(".name").nextElementSibling;
        const surnameError = form.querySelector(".surname").nextElementSibling;
        const phoneError = form.querySelector(".phone").nextElementSibling;
        const emailError = form.querySelector(".email").nextElementSibling;
        const messageError = form.querySelector(".message").nextElementSibling;

        let valid = true;

        // Ism
        if (name === "" || /\d/.test(name)) {
            nameError.textContent = "Ism noto'g'ri";
            nameError.style.color = "red";
            nameError.style.fontSize = "small";
            nameError.style.display = "block";
            valid = false;
        } else {
            nameError.style.display = "none";
        }

        // Familiya
        if (surname === "" || /\d/.test(surname)) {
            surnameError.textContent = "Familiya noto'g'ri";
            surnameError.style.color = "red";
            surnameError.style.fontSize = "small";
            surnameError.style.display = "block";
            valid = false;
        } else {
            surnameError.style.display = "none";
        }

        // Telefon
        if (!/^\d+$/.test(phone)) {
            phoneError.textContent = "Faqat raqam kiritilsin";
            phoneError.style.color = "red";
            phoneError.style.fontSize = "small";
            phoneError.style.display = "block";
            valid = false;
        } else {
            phoneError.style.display = "none";
        }

        // Email
        if (!email.includes("@gmail.com")) {
            emailError.textContent = "@gmail.com bo'lishi kerak";
            emailError.style.color = "red";
            emailError.style.fontSize = "small";
            emailError.style.display = "block";
            valid = false;
        } else {
            emailError.style.display = "none";
        }

        // Xabar (placeholder bo‘lsa ham Telegramga jo‘natiladi)
        if (message === "") {
            messageError.textContent = "Xabar yozing";
            messageError.style.color = "red";
            messageError.style.fontSize = "small";
            messageError.style.display = "block";
            valid = false;
        } else {
            messageError.style.display = "none";
        }

        if (valid) {
            const token = "8661152703:AAG8SbU6ELXkDa93nFmDiEeFIDmJCMuVn2E";
            const chat_id = "5972469200";
            const text = `📩 Yangi ariza!
👤 Ismi: ${name}
👤 Familiyasi: ${surname}
📞 Telefon: ${phone}
📧 Email: ${email}
💬 Izoh: ${message}`;

            fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id, text })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.ok) {
                        Swal.fire("Yuborildi ✅", "Xabar jo'natildi", "success");
                        form.reset();
                    } else {
                        Swal.fire("Xatolik ❌", data.description, "error");
                    }
                })
                .catch(() => {
                    Swal.fire("Xatolik ❌", "Server bilan muammo", "error");
                });
        }
    });
});