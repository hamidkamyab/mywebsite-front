///////////Custom Scroll
// function customScroll() {
//     var windowWidth = $(window).width();
//     if (windowWidth > 991) {
//         $(".pt-page").mCustomScrollbar({
//             scrollInertia: 300
//         });
//         $("#site_header").mCustomScrollbar({
//             scrollInertia: 300
//         });
//     }
// }


window.onload = function() {
    ///////////Custom Scroll
    // customScroll()



    ///////////Theme//////////

    // var ThemeLS = getTheme();

    // if (ThemeLS != null) {
    //     ThemeColor(ThemeLS.ThemeColor);
    //     BgColors(ThemeLS.BgColor);
    //     ThemePos(ThemeLS.Dir);
    // } else {
    //     setTheme();
    //     ThemeColor('blueTheme');
    //     BgColors('bg-dark');
    //     ThemePos('right');
    // }



    ///////////Slider//////////
    // let w_s = 0;
    // let i_s = 0;
    // document.querySelectorAll('.slideItem').forEach((item) => {
    //     w_s = w_s + item.width;
    //     if (i_s == 0) {
    //         document.querySelector('.statusSlider').innerHTML += '<i class="icon-circle text-white TextMainColor TextHoverMainColor fs-8" role="button" data-item="' + i_s + '" onclick="goSlide(this)"></i>';
    //     } else {
    //         document.querySelector('.statusSlider').innerHTML += '<i class="icon-circle text-white TextHoverMainColor fs-8" role="button" data-item="' + i_s + '" onclick="goSlide(this)"></i>';
    //     }
    //     i_s++
    // })
    // $('.slider > div.Items').css('width', w_s);

    ///////Video/////////

    // let w_v = $('.VideoBox').height();
    // w_v = w_v - 40;
    // document.querySelector('.VideoBox').innerHTML += '<div class="FakeLayer position-absolute top-0 w-100 active" style="height:' + w_v + 'px;" onclick="VidPlaying(this)" role="button"></div>';
    // document.querySelector('.FakeLayer').innerHTML += '<div class="FakePP position-absolute d-flex justify-content-center align-items-center" role="button"><i class="FP_play icon-play-2 fs-4 TextMainColor mt-1"></i><i class="FP_pause icon-pause-2 fs-4 TextMainColor mt-1"></i></div>';

}



// $(window).bind('resize', function() {
//     location.reload();
// });



////////////////////////
// function MenuItemClick(elem) {
//     const Target = '#' + $(elem).attr('data-id');
//     $('.menu li a').removeClass('active')
//     $(elem).addClass('active')
//     $('header').removeClass('open')
//     $('header').addClass('close')
//     $('.menuMobile').removeClass('active');
//     $('.menu li a').css('pointer-events', 'none');
//     $(Target).removeClass('hidden');
//     $(Target).removeClass('scale');
//     $(Target).removeClass('active');
//     $(Target).fadeIn(0);
//     ClosePUBox();
//     setTimeout(() => {
//         $('section').not(document.querySelector(Target)).addClass('hidden');
//         $('section').not(document.querySelector(Target)).addClass('scale');
//         $(Target).addClass('active');
//         $('section').not(document.querySelector(Target)).fadeOut(500);
//     }, 1000);

//     setTimeout(() => {
//         $('.menu li a').css('pointer-events', '');
//     }, 1200);

//     let isPB = $(Target).find('.progressBar');
//     if (isPB.length > 0) {
//         progressLoading();
//     }
// }


// $('.menu li a').on('click', function() {
//     MenuItemClick(this)
// });

// function MenuInlineFunc(index) {
//     MenuItemClick(index)
// }

// $('.menuMobile').on('click', function() {
//     $('header').toggleClass('close')
//     $('header').toggleClass('open')
//     $(this).toggleClass('active')
// })

/************dragParent Client********** */


// document.querySelectorAll('.dragParent').forEach((p) => {
//     var lenCitem = $('.dragChildren .item', p).length;
//     var widthCitem = Math.floor($('.dragChildren .item', p).width() + parseInt($('.dragChildren .item', p).css('border-width')) * 2);
//     var mgCitem = parseInt($('.dragChildren .item', p).css('margin-left'));
//     var dchW = Math.ceil(lenCitem * (widthCitem + mgCitem));
//     $('.dragChildren', p).css('width', (dchW + 10) + 'px');
//     if (dchW > p.offsetWidth) {
//         $('.ccButton button', p).attr('disabled', false)
//     }
// });
/************dragParent Client********** */


