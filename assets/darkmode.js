function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
}

// when page laoded do user action
window.onload = function () {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }
};

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const btn = document.querySelector(".sidebar-toggle");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    btn.style.display = "none";
  } else {
    sidebar.style.display = "none";
    btn.style.display = "block";
  }
}
