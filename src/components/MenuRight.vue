
<template>
    <header class="seBox position-fixed d-flex flex-column flex-lg-row align-items-center justify-content-start justify-content-lg-around rightPos close">
            <div class="profile text-center d-flex align-items-center flex-column flex-lg-row">
                <div class="pic w-25 w-lg-auto h-auto">
                    <img src="../assets/file/img/MyPic.jpg" alt="" class="w-100 h-100">
                </div>
                <h4 class="d-block text-white fs-5 yekan text-td-if">{{settings.Set_MenuTitle}}</h4>
            </div>
            <nav class="position-relative mCustomScrollbar mCS_rightPos HoverSC w-100 vwp-100 mCS_noMargin">
                <div class="boxScroll mCustomScrollBox">
                    <ul class="menu d-flex flex-column flex-lg-row">
                        <li class="list-unstyled">
                            <a href="#" class="d-flex flex-column justify-content-center align-items-center text-center py-3 active" data-id="Home">
                                <i class="icon-home2 fs-5"></i>
                                <span class="fs-7 yekan  mt-1">خانه</span>
                                <span class="BorderFaker MainColor"></span>
                            </a>
                        </li>
                        <li class="list-unstyled">
                            <router-link :to="{name:'about'}" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="AboutMe">
                                <i class="icon-user-circle-o fs-5"></i>
                                <span class="fs-7 yekan mt-1">درباره من</span>
                                <span class="BorderFaker MainColor"></span>
                            </router-link>
                            <!-- <a href="#" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="AboutMe">
                                <i class="icon-user-circle-o fs-5"></i>
                                <span class="fs-7 yekan mt-1">درباره من</span>
                                <span class="BorderFaker MainColor"></span>
                            </a> -->
                        </li>
                        <li class="list-unstyled">
                            <a href="#" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="CvMe">
                                <i class="icon-id-card-o fs-5"></i>
                                <span class="fs-7 yekan mt-1">رزومه</span>
                                <span class="BorderFaker MainColor"></span>
                            </a>
                        </li>
                        <li class="list-unstyled">
                            <a href="#" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="Portfolio">
                                <i class="icon-bag-4 fs-5"></i>
                                <span class="fs-7 yekan  mt-1">نمونه کارها</span>
                                <span class="BorderFaker MainColor"></span>
                            </a>
                        </li>
                        <li class="list-unstyled">
                            <a href="#" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="Contact">
                                <i class="icon-mail-4 fs-5"></i>
                                <span class="fs-7 yekan  mt-1">تماس</span>
                                <span class="BorderFaker MainColor"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- boxScroll -->

            </nav>
    </header>
</template>

<script>
import { ref,inject } from 'vue'
export default {
    setup(){
        let settings = ref()
        settings = inject('Settings')        
        return {settings};
    }
}
</script>
