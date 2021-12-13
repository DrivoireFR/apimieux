<template>
    <Wrapper>
        <Title>
            Connexion
        </Title>

        <Card class="w-full max-w-md">
            <label for="mail-input" class="text-lg text-white">
                Email
                <input id="mail-input" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Password
                <input id="mail-input" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <input class="p-4 bg-white rounded-md text-emerald-400 shadow-md cursor-pointer hover:text-white hover:bg-emerald-300 transition-all" type="submit" value="Se connecter" @click="login">
        </Card>
    </Wrapper>
</template>

<script>
import Card from '../components/Card.vue'
import Wrapper from '../components/Wrapper.vue'
import Title from '../components/Title.vue'

export default {
    name: 'Login',
    components: {
        Card,
        Title,
        Wrapper
    },
    data () {
        return {

        }
    },
    methods: {
        login () {
            console.log('login')
            this.$store.commit('login')
        }
    }
}
</script>

<style>

</style>