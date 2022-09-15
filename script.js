var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomGradient");

function random() {
  var code = "";
  var characters = "abcdef0123456789";
  for (var i = 0; i < 6; i++)
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  return code;
}

function randomGenerator() {
  var val1 = random();
  var val2 = random();
  var a = body.style.background =
    "linear-gradient(to right," + `#${val1}` + "," + `#${val2}` + ")";
    button.innerText=`background: linear-gradient(#${val1}`+","+`#${val2}`+")";

}

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGenerator);















// function generateRandomCode() {
//   var code = "";
//   var characters = "abcdef0123456789";
//   for (var i = 0; i < 6; i++)
//       code += characters.charAt(Math.floor(Math.random() * characters.length));
//   return code;
// }
























// var generateBtn = document.querySelector(".generate-btn");
// var copyBtn = document.querySelector(".copy-btn");
// /** @type {HTMLDivElement} */
// var outputColor = document.querySelector(".output-color");
// /** @type {HTMLInputElement} */
// var outputCode = document.querySelector(".output-code");
// // ⚠️ Removed `hexString`, we don't need it.

// /** Generates a random hex value between `00` and `ff` */
// var randomHex = () =>
//   Math.floor(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");

// /** Uses `randomHex` to generate a random color string */
// var randomColor = () => `#${[...Array(3)].map(randomHex).join("")}`;

// /** Returns a random value between 0 and 360 */
// var randomAngle = () => `${Math.floor(Math.random() * 361)}deg`;

// /** Generate random linear gradient values */
// var randomGradient = () => [randomAngle(), randomColor(), randomColor()];

// /** Update UI with new values */
// var update = () => {
//   var [angle, color1, color2] = randomGradient();
//   // ⚠️ We use custom properties instead of CSS directly.
//   outputColor.style.setProperty("--color-1", randomColor());
//   outputColor.style.setProperty("--color-2", randomColor());
//   outputColor.style.setProperty("--angle", randomAngle());
//   outputCode.value = `background: linear-gradient(${angle}, ${color1}, ${color2});`;
// };

// copyBtn.addEventListener("click", () =>
//   // ⚠️ Replaced deprecated `execCommand` with clipboard API
//   navigator.clipboard.writeText(outputCode.value)
// );

// generateBtn.addEventListener("click", update);

// update();