// Common Navigation Logic
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = {
    dashboard: "dashboard.html",
    appointments: "appointments.html",
    patients: "patient.html",
    doctors: "doctor.html",
    admin: "admin.html"
  };

  const nav = document.querySelector("nav");
  if (nav) {
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        e.preventDefault();
        const href = e.target.getAttribute("href").replace(".html", "");
        const targetPage = navLinks[href];
        if (targetPage) {
          window.location.href = targetPage;
        }
      }
    });
  }
});

// Optional: Smooth transitions or loading indicators can be added here
