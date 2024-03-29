$(function () {
    let reservationBtn = $('.reservation_btn');
    let reservation = $('.reservation');
    let doneBtn = $('.reservation .input .btn')


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