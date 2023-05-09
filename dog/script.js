function convertDogAge() {
        let dogAge = document.getElementById("dogAge").value;
        let humanAge = 0;

        if (dogAge <= 0) {
          alert("Please enter a valid age.");
        } else if (dogAge == 1) {
          humanAge = 15;
        } else if (dogAge == 2) {
          humanAge = 24;
        } else {
          humanAge = 24 + (dogAge - 2) * 4;
        }

        document.getElementById(
          "humanAge"
        ).innerHTML = `Your dog's age is ${humanAge} in human years.`;
      }