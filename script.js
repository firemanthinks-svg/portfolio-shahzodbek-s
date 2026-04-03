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

// Inputlar
const firstName = document.querySelector(".contact-firstname");
const lastName = document.querySelector(".contact-lastname");
const phone = document.querySelector(".contact-phone");
const email = document.querySelector(".contact-email");
const message = document.querySelector(".contact-textarea");

// Helper funksiyasi: error va success class qo'shish
function setError(input) {
    input.classList.add("contact-error");
    input.classList.remove("contact-success");
}

function setSuccess(input) {
    input.classList.remove("contact-error");
    input.classList.add("contact-success");
}

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // First Name
    if (firstName.value.trim() === "") {
        setError(firstName);
        isValid = false;
    } else {
        setSuccess(firstName);
    }

    // Last Name
    if (lastName.value.trim() === "") {
        setError(lastName);
        isValid = false;
    } else {
        setSuccess(lastName);
    }

    // Phone (minimal check: length > 5)
    if (phone.value.trim().length < 6) {
        setError(phone);
        isValid = false;
    } else {
        setSuccess(phone);
    }

    // Email check (@gmail.com)
    if (!email.value.endsWith("@gmail.com")) {
        setError(email);
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Message
    if (message.value.trim() === "") {
        setError(message);
        isValid = false;
    } else {
        setSuccess(message);
    }

    // Success
    if (isValid) {
        alert("Message yuborildi ✅");
        form.reset();
        // Success classlarni ham olib tashlash
        [firstName, lastName, phone, email, message].forEach(input => input.classList.remove("contact-success"));
    }
});

// Live validation
[firstName, lastName, phone, email, message].forEach(input => {
    input.addEventListener("input", () => {
        if (input.classList.contains("contact-error")) {
            if (input === email) {
                if (email.value.endsWith("@gmail.com")) input.classList.remove("contact-error");
            } else if (input === phone) {
                if (phone.value.trim().length >= 6) input.classList.remove("contact-error");
            } else {
                if (input.value.trim() !== "") input.classList.remove("contact-error");
            }
        }
    });
});

function changeLang(lang) {
    if (lang === "uz") {
        window.location.href = "./index.html";
    } else if (lang === "ru") {
        window.location.href = "./russ.html";
    } else if (lang === "en") {
        window.location.href = "./english.html";
    }
}