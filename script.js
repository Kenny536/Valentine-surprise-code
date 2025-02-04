let canMove = true;  // Track if the element can move

function moveRandomEl(elm) {
    elm.style.position = "absolute";

    // Get viewport and element dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elemWidth = elm.offsetWidth;
    const elemHeight = elm.offsetHeight;

    // Calculate safe movement range
    const maxLeft = viewportWidth - elemWidth - 10; // 10px padding
    const maxTop = viewportHeight - elemHeight - 10;

    // Generate random positions within bounds
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    // Apply new positions
    elm.style.left = `${randomLeft}px`;
    elm.style.top = `${randomTop}px`;
}

const moveRandom = document.querySelector("#move-random");

// Detect iPad or touch-based device
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

// Use pointerover for more frequent interaction
moveRandom.addEventListener("pointerover", function (e) {
    if (!isTouchDevice && canMove) {
        moveRandomEl(e.target);
        canMove = false;
        setTimeout(() => { 
            canMove = true; // Allow next move after cooldown
        }, 300); // 500ms cooldown (you can adjust this value)
    }
});

// Click to move (works on both touch and non-touch devices)
moveRandom.addEventListener("click", function (e) {
    moveRandomEl(e.target);
});