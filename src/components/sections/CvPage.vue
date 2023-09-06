<template>
            <section id="CvMe" class="cvMe c_h w-100 h-100 align-content-center justify-content-center align-items-center  position-absolute left_h">
                <div class="seBox position-relative mCustomScrollbar p-1">
                    <div class="boxScroll mCustomScrollBox">
                        <div class="Tt_Head d-flex flex-column justify-content-center align-items-center NoSelect my-5">
                            <h2 class="text-dark-white fs-1 fw-bolder vazir">رزومه</h2>
                            <span class="px-2 MainColor text-white yekan  mt-2">{{slugs.Slug_Cvme}}</span>
                        </div>
                        <div class="content mx-3 mx-lg-4 my-5 pb-3">
                            <div class="col-12 d-inline-flex flex-column flex-xl-row gap-4">
                                <div class="right col-12 col-xl-8 d-flex flex-column flex-md-row fs-0 gap-md-5">
                                    <div class="education pe-2 p-lg-0 col-12 col-md-5">
                                        <div class="titlePart">
                                            <span class="vazir fs-5 fw-bolder text-white text-td-if ps-2 BorderMainColor">تحصیلات</span>
                                        </div>
                                        <template v-for="(education,key) in educations" :key="key">
                                            <ul class="mt-3 mb-5">
                                                <li class="item list-unstyled">
                                                    <span class="titleEd yekan fs-8 MainColor px-3 py-1 text-white">{{education.study_time}}</span>
                                                    <div class="ms-3 mt-4">
                                                        <h4 class="yekan fs-6 fw-bold p-0  text-white  text-td-if">{{education.title}}</h4>
                                                        <small class="vazir d-block text-muted my-1 fs-10">{{education.place}}</small>
                                                        <p class="text-justify yekan text-dark-white text-td-if fs-7">{{education.descript}}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </template>
                                    </div>
                                    <!-- education -->
                                    <div class="experience col-5">
                                        <div class="titlePart">
                                            <span class="vazir fs-5 fw-bolder text-white ps-2 BorderMainColor  text-td-if">تجربه</span>
                                        </div>
                                        <template v-for="(experience,key) in experiences" :key="key">
                                            <ul class="mt-3 mb-5">
                                                <li class="item list-unstyled">
                                                    <span class="titleEd yekan fs-8 MainColor px-3 py-1  text-white">{{experience.experience_time}}</span>
                                                    <div class="ms-3 mt-4">
                                                        <h4 class="yekan fs-6 fw-bold p-0 text-white  text-td-if">{{experience.title}}</h4>
                                                        <small class="vazir d-block text-muted my-1 fs-10">{{experience.place}}</small>
                                                        <p class="text-justify yekan text-dark-white text-td-if fs-7">{{experience.descript}}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </template>
                                       
                                    </div>
                                    <!-- experience -->
                                </div>
                                <!-- Right -->
                                <div class="left col-12 col-md-8 col-lg-6 col-xl-4 d-inline-flex">
                                    <div class="Skill col-12 col-8 flex-column">
                                        <template v-for="(skillCat,key) in skills" :key="key">
                                            <div class="mb-5 mt-2">
                                                <div class="titlePart">
                                                    <span class="vazir fs-5 fw-bolder text-white ps-2 BorderMainColor text-td-if">{{skillCat.title}}</span>
                                                </div>
                                                <ul class="mt-4">
                                                    <template v-for="(skill,key) in skillCat.skills" :key="key">
                                                        <li class="list-unstyled px-2 mb-5 mb-lg-4">
                                                            <h5 class="fs-8 fw-bold vazir text-white text-td-if">{{skill.title}}</h5>
                                                            <div class="progressBar" :data-w="skill.percentage">
                                                                <span class="progressBox border border-1 border-secondary d-block w-100">
                                                                    <span class="progressLine MainColor d-block" ></span>
                                                                </span>

                                                            </div>
                                                        </li>
                                                    </template>
                                                </ul>
                                            </div>
                                        </template>
                                        
                                    </div>
                                    <!-- Skill -->
                                </div>
                                <!-- left -->
                            </div>
                            <div>                                
                                <a :href="cvme.file" class="btn border border-2 BorderMainColor HoverMainColor text-white d-inline-block py-2 px-3 mb-5 yekan text-td-if">
                                    دانلود رزومه من
                                </a>
                            </div>
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
import { inject, onMounted, onUpdated, ref } from 'vue'
import Loading from '../LoadingComponent.vue'

/*eslint-disable no-undef*/
/* eslint-disable vue/no-ref-as-operand */
export default{
    components:{
        Loading
    },
    setup(){

        let mycv = ref();
        let cvme = ref({});
        let educations = ref({});
        let experiences = ref({});
        let skillsCategory = ref();
        let skills = ref({});
        let isLoading= ref(false);
        isLoading.value = true;
        async function Cvme(){
            let res = await fetch('http://localhost:8000/api/v1/cvme');
            if(res.ok){
                mycv.value = await res.json();
                cvme.value = mycv._rawValue.data.cvme[0];
                const obj_edt = Object.entries(mycv._rawValue.data.education);
                for (let [key,val] of obj_edt) {
                    educations.value[key] = val;
                }
                const obj_exp = Object.entries(mycv._rawValue.data.experience);
                for(let [key,val] of obj_exp){
                    experiences.value[key] = val;
                }
            }

            
            res = await fetch('http://localhost:8000/api/v1/skills');
            if(res.ok){
                skillsCategory.value = await res.json();
                const obj_sc = Object.entries(skillsCategory._rawValue.data.Skill)
                for(let [key,val] of obj_sc){
                    skills.value[key]=val;
                }
            }
            isLoading.value = false;
        }
        Cvme()
        onMounted(()=>{
            SJ.loadWindow();
        })
        onUpdated(()=>{
            SJ.progress();
        })
        let slugs = inject('Slugs');

        return {cvme,educations,experiences,skills,slugs,Loading,isLoading}
    }

}

</script>
