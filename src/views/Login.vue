<template>
    <Wrapper>
        <Title>
            Connexion
        </Title>

        <Card class="w-full max-w-md">
            <label for="mail-input" class="text-lg text-white">
                Username
                <input id="mail-input" v-model="form.username" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="password-input" class="text-lg text-white">
                Password
                <input id="password-input" v-model="form.password" type="password" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <input class="p-4 bg-white rounded-md text-emerald-400 shadow-md cursor-pointer hover:text-white hover:bg-emerald-300 transition-all" type="submit" value="Se connecter" @click="login">

            <p class="error text-red-600 mt-4" v-for="(err, index) in errors" :key="index">{{ err }}</p>
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
            errors: [],
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        async login () {
            try {
                this.errors = []
                const headers = {
                    'Content-Type': 'application/json',
                    // 'Authorization': localStorage.getItem('token')
                }
                const login = await this.$axios.post('/api/services/controller/user/login', this.form, {headers: headers})
                // this.$axios.defaults.headers.common['Authorization'] = login.data


                localStorage.setItem("token", login.data)

                this.$router.push('/agencies')
            }
            catch(err) {
                this.errors.push(err)
                console.log(err)
            }
        }
    }
}
</script>
