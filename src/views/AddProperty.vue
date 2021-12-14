<template>
    <Wrapper>
        <Title>
            Ajouter une propriété
        </Title>

        <Card class="w-full max-w-lg">
            <label for="mail-input" class="text-lg text-white">
                Nom
                <input id="mail-input" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Description
                <input id="mail-input" type="text" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
            </label>

            <label for="mail-input" class="text-lg text-white">
                Photo
                <input id="mail-input" type="file" class="text-emerald-400 bg-white rounded-sm p-4 w-full mb-8">
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

        }
    },
    methods: {
        addProperty () {
            console.log('add property')
        }
    }
}
</script>