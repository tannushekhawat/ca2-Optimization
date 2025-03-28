document.addEventListener("DOMContentLoaded", function () {
    // 🚀 Auto-Slider & Manual Navigation Combined
    let index = 0;
    const slides = document.querySelectorAll(".slider img");
    const totalSlides = slides.length;
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide();
    }

    nextBtn?.addEventListener("click", nextSlide);
    prevBtn?.addEventListener("click", prevSlide);
    setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    showSlide();

    // ✅ Signup Form Validation & Storage
    const signupForm = document.getElementById("signup");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("⚠️ Passwords do not match! Please try again.");
                return;
            }

            if (password.length < 6) {
                alert("⚠️ Password must be at least 6 characters long.");
                return;
            }

            // Save user data in localStorage
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            setTimeout(() => {
                alert("✅ Sign-up successful! You can now log in.");
                window.location.href = "login.html"; // Redirect to login page
            }, 100);
        });
    }

    // ✅ Login Form Validation
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                alert("✅ Login Successful!");
                localStorage.setItem("loggedInUser", email); // Store session data
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                alert("❌ Invalid email or password. Please try again.");
            }
        });
    }
});


        document.getElementById("logout").addEventListener("click", function() {
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out.");
            window.location.href = "login.html";
        });

        // Check if user is logged in
        if (!localStorage.getItem("loggedInUser")) {
            window.location.href = "login.html"; // Redirect if not logged in
        }
    