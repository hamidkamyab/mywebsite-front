const StyleJs = {
    /* eslint-disable no-undef */
    is_pause: false,
    MousePos: 0,
    CMPos: 0,
    count: 1,
    sn: 0,
    SlugTimer: '',
    loadWindow() {
        (function($) {
            $(".mCustomScrollbar").mCustomScrollbar();
        })(jQuery);

        /**********Theme********** */
        var ThemeLS = StyleJs.getTheme();
        if (ThemeLS != null) {
            this.ThemeColor(ThemeLS.ThemeColor);
            this.BgColors(ThemeLS.BgColor);
            this.ThemePos(ThemeLS.Dir);
        } else {
            this.setTheme();
            this.ThemeColor('blueTheme');
            this.BgColors('bg-dark');
            this.ThemePos('right');
        }
        /**********Theme********** */




        /////////////Menu//////////////////
        $('.menu li a').on('click', function() {
            StyleJs.MenuItemClick(this)
        })

        $('.menuMobile').on('click', function() {
            $('header').toggleClass('close')
            $('header').toggleClass('open')
            $(this).toggleClass('active')
        });
        /////////////Menu//////////////////

        /////////////Slug//////////////

        $('.slug .item').on('pointerdown', (e) => { StyleJs.MTDown(e) })
        $('.slug .item').on('pointerup', (e) => { StyleJs.MTUp(e) });

        /////////////Slug//////////////


        /************dragParent Client********** */


        document.querySelectorAll('.dragParent').forEach((p) => {
            var lenCitem = $('.dragChildren .item', p).length;
            var widthCitem = Math.floor($('.dragChildren .item', p).width() + parseInt($('.dragChildren .item', p).css('border-width')) * 2);
            var mgCitem = parseInt($('.dragChildren .item', p).css('margin-left'));
            var dchW = Math.ceil(lenCitem * (widthCitem + mgCitem));
            $('.dragChildren', p).css('width', (dchW + 10) + 'px');
            if (dchW > p.offsetWidth) {
                $('.ccButton button', p).attr('disabled', false)
            }
        });

        $('.dragParent .dragChildren').on('pointerdown', function(e) {
            $(e.target).addClass('cursor-grab ');
            StyleJs.CMPos = e.pageX;
        })
        $('.dragParent .dragChildren').on('pointerup', function(e) {
            $(e.target).removeClass('cursor-grab ');
            if (StyleJs.CMPos > e.pageX) {
                StyleJs.dragList(this, false, true)
            } else if (StyleJs.CMPos < e.pageX) {
                StyleJs.dragList(this, true, false)
            }
        })

        $('.ccNext').on('click', function() {
            StyleJs.dragList(this, true, false)
        });
        $('.ccPrev').on('click', function() {
            StyleJs.dragList(this, false, true)
        });



        document.querySelectorAll('*').forEach((tag) => {
            if ($(tag).hasClass('NoDrag')) {
                tag.setAttribute('draggable', false)
                tag.setAttribute('ondragstart', 'return false;');
            }
        });

        /************dragParent Client********** */



        /*****Portfolio******** */
        $(".portfolioNav ul li").on('click', function() {
            StyleJs.filterPortfolios(this)
        })


        $('.btnSlider').on('click', function() {
            if ($(this).hasClass('btn-next')) {
                StyleJs.Slider(this, 'n')
            } else if ($(this).hasClass('btn-prev')) {
                StyleJs.Slider(this, 'p')
            }
        });


        $('.ZoomImage').on('click', function() {
            $('.ShowImage').fadeIn(250);
            $('.ShowImage').fadeIn(250);
            var src = $('.slider .Items img.active').attr('src');
            $('.ShowImage img').attr('src', src)
        })
        $('.ShowImage .close').on('click', function() {
            $('.ShowImage').slideUp(250)
        })

        ///////////Slider//////////

        ///////////Video//////////
        if (document.querySelector('.VideoBox') != null) {
            document.querySelector('.VideoBox').innerHTML += '<div class="FakePP videoArea position-absolute d-flex justify-content-center align-items-center" role="button"><i class="FP_play videoArea icon-play-2 fs-4 TextMainColor me-1"></i><i class="FP_pause videoArea icon-pause-2 fs-4 TextMainColor mt-1"></i></div>';
        }

        $('.FakePP').on('click', function() {
            StyleJs.VidPlaying(this)
        });
        document.addEventListener('play', function(e) {
            var video = e.target;
            const elemParnt = $(video).parents('.VideoBox');
            if (video.nodeName === 'VIDEO') {
                $('.FakePP .FP_play', elemParnt).fadeOut(0);
                $('.FakePP .FP_pause', elemParnt).fadeIn(0);
            }
        }, true)
        document.addEventListener('pause', function(e) {
            var video = e.target;
            const elemParnt = $(video).parents('.VideoBox');
            if (video.nodeName === 'VIDEO') {
                $('.FakePP .FP_pause', elemParnt).fadeOut(0);
                $('.FakePP .FP_play', elemParnt).fadeIn(0);
                $('.FakePP', elemParnt).removeClass('hidden');
            }
        }, true);

        ////////////Video//////////

        $('.formContact .form-control').focus(function(e) {
            var el = e.target;
            var parentElem = $(el).parents('.form-group');
            $('.bb').removeClass('active');
            $('.bb', parentElem).addClass('active');

        });

        $('.formContact .form-control').focusout(function(e) {
            var el = e.target;
            var parentElem = $(el).parents('.form-group');
            var res = StyleJs.checkVal($(el).attr('id'));
            if (res.Err == 1) {
                StyleJs.FormErr(res.Msg, $(el).attr('id'))
            } else {
                $('.err', parentElem).fadeOut();
            }

        })


    },

    getTheme() {
        var Theme = null;
        if (localStorage.getItem('Theme') != null) {
            Theme = JSON.parse(localStorage.getItem('Theme'));
        }
        return Theme;
    },

    setTheme(BgC = null, ThemeC = null, ThemeD = null) {
        var Setting = this.getTheme();
        if (Setting != null) {
            if (BgC != null) {
                Setting.BgColor = BgC;
            } else if (ThemeC != null) {
                Setting.ThemeColor = ThemeC;
            } else if (ThemeD != null) {
                Setting.Dir = ThemeD;
            }
        } else {
            Setting = { 'BgColor': 'bg-dark', 'ThemeColor': 'blueTheme', 'Dir': 'right' };
        }
        localStorage.setItem('Theme', JSON.stringify(Setting));
    },

    BgColors(indexColor) {
        $('.TemplateDesign .tdc').removeClass('active');
        $('.TemplateDesign .tdc[data-tdgroup="' + indexColor + '"').addClass('active');
        this.TdColors(indexColor);
        $('.seBox').addClass(indexColor)
        $('body').attr('data-bg-color', indexColor)
    },



    TdColors(index) {
        var CP = JSON.parse($('#colorPicker').val());
        // eslint-disable-next-line no-unused-vars
        Object.entries(CP).filter(([key, item]) => {
            if (item != index) {
                $('.seBox').removeClass(item)
            }
        })
    },

    ThemeColor(indexColor) {
        $('.TemplateColor span').removeClass('active');
        $('.TemplateColor span[data-themegroup="' + indexColor + '"]').addClass('active');
        $('body').attr('data-theme', indexColor);
        $('body').removeClass();
        $('body').addClass(indexColor);
    },


    ThemePos(indexPos) {
        const Tag = $('.HeaderPos span[data-ls="' + indexPos + '"]');
        $('.HeaderPos span').removeClass('BorderMainColor')
        $(Tag).addClass('BorderMainColor');
        const dataHead = $(Tag).attr('data-header');
        const dataDir = $(Tag).attr('data-dir');
        const dataParent = $(Tag).attr('data-parent-tag');
        $('header').removeClass('rightPos tbPos tbPos-t tbPos-b');
        $('.ParentTag').removeClass('btp-t btp-b');
        $('header').addClass(dataHead)
        $('header').addClass(dataDir)
        $('.ParentTag').addClass(dataParent)
    },
    MenuItemClick() {
        $('.menu li a').css('pointer-events', 'none');
        setTimeout(() => {
            $('.menu li a').css('pointer-events', '');
        }, 1200);
    },

    progressLoading() {
        var PB = document.querySelectorAll('.progressBar');
        PB.forEach(element => {
            $('.progressLine', element).animate({ width: 0 }, 0);
        });
        setTimeout(() => {
            PB.forEach(element => {
                $('.progressLine', element).animate({ width: $(element).attr('data-w') + '%' }, 1500);
            });

        }, 1200);
    },

    ClosePUBox() {
        $('.ParentGallery').fadeIn(0);
        $('.PopUpBox').fadeOut(500)
        $('.PopUpBox').removeClass('inRotate')
        $('.PopUpBox').addClass('outRotate')
    },


    MTDown(e) {
        $(e.target).addClass('cursor-grab ');
        StyleJs.MousePos = e.pageX;
        StyleJs.is_pause = true;
    },

    MTUp(e) {
        $(e.target).removeClass('cursor-grab ');
        if (StyleJs.MousePos > e.pageX) {
            this.Slug(false, true)
        } else if (StyleJs.MousePos < e.pageX) {
            this.Slug(true, false)
        }
        StyleJs.is_pause = false;
        clearInterval(StyleJs.SlugTimer);
        StyleJs.SlugTimer = setInterval(StyleJs.AutoSlug, 3000);
    },

    Slug(next = null, prev = null) {
        let len = $('.slug .item').length;
        var oldTag = $('.slug .item.active');
        var itemNum = parseInt($(oldTag).attr('data-num'));
        $('.slug .item').removeClass('active')
        var tag = null;
        var item = 0;
        if (next || !next && !prev) {
            if (itemNum == len) {
                item = 1;
            } else {
                item = itemNum + 1;
            }
            tag = $('.slug .item[data-num="' + item + '"]')
            $(tag).addClass('active')
            $(tag).css('left', '-100%');
            $(tag).animate({ 'left': '0%' })
            $(oldTag).animate({ 'left': '100%' })
        } else if (prev) {
            if (itemNum == 1) {
                item = len;
            } else {
                item = itemNum - 1;
            }
            tag = $('.slug .item[data-num="' + item + '"]');
            $(tag).addClass('active')
            $(tag).css('left', '100%')
            $(tag).animate({ 'left': '0%' })
            $(oldTag).animate({ 'left': '-100%' })
        }

    },

    AutoSlug() {
        if (!StyleJs.is_pause) {
            StyleJs.Slug(false, false)
        }
    },


    dragList(tag, next = false, prev = false) {
        var dragParent = $(tag).parents('.dragParent');
        var widthParent = $('.dragChildren', dragParent).parent()[0].offsetWidth;
        var widthItem = $('.dragChildren > .item', dragParent).width();
        var numItemSlide = Math.floor(widthParent / widthItem);
        var mgLeft = parseInt($('.dragChildren > .item', dragParent).css('margin-left'));
        var len = $('.dragChildren .item', dragParent).length;
        var numCurrent = (len - numItemSlide);
        StyleJs.count = $(dragParent).attr('data-count');
        if (numItemSlide < len) {
            if (next) {
                if (StyleJs.count > numCurrent) {
                    $('.dragChildren', dragParent).animate({ 'margin-right': 0 })
                    StyleJs.count = 1;
                } else {
                    $('.dragChildren', dragParent).animate({ 'margin-right': -((StyleJs.count * (widthItem + 2)) + (StyleJs.count * mgLeft)) })
                    StyleJs.count++;
                }
            } else if (prev) {
                if (StyleJs.count == 1) {
                    $('.dragChildren', dragParent).animate({ 'margin-right': -(((numCurrent) * (widthItem + 2)) + (numCurrent * mgLeft)) })
                    StyleJs.count = numCurrent + 1;
                } else {
                    $('.dragChildren', dragParent).animate({ 'margin-right': -(((StyleJs.count - 2) * (widthItem + 2)) + ((StyleJs.count - 2) * mgLeft)) })
                    StyleJs.count--;
                }
            }
            $(dragParent).attr('data-count', StyleJs.count);
        }
    },

    GetDir(el, coordinates) {

        // The width and height of the current div

        var w = $(el).width(),
            h = $(el).height(),

            // Calculate the x and y to get an angle to the center of the div from that x and y.
            // Gets the x value relative to the center of the DIV and "normalize" it

            x = (coordinates.clientX - $(el).offset().left - (w / 2)) * (w > h ? (h / w) : 1),
            y = (coordinates.clientY - $(el).offset().top - (h / 2)) * (h > w ? (w / h) : 1),

            // The angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
            // first calculate the angle of the point,
            // add 180 deg to get rid of the negative values
            // divide by 90 to get the quadrant
            // add 3 and do a modulo by 4 to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left).

            direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        return direction;

    },


    ShowGLayout(elem, pos) {
        if (pos == 0 /*Top*/ ) {
            $('.hoverLayer', elem).css('top', '-100%')
            $('.hoverLayer', elem).css('right', '0')
            $('.hoverLayer', elem).animate({ top: '0' }, 250)


        } else if (pos == 1 /*Right*/ ) {
            $('.hoverLayer', elem).css('top', '0')
            $('.hoverLayer', elem).css('right', '-100%')
            $('.hoverLayer', elem).animate({ right: '0%' }, 250)

        } else if (pos == 2 /*Bottom*/ ) {
            $('.hoverLayer', elem).css('top', '100%')
            $('.hoverLayer', elem).css('right', '0')
            $('.hoverLayer', elem).animate({ top: '0' }, 250)

        } else if (pos == 3 /*Left*/ ) {
            $('.hoverLayer', elem).css('top', '0')
            $('.hoverLayer', elem).css('right', '100%')
            $('.hoverLayer', elem).animate({ right: '0' }, 250)
        }
    },

    HiddenGLayout(elem, pos) {
        if (pos == 0 /*Top*/ ) {
            $('.hoverLayer', elem).animate({ top: '-100%' }, 250)

        } else if (pos == 1 /*Right*/ ) {
            $('.hoverLayer', elem).animate({ right: '-100%' }, 250)
        } else if (pos == 2 /*Bottom*/ ) {

            $('.hoverLayer', elem).animate({ top: '100%' }, 250)

        } else if (pos == 3 /*Left*/ ) {
            $('.hoverLayer', elem).animate({ right: '100%' }, 250)
        }
    },




    Slider(tag, btn) {
        var slider = $(tag).parent();
        var sliderLen = $(slider).find('.slideItem').length;
        if (btn == 'n') {
            if (sliderLen - 1 == StyleJs.sn) {
                StyleJs.sn = 0;
            } else {
                StyleJs.sn++;
            }
        } else if (btn == 'p') {
            if (StyleJs.sn == 0) {
                StyleJs.sn = sliderLen - 1;
            } else {
                StyleJs.sn--;
            }
        }
        this.Slide(StyleJs.sn)
    },


    Slide(num) {
        var slider = $('.slider');
        var w = $('.slideItem', slider).width();
        $('.slider .Items img').removeClass('active');
        $('.slider .Items img:nth-child(' + (num + 1) + ')').addClass('active');
        var slide = w * num;
        $('> div.Items', slider).animate({ 'margin-right': -slide + 'px' }, 500);
        $("[data-item]").removeClass('TextMainColor')
        $("[data-item='" + (num) + "']").addClass('TextMainColor')
    },
    ppButton(e, tag, status) {
        const parentTag = $(tag).parents('.VideoBox');
        if (status == 'show') {
            $('.FakePP', parentTag).removeClass('hidden')
        } else if (status == 'hidden') {
            if (!$(e).hasClass('videoArea')) {
                if (!tag.paused) {
                    $('.FakePP', parentTag).addClass('hidden')
                }
            }
        }

    },
    VidPlaying(elem) {
        const elemParnt = $(elem).parents('.VideoBox');
        const video = $(elemParnt).children('video').get(0);
        if (video.paused) {
            video.play();
            $('.FakePP .FP_play', elemParnt).fadeOut(0);
            $('.FakePP .FP_pause', elemParnt).fadeIn(0);
            if ("ontouchstart" in document) {
                $('.FakePP', elemParnt).addClass('hidden')
            }
        } else {
            video.pause();
            $('.FakePP .FP_pause', elemParnt).fadeOut(0);
            $('.FakePP .FP_play', elemParnt).fadeIn(0);
        }
        this.addControl(elem)
    },
    addControl(index) {
        var parentTag = $(index).parents('.VideoBox');
        parentTag[0].querySelector('video').setAttribute('controls', 'controls');
    },
    dragSize() {
        document.querySelectorAll('.dragParent').forEach((p) => {
            var lenCitem = $('.dragChildren .item', p).length;
            var widthCitem = Math.floor($('.dragChildren .item', p).width() + parseInt($('.dragChildren .item', p).css('border-width')) * 2);
            var mgCitem = parseInt($('.dragChildren .item', p).css('margin-left'));
            var dchW = Math.ceil(lenCitem * (widthCitem + mgCitem));
            $('.dragChildren', p).css('width', (dchW + 10) + 'px');
            if (dchW > p.offsetWidth) {
                $('.ccButton button', p).attr('disabled', false)
            }
        });

    },
    progress() {
        StyleJs.progressLoading();
    },

    showGL(event) {
        var parent = event.target.parentElement;
        var pos = StyleJs.GetDir(parent, event);
        StyleJs.ShowGLayout(parent, pos);
    },
    hiddenGL(event) {
        var parent = event.target.parentElement;
        var pos = StyleJs.GetDir(parent, event);
        StyleJs.HiddenGLayout(parent, pos);
    },
    OpenPopUpBox() {
        $('.ParentGallery').fadeOut(1500);
        $('.PopUpBox').fadeIn(0)
        $('.PopUpBox').css('visibility', 'visible');
        $('.PopUpBox').addClass('inRotate')
        $('.PopUpBox').removeClass('outRotate')
        $('.menu li a').addClass('NoSelect');
    },
    SliderMaker() {
        let w_s = 0;
        let i_s = 0;
        document.querySelector('.statusSlider').innerHTML = '';
        document.querySelectorAll('.slideItem').forEach((item) => {
            w_s = w_s + item.width;
            if (i_s == 0) {
                document.querySelector('.statusSlider').innerHTML += '<i class="btn_goSlide icon-circle text-white TextMainColor TextHoverMainColor fs-8" role="button" data-item="' + i_s + '" ></i>';
            } else {
                document.querySelector('.statusSlider').innerHTML += '<i class="btn_goSlide icon-circle text-white TextHoverMainColor fs-8" role="button" data-item="' + i_s + '" ></i>';
            }
            i_s++
        })
        $('.slider > div.Items').css('width', w_s);
    },
    goSlide() {
        $('.btn_goSlide').on('click', function() {
            StyleJs.sn = parseInt($(this).attr('data-item'));
            StyleJs.Slide(StyleJs.sn)
        });
    },
    filterPortfolios(index) {
        if (index.id == 'All') {
            $('.Gallery ul li').fadeIn(500);
            $(".portfolioNav ul li").removeClass('active');
            $(index).addClass('active');
        } else if (index.id == 'WebProject') {
            $('.Gallery ul li.AppProject').fadeOut(500);
            $('.Gallery ul li.WebProject').fadeIn(500);
            $(".portfolioNav ul li").removeClass('active');
            $(index).addClass('active');
        } else if (index.id == 'AppProject') {
            $('.Gallery ul li.WebProject').fadeOut(500);
            $('.Gallery ul li.AppProject').fadeIn(500);
            $(".portfolioNav ul li").removeClass('active');
            $(index).addClass('active');

        }
    },
    checkVal(el = null) {
        let err = 0;
        let msg = ""
        let tag = '#' + el;
        if (el == 'name') {
            if ($(tag).val().trim() == null || $(tag).val().trim() == "") {
                err = 1;
                msg = "فیلد نام نمی تواند خالی باشد!"
            } else if ($(tag).val().trim().length < 4) {
                err = 1;
                msg = "لطفا نام و نام خانوادگی خود را بصورت کامل وارد کنید!"
            }
        } else if (el == 'email') {
            var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            if ($(tag).val().trim() == null || $(tag).val().trim() == "") {
                err = 1;
                msg = "فیلد ایمیل نمی تواند خالی باشد!"
            } else if (!reg.test($(tag).val())) {
                err = 1;
                msg = "لطفا ایمیل خود را بصورت صحیح وارد کنید!"
            }
        } else if (el == 'body') {
            if ($(tag).val().trim() == null || $(tag).val().trim() == "") {
                err = 1;
                msg = "فیلد پیام نمی تواند خالی باشد!"
            } else if ($(tag).val().trim().length < 11) {
                err = 1;
                msg = "تعداد حروف پیام وارد شده بسیار کوتاه است!"
            }
        }
        return { Err: err, Msg: msg };
    },
    FormErr(msg, id) {
        var el = '#' + id;
        var parentElem = $(el).parents('.form-group');
        $('.err span', parentElem).text(msg);
        $('.err', parentElem).fadeIn();
    },
    homeSlug() {
        clearInterval(StyleJs.SlugTimer);
        // eslint-disable-next-line no-unused-vars
        StyleJs.SlugTimer = setInterval(StyleJs.AutoSlug, 3000);

    }

}


export default StyleJs