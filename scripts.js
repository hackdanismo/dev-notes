// Execute the code on page load
window.addEventListener("load", () => {
    // Get the header element and set as variable
    const header = document.querySelector("header");
    // Set dynamic padding to the top of the body element to avoid content being hidden by fixed navigation/header
    document.body.style.paddingTop = `${header.offsetHeight}px`;
});
