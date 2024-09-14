let countdownInterval;

function setCountdown() {
    const dateTimeInput = document.getElementById('date-time').value;
    const targetDate = new Date(dateTimeInput);

    if (isNaN(targetDate.getTime())) {
        alert('Please select a valid date and time.');
        return;
    }

    clearInterval(countdownInterval); // Clear any existing interval

    countdownInterval = setInterval(() => {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "Time's up!";
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = formatTime(days);
        document.getElementById('hours').textContent = formatTime(hours);
        document.getElementById('minutes').textContent = formatTime(minutes);
        document.getElementById('seconds').textContent = formatTime(seconds);
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
