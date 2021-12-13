<template>
    <Wrapper>
        <h1 class="agencies-title text-emerald-400 text-xl uppercase font-bold mb-8">Vos agences</h1>

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

export default {
    name: 'Agencies',
    components: {
        Card,
        Wrapper
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