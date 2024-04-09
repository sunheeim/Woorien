$(function () {
    let reservationBtn = $('.reservation_btn');
    let reservation = $('.reservation');
    let doneBtn = $('.reservation .input .btn')

    let calendar = $('.reservation .cont .calendar')
    let textBox = $('.reservation .cont .calendar .box')
    let datepicker = $('.reservation .cont .calendar .datepicker')
    
    let underArrow = $('.main_visual .myhospital .txtbox .selectbox .toggle-btn .downicon')
    let upArrow = $('.main_visual .myhospital .txtbox .selectbox .toggle-btn .upicon')

    let arrowDownName = $('.reservation .selectbox .respet-btn .downicon')
    let arrowUpName = $('.reservation .selectbox .respet-btn .upicon')

    let arrowDownList = $('.reservation .selectbox .reslist-btn .downicon')
    let arrowUpList = $('.reservation .selectbox .reslist-btn .upicon')


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

    $('.main_visual .myhospital .txtbox .selectbox .toggle-btn').click(function () {
        if ($(this).next().css('display') === 'none') {
            $('.main_visual .myhospital .txtbox .selectbox-option').slideUp();
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });
    $('.main_visual .myhospital .txtbox .selectbox .toggle-btn figure').click(function(){
        $(this).toggleClass('on');
        
    });

    underArrow.click(function () {
        upArrow.css({
            'display': 'block'
        })
        underArrow.css({
            'display' : 'none'
        })
    });
    upArrow.click(function () {
        upArrow.css({
            'display': 'none'
        })
        underArrow.css({
            'display' : 'block'
        })
    });


    $('.reservation .selectbox .respet-btn').click(function () {
        if ($(this).next().css('display') === 'none') {
            $('.main_visual .myhospital .txtbox .selectbox-respet').slideUp();
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });
    $('.reservation .selectbox .respet-btn figure').click(function(){
        $(this).toggleClass('on');
        
    });

    arrowDownName.click(function () {
        arrowUpName.css({
            'display': 'block'
        })
        arrowDownName.css({
            'display' : 'none'
        })
    });
    arrowUpName.click(function () {
        arrowUpName.css({
            'display': 'none'
        })
        arrowDownName.css({
            'display' : 'block'
        })
    });
    
})