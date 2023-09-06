<template>
            <section id="Contact" class="contact c_h w-100 h-100 align-content-center justify-content-center align-items-center  position-absolute top_h">
                <div class="seBox position-relative mCustomScrollbar p-1">
                    <div class="boxScroll mCustomScrollBox">
                        <div class="Tt_Head d-flex flex-column justify-content-center align-items-center NoSelect my-5">
                            <h2 class="text-dark-white fs-1 fw-bolder vazir">تماس</h2>
                            <span class="px-2 MainColor text-white yekan  mt-2">{{slugs.Slug_Contact}}</span>
                        </div>
                        <div class="content mx-lg-4 px-3 mb-5 col-11 d-flex flex-column flex-lg-row align-items-start gap-5 pb-5">
                            <div class="right col-lg-5 col-12">
                                <div class="titlePart">
                                    <span class="vazir fs-5 fw-bolder text-white ps-2 BorderMainColor text-td-if"> با من در ارتباط باشید </span>
                                </div>
                                <p class="text-dark-white yekan mt-4 text-justify text-td-if">
                                    {{contact.descript}}
                                </p>
                                <ul class="vazir">
                                    <li class="list-unstyled d-flex align-items-center my-4 gap-2">
                                        <i class="icon-location-thin text-dark-white  fs-4 text-td-if"></i>
                                        <span class="text-white  fs-8 text-td-if">
                                            {{contact.address}}
                                        </span>
                                    </li>
                                    <li class="list-unstyled d-flex align-items-center my-4 gap-2">
                                        <i class="icon-mail-thin-4 text-dark-white fs-5 text-td-if"></i>
                                        <span class="text-white TextMainColor ms-2 fs-8">
                                            {{contact.email}}
                                        </span>
                                    </li>
                                    <li class="list-unstyled d-flex align-items-center my-4 gap-2">
                                        <i class="icon-phone-thin text-dark-white fs-4 text-td-if"></i>
                                        <span class="text-white  fs-8 text-td-if">
                                            {{contact.phone}}
                                        </span>
                                    </li>
                                    <li class="list-unstyled d-flex align-items-center my-4 gap-2">
                                        <i class="icon-check-thin text-dark-white fs-4 text-td-if"></i>
                                        <span class="text-white  fs-8 text-td-if">
                                            آماده به خدمت رسانی
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <!-- right -->
                            <div class="left col-lg-6 col-12">
                                <div class="titlePart">
                                    <span class="vazir fs-5 fw-bolder text-white ps-2 BorderMainColor text-td-if">فرم تماس</span>
                                </div>
                                <div class="formContact d-flex flex-column ms-4 mt-4 vazir">
                                    <div class="form-group position-relative mb-4">
                                        <input id="name" class="form-control rounded-0 bg-transparent text-white fs-8 border-secondary" type="text" name="name" placeholder="نام کامل شما...">
                                        <i class="icon-user-2 position-absolute text-secondary"></i>
                                        <span class="bb position-absolute MainColor d-block"></span>
                                        <div class="err position-absolute">
                                            <div class="MainColor text-white position-relativer fs-8 mt-2 ms-2 py-1 px-2 yekan">
                                                <span></span>
                                                <small class="BorderMainColor position-absolute d-block"></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group position-relative mb-4">
                                        <input id="email" class="form-control rounded-0 bg-transparent text-white rtl border-secondary fs-8" type="email" name="email" placeholder="آدرس ایمیل شما...">
                                        <i class="icon-mail-4 position-absolute text-secondary"></i>
                                        <span class="bb position-absolute MainColor d-block"></span>
                                        <div class="err position-absolute">
                                            <div class="MainColor text-white position-relativer fs-8 mt-2 ms-2 py-1 px-2 yekan">
                                                <span></span>
                                                <small class="BorderMainColor position-absolute d-block"></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group comment position-relative mb-4">
                                        <textarea id="body" class="form-control rounded-0 bg-transparent text-white border-secondary fs-8" type="textarea" name="body" placeholder="متن پیام..."></textarea>
                                        <i class="icon-comment-empty position-absolute text-secondary"></i>
                                        <span class="bb position-absolute MainColor d-block"></span>
                                        <div class="err position-absolute">
                                            <div class="MainColor text-white position-relativer fs-8 mt-2 ms-2 py-1 px-2 yekan">
                                                <span></span>
                                                <small class="BorderMainColor position-absolute d-block"></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn bg-transparent border-2 BorderMainColor HoverMainColor text-white text-td-if d-flex align-items-center" role="button" @click="sendMessage()" :disabled="loadSend">
                                            <i class="icon-spin1 animate-spin fs-7 me-1" v-if="loadSend"></i>
                                            <span>ارسال پیام</span>
                                        </button>
                                    </div>
                                </div>
                                <!-- formContact -->
                            </div>
                            <!-- left -->
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
            <!-- contact -->
</template>

<script >
/*eslint-disable no-undef*/
import { inject, onMounted, ref } from 'vue';
import Loading from '../LoadingComponent.vue'
    export default{
        components:{
            Loading
        },
        setup(){
            let isLoading = ref(false);
            let loadSend = ref(false);
            onMounted(()=>{
                SJ.loadWindow();
            })
            let contact = ref({});   
            async function Contact(){
                isLoading.value = true;
                const res = await fetch('http://localhost:8000/api/v1/contact');
                if(res.ok){
                    let data = await res.json();
                    contact.value = data.data.contact[0];  
                    isLoading.value = false;      
                }
            }Contact()

            async function sendMessage(){
                loadSend.value = true;
                let isErr = false;
                var CK_Name = SJ.checkVal('name');
                var CK_Email = SJ.checkVal('email');
                var CK_Body = SJ.checkVal('body');
                if(CK_Name.Err == 1){
                    SJ.FormErr(CK_Name.Msg,'name');
                    isErr = true;
                    loadSend.value = false;
                }
                if(CK_Email.Err == 1){
                    SJ.FormErr(CK_Email.Msg,'email');
                    isErr = true;
                    loadSend.value = false;
                }
                if(CK_Body.Err == 1){
                    SJ.FormErr(CK_Body.Msg,'body');
                    isErr = true;
                    loadSend.value = false;
                }
                if(!isErr){
                    var name = $('#name').val();
                    var email = $('#email').val();
                    var body = $('#body').val();
                    const res = await fetch('http://localhost:8000/api/v1/message',{
                        method:'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body:JSON.stringify({
                            name:name,
                            email:email,
                            body:body,
                        })
                    });
                    if(res.ok){
                        $('.form-control').val('');
                        loadSend.value = false;
                        Swal.fire({
                            title: 'ثبت شد :)',
                            text: 'پیام شما با موفقیت ثبت شد!',
                            icon: 'success',
                            confirmButtonText: 'باشه!'
                        })
                    }else{
                        loadSend.value = false;
                        Swal.fire({
                            title: 'ثبت نشد :(',
                            text: 'پیام شما با موفقیت ثبت نشد!',
                            icon: 'error',
                            confirmButtonText: 'باشه!'
                        })
                    }
                }
            }

        let slugs = inject('Slugs');
        return{sendMessage,contact,slugs,Loading,isLoading,loadSend}
        }

    }
</script>

<style>

</style>