
// Adicionar atalhos de teclado
document.addEventListener("keydown", function(event) {
if (event.ctrlKey && event.key === "q") {
document.getElementById("sobre").click();
} 
if (event.ctrlKey && event.key === "i") {
window.open("https://i.pinimg.com/736x/5e/d5/0f/5ed50f1054c81f5f2725a4ffe453feab.jpg"); 
}
if (event.ctrlKey && event.key === "m") {
document.getElementById("mensagem").focus();
}
});
