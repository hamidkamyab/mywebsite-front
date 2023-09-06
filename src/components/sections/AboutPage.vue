<template>
            <section id="AboutMe" class="aboutMe c_h w-100 h-100 align-content-center align-items-center justify-content-center position-absolute right_h">
                <div class="seBox position-relative mCustomScrollbar  p-1">
                    <div class="boxScroll mCustomScrollBox">
                        <div class="Tt_Head d-flex flex-column justify-content-center align-items-center NoSelect my-5">
                            <h2 class="text-dark-white fs-1 fw-bolder vazir">درباره من</h2>
                            <span class="px-2 MainColor text-white yekan mt-2">{{slugs.Slug_About}}</span>
                        </div>
                        <div class="content mx-0 mx-lg-3 my-5 pb-3">
                            <div class="MyInfo d-flex flex-column flex-md-row Sec my-5">
                                <div class="avatar px-4 d-flex align-items-start align-items-xl-center justify-content-center">
                                    <div class="pic">
                                        <img :src="about_detail.avatar" alt="" srcset="">
                                    </div>
                                </div>
                                <div class="d-flex flex-column flex-xl-row">
                                    <div class="textAbout text-white text-td-if px-4">
                                        <h4 class="vazir fw-bolder mt-xl-0 mt-4 mt-md-0 fs-6 fs-lg-4 text-center TextMainColor">{{about_detail.title}}</h4>
                                        <p class="yekan text-justify text-dark-white text-td-if">
                                            {{about_detail.descript}}
                                        </p>
                                    </div>
                                    <div class="info px-4">
                                        <ul class="text-white text-td-if fs-7 yekan">
                                            <li class="list-unstyled d-flex mb-3">
                                                <span class="me-2">سن:</span>
                                                <span>{{about_detail.age}}</span>
                                            </li>
                                            <li class="list-unstyled d-flex mb-3">
                                                <span class="me-2">محل سکونت:</span>
                                                <span>{{about_detail.country}}</span>
                                            </li>
                                            <li class="list-unstyled d-flex mb-3">
                                                <span class="me-2">آدرس:</span>
                                                <span>{{about_detail.address}}</span>
                                            </li>
                                            <li class="list-unstyled d-flex vazir mb-3">
                                                <span class="me-2">ایمیل:</span>
                                                <a :href="`mailto:${about_detail.email}`" class="TextMainColor">{{about_detail.email}}</a>
                                            </li>
                                            <li class="list-unstyled d-flex mb-3">
                                                <span class="me-2">تلفن:</span>
                                                <span class="ltr">{{about_detail.phone}}</span>
                                            </li>
                                        </ul>
                                        <div class="social mt-5 d-flex justify-content-center justify-content-md-start">
                                            <ul class="d-flex gap-2 justify-content-center">
                                                <li class="d-inline-flex justify-content-center align-items-center list-unstyled border border-1 border-secondary">
                                                    <a :href="socials.Instagram" class="d-flex justify-content-center align-items-center HoverMainColor text-white text-td-if p-3 p-md-2 p-lg-2" target="_blank()">
                                                        <i class="icon-instagram fs-4 fs-6-lg"></i>
                                                    </a>
                                                </li>
                                                <li class="d-inline-block list-unstyled border border-1 border-secondary">
                                                    <a :href="socials.Telegram" class="d-flex justify-content-center align-items-center HoverMainColor text-white text-td-if p-3 p-md-2 p-lg-2" target="_blank()">
                                                        <i class="icon-telegram fs-4 fs-6-lg"></i>
                                                    </a>
                                                </li>
                                                <li class="d-inline-block list-unstyled border border-1 border-secondary">
                                                    <a :href="socials.Twitter" class="d-flex justify-content-center align-items-center HoverMainColor text-white text-td-if p-3 p-md-2 p-lg-2" target="_blank()">
                                                        <i class="icon-twitter fs-4 fs-6-lg"></i>
                                                    </a>
                                                </li>
                                                <li class="d-inline-block list-unstyled border border-1 border-secondary">
                                                    <a :href="socials.Linkedin" class="d-flex justify-content-center align-items-center HoverMainColor text-white text-td-if p-3 p-md-2 p-lg-2" target="_blank()">
                                                        <i class="icon-linkedin-1 fs-4 fs-6-lg"></i>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- MyInfo -->
                            <div class="Services Sec  my-5">
                                <div class="titlePart">
                                    <span class="vazir fs-4 fw-bolder text-white ps-2 ms-md-3 BorderMainColor text-td-if">خدمات</span>
                                </div>
                                <ul class="col-12 mt-4 justify-content-around fs-0">
                                    <template v-for="(service,key) in about_service" :key="key">
                                        <li class="col-12 col-xl-3 col-md-6 d-inline-flex flex-column align-items-center justify-content-center gap-3 mb-2">
                                            <div class="pic">
                                                <img :src="service.picture" alt="" class="w-100">
                                            </div>
                                            <h5 class="text-white text-td-if fw-bold vazir text-center">{{service.title}}</h5>
                                            <p class="yekan text-dark-white text-td-if fs-8 fs-7-lg fs-7-md text-center px-3">{{service.descript}}</p>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                            <!-- Services -->
                            <div class="Client dragParent Sec NoSelect my-5"  data-count="1">
                                <div class="titlePart d-flex justify-content-between align-items-center">
                                    <span class="vazir fs-4 fw-bolder text-white text-td-if ps-2 ms-md-3 titlePart BorderMainColor">مشتریان</span>

                                    <div class="ccButton me-4 NoSelect">
                                        <button class="ccPrev bg-transparent BorderMainColor TextMainColor HoverMainColor p-1 border border-1 me-2" role="button" disabled>
                                            <i class="icon-right-open fs-8"></i>
                                        </button>
                                        <button class="ccNext bg-transparent BorderMainColor TextMainColor HoverMainColor p-1 border border-1" role="button" disabled>
                                            <i class="icon-left-open fs-8"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="List">
                                    <ul class="ClientList dragChildren col-12 d-flex justify-content-start mt-4 fs-0 overflow-hidden">
                                        <template v-for="(customer, key) in about_customer" :key="key">
                                            <li class="item col-6 col-md-4 col-xl-2 list-unstyled justify-content-center d-lg-block mb-3 mb-lg-0">
                                                <a href="#" class="d-block NoDrag">
                                                    <img :src="customer.logo" class="w-100 NoDrag" :title="customer.name">
                                                </a>
                                            </li>
                                        </template>
                                    </ul>
                                </div>

                            </div>
                            <!-- Client -->
                            <div class="ClientCommant dragParent Sec my-5"  data-count="1">
                                <div class="titlePart d-flex justify-content-between align-items-center">
                                    <span class="vazir fs-4 fw-bolder text-white text-td-if ps-2 ms-md-3 BorderMainColor">دیدگاه مشتریان</span>

                                    <div class="ccButton me-4 NoSelect">
                                        <button class="ccPrev bg-transparent BorderMainColor TextMainColor HoverMainColor p-1 border border-1 me-2" role="button" disabled>
                                            <i class="icon-right-open fs-8"></i>
                                        </button>
                                        <button class="ccNext bg-transparent BorderMainColor TextMainColor HoverMainColor p-1 border border-1" role="button" disabled>
                                            <i class="icon-left-open fs-8"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="Comments mt-4 NoSelect ps-2 ps-lg-0">
                                    <ul class="h-100 dragChildren">
                                        <template v-for="(comment,key) in about_comment" :key="key">                            
                                            <li class="item list-unstyled border border-1 position-relative">
                                                <p class="text-dark-white text-td-if fst-italic yekan fs-7 py-3 ps-3 pe-5">{{comment.comment}}</p>
                                                <div class="imgClient position-absolute d-flex">
                                                    <img :src="comment.picture" class="w-100 h-100">
                                                    <p class="align-self-end p-0 m-0 ms-2">
                                                        <span class="text-white text-td-if vazir d-block fs-8">{{comment.name}}</span>
                                                        <small class="text-dark-white text-td-if vazir fst-italic d-block  fs-9">{{comment.job_title}}</small>
                                                    </p>

                                                </div>
                                            </li>
                                        </template>
                                        
                                    </ul>
                                </div>
                                <!-- Comments -->

                            </div>
                            <!-- ClientCommant -->
                            <div class="Statistics Sec my-5">
                                <div class="titlePart">
                                    <span class="vazir fs-4 fw-bolder text-white text-td-if ps-2 ms-md-3 BorderMainColor">آمار من</span>
                                </div>
                                <ul class="col-12 flex-lg-row flex-md-column flex-column justify-content-center mt-4 gap-xl-2 NoSelect fs-0">
                                    <template v-for="(statistic,key) in about_statistic" :key="key">
                                        <li class="items col-12 col-md-6 col-xl-3 list-unstyled d-inline-flex flex-column gap-3 align-items-center px-6 py-4">
                                            <figure class="col-6 text-center">
                                                <img :src="statistic.icon" alt="" class="col-5 col-md-6 col-lg-10">
                                            </figure>
                                            <span class="text-white text-td-if vazir fw-bolder fs-6">{{statistic.title}}</span>
                                            <span class="yekan TextMainColor fs-4">{{Separator(statistic.amount)}}</span>
                                        </li>
                                    </template>
                                    
                                </ul>
                            </div>
                            <!-- Statistics -->
                        </div>
                        <!-- Content -->
                        <div class="iconSct BorderMainColor d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/MyLogo.png" class="w-75">
                        </div>
                    </div>
                    <!-- boxScroll -->
                </div>
                <!-- seBox -->
                <Loading :isLoading="isLoading"></Loading>
            </section>
