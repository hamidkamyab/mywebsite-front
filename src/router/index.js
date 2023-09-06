import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/sections/HomePage.vue'
import AboutePage from '../components/sections/AboutPage.vue'
import CvPage from '../components/sections/CvPage.vue'
import PortfoliosPage from '../components/sections/PortfolioPage.vue'
import PortfolioPage from '../components/PopUpBox.vue'
import ContactPage from '../components/sections/ContactPage.vue'
import NotFoundPage from '../components/NotFoundComponent.vue'
import 'animate.css';

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomePage,
            meta: {
                enterClass: 'animate__animated animate__bounceIn',
                leaveClass: 'animate__animated animate__bounceOut'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: AboutePage,
            meta: {
                enterClass: 'animate__animated animate__fadeInLeftBig',
                leaveClass: 'animate__animated animate__bounceOut'
            }
        },
        {
            path: '/cvme',
            name: 'cvme',
            component: CvPage,
            meta: {
                enterClass: 'animate__animated animate__fadeInRightBig',
                leaveClass: 'animate__animated animate__bounceOut'
            }
        },
        {
            path: '/portfolios',
            name: 'portfolios',
            component: PortfoliosPage,
            meta: {
                enterClass: 'animate__animated animate__fadeInDownBig',
                leaveClass: 'animate__animated animate__bounceOut'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage,
            meta: {
                enterClass: 'animate__animated animate__fadeInUpBig',
                leaveClass: 'animate__animated animate__bounceOut'
            }
        },
        {
            path: '/portfolios/:id',
            name: 'portfolio',
            component: PortfolioPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundPage,
            meta: {
                enterClass: 'animate__animated animate__fadeInUpBig',
                leaveClass: 'animate__animated animate__bounceOut'
            }
        }
    ]
})
export default router