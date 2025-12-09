<template>
    <body>
    <div class="mx-auto bg-linear-to-br min-h-screen p-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Pizza 1 -->
            <div @click="odaberiPizzu('Margherita')">
    <div 
        v-for="pizza in pizze"
        :key="pizza.id"
        @click="odaberiPizzu(pizza)"
        :class="[
          'bg-inherit rounded-xl overflow-hidden cursor-pointer transition-all duration-300',
          odabrana_pizza.naziv === pizza.naziv
            ? 'ring-4 ring-orange-300 shadow-lg shadow-orange-300/50 scale-[1.02]'
            : 'hover:scale-[1.01]',
        ]">
        <div class="w-full h-48 flex items-center justify-center bg-inherit overflow-hidden rounded-xl">
              <img :src="pizza.slika_url" :alt="pizza.naziv" class="w-full h-full object-contain" />
            </div>
             </div>
                <div class="p-6">
                    <div class="flex items-center space-x-3 mb-4">
                        <h2 class="text-lg font-bold text-orange-500 tracking-wide">{{pizza.naziv}}</h2>

                        <div class="flex space-x-2">
                            <div v-for="sastojak in pizze.sastojci" 
                            :key="sastojak" 
                            class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-slate-50 font-semibold text-xs">Icon</div>
                            <v-icon :name="ikoneSastojaka[sastojak]" />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Mala</span>
                            <span>{{ pizza.cijene.mala }}</span>
                        </div>

                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Srednja</span>
                            <span>{{ pizza.cijene.srednja }}</span>
                        </div>

                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Jumbo</span>
                            <span>{{ pizza.cijene.jumbo }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pizza 2 -->
            <div @click="odaberiPizzu('Capricciosa')">
            <div class="bg-inherit rounded-xl overflow-hidden">
                <div class="w-full h-48 flex items-center justify-center bg-inherit overflow-hidden rounded-xl">
                    <img :src="pizza.slika_url" :alt="pizza.naziv" class="w-full h-full object-contain" />
                </div>
                    </div>
                <div class="p-6">
                    <div class="flex items-center space-x-3 mb-4">
                        <h2 class="text-lg font-bold text-orange-500 tracking-wide">{{pizza.naziv}}</h2>

                        <div class="flex space-x-2">
                            <div v-for="sastojak in pizze.sastojci" 
                            :key="sastojak" 
                            class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-slate-50 font-semibold text-xs">Icon</div>
                            <v-icon :name="ikoneSastojaka[sastojak]" />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Mala</span>
                            <span>{{ pizza.cijene.mala }}</span>
                        </div>

                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Srednja</span>
                            <span>{{ pizza.cijene.srednja }}</span>
                        </div>

                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Jumbo</span>
                            <span>{{ pizza.cijene.jumbo }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pizza 3 -->
        <div @click="odaberiPizzu('Slavonska')">
            <div class="bg-inherit rounded-xl overflow-hidden">
                <div class="w-full h-48 flex items-center justify-center bg-inherit overflow-hidden rounded-xl">
                        <img :src="pizza.slika_url" :alt="pizza.naziv" class="w-full h-full object-contain" />
                </div>
                    </div>
                <div class="p-6">
                    <div class="flex items-center space-x-3 mb-4">
                        <h2 class="text-lg font-bold text-orange-500 tracking-wide">{{pizza.naziv}}</h2>

                        <div class="flex space-x-2">
                            <div v-for="sastojak in pizze.sastojci" 
                            :key="sastojak" 
                            class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-slate-50 font-semibold text-xs">Icon</div>
                            <v-icon :name="ikoneSastojaka[sastojak]" />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Mala</span>
                            <span>{{ pizza.cijene.mala }}</span>
                        </div>

                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Srednja</span>
                            <span>{{ pizza.cijene.srednja }}</span>
                        </div>

                        <div class="flex justify-between text-gray-700">
                            <span class="font-medium">Jumbo</span>
                            <span>{{ pizza.cijene.jumbo }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
    <OrderFooter v-if="odabrana_pizza" :odabrana-pizza="odabrana_pizza" /> <!-- ako je odabrana pizza, prikaži OrderFooter komponentu i proslijedit taj objekt -->
</template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import OrderFooter from './OrderFooter.vue';
    import { onMounted } from 'vue';
    // uvoz potrebnih ikona
    import { GiTomato, GiCheeseWedge, GiSlicedMushroom, IoLeafSharp, CoHotjar, GiMilkCarton, GiBellPepper, LaPepperHotSolid, GiCannedFish, GiGarlic, FaBacon, GiHamShank } from 'oh-vue-icons/icons';
    // app/pizza-vue/src/components/PizzaList.vue
    import { addIcons } from 'oh-vue-icons';
    // registracija ikona koje ćemo koristiti
    addIcons(GiTomato, GiCheeseWedge, GiSlicedMushroom, IoLeafSharp, GiBellPepper, GiHamShank, LaPepperHotSolid, GiCannedFish, GiGarlic, FaBacon, CoHotjar, GiMilkCarton);

    const odabrana_pizza = ref(null); // reaktivna varijabla za pohranu naziva odabrane pizze

    // app/pizza-vue/src/components/PizzaList.vue

    function odaberiPizzu(pizza) {
        odabrana_pizza.value = pizza; // pohranjujemo cijeli objekt pizze
        console.log('Odabrana pizza:', pizza);
    }
    async function fetchPizze() {
        try {
            const response = await axios.get('http://localhost:3000/pizze'); // dodajemo await kako bi sačekali odgovor asiknrone funkcije
            pizze.value = response.data; // pohrana podataka o pizzama u reaktivnu varijablu
            console.log(pizze.value); // ispisuje podatke o pizzama nakon dohvaćanja HTTP odgovora
        } catch (error) {
            console.error('Greška pri dohvaćanju podataka o pizzama:', error);
        }
    }
    // u ovom slučaju onMounted ne treba biti async zato što ne koristimo await direktno unutar njega
    onMounted(() => {
        fetchPizze(); // pozivanje funkcije za dohvaćanje podataka o pizzama
    });

    const ikoneSastojaka = {
        rajčica: GiTomato,
        sir: GiCheeseWedge,
        gljive: GiSlicedMushroom,
        bosiljak: IoLeafSharp,
        paprika: GiBellPepper,
        šunka: GiHamShank,
        'feferoni ljuti': LaPepperHotSolid,
        tunjevina: GiCannedFish,
        'crveni luk': GiGarlic, // nema ikone za luk :(
        panceta: FaBacon,
        kulen: CoHotjar,
        vrhnje: GiMilkCarton // nema ni ikone za vrhnje pa ćemo staviti mlijeko
    };
</script>

<style>
    /* Stilovi komponente (CSS) */
</style>