<template>
    <Wrapper>
        <Title>
            Connexion
        </Title>

        <Card class="w-full max-w-md">
            <label for="mail-input" class="text-lg text-white">
                Email
                <input id="mail-input" v-model="form.username" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Password
                <input id="mail-input" v-model="form.password" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
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
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        async login () {
            const login = await this.$axios.post('/api/services/controller/user/login', this.form)
            this.$axios.defaults.headers.common['Authorization'] = login.data
            
            
            const getUsers = await this.$axios.get('/users')
            console.log(getUsers)
        
        }
    }
}
</script>

<style>

</style>