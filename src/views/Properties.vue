<template>
    <div class="properties">
        <Wrapper>
            <div class="properties-params flex justify-between items-center mb-16">
                <Title>
                    Vos propriétés
                </Title>

                <button @click="addProperty" class="properties-add w-20 h-20 flex justify-center items-center bg-emerald-400 text-white text-4xl rounded-xl shadow-md">+</button>
            </div>

            <div class="properties grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <CardProperty
                    v-for="(item, index) in properties"
                    :key="index"
                    :item="item"
                />
            </div>
        </Wrapper>
    </div>
</template>

<script>
import Wrapper from '../components/Wrapper.vue'
import CardProperty from '../components/CardProperty.vue'
import Title from '../components/Title.vue'

export default {
    name: 'Properties',
    components: {
        Wrapper,
        CardProperty,
        Title
    },
    created () {
        const vm = this
        const headers = {
            'Authorization': localStorage.getItem('token')
        }

        this.$axios.get('/properties', {headers: headers})
        .then((response) => {
            console.log(response)
            vm.properties = response.data
        })
        .catch( (err)=> {
            console.log(err)
        })
    },
    methods: {
        addProperty () {
            this.$router.push('/add-property')
        }
    },
    data () {
        return {
            properties: [
                // {
                //     name: "Le beau bien",
                //     agent: null,
                //     address: "lirliuhdv",
                //     area: 200,
                //     agency: null,
                //     price: 199999999
                // },
                // {
                //     name: "Le beau bien",
                //     agent: null,
                //     address: "lirliuhdv",
                //     area: 200,
                //     agency: null,
                //     price: 199999999
                // },
                // {
                //     name: "Le beau bien",
                //     agent: null,
                //     address: "lirliuhdv",
                //     area: 200,
                //     agency: null,
                //     price: 199999999
                // },
            ]
        }
    }
}
</script>