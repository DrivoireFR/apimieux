<template>
    <Wrapper>
        <div class="properties-params flex justify-between items-center mb-16">
            <Title>
                Vos clients
            </Title>

            <button @click="addClient" class="properties-add w-20 h-20 flex justify-center items-center bg-emerald-400 text-white text-4xl rounded-xl shadow-md">+</button>
        </div>

        <table class="table-auto client-list w-full max-x-screen-md text-left whitespace-no-wrap">
            <thead>
                <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Nom</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Prénom</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Email</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Id</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-emerald-300 text-emerald-800" v-for="(item, index) in clients" :key="index">
                    <td class="px-4 py-3">{{ item.lastname }}</td>
                    <td class="px-4 py-3">{{ item.firstname }}</td>
                    <td class="px-4 py-3">{{ item.mail }}</td>
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
import Title from '../components/Title.vue'

export default {
    name: 'EditAgency',
    components: {
        Title
    },
    methods: {
        addClient () {
            this.$router.push('/add-client')
        }
    },
    data () {
        return {
            clients: [
                {
                    lastname: 'Machin',
                    firstname: 'Chose',
                    mail: 'test@mail.com',
                    id: '0'
                },
                {
                    lastname: 'Truc',
                    firstname: 'Chose',
                    mail: 'test@mail.com',
                    id: '1'
                },
                {
                    lastname: 'Robin',
                    firstname: 'Chose',
                    mail: 'test@mail.com',
                    id: '2'
                },
                {
                    lastname: 'Sonny',
                    firstname: 'Chose',
                    mail: 'test@mail.com',
                    id: '3'
                },
                {
                    lastname: 'L\'autre',
                    firstname: 'Chose',
                    mail: 'test@mail.com',
                    id: '4'
                }
            ]
        }
    }
}
</script>