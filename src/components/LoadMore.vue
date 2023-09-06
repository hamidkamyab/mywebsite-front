<template>
    <transition name="fade">
    <div class="loadMore row d-flex text-white justify-content-center" v-if="isVisibleLoadMore">
        <div class="NoSelect w-auto yekan TextMainColor border border-1 BorderMainColor HoverMainColor px-4 py-2" role="button" @click="loadData()">
            <span class="NoSelect">بارگذاری بیشتر...</span>
        </div>
    </div>
    </transition>
</template>

<script>
import { ref, toRefs } from 'vue';
export default {
    props:{
        currentPage:{
            type: Number,
            required:true
        },
        totalPage:{
            type: Number,
            required:true
        }
        
    },
    setup(props,context){
        let page = ref(0);
        let isVisibleLoadMore = ref(true);
        ///Props
        const {totalPage,currentPage} = toRefs(props);
        function loadData(){
            page.value = currentPage.value + 1;
            if(page.value >= totalPage.value){
                isVisibleLoadMore.value = false;
            }
            context.emit('loadData',page.value)
        }
        return{loadData,isVisibleLoadMore}
    }
}
</script>
<style>

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transition: 0.4s;
}
</style>