</template>


<script>
/* eslint-disable vue/no-ref-as-operand */
/* eslint-disable no-undef */
import { inject, onMounted, onUpdated, ref } from 'vue'
import {Separator} from '../../composibales/useSeparator.js'
import Loading from '../LoadingComponent.vue'
    export default{
        components:{
            Loading
        },
        setup(){
            let about = ref();
            let about_detail = ref({});
            let about_service = ref({});
            let about_customer = ref({});
            let about_comment = ref({});
            let about_statistic = ref({});
            let isLoading = ref(false);
            async function About(){
                isLoading.value = true;
                const res = await fetch('http://localhost:8000/api/v1/about');
                if(res.ok){
                    about.value = await res.json();
                    const obj_abt =  Object.entries(about._rawValue.data.about_detail[0])
                    for(let [key, value] of obj_abt) {
                        about_detail.value[key] = value;
                    }
                    const obj_serv =  Object.entries(about._rawValue.data.service)
                    for(let [key, value] of obj_serv) {
                        about_service.value[key] = value;
                    }
                    const obj_ctr =  Object.entries(about._rawValue.data.customer)
                    for(let [key, value] of obj_ctr) {
                        about_customer.value[key] = value;
                    }
                    const obj_cmt =  Object.entries(about._rawValue.data.comment)
                    for(let [key, value] of obj_cmt) {
                        about_comment.value[key] = value;
                    }
                    const obj_stc =  Object.entries(about._rawValue.data.statistic)
                    for(let [key, value] of obj_stc) {
                        about_statistic.value[key] = value;
                    }
                    isLoading.value = false;
                }
            }About()  

            Separator();
            
            onMounted(()=>{
                SJ.loadWindow();
            })
            onUpdated(()=>{
                SJ.dragSize();
            })
            let slugs = inject('Slugs');
            let socials = inject('Socials');
            
            return {about_detail,about_service,about_customer,about_comment,about_statistic,slugs,socials,Separator,Loading,isLoading}
        }
    }
</script>

<style>

</style>