// function progressLoading() {
//     var PB = document.querySelectorAll('.progressBar');

//     PB.forEach(element => {
//         $('.progressLine', element).animate({ width: 0 }, 0);
//     });
//     setTimeout(() => {
//         PB.forEach(element => {
//             $('.progressLine', element).animate({ width: $(element).attr('data-w') + '%' }, 1500);
//         });

//     }, 1200);
// }





/***********  HoverDir Gallery   *********** */

// function GetDir(el, coordinates) {

//     // The width and height of the current div

//     var w = $(el).width(),
//         h = $(el).height(),

//         // Calculate the x and y to get an angle to the center of the div from that x and y.
//         // Gets the x value relative to the center of the DIV and "normalize" it

//         x = (coordinates.clientX - $(el).offset().left - (w / 2)) * (w > h ? (h / w) : 1),
//         y = (coordinates.clientY - $(el).offset().top - (h / 2)) * (h > w ? (w / h) : 1),

//         // The angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
//         // first calculate the angle of the point,
//         // add 180 deg to get rid of the negative values
//         // divide by 90 to get the quadrant
//         // add 3 and do a modulo by 4 to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left).

//         direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
//     return direction;

// }



// $('.Gallery .items figure').mouseenter(function(e) {
//     var pos = GetDir(this, e);
//     ShowGLayout(this, pos);
// });




// function ShowGLayout(elem, pos) {
//     if (pos == 0 /*Top*/ ) {
//         $('.hoverLayer', elem).css('top', '-100%')
//         $('.hoverLayer', elem).css('right', '0')
//         $('.hoverLayer', elem).animate({ top: '0' }, 250)


//     } else if (pos == 1 /*Right*/ ) {
//         $('.hoverLayer', elem).css('top', '0')
//         $('.hoverLayer', elem).css('right', '-100%')
//         $('.hoverLayer', elem).animate({ right: '0%' }, 250)

//     } else if (pos == 2 /*Bottom*/ ) {
//         $('.hoverLayer', elem).css('top', '100%')
//         $('.hoverLayer', elem).css('right', '0')
//         $('.hoverLayer', elem).animate({ top: '0' }, 250)

//     } else if (pos == 3 /*Left*/ ) {
//         $('.hoverLayer', elem).css('top', '0')
//         $('.hoverLayer', elem).css('right', '100%')
//         $('.hoverLayer', elem).animate({ right: '0' }, 250)
//     }
// }



// $('.Gallery .items figure').mouseleave(function(e) {
//     var pos = GetDir(this, e);
//     HiddenGLayout(this, pos);
// });

// function HiddenGLayout(elem, pos) {
//     if (pos == 0 /*Top*/ ) {
//         $('.hoverLayer', elem).animate({ top: '-100%' }, 250)

//     } else if (pos == 1 /*Right*/ ) {
//         $('.hoverLayer', elem).animate({ right: '-100%' }, 250)
//     } else if (pos == 2 /*Bottom*/ ) {

//         $('.hoverLayer', elem).animate({ top: '100%' }, 250)

//     } else if (pos == 3 /*Left*/ ) {
//         $('.hoverLayer', elem).animate({ right: '100%' }, 250)
//     }
// }


/*********** End HoverDir Gallery   *********** */
/***********  End HoverDir Gallery   *********** */



// $(".portfolioNav ul li").on('click', function() {
//     if (this.id == 'All') {
//         $('.Gallery ul li').fadeIn(500);
//         $(".portfolioNav ul li").removeClass('active');
//         $(this).addClass('active');
//     } else if (this.id == 'WebProject') {
//         $('.Gallery ul li.AppProject').fadeOut(500);
//         $('.Gallery ul li.WebProject').fadeIn(500);
//         $(".portfolioNav ul li").removeClass('active');
//         $(this).addClass('active');
//     } else if (this.id == 'AppProject') {
//         $('.Gallery ul li.WebProject').fadeOut(500);
//         $('.Gallery ul li.AppProject').fadeIn(500);
//         $(".portfolioNav ul li").removeClass('active');
//         $(this).addClass('active');

//     }
// })

// $('.Gallery ul li').on('click', function() {
//     $('.ParentGallery').fadeOut(500);
//     $('.PopUpBox').fadeIn(0)
//     $('.PopUpBox').css('visibility', 'visible');
//     $('.PopUpBox').addClass('inRotate')
//     $('.PopUpBox').removeClass('outRotate')
//     $('.menu li a').addClass('NoSelect');
// });
// $('.ClosePUB').on('click', function() {

