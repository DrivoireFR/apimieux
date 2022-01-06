<template>
    <div class="card-property relative bg-emerald-400 shadow-lg rounded-2xl shadow-md">
        <!-- <div @click="deleteCard" class="card-delete w-6 h-6 bg-red-300 rounded-full absolute top-0 right-0 translate-x-1 -translate-y-1 cursor-pointer"></div> -->

        <figure class="w-full h-42 rounded-t-2xl overflow-hidden">
            <img class="w-full h-full object-cover" :src="img">
        </figure>

        <div class="card-property p-8 rounded-b-2xl">
            <h3 class="card-property-title text-white font-bold text-lg mb-2">
                {{ item.name }}
            </h3>

            <p class="card-property-desc text-white">
                {{ item.address }}
            </p>

            <p class="card-property-desc text-white">
                {{ item.price }}$
            </p>

            <p class="card-property-desc text-white">
                {{ item.area }}m2
            </p>

            <router-link class="text-white text-lg font-bold pointer-events-none" :to="`/properties/id:${item.id}`">Voir plus</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: {
                name: "Le beau bien",
                agent: null,
                address: "lirliuhdv",
                area: 200,
                agency: null,
                price: 199999999
            }
        }, 
    },
    methods: {
        // deleteCard() {
        //     const vm = this
        //     const headers = {
        //         'Content-Type': 'application/json',
        //         'Authorization': localStorage.getItem('token')
        //     }

        //     this.$axios.delete('/property', id, {headers: headers})
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch( (err)=> {
        //         console.log(err)
        //     })
        // }
    },
    data() {
        return {
            img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    } 
}
</script>