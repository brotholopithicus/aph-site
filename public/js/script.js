function calculateAge() {
    var birthday = new Date(1990, 3, 27);
    var currentDate = new Date(Date.now());

    function getElapsedTime() {
        var t = Date.parse(currentDate) - Date.parse(birthday);
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60) % 24));
        var days = Math.floor((t / (1000 * 60 * 60 * 24)));
        var months = Math.floor((t / (1000 * 60 * 60 * 24 * 30)));
        var years = (t / (1000 * 60 * 60 * 24 * 365));
        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days,
            'months': months,
            'years': years
        }
    }
    var time = getElapsedTime();
    return time.years;
}

function init() {
    var age_timer = document.getElementById('age');
    function updateAge() {
        var age = calculateAge().toString().substr(0, 11);
        age_timer.innerHTML = age;
    }
    updateAge();
    var timeInterval = setInterval(updateAge, 1000);
}

init();