//     ClosePUBox();
// });

// function ClosePUBox() {
//     $('.ParentGallery').fadeIn(0);
//     $('.PopUpBox').fadeOut(500)
//     $('.PopUpBox').removeClass('inRotate')
//     $('.PopUpBox').addClass('outRotate')
// }



/********Slider******* */


// $('.btnSlider').on('click', function() {
//     if ($(this).hasClass('btn-next')) {
//         Slider(this, 'n')
//     } else if ($(this).hasClass('btn-prev')) {
//         Slider(this, 'p')
//     }
// })




// var sn = 0;

// function Slider(tag, btn) {
//     var slider = $(tag).parent();
//     var sliderLen = $(slider).find('.slideItem').length;
//     if (btn == 'n') {
//         if (sliderLen - 1 == sn) {
//             sn = 0;
//         } else {
//             sn++;
//         }
//     } else if (btn == 'p') {
//         if (sn == 0) {
//             sn = sliderLen - 1;
//         } else {
//             sn--;
//         }
//     }
//     Slide(sn)
// }



// function goSlide(elem) {
//     sn = parseInt($(elem).attr('data-item'));
//     Slide(sn)
// }


// function Slide(num) {
//     var slider = $('.slider');
//     var w = $('.slideItem', slider).width();

//     var src = $('.slider .Items img:nth-child(' + (num + 1) + ')').attr('src');
//     $('.ShowImage img').attr('src', src)

//     var slide = w * num;
//     $('> div.Items', slider).animate({ 'margin-right': -slide + 'px' }, 500);
//     $("[data-item]").removeClass('TextMainColor')
//     $("[data-item='" + (num) + "']").addClass('TextMainColor')
// }

/************ Slider ************ */

// document.querySelector('.VideoBox').addEventListener('mousemove', function(e) {
//     if (!this.querySelector('video').paused) {
//         this.querySelector('.FakeLayer').animate({ opacity: '1' }, 1000)
//     }
// })


// document.addEventListener('play', function(e) {
//     var video = e.target;
//     const elemParnt = $(video).parents('.VideoBox');
//     if (video.nodeName === 'VIDEO') {
//         $('.FakePP .FP_play', elemParnt).fadeOut(0);
//         $('.FakePP .FP_pause', elemParnt).fadeIn(0);
//         $('.FakeLayer', elemParnt).removeClass('active');
//     }
// }, true)
// document.addEventListener('pause', function(e) {
//     var video = e.target;
//     const elemParnt = $(video).parents('.VideoBox');
//     if (video.nodeName === 'VIDEO') {
//         $('.FakePP .FP_pause', elemParnt).fadeOut(0);
//         $('.FakePP .FP_play', elemParnt).fadeIn(0);
//         $('.FakeLayer', elemParnt).addClass('active');
//     }
// }, true)

// function VidPlaying(elem) {
//     const elemParnt = $(elem).parents('.VideoBox');
//     const video = $(elemParnt).children('video').get(0);
//     if (video.paused) {
//         video.play();
//         $('.FakePP .FP_play', elemParnt).fadeOut(0);
//         $('.FakePP .FP_pause', elemParnt).fadeIn(0);
//     } else {
//         video.pause();
//         $('.FakePP .FP_pause', elemParnt).fadeOut(0);
//         $('.FakePP .FP_play', elemParnt).fadeIn(0);
//     }
// }

// $('.ZoomImage').on('click', function() {
//     $('.ShowImage').fadeIn(250);
//     $('.ShowImage').fadeIn(250);
// })
// $('.ShowImage .close').on('click', function() {
//     $('.ShowImage').slideUp(250)
// })






$('.formContact .form-control').focus(function(e) {
    var el = e.target;
    var parentElem = $(el).parents('.form-group');
    $('.bb').removeClass('active');
    $('.bb', parentElem).addClass('active');

});

$('.formContact .form-control').focusout(function(e) {
    var el = e.target;
    var parentElem = $(el).parents('.form-group');
    var res = checkVal(el);
    if (res.Err == 1) {
        $('.err span', parentElem).text(res.Msg);
        $('.err', parentElem).fadeIn();
    } else {
        $('.err', parentElem).fadeOut();
    }

})

