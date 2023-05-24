function calculate() {
  var password = prompt("Enter the password:");

  // Replace "password123" with your desired password
  if (password === "cutie2017" ) {
    var d = parseFloat(document.getElementById('zi').value);
    var m = parseFloat(document.getElementById('luna').value);

    d_1 = Math.floor(d / 10);

    var X = (5 + m + d_1) % 10;
    var Y = (7 + d + m * 5) % 10
    var Z = (d + 20) % 10;
    L1 = 25 + 10 * m + 30 * d_1 // max 25 + 120 + 90 = 235 // min 25 + 10 + 0 = 35
    L2 = 335 + 20 * m + d // min 335+20+1 = 356 // max 335 + 240 + 31 = 606





    document.getElementById('L1').innerText = "L1: " + L1;
    document.getElementById('L2').innerText = "L2: " + L2;
    document.getElementById('X').innerText = "X: " + X;
    document.getElementById('Y').innerText = "Y: " + Y;
    document.getElementById('Z').innerText = "Z: " + Z;
  }
  else {
    alert("Invalid password. Access denied.");
  }
}
