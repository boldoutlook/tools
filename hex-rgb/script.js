function convert() {
  var input = document.getElementById("colorInput").value.toUpperCase();
  
  // Check if input is in Hex format
  if (input[0] === "#") {
    input = input.slice(1); // Remove "#" symbol from input
  }
  if (input.match(/^[0-9A-F]{6}$/i)) { // Check if input is a valid Hex code
    // Convert Hex to RGB
    var r = parseInt(input.slice(0, 2), 16);
    var g = parseInt(input.slice(2, 4), 16);
    var b = parseInt(input.slice(4, 6), 16);
    
    // Display the RGB values
    document.querySelector(".result").innerHTML = `RGB(${r}, ${g}, ${b})`;
  }
  // Check if input is in RGB format
  else if (input.match(/^\d+,\s*\d+,\s*\d+$/)) {
    var rgbValues = input.split(",");
    var r = parseInt(rgbValues[0]);
    var g = parseInt(rgbValues[1]);
    var b = parseInt(rgbValues[2]);
    
    // Check if RGB values are valid
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      // Convert RGB values to Hex format
      var hexValue = "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");
      
      // Display the Hex value
      document.querySelector(".result").innerHTML = hexValue.toUpperCase();
    }
    else {
      document.querySelector(".result").innerHTML = "Invalid RGB values. Please enter numbers between 0 and 255.";
    }
  }
  // If input is not in a recognized format
  else {
    document.querySelector(".result").innerHTML = "Invalid input format. Please enter a valid Hex code (without the '#' symbol) or RGB values separated by commas.";
  }
}