function checkVal(el) {
    let err = 0;
    let msg = ""
    if ($(el).attr('type') == 'text') {
        if ($(el).val().trim() == null || $(el).val().trim() == "") {
            err = 1;
            msg = "فیلد نام نمی تواند خالی باشد!"
        } else if ($(el).val().trim().length < 4) {
            err = 1;
            msg = "لطفا نام و نام خانوادگی خود را بصورت کامل وارد کنید!"
        }
    } else if ($(el).attr('type') == 'email') {
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if ($(el).val().trim() == null || $(el).val().trim() == "") {
            err = 1;
            msg = "فیلد ایمیل نمی تواند خالی باشد!"
        } else if (!reg.test($(el).val())) {
            err = 1;
            msg = "لطفا ایمیل خود را بصورت صحیح وارد کنید!"
        }
    } else if ($(el).attr('type') == 'textarea') {
        if ($(el).val().trim() == null || $(el).val().trim() == "") {
            err = 1;
            msg = "فیلد پیام نمی تواند خالی باشد!"
        } else if ($(el).val().trim().length < 11) {
            err = 1;
            msg = "تعداد حروف پیام وارد شده بسیار کوتاه است!"
        }
    }
    return { Err: err, Msg: msg };
}






/**************Theme************ */
// $('.TemplateColor span').on('click', function() {
//     const theme = $(this).attr('data-themegroup');
//     ThemeColor(theme);
//     setTheme(null, theme, null);
// });Vueeeeeeeeeeeeeeeeeeee

// function ThemeColor(indexColor) {
//     $('.TemplateColor span').removeClass('active');
//     $('.TemplateColor span[data-themegroup="' + indexColor + '"]').addClass('active');
//     $('body').attr('data-theme', indexColor);
//     $('body').removeClass();
//     $('body').addClass(indexColor);
// }Vueeeeeeeeeeeeeeeeeeee

// $('.TemplateDesign .tdc').on('click', function() {
//     const tdColor = $(this).attr('data-tdgroup');
//     BgColors(tdColor)
//     setTheme(tdColor, null, null);
// }) Vueeeeeeeeeee

// function BgColors(indexColor) {
//     $('.TemplateDesign .tdc').removeClass('active');
//     $('.TemplateDesign .tdc[data-tdgroup="' + indexColor + '"').addClass('active');
//     TdColors(indexColor);
//     $('.seBox').addClass(indexColor)
// } Vueeeeeeeeeee

// function TdColors(index) {
//     var CP = JSON.parse($('#colorPicker').val());
//     Object.entries(CP).filter(([key, item]) => {
//         if (item != index) {
//             $('.seBox').removeClass(item)
//         }
//     })
// } Vueeeeeeeeeee


// $('.HeaderPos span').on('click', function() {
//     const ls = $(this).attr('data-ls');
//     ThemePos(ls)
//     setTheme(null, null, ls);
// });Vueeeeeeeeeee

// function ThemePos(indexPos) {
//     const Tag = $('.HeaderPos span[data-ls="' + indexPos + '"]');
//     $('.HeaderPos span').removeClass('BorderMainColor')
//     $(Tag).addClass('BorderMainColor');
//     const dataHead = $(Tag).attr('data-header');
//     const dataDir = $(Tag).attr('data-dir');
//     const dataParent = $(Tag).attr('data-parent-tag');
//     $('header').removeClass('rightPos tbPos tbPos-t tbPos-b');
//     $('.ParentTag').removeClass('btp-t btp-b');
//     $('header').addClass(dataHead)
//     $('header').addClass(dataDir)
//     $('.ParentTag').addClass(dataParent)
// }Vueeeeeeeeeeee







// document.querySelector('.iconTheme').addEventListener('click', () => {
//     document.querySelector('#ThemeBox').classList += ' active';
//     this.querySelector('i').classList += ' TextMainColor';
// });
/********************Dellllllllll******* */




// function getTheme() {
//     var Theme = null;
//     if (localStorage.getItem('Theme') != null) {
//         Theme = JSON.parse(localStorage.getItem('Theme'));
//     }
//     return Theme;
// }Vueeeeeeeeeeeeeeee

// function setTheme(BgC = null, ThemeC = null, ThemeD = null) {
//     var Setting = getTheme();
//     if (Setting != null) {
//         if (BgC != null) {
//             Setting.BgColor = BgC;
//         } else if (ThemeC != null) {
//             Setting.ThemeColor = ThemeC;
//         } else if (ThemeD != null) {
//             Setting.Dir = ThemeD;
//         }
//     } else {
//         Setting = { 'BgColor': 'bg-dark', 'ThemeColor': 'blueTheme', 'Dir': 'right' };
//     }
//     localStorage.setItem('Theme', JSON.stringify(Setting));
// } Vueeeeeeeeeeeeeeee
/**************Theme************ */

