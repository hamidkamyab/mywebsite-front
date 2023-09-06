<template>
              <section id="Home" class="home w-100 h-100 align-items-center justify-content-center position-absolute">
                <div class="d-flex flex-column justify-content-center align-items-center NoSelect">
                    <span class="vazir name TextMainColor">{{settings.Set_HomeTitle}}</span>
                    <div class="slug">
                        <ul class="d-flex justify-content-center position-relative w-100 h-100">
                            <li class="item showDeafult active list-unstyled d-inline-block w-100 h-100 text-center position-absolute yekan fs-6 fs-4-lg text-muted" data-num="1">
                                {{slugs.Slug_Home_1}}
                            </li>
                            <li class="item list-unstyled d-inline-block w-100 h-100 text-center position-absolute yekan fs-6 fs-4-lg text-muted" data-num="2">
                                {{slugs.Slug_Home_2}}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
</template>

<script>
import { inject, onMounted } from 'vue';

/* eslint-disable no-undef */
export default{
    setup() {
        let settings;
        settings = inject('Settings');
        let slugs;
        slugs = inject('Slugs');
        onMounted(()=>{
            SJ.loadWindow();
            SJ.homeSlug();
        });
        return {settings,slugs}
    }
}
</script>

<style>

</style>
