let scrollContainer = document.getElementById("gallery");
let backButton = document.getElementById("backbtn");
let forwardButton = document.getElementById("forwardbtn");

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
}, { passive: false });

forwardButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 300;
})
backButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 300;
})