// var is_pause = false;
// var MousePos = 0;

// $('.slug .item').on('pointerdown', (e) => { MTDown(e) })
// $('.slug .item').on('pointerup', (e) => { MTUp(e) })

// function MTDown(e) {
//     $(e.target).addClass('cursor-grab ');
//     MousePos = e.pageX;
//     is_pause = true;
// }

// function MTUp(e) {
//     $(e.target).removeClass('cursor-grab ');
//     if (MousePos > e.pageX) {
//         Slug(false, true)
//     } else if (MousePos < e.pageX) {
//         Slug(true, false)
//     }
//     is_pause = false;
//     clearInterval(SlugTimer);
//     SlugTimer = setInterval(AutoSlug, 3000);

// }

// function Slug(next = null, prev = null) {
//     let len = $('.slug .item').length;
//     var oldTag = $('.slug .item.active');
//     var itemNum = parseInt($(oldTag).attr('data-num'));
//     $('.slug .item').removeClass('active')
//     var tag = null;
//     var item = 0;
//     if (next || !next && !prev) {
//         if (itemNum == len) {
//             item = 1;
//         } else {
//             item = itemNum + 1;
//         }
//         tag = $('.slug .item[data-num="' + item + '"]')
//         $(tag).addClass('active')
//         $(tag).css('left', '-100%');
//         $(tag).animate({ 'left': '0%' })
//         $(oldTag).animate({ 'left': '100%' })
//     } else if (prev) {
//         if (itemNum == 1) {
//             item = len;
//         } else {
//             item = itemNum - 1;
//         }
//         tag = $('.slug .item[data-num="' + item + '"]');
//         $(tag).addClass('active')
//         $(tag).css('left', '100%')
//         $(tag).animate({ 'left': '0%' })
//         $(oldTag).animate({ 'left': '-100%' })
//     }

// }

// var SlugTimer = setInterval(AutoSlug, 3000);

// function AutoSlug() {
//     if (!is_pause) {
//         Slug(false, false)
//     }
// }

////////////////// comment client

// var CMPos = 0;
// $('.dragParent .dragChildren').on('pointerdown', function(e) {
//     $(e.target).addClass('cursor-grab ');
//     CMPos = e.pageX;
// })
// $('.dragParent .dragChildren').on('pointerup', function(e) {
//     $(e.target).removeClass('cursor-grab ');
//     if (CMPos > e.pageX) {
//         dragList(this, false, true)
//     } else if (CMPos < e.pageX) {
//         dragList(this, true, false)
//     }
// })

// $('.ccNext').on('click', function() {
//     dragList(this, true, false)
// });
// $('.ccPrev').on('click', function() {
//     dragList(this, false, true)
// });

// var count = 1;

// function dragList(tag, next = false, prev = false) {
//     var dragParent = $(tag).parents('.dragParent');
//     var widthParent = $('.dragChildren', dragParent).parent()[0].offsetWidth;
//     var widthItem = $('.dragChildren > .item', dragParent).width();
//     var numItemSlide = Math.floor(widthParent / widthItem);
//     var mgLeft = parseInt($('.dragChildren > .item', dragParent).css('margin-left'));
//     var len = $('.dragChildren .item', dragParent).length;
//     var numCurrent = (len - numItemSlide);
//     if (numItemSlide < len) {
//         if (next) {
//             if (count > numCurrent) {
//                 $('.dragChildren', dragParent).animate({ 'margin-right': 0 })
//                 count = 1;
//             } else {
//                 $('.dragChildren', dragParent).animate({ 'margin-right': -((count * (widthItem + 2)) + (count * mgLeft)) })
//                 count++;
//             }
//         } else if (prev) {
//             if (count == 1) {
//                 $('.dragChildren', dragParent).animate({ 'margin-right': -(((numCurrent) * (widthItem + 2)) + (numCurrent * mgLeft)) })
//                 count = numCurrent + 1;
//             } else {
//                 $('.dragChildren', dragParent).animate({ 'margin-right': -(((count - 2) * (widthItem + 2)) + ((count - 2) * mgLeft)) })
//                 count--;
//             }
//         }
//     }
// }






/*********************** */

// document.querySelectorAll('*').forEach((tag) => {
//     if ($(tag).hasClass('NoDrag')) {
//         tag.setAttribute('draggable', false)
//         tag.setAttribute('ondragstart', 'return false;');
//     }
// });