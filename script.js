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




// CONTACT FORM (YANGILANGAN)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    function setError(input, condition) {
        if (condition) {
            input.classList.add("error");
            return false;
        } else {
            input.classList.remove("error");
            return true;
        }
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector(".name");
        const surname = form.querySelector(".surname");
        const phone = form.querySelector(".phone");
        const email = form.querySelector(".email");
        const message = form.querySelector(".message");

        let valid = true;

        if (!setError(name, name.value === "" || /\d/.test(name.value))) valid = false;
        if (!setError(surname, surname.value === "" || /\d/.test(surname.value))) valid = false;
        if (!setError(phone, !/^\d+$/.test(phone.value))) valid = false;
        if (!setError(email, !email.value.includes("@gmail.com"))) valid = false;
        if (!setError(message, message.value === "")) valid = false;

        if (valid) {
            const token = "8661152703:AAG8SbU6ELXkDa93nFmDiEeFIDmJCMuVn2E";
            const chat_id = "5972469200";

            const text = `
📩 Yangi ariza!

👤 Ismi: ${name.value}
🗣️ Familiyasi: ${surname.value}

📞 Telefon: ${phone.value}
📧 Email: ${email.value}

💬 Xabar:
${message.value}
`;

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
                        document.querySelectorAll(".input").forEach(i => i.classList.remove("error"));
                    }
                });
        }
    });
});



// element 

const images = document.querySelectorAll(".memory-card img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

// OPEN
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("active");
        modalImg.src = img.src;
    });
});

// CLOSE X
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});

// CLICK OUTSIDE
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});


const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});



// Header



hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    document.querySelector(".header")
        .classList.toggle("scrolled", window.scrollY > 50);
});