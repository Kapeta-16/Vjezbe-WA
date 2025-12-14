import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css';
import {OhVueIcon} from 'oh-vue-icons';
import { addIcons } from 'oh-vue-icons';
import { GiTomato, GiCheeseWedge, GiSlicedMushroom, IoLeafSharp, CoHotjar, GiMilkCarton, GiBellPepper, LaPepperHotSolid, GiCannedFish, GiGarlic, FaBacon, GiHamShank } from 'oh-vue-icons/icons';
addIcons(GiTomato, GiCheeseWedge, GiSlicedMushroom, IoLeafSharp, GiBellPepper, GiHamShank, LaPepperHotSolid, GiCannedFish, GiGarlic, FaBacon, CoHotjar, GiMilkCarton);


const app = createApp(App)

app.use(router)

app.component('v-icon', OhVueIcon); // mapiraj OhVueIcon komponentu na "v-icon" HTML tag

app.mount('#app')



