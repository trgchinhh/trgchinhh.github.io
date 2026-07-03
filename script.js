const btn = document.getElementById("theme-toggle");
const icon = btn.querySelector("i");
const container = document.getElementById("meteor-container");
let meteorInterval = null;
function createMeteor() {
    if (!document.body.classList.contains("dark")) return;
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");
    const startX = Math.random() * (window.innerWidth + 200) - 100;
    meteor.style.left = startX + "px";
    meteor.style.top = "-50px";
    const duration = Math.random() * 2 + 1.5;
    meteor.style.animationDuration = duration + "s";
    container.appendChild(meteor);
    setTimeout(() => { meteor.remove(); }, duration * 1000);
}
function toggleMeteorEngine(enable) {
    if (enable) {
        if (!meteorInterval) {
            meteorInterval = setInterval(createMeteor, 1200);
        }
    } else {
        if (meteorInterval) {
            clearInterval(meteorInterval);
            meteorInterval = null;
        }
        container.innerHTML = ""; 
    }
}
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    icon.className = "fa-solid fa-sun";
    toggleMeteorEngine(true);
} else {
    document.body.classList.remove("dark");
    icon.className = "fa-solid fa-moon";
    toggleMeteorEngine(false);
}
btn.onclick = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    if (isDark) {
        icon.className = "fa-solid fa-sun";
        localStorage.setItem("theme", "dark");
        toggleMeteorEngine(true);
    } else {
        icon.className = "fa-solid fa-moon";
        localStorage.setItem("theme", "light");
        toggleMeteorEngine(false);
    }
}