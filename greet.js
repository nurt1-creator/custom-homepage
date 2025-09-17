function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}`;

    let greetingText;
    if (hours >= 5 && hours < 12) {
        greetingText = "Good Morning!";
    } else if (hours >= 12 && hours < 18) {
        greetingText = "Good Afternoon!";
    } else if (hours >= 18 && hours < 23) {
        greetingText = "Good Evening!";
    } else {
        greetingText = "Good Night!";
    }
    document.getElementById("greeting").textContent = greetingText;
}

setInterval(updateClock, 1000);
updateClock();
