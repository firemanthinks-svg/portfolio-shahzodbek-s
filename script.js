let typed = new Typed('.text', {
    strings: ["Frontend Developer", "UI/UX Designer", "Figma Specialist", "QA Tester"],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});

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

document.querySelector('.btn[href="#about"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});


// Contact

const form = document.querySelector(".contact-form");
const email = document.querySelector(".contact-email");
const message = document.querySelector(".contact-textarea");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // MESSAGE CHECK
    if (message.value.trim() === "") {
        message.classList.add("contact-error");
        isValid = false;
    } else {
        message.classList.remove("contact-error");
        message.classList.add("contact-success");
    }

    // EMAIL CHECK (@gmail.com)
    if (!email.value.endsWith("@gmail.com")) {
        email.classList.add("contact-error");
        isValid = false;
    } else {
        email.classList.remove("contact-error");
        email.classList.add("contact-success");
    }

    // SUCCESS
    if (isValid) {
        alert("Message yuborildi ✅");
        form.reset();
    }
});

// LIVE VALIDATION
email.addEventListener("input", () => {
    if (email.value.endsWith("@gmail.com")) {
        email.classList.remove("contact-error");
    }
});

message.addEventListener("input", () => {
    if (message.value.trim() !== "") {
        message.classList.remove("contact-error");
    }
});