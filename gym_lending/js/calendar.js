new niceDatePicker({
    dom: document.getElementById('calendar1-wrapper2'),
    year: 2019,
    month: 9,
    mode: 'en',
    onClickDate: function (date) {
        document.querySelector('.calendar2-msg').innerHTML = 'calendar2 your selected ' + date;
    }
});