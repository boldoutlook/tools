function convertTemp() {
        let temp = document.getElementById("temp").value;
        let unit = document.getElementById("unit").value;
        let result = 0;

        if (unit === "celsius") {
          result = (temp * 9) / 5 + 32;
          document.getElementById(
            "result"
          ).innerHTML = `${temp} &deg;C = ${result} &deg;F`;
        } else if (unit === "fahrenheit") {
          result = ((temp - 32) * 5) / 9;
          document.getElementById(
            "result"
          ).innerHTML = `${temp} &deg;F = ${result} &deg;C`;
        }
      }