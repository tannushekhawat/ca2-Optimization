document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slider img");
    const totalSlides = slides.length;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0"; // Smooth transition
        });
        index = (index + 1) % totalSlides;
    }

    setInterval(showSlide, 2000); // Change image every 2 seconds
    showSlide();
});

// Slider with Navigation
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let index = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.style.display = i === idx ? "block" : "none";
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    }

    nextBtn?.addEventListener("click", nextSlide);
    prevBtn?.addEventListener("click", prevSlide);
    showSlide(index);
    setInterval(nextSlide, 6000); // Auto-slide every 3 seconds
});

// Login Form Validation
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@example.com" && password === "password123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Signup Form Validation
document.getElementById("signup")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match! Please try again.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert("Sign-up successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to login page
});