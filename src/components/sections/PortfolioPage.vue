<template>
            <section id="Portfolio" class="portfolio c_h w-100 h-100 align-content-center justify-content-center align-items-center  position-absolute bottom_h">
                <div class="seBox position-relative mCustomScrollbar p-1 ParentGallery">
                    <div class="boxScroll mCustomScrollBox">
                        <div class="Tt_Head d-flex flex-column justify-content-center align-items-center NoSelect my-5">
                            <h2 class="text-dark-white fs-1 fw-bolder vazir">نمونه‌ کارها</h2>
                            <span class="px-2 MainColor text-white yekan  mt-2">{{slugs.Slug_Portfolio}}</span>
                        </div>
                        <div class="content mx-4 my-5 px-3 pb-3">
                            <div class="row portfolioNav mb-4">
                                <ul class="d-flex gap-2 yekan fs-8 ActiveColor justify-content-center NoSelect">
                                    <li id="All" class="list-unstyled text-muted px-2 py-1 ActiveColor active" role="button">
                                        <span>همه</span>
                                    </li>
                                    <li id="WebProject" class="list-unstyled text-muted px-2 py-1 ActiveColor" role="button">
                                        <span>وب سایت</span>
                                    </li>
                                    <li id="AppProject" class="list-unstyled text-muted px-2 py-1 ActiveColor" role="button">
                                        <span>اپلیکیشن</span>
                                    </li>
                                </ul>
                            </div>
                            <!-- row -->

                            <div class="Gallery row mb-4">
                                <ul class="d-md-inline-flex flex-column flex-md-row justify-content-center col-12 p-0 m-0 flex-wrap photo-gallery">
                                    <template v-for="(portfolio,key) in portfolios" :key="key">
                                        <li :class="(portfolio.typeApp == 0)? 'WebProject':'AppProject'" class="items position-relative list-unstyled overflow-hidden col-12 col-md-6 col-xl-4 p-1" v-show="(filter == 2)?true:(filter != 2 &&portfolio.typeApp == filter)?true:false">
                                                <router-link :to="{name:'portfolio', params: {id: portfolio.id} }"  @click="ShowPortfolio()">
                                                    <div class="fakeLayerGallery w-100 h-100 position-absolute" @mouseover="showGL($event)" @mouseleave="hiddenGL($event)" role="button"></div>
                                                    <figure class="w-100 h-100 position-relative overflow-hidden border border-1">
                                                        <img :src="portfolio.image" class="w-100 h-100">
                                                        <div class="hoverLayer w-100 h-100 position-absolute p-3 d-flex flex-column justify-content-between text-light-dark">
                                                            <h5 class="vazir">{{portfolio.title}}</h5>
                                                            <div>
                                                                <span class="yekan fs-7">{{portfolio.brief}}</span>
                                                            </div>
                                                            <div class="d-flex justify-content-between">
                                                                <template v-if="portfolio.typeApp == 0">
                                                                    <span class="vazir">وب سایت</span>
                                                                    <i class="icon-wikipedia-w TextMainColor fs-5"></i>
                                                                </template>
                                                                <template v-if="portfolio.typeApp == 1">
                                                                    <span class="vazir">اپلیکیشن</span>
                                                                    <i class="icon-android TextMainColor fs-5"></i>
                                                                </template>
                                                            </div>
                                                        </div>

                                                    </figure>
                                                </router-link>
                                        </li>
                                    </template>
                                   
                                </ul>




                            </div>
                            <!-- Gallery -->
                            
                            <LoadMore :currentPage="currentPage" :totalPage="totalPage" @loadData="loadData($event)"></LoadMore>

                        </div>
                        <!-- content -->
                        <div class="iconSct BorderMainColor d-flex justify-content-center align-items-center">
                            <img src="../../assets/img/MyLogo.png" class="w-75">
                        </div>
                    </div>
                    <!-- boxScroll -->
                </div>
                <!-- seBox -->
                
                <Loading :isLoading="isLoading"></Loading>

            <router-view>
               
            </router-view>
            </section>


</template>

<script>
import { inject, onMounted, ref } from 'vue'
import LoadMore from '../LoadMore.vue'
import Loading from '../LoadingComponent.vue'
/*eslint-disable vue/no-ref-as-operand*/
/*eslint-disable no-undef*/
export default {
    components:{LoadMore,Loading},
    setup(){


        let portfolio = ref()
        let portfolios = ref([])
        let currentPage = ref('')
        let totalPage = ref('')
        let filter = ref(2);
        let isLoading= ref(false)
        async function PortfoliosFunc(page = 1){
            isLoading.value = true;
            const res = await fetch(`http://localhost:8000/api/v1/portfolios?page=${page}`);
            if(res.ok){
                portfolio.value = await res.json();
                portfolio._rawValue.data.portfolios.forEach(element => {
                    portfolios.value.push(element)
                });
                currentPage.value = portfolio._rawValue.data.pagination.current_page;
                totalPage.value = portfolio._rawValue.data.pagination.total_pages;
                isLoading.value = false;
            }

            var filterId=$('.portfolioNav > ul .active').attr('id');
            if( filterId == 'WebProject'){
                filter.value = 0;
            }else if(filterId == 'AppProject'){
                filter.value = 1;
            }else{
                filter.value = 2;
            }
        }

        function showGL(event){
            SJ.showGL(event)
        }

        function hiddenGL(event){
            SJ.hiddenGL(event)
        }

        function ShowPortfolio(){
            SJ.OpenPopUpBox();
        }
        function loadData(page){
            PortfoliosFunc(page)
        }
        onMounted(()=>{
            SJ.loadWindow();
            PortfoliosFunc()
        });
        let slugs = inject('Slugs');
        return{portfolios,currentPage,totalPage,showGL,hiddenGL,ShowPortfolio,loadData,filter,slugs,Loading,isLoading}
    }
}
</script>

<style>

</style>