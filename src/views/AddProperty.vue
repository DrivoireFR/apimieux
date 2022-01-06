<template>
    <Wrapper>
        <Title>
            Ajouter une propriété
        </Title>

        <Card class="w-full max-w-lg">
            <label for="mail-input" class="text-lg text-white">
                Nom
                <input id="mail-input" v-model="name" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Adresse
                <input id="mail-input" v-model="address" type="address" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Surface
                <input id="mail-input" v-model="area" type="number" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Prix
                <input id="mail-input" v-model="price" type="number" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <input class="p-4 bg-white rounded-md text-emerald-400 shadow-md cursor-pointer hover:text-white hover:bg-emerald-300 transition-all" type="submit" value="Ajouter la propriété" @click="addProperty">
        </Card>
    </Wrapper>
</template>

<script>
import Card from '../components/Card.vue'
import Wrapper from '../components/Wrapper.vue'
import Title from '../components/Title.vue'

export default {
    name: 'AddProperty',
    components: {
        Card,
        Title,
        Wrapper
    },
    data () {
        return {
            name: "",
            agent: null,
            address: "",
            area: null,
            agency: null,
            price: null
        }
    },
    methods: {
        addProperty () {
            const vm = this
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }

            this.$axios.put('/property', this, {headers: headers})
            .then((response) => {
                console.log(response)
                vm.$router.push('/properties')
            })
            .catch( (err)=> {
                console.log(err)
            })
        }
    }
}
</script>