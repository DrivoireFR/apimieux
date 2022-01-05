<template>
    <div class="card-property bg-emerald-400 shadow-lg rounded-2xl shadow-md">
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

            <router-link class="text-white text-lg font-bold" :to="`/properties/id:${item.id}`">Voir plus</router-link>
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
    data() {
        return {
            img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    } 
}
</script>