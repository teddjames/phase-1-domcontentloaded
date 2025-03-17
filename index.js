// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
  // Option 1: If you have a specific element (e.g., with id="text")
  const textElement = document.getElementById("text");
  if (textElement) {
    textElement.textContent = "This is really cool!";
  }

  // Option 2: Or, if you're updating the whole page body:
  // document.body.textContent = 'This is really cool!';
});
