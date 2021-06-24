function logVisitor() {
  console.log("Welcome to the site\nClick anywhere to change the Gradient!");
}

logVisitor();

var GradientChanged = 0;
const gradients = [
  "linear-gradient(-45deg, #d72631, #a2d5c6, #077b8a, #5c3c92)",
  "linear-gradient(-45deg, #e2d810, #d9138a, #12a4d9, #322e2f)",
  "linear-gradient(-45deg, #cf1578, #e8d21d, #039fbe, #b20238)",
  "linear-gradient(-45deg, #e75874, #be1558, #fbcbc9, #322514)",
  "linear-gradient(-45deg, #1e3d59, #f5f0e1, #ff6e40, #ffc13b)",
  "linear-gradient(-45deg, #26495c, #c4a35a, #c66b3d, #e5e5dc)",
  "linear-gradient(-45deg, #408ec6, #7a2048, #1e2761, #79a7d3)",
  "linear-gradient(-45deg, #da68a0, #77c593, #ed3572, #f47a60)",
  "linear-gradient(-45deg, #d902ee, #ffd79d, #f162ff, #320d3e)",
  "linear-gradient(-45deg, #d71b3b, #e8d71e, #16acea, #4203c9)",
  "linear-gradient(-45deg, #1fbfb8, #05716c, #1978a5, #031163)",
  "linear-gradient(-45deg, #375e97, #fb6542, #ffbb00, #3f681c)",
];

function changeGradient() {
  element = document.getElementById("gradient");
  element.style.background = gradients[GradientChanged];
  element.style.backgroundSize = "400% 400%";
  if (GradientChanged == gradients.length) {
    GradientChanged = 0;
    // console.log("Rolling back to 0");
  } else {
    GradientChanged++;
  }
}
