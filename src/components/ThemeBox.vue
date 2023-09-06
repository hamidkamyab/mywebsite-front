<template>
    <div id="ThemeBox" class="position-fixed bottom-0 d-flex align-items-end" >
        <span class="iconTheme d-flex align-items-center justify-content-center border border-1 border-end-0 position-absolute bg-white NoSelect" role="button">
            <i class="icon-cog-1 fs-1 fs-3-lg text-light-dark"></i>
        </span>
        <div class="content position-absolute bg-white border border-1 border-end-0 w-100 h-100 d-flex flex-column yekan align-items-center px-2 py-3 text-light-dark">
            <div class="TemplateDesign mb-3 NoSelect">
                <h5 class="fs-6 text-center mb-3">طرح قالب</h5>
                <div class="d-flex gap-2">
                    <div class="tdc d-inline-flex position-relative justify-content-center border border-1 align-items-center bg-dark text-white" role="button" data-tdgroup="bg-dark">
                        <span class="fs-8">تیره</span>
                        <i class="icon-ok text-white fs-10 position-absolute"></i>
                    </div>
                    <div class="tdc d-inline-flex position-relative justify-content-center border border-1 align-items-center bg-light text-light-dark no-shadow" role="button" data-tdgroup="bg-light">
                        <span class="fs-8">روشن</span>
                        <i class="icon-ok text-white fs-10 position-absolute"></i>
                    </div>
                </div>
            </div>
            <div class="TemplateColor mb-3 NoSelect">
                <h5 class="fs-6 text-center mb-3">رنگ اصلی</h5>
                <div class="d-flex gap-2 flex-wrap">
                    <span class="bl-color d-flex justify-content-center align-items-center" role="button" data-themegroup="blueTheme">
                        <i class="icon-ok text-white fs-8 me-1"></i>
                    </span>
                    <span class="gn-color d-flex justify-content-center align-items-center" role="button" data-themegroup="greenTheme">
                        <i class="icon-ok text-white fs-8 me-1"></i>
                    </span>
                    <span class="rd-color d-flex justify-content-center align-items-center" role="button" data-themegroup="redTheme">
                        <i class="icon-ok text-white fs-8 me-1"></i>
                    </span>
                    <span class="pu-color d-flex justify-content-center align-items-center" role="button" data-themegroup="purpleTheme">
                        <i class="icon-ok text-white fs-8 me-1"></i>
                    </span>
                    <span class="pi-color d-flex justify-content-center align-items-center" role="button" data-themegroup="pinkTheme">
                        <i class="icon-ok text-white fs-8 me-1"></i>
                    </span>
                    <span class="yw-color d-flex justify-content-center align-items-center" role="button" data-themegroup="yellowTheme">
                        <i class="icon-ok text-white fs-8 me-1"></i>
                    </span>
                    <span class="og-color d-flex justify-content-center align-items-center" role="button" data-themegroup="orangeTheme">
                        <i class="icon-ok text-white fs-8 me-1"></i>
                    </span>
                    <span class="bw-color d-flex justify-content-center align-items-center" role="button" data-themegroup="brownTheme">
                        <i class="icon-ok text-white fs-8 me-1"></i>
                    </span>
                </div>
            </div>
            <div class="HeaderPos mb-3 NoSelect d-none d-lg-block">
                <h5 class="fs-6 text-center mb-3">محل نوار فهرست</h5>
                <div class="d-flex gap-2 flex-wrap">
                    <span class="text-center fs-7 w-100 bg-grey-white py-1 border border-3 border-top-0 border-end-0 border-bottom-0 border-dark BorderHoverColor BorderMainColor" role="button" data-header="rightPos" data-dir="" data-parent-tag="" data-ls="right">راست</span>
                    <span class="text-center fs-7 w-100 bg-grey-white py-1 border border-3 border-start-0 border-end-0 border-bottom-0 border-dark BorderHoverColor" role="button" data-header="tbPos" data-dir="tbPos-t" data-parent-tag="btp-t" data-ls="top">بالا</span>
                    <span class="text-center fs-7 w-100 bg-grey-white py-1 border border-3 border-top-0 border-end-0 border-start-0 border-dark BorderHoverColor" role="button" data-header="tbPos" data-dir="tbPos-b" data-parent-tag="btp-b" data-ls="bottom">پایین</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
/* eslint-disable no-undef */

export default {
    setup(props,context) {
        
        onMounted(()=>{
            $('.iconTheme').on('click', function() {
                $('#ThemeBox').toggleClass('active');
                $('i', this).toggleClass('TextMainColor')
                $(this).toggleClass('active')
            })
            $('.TemplateDesign .tdc').on('click', function() {
                const tdColor = $(this).attr('data-tdgroup');
                context.emit('BgColors',tdColor);
                context.emit('setTheme',{BgC: tdColor, ThemeC: null, ThemeD: null});
            })
            $('.TemplateColor span').on('click', function() {
                const theme = $(this).attr('data-themegroup');
                context.emit('ThemeColor',theme);
                context.emit('setTheme',{BgC: null, ThemeC: theme, ThemeD: null});
            });
            $('.HeaderPos span').on('click', function() {
                const ls = $(this).attr('data-ls');
                context.emit('ThemePos',ls);
                context.emit('setTheme',{BgC: null, ThemeC: null, ThemeD: ls});
            });
        })


        return {}
    }
}
</script>

<style >

</style>