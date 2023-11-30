document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("reaction-box");
    const result = document.getElementById("result");
    const resetBtn = document.getElementById("reset-btn");
    let startTime, endTime, timer;

    box.addEventListener("click", function() {
        if (box.classList.contains("bg-primary")) {
            box.style.pointerEvents = 'none'; // Disable clicks during the delay
            let delay = Math.random() * 2000 + 1000; // Random delay between 1 and 3 seconds

            timer = setTimeout(() => {
                box.classList.remove("bg-primary");
                box.classList.add("bg-success");
                startTime = new Date();
                box.style.pointerEvents = ''; // Re-enable clicks
            }, delay);
        } else if (box.classList.contains("bg-success")) {
            endTime = new Date();
            let reactionTime = endTime - startTime;
            result.textContent = `Your reaction time is ${reactionTime} milliseconds.`;
            box.classList.add("bg-primary");
            box.classList.remove("bg-success");
        }
    });

    resetBtn.addEventListener("click", function() {
        clearTimeout(timer); // Clear the timer if reset during the delay
        box.classList.add("bg-primary");
        box.classList.remove("bg-success");
        box.style.pointerEvents = '';
        result.textContent = '';
    });
});
