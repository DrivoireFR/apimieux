<template>
    <Wrapper>
        <div class="properties-params flex justify-between items-center mb-16">
            <Title>
                Vos agences
            </Title>

            <button @click="addAgency" class="properties-add w-20 h-20 flex justify-center items-center bg-emerald-400 text-white text-4xl rounded-xl shadow-md">+</button>
        </div>

        <div class="agencies-list grid grid-cols-2 gap-x-8 sm:grid-cols-3 gap-x-16 md:grid-cols-4">
            <router-link
                v-for="(item, index) in agencies" :key="index"
                :to="`/agency/id:${ item.id }`"
            >
                <Card
                    class="card-agency p-8"
                >
                    <p class="card-agency-name text-white font-bold uppercase">
                        {{ item.name }}
                    </p>
                </Card>
            </router-link>
        </div>
    </Wrapper>
</template>

<script>
import Card from '../components/Card.vue'
import Wrapper from '../components/Wrapper.vue'
import Title from '../components/Title.vue'

export default {
    name: 'Agencies',
    components: {
        Card,
        Wrapper,
        Title
    },
    methods: {
        addAgency () {
            console.log('add agency')
        }
    },
    data () {
        return {
            agencies: [
                {
                    name: 'Agences 1',
                    id: '0'
                },
                {
                    name: 'Agences 2',
                    id: '1'
                },
            ]
        }
    }
}
</script>

<style>

</style>