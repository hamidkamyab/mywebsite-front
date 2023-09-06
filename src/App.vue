<script>
/* eslint-disable no-undef */
// import { RouterLink, RouterView } from 'vue-router'
import MenuMobile from "./components/MenuMobile.vue";
import ThemeBox from "./components/ThemeBox.vue";
import ShowImage from "./components/ShowImage.vue";
// import StyleJs from './assets/js/style'
// import { A } from './assets/js/jquery.custom-scrollbar'

import { onMounted, provide, ref } from 'vue';

export default{
  components : {
    MenuMobile,
    ThemeBox,
    ShowImage
  },
  setup(){
      onMounted(()=>{
        SJ.loadWindow();
      });


      function setThemeData(ThemeData){
        SJ.setTheme(ThemeData.BgC,ThemeData.ThemeC,ThemeData.ThemeD);
      }

      function BgColors(event){
        SJ.BgColors(event);
      }
      function ThemeColor(event){
        SJ.ThemeColor(event);
      }
      function ThemePos(event){
        SJ.ThemePos(event);
      }

      function MenuItemClick(){
        SJ.MenuItemClick();
      }

      let Settings = ref();
      let dataSet = ref({});
      async function setting(){
          const res = await fetch('http://localhost:8000/api/v1/setting');
          if(res.ok){
              Settings.value = await res.json();
              // eslint-disable-next-line vue/no-ref-as-operand
              const obj = Object.entries(Settings._rawValue.data);
              for(  let [key, value] of obj) {
                dataSet.value[key] = value;
              }
              document.title = dataSet.value.Set_SiteTitle;
          }
      }setting()
      provide('Settings',dataSet);

      let Slugs = ref();
      let dataSlu = ref({});
      async function slugs(){
          const res = await fetch('http://localhost:8000/api/v1/slugs');
          if(res.ok){
              Slugs.value = await res.json();
              // eslint-disable-next-line vue/no-ref-as-operand
              const obj = Object.entries(Slugs._rawValue.data);
              for(  let [key, value] of obj) {
                dataSlu.value[key] = value;
              }
          }
      }slugs()

      provide('Slugs',dataSlu);

      let Social = ref();
      let dataSoc = ref({});
      async function social(){
          const res = await fetch('http://localhost:8000/api/v1/social');
          if(res.ok){
              Social.value = await res.json();
              // eslint-disable-next-line vue/no-ref-as-operand
              const obj = Object.entries(Social._rawValue.data);
              for(  let [key, value] of obj) {
                dataSoc.value[key] = value;
              }
          }
      }social()
      provide('Socials',dataSoc);

    return{BgColors,ThemeColor,setThemeData,ThemePos,MenuItemClick,dataSet}
  }

}

</script>
<template>
  <div class="ParentTag d-flex flex-row">
    <div class="Content h-100 position-relative overflow-hidden">
      <MenuMobile></MenuMobile>

       <header class="seBox position-fixed d-flex flex-column flex-lg-row align-items-center justify-content-start justify-content-lg-around rightPos close">
            <div class="profile text-center d-flex align-items-center flex-column flex-lg-row">
                <div class="pic w-25 w-lg-auto h-auto">
                    <img :src="dataSet.Set_MenuPicture" alt="" class="w-100 h-100">
                </div>
                <h4 class="d-block text-white fs-5 yekan text-td-if">{{dataSet.Set_MenuTitle}}</h4>
            </div>
            <nav class="position-relative mCustomScrollbar mCS_rightPos HoverSC w-100 vwp-100 mCS_noMargin">
                <div class="boxScroll mCustomScrollBox">
                    <ul class="menu d-flex flex-column flex-lg-row">
                        <li class="list-unstyled">
                            <router-link :to="{name:'home'}" @click="MenuItemClick()" active-class="menuActive" class="d-flex flex-column justify-content-center align-items-center text-center py-3 active" data-id="Home">
                                <i class="icon-home2 fs-5"></i>
                                <span class="fs-7 yekan  mt-1">خانه</span>
                                <span class="BorderFaker MainColor"></span>
                            </router-link>
                        </li>
                        <li class="list-unstyled">
                            <router-link :to="{name:'about'}" @click="MenuItemClick()" active-class="menuActive" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="AboutMe">
                                <i class="icon-user-circle-o fs-5"></i>
                                <span class="fs-7 yekan mt-1">درباره من</span>
                                <span class="BorderFaker MainColor"></span>
                            </router-link>
                        </li>
                        <li class="list-unstyled">
                            <router-link :to="{name:'cvme'}" @click="MenuItemClick()" active-class="menuActive" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="CvMe">
                                <i class="icon-id-card-o fs-5"></i>
                                <span class="fs-7 yekan mt-1">رزومه</span>
                                <span class="BorderFaker MainColor"></span>
                            </router-link>
                        </li>
                        <li class="list-unstyled">
                            <router-link :to="{name:'portfolios'}" @click="MenuItemClick()" active-class="menuActive" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="Portfolio">
                                <i class="icon-bag-4 fs-5"></i>
                                <span class="fs-7 yekan  mt-1">نمونه کارها</span>
                                <span class="BorderFaker MainColor"></span>
                            </router-link>
                        </li>
                        <li class="list-unstyled">
                            <router-link :to="{name:'contact'}" @click="MenuItemClick()" active-class="menuActive" class="d-flex flex-column justify-content-center align-items-center text-center py-3" data-id="Contact">
                                <i class="icon-mail-4 fs-5"></i>
                                <span class="fs-7 yekan  mt-1">تماس</span>
                                <span class="BorderFaker MainColor"></span>
                            </router-link>

                        </li>
                    </ul>
                </div>
                <!-- boxScroll -->

            </nav>
      </header>

      <!-- <HomePage></HomePage> -->


      
      <router-view v-slot="{Component,route}">
          <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
              <component :is="Component"></component>
          </transition>
      </router-view>

    </div>
    <!-- Content -->
  </div>
  <!-- ParentTag -->
  <ThemeBox @BgColors="BgColors($event)" @ThemeColor="ThemeColor($event)" @setTheme="setThemeData($event)" @ThemePos="ThemePos($event)"></ThemeBox>
  <ShowImage></ShowImage>
  
  <input id="colorPicker" type="hidden" value='{"0":"bg-dark","1":"bg-light","2":"bg-info"}' />

  
</template>
<style>

</style>