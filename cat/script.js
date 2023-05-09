function convertCatAge() {
        let catAge = document.getElementById("catAge").value;
        let humanAge = 0;

        if (catAge == 1) {
          humanAge = 15;
        } else if (catAge == 2) {
          humanAge = 24;
        } else {
          humanAge = 24 + (catAge - 2) * 4;
        }

        document.getElementById(
          "humanAge"
        ).innerHTML = `Your cat's age is ${humanAge} in human years.`;
      }