// === Theme Toggle ===
const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleBtn.textContent = currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

toggleBtn.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  let newTheme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// === Download PDF ===
document.getElementById("download-pdf").addEventListener("click", () => {
  const element = document.getElementById("content");
  const opt = {
    margin: 0.5,
    filename: "startup-resources.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(element).save();
});
