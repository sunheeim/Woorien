$(function () {
    let reservationBtn = $('.reservation_btn');
    let reservation = $('.reservation');
    let doneBtn = $('.reservation .input .btn')

    let calendar = $('.reservation .cont .calendar')
    let textBox = $('.reservation .cont .calendar .box')
    let datepicker = $('.reservation .cont .calendar .datepicker')

    reservationBtn.click(function () {
        reservation.animate({
            'bottom': '0'
        })
    });

    doneBtn.click(function () {
        reservation.animate({
            'bottom': '-100%'
        });
        alert('예약대기 완료 되었습니다!');

    });
    
})