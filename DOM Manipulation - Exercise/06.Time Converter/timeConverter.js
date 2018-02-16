function attachEventsListeners() {

    let buttons = document.querySelectorAll('div input:nth-child(3)');

    for (const button of buttons) {
        button.addEventListener('click', calc);
    }

    let timeObject = {
        'days': 1,
        'hours': 24,
        'minutes': 1440,
        'seconds': 86400
    }

    function calc(event) {
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        let convertedToDays = 0;


        if (this.id === 'daysBtn') {
            convertedToDays = document.getElementById('days').value;
        } else if (this.id === 'hoursBtn') {
            convertedToDays = document.getElementById('hours').value / timeObject.hours
        } else if (this.id === 'minutesBtn') {
            convertedToDays = document.getElementById('minutes').value / timeObject.minutes
        } else if (this.id === 'secondsBtn') {
            convertedToDays = document.getElementById('seconds').value / timeObject.seconds
        }

        days.value = convertedToDays;
        hours.value = convertedToDays * timeObject.hours;
        minutes.value = convertedToDays * timeObject.minutes;
        seconds.value = convertedToDays * timeObject.seconds;

    }
}