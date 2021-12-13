<template>
    <Card class="w-full max-w-md">
        <h1 class="text-white text-xl uppercase font-bold mb-8"> Connexion</h1>

        <label for="mail-input" class="text-lg text-white">
            Email
            <input id="mail-input" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
        </label>

        <label for="mail-input" class="text-lg text-white">
            Password
            <input id="mail-input" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
        </label>

        <input class="p-4 bg-white rounded-md text-emerald-400 shadow-md cursor-pointer hover:text-white hover:bg-emerald-300 transition-all" type="submit" value="Se connecter">
    </Card>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    name: 'Login',
    components: {
        Card
    },
    data () {
        return {

        }
    }
}
</script>

<style>

</style>