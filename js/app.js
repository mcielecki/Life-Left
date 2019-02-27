$(document).ready(function () {

    function countdown() {
        const now = new Date();
        let dateOfBirth = new Date($('.what-date').val());

        let year = dateOfBirth.getFullYear();
        let month = dateOfBirth.getMonth();
        let day = dateOfBirth.getDate();
        let dateOfDeath = new Date(year + 70, month, day)
        let yearDeath = now.getFullYear();
        let ifAverage = yearDeath - year;

        let currentTime = now.getTime();
        let deathTime = dateOfDeath.getTime();
        let birthTime = dateOfBirth.getTime();

        let leftTime = deathTime - currentTime;
        let doneTime = currentTime - birthTime;

        let howManyDays = Math.floor(doneTime / 86400000);
        let seconds = Math.floor(leftTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds

        if (howManyDays < 0) {
            $(".final-text").text(`Sprawdz poprawnosc danych`);
        }

        if (ifAverage < 70 && howManyDays > 0) {
            $(".days-done").text(`Aktualny dzien zycia: ${howManyDays}`);
            $(".days-left").text(`${days} dni`);
            $(".hours-left").text(`${hours} godzin`);
            $(".minutes-left").text(`${minutes} minut`);
            $(".seconds-left").text(`${seconds} sekund`);
            setTimeout(countdown, 1000);
        } else if (ifAverage >= 70 && howManyDays > 0) {
            $(".days-done").text(`Aktualny dzien zycia: ${howManyDays}`);
            $(".final-text").text(`Srednia zycia osiagnieta`);
        }
    }

    $('.button-check').on('click', function () {
        if ($('.what-date').val() != '') {
            $('.start-set').addClass('hidden');
            $('.results').removeClass('hidden');
            countdown();
        }
    })
    $('.button-go-out').on('click', function () {
        $('.what-date').val('');
        $('.start-set').removeClass('hidden');
        $('.results').addClass('hidden');
        clearTimeout(countdown);
    })
});