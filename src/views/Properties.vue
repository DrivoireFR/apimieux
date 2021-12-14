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
    methods: {
        addProperty () {
            this.$router.push('/add-property')
        }
    },
    data () {
        return {
            properties: [
                {
                    title: 'Maison 1',
                    desc: 'Suspendisse potenti. Ut tincidunt tincidunt erat. Suspendisse eu ligula. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
                    img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                },
                {
                    title: 'Maison 2',
                    desc: 'Suspendisse potenti. Suspendisse eu ligula. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
                    img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                },
                {
                    title: 'Maison 3',
                    desc: 'Tincidunt tincidunt erat. Suspendisse eu ligula. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
                    img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                },
            ]
        }
    }
}
</script>