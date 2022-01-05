<template>
    <Wrapper>
        <Title>
            Ajouter une agence
        </Title>

        <Card class="w-full max-w-lg">
            <label for="mail-input" class="text-lg text-white">
                Nom
                <input id="mail-input" v-model="name" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Entreprise
                <input id="mail-input" v-model="company" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Adresse
                <input id="mail-input" v-model="address" type="address" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <input class="p-4 bg-white rounded-md text-emerald-400 shadow-md cursor-pointer hover:text-white hover:bg-emerald-300 transition-all" type="submit" value="Ajouter la propriété" @click="addAgency">
        </Card>
    </Wrapper>
</template>

<script>
import Card from '../components/Card.vue'
import Wrapper from '../components/Wrapper.vue'
import Title from '../components/Title.vue'

export default {
    name: 'AddAgency',
    components: {
        Card,
        Title,
        Wrapper
    },
    data () {
        return {
            name: "",
            company: "",
            owner_id: 1,
            address: ""
        }
    },
    methods: {
        addAgency () {
            const vm = this
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }

            this.$axios.put('/agency', this, {headers: headers})
            .then((response) => {
                console.log(response)
                vm.$router.push('/agencies')
            })
            .catch( (err)=> {
                console.log(err)
            })
        }
    }
}
</script>