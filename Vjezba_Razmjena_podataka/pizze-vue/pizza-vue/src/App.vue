<template>
    <Header />
    <PizzaList />
    <div class="mx-auto bg-linear-to-br min-h-screen p-8 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat"></div>
</template>

<script setup>
    import Header from './components/Header.vue';
    import PizzaList from './components/PizzaList.vue';
</script>