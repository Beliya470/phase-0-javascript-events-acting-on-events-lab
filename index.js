// Get the dodger element
const dodger = document.getElementById("dodger");

// Function to move dodger to the left
function moveDodgerLeft() {
  // Parse the left property of the dodger's style
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Only move dodger to the left if it's not already at the edge of the game field
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move dodger to the right
function moveDodgerRight() {
  // Parse the left property of the dodger's style
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Only move dodger to the right if it's not already at the edge of the game field
  if (left < 360) { // 360px is the maximum left position the dodger can go to before hitting the right wall of the game (400 - 40, since game width is 400px and dodger width is 40px)
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for keydown event
document.addEventListener("keydown", function (e) {
  // Call the appropriate function based on the key pressed
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
