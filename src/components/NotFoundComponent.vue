<template>
   <section id="NotFound" class="notFound c_h w-100 h-100 align-content-center justify-content-center align-items-center position-absolute">
        <div class="seBox position-absolute mCustomScrollbar p-1">
                    <div class="boxScroll mCustomScrollBox">
                        <div class="content mx-lg-4 my-4 px-2 px-lg-3 pb-5">
                            <div class="col-12 d-flex flex-column flex-xl-row">
                                <div class="col-12" style="height:400px">
                                    <img src="../assets/img/404.svg" alt="" srcset="" class="w-100 h-100">
                                    <div class="row justify-content-center">
                                        <span class="fs-2 TextMainColor text-center">صفحه مورد نظر پیدا نشد!</span>
                                    </div>
                                </div>
                                    

                            </div>
                            <!-- col-12 -->
                        </div>
                        <!-- content -->
                    </div>
                    <!-- boxScroll -->
        </div>
        <!-- seBox -->
    </section>

</template>

<script>
import { onMounted } from 'vue'

/* eslint-disable no-undef */
export default {

    setup(){
        onMounted(()=>{
            SJ.loadWindow();
        })
    }
}
</script>

<style>

</style>