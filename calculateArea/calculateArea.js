const let length;
const let width;
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
const let area = length * width;
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
