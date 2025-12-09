<template>
<!--slika pizze-->
<img :src="url_slike_ovdje" alt="slika ovdje" class="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover shadow-md shadow-black/40" />
<!--naziv pizze-->
<h3 class="font-bold tracking-wide text-base sm:text-lg text-orange-400">{{ naziv_pizze_ovdje }}</h3>
<!--veličine i cijene-->
<div class="flex items-center justify-center sm:justify-start flex-wrap gap-2 w-full sm:w-auto">
    <button
        v-for="(cijena, velicina) in odabranaPizza.cijene"
        :key="velicina"
        class="px-3 py-1 cursor-pointer rounded-lg border border-slate-500 bg-slate-600/40 hover:bg-orange-500 hover:border-orange-400 hover:text-white transition-all text-sm sm:text-base"
    >
        {{ velicina }} – {{ cijena }}€
    </button>
</div>
</template>

<script setup>
const props = defineProps({
    odabranaPizza: {
        type: Object,
        required: true // označava da je ovaj prop obavezan
    }
});
</script>