<template>
    <div class="seBox loadingBody position-absolute d-flex justify-content-center align-items-center TextMainColor bg-white" v-if="isLoading">
        <div class="row">
            <div class="d-block text-center">
                <i class="icon-spin1 animate-spin"></i>
            </div>
            <div class="d-block text-center mt-2">
                <span class="fs-5 yekan">لطفا صبر کنید...</span>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    props:['isLoading'],
    setup(){
        // v-if="isLoading" w-100 position-absolute top-0 d-flex justify-content-center align-items-center TextMainColor
    }
}
</script>