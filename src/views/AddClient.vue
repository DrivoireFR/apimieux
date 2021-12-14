<template>
    <Wrapper>
        <Title>
            Ajouter un client
        </Title>

        <Card class="w-full max-w-lg">
            <label for="mail-input" class="text-lg text-white">
                Nom
                <input id="mail-input" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Prénom
                <input id="mail-input" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                email
                <input id="mail-input" type="mail" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <input class="p-4 bg-white rounded-md text-emerald-400 shadow-md cursor-pointer hover:text-white hover:bg-emerald-300 transition-all" type="submit" value="Ajouter la propriété" @click="addclient">
        </Card>
    </Wrapper>
</template>

<script>
import Card from '../components/Card.vue'
import Wrapper from '../components/Wrapper.vue'
import Title from '../components/Title.vue'

export default {
    name: 'AddClient',
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
        addClient () {
            console.log('add client')
        }
    }
}
</script>