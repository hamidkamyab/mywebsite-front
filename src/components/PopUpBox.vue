<template>
   <section id="PopUpBox" class="popUpBox c_h w-100 h-100 align-content-center justify-content-center align-items-center  position-absolute bottom_h">
        <div class="seBox position-absolute mCustomScrollbar p-1 PopUpBox">
                    <div class="boxScroll mCustomScrollBox">
                        <div class="Tt_Head d-flex flex-column justify-content-center align-items-center NoSelect my-5">
                            <h3 class="text-dark-white fs-3 fw-bolder vazir border-bottom border-3 BorderMainColor py-2">{{portfolio.title}}</h3>
                        </div>
                        <div class="content mx-lg-4 my-4 px-2 px-lg-3 pb-5">
                            <div class="col-12 d-flex flex-column flex-xl-row">
                                <div class="col-xl-7 col-12 d-flex align-items-center flex-column">
                                    <div class="slider overflow-hidden position-relative">
                                        <div class="Items d-flex gap-0">
                                            <template v-for="(img,key) in portfolio.gallery" :key="key">
                                                <img :src="img.url" class="d-inline-block slideItem m-0 p-0" :class="(key==0)?'active':''">
                                            </template>
                                        </div>
                                        <div class="ZoomImage position-absolute d-flex bg-white justify-content-center align-items-center TextHoverMainColor" role="button" data-num-image="1">
                                            <i class="icon-zoom-in fs-4"></i>
                                        </div>
                                        <div class="btn-prev btnSlider position-absolute bg-white d-flex justify-content-center align-items-center TextHoverMainColor" role="button">
                                            <i class="icon-right-open-3 fs-3" style="padding-left: 5px;"></i>
                                        </div>
                                        <div class="btn-next btnSlider position-absolute bg-white d-flex justify-content-center align-items-center TextHoverMainColor" role="button">
                                            <i class="icon-left-open-2 fs-3" style="padding-right: 5px;"></i>
                                        </div>
                                        <div class="statusSlider position-absolute d-flex w-100 justify-content-center">

                                        </div>
                                    </div>
                                    <!-- slider -->
                                    <div class="VideoBox mt-4 position-relative" @mouseover="ppButton($event,'show')" @mouseout="ppButton($event,'hidden')">
                                        <video id="vidPlayer" src=""></video>
                                    </div>
                                </div>
                                <!-- col-7 -->
                                <div class="col-12 d-xl-flex flex-xl-column col-xl-5 d-lg-inline-flex mt-4 mt-xl-0 flex-lg-row gap-lg-4">
                                    <div class="description mb-5 col-lg-6 col-12 col-xl-12">
                                        <div class="titlePart">
                                            <span class="vazir fs-5 fw-bolder text-white ps-2 BorderMainColor text-td-if">توضیحات</span>
                                        </div>
                                        <div class="content ms-2 my-4 vazir fs-8">
                                            <ul>
                                                <li class="list-unstyled mb-3">
                                                    <i class="icon-user TextMainColor"></i>
                                                    <span class="text-dark-white text-td-if">{{portfolio.author}}</span>
                                                </li>
                                                <li class="list-unstyled mb-3" v-if="portfolio.url != null">
                                                    <i class="icon-globe-2 TextMainColor"></i>
                                                    <span class="TextMainColor">{{portfolio.url}}</span>
                                                </li>
                                                <li class="list-unstyled mb-3">
                                                    <i class="icon-calendar TextMainColor"></i>
                                                    <span class="text-dark-white text-td-if">{{portfolio.por_date}}</span>
                                                </li>
                                            </ul>
                                            <p class="text-dark-white text-td-if">
                                                {{portfolio.descript}}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- description -->
                                    <div class="col-lg-6  col-12 col-xl-12">
                                        <div class="techno col-lg-6">
                                            <div class="titlePart">
                                                <span class="vazir fs-5 fw-bolder text-white ps-2 BorderMainColor text-td-if">تکنولوژی</span>
                                            </div>
                                            <div class="content ms-2 my-4 vazir fs-8">
                                                <ul class="vazir d-flex">
                                                    <template v-for="(technology,key) in portfolio.technology" :key="key">
                                                        <li class="list-unstyled bg-dark-white HoverMainColor py-1 px-2 me-1">
                                                            <span>{{technology}}</span>
                                                        </li>
                                                    </template>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- techno -->

                                        <div class="share mt-5 mt-lg-0  col-lg-12" v-if="(portfolio.share == 1)">
                                            <div class="titlePart">
                                                <span class="vazir fs-5 fw-bolder text-white ps-2 BorderMainColor text-td-if">اشتراک گذاری</span>
                                            </div>
                                            <div class="content ms-2 my-4 vazir fs-7">
                                                <ul class="vazir d-flex">
                                                    <li class="list-unstyled bg-dark-white HoverMainColor d-flex justify-content-center align-items-center me-2" role="button">
                                                        <i class="icon-telegram-c1"></i>
                                                    </li>
                                                    <li class="list-unstyled bg-dark-white HoverMainColor d-flex justify-content-center align-items-center text-center me-2" role="button">
                                                        <i class="icon-twitter-1"></i>
                                                    </li>
                                                    <li class="list-unstyled bg-dark-white HoverMainColor d-flex justify-content-center align-items-center text-center me-2" role="button">
                                                        <i class="icon-facebook"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- share -->
                                    </div>


                                </div>
                                <!-- col-5 -->
                            </div>
                            <!-- col-12 -->
                        </div>
                        <!-- content -->
                        <router-link :to="{name:'portfolios'}">
                            <i class="icon-cancel-thin-1 position-absolute text-dark-white TextHoverMainColor top-0 fs-1 mt-2 ClosePUB" role="button"></i>
                        </router-link>
                    </div>
                    <!-- boxScroll -->
                </div>
                <!-- seBox -->
                <Loading :isLoading="isLoading"></Loading>
           </section>

</template>

<script>
import { onMounted, onUpdated, ref } from 'vue';
import {useRoute} from 'vue-router'
import Loading from './LoadingComponent.vue'
/* eslint-disable no-undef */
export default {
    components:{
        Loading
    },
    setup(){
        let videoUrl = ref('');
        let portfolio = ref({});
        var idPortfolio = ref('');
        let isLoading = ref(false)
        onMounted(()=>{
            SJ.loadWindow();
            const route = useRoute();
            idPortfolio.value = route.params.id;
            async function Show(){
                isLoading.value = true;
                const res = await fetch('http://localhost:8000/api/v1/portfolios/'+idPortfolio.value)
                if(res.ok){
                    portfolio.value =await res.json();
                    portfolio.value =  portfolio.value.data.portfolio;
                    videoUrl.value = portfolio.value.video;
                    if(videoUrl.value != null && videoUrl.value !== "" ){
                        document.querySelector('#vidPlayer').src = videoUrl.value;
                    }else{
                        $('.VideoBox').fadeOut(0);
                    }
                    isLoading.value = false;
                    portfolio.value.technology = JSON.parse(portfolio.value.technology);
                }
            }Show()
            SJ.OpenPopUpBox();
        });

        onUpdated(()=>{
            SJ.SliderMaker();
            SJ.goSlide()
        })
        function ppButton(event,status){
            SJ.ppButton(event.relatedTarget,event.target,status)
        }

        return {ppButton,portfolio,Loading,isLoading}
    }
}
</script>

<style>

</style>