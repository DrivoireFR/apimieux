<template>
    <Wrapper>
        <Title>
            Vos utilisateurs
        </Title>

        <table class="table-auto users-list w-full max-x-screen-md text-left whitespace-no-wrap">
            <thead>
                <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Nom</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Id</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-emerald-300 text-emerald-800" v-for="(item, index) in users" :key="index">
                    <td class="px-4 py-3">{{ item.name }}</td>
                    <td class="px-4 py-3">{{ item.id }}</td>
                    <td class="px-4 py-3">
                        <router-link :to="`/user/id:${ item.id }`">Edit</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </Wrapper>
</template>

<script>
import Card from '../components/Card.vue'
import Title from '../components/Title.vue'

export default {
    name: 'Clients',
    components: {
        Card,
        Title
    },
    data () {
        return {
            users: [
                {
                    name: 'Machin',
                    id: '0'
                },
                {
                    name: 'Truc',
                    id: '1'
                },
                {
                    name: 'Robin',
                    id: '2'
                },
                {
                    name: 'Sonny',
                    id: '3'
                },
                {
                    name: 'L\'autre',
                    id: '4'
                }
            ]
        }
    }
}
</script>