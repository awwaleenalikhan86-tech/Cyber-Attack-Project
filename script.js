// ================= LOGIN FUNCTION =================
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (user === "admin" && pass === "1234") {
        window.location.href = "02-landing.html";

    } else {
        document.getElementById("error").innerText = "❌ Invalid Credentials";

        // Shake effect
        error.classList.add("shake");
        setTimeout(() => error.classList.remove("shake"), 400);
    }
}

// ================= OPEN DASHBOARD =================
function openDashboard() {
    window.location.href = "03-cyber_dashboard.html";
}

// ================= NAVBAR TOGGLE (MOBILE) =================
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// // ================= ACTIVE NAVBAR SCROLL =================
// window.addEventListener("scroll", () => {
//     let sections = document.querySelectorAll("section");
//     let links = document.querySelectorAll(".nav-links a");

//     let scrollY = window.scrollY;

//     sections.forEach((sec, i) => {
//         let offset = sec.offsetTop - 120;
//         let height = sec.offsetHeight;

//         if (scrollY >= offset && scrollY < offset + height) {
//             links.forEach(link => link.classList.remove("active"));
//             if (links[i]) links[i].classList.add("active");
//         }
//     });
// });

// // ================= OPTIONAL: AUTO SCROLL TO TOP =================
// function goHome() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }