
const generateButton = document.getElementById("generateButton");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const copyHexButton = document.getElementById("copyHexButton");
const saveButton = document.getElementById("saveButton")
const savedColors = document.getElementById("savedColors")
const displayColorButton = document.getElementById("displayColorButton")

generateButton.addEventListener("click", function() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();

    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
});

copyHexButton.addEventListener("click", function() {
    let copiedCode = colorCode.textContent;
    navigator.clipboard.writeText(copiedCode);
});

saveButton.addEventListener("click", function() {
    let currentColor = colorCode.textContent;
    let saved = document.createElement("div");

    saved.style.backgroundColor = currentColor;
    saved.textContent = currentColor;

    savedColors.appendChild(saved);
});

displayColorButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    colorCode.classList.toggle("dark");
});

colorBox.addEventListener("mouseenter", function() {
    colorBox.style.transform = "scale(1.05)";
});
colorBox.addEventListener("mouseleave", function() {
    colorBox.style.transform = "scale(1)";
});