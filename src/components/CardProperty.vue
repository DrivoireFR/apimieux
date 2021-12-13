<template>
    <div class="card-property bg-emerald-400 shadow-lg rounded-2xl shadow-md">
        <figure class="w-full h-72 rounded-t-2xl overflow-hidden">
            <img class="w-full h-full object-cover" :src="item.img">
        </figure>

        <div class="card-property p-8 rounded-b-2xl">
            <h3 class="card-property-title text-white font-bold text-lg mb-2">
                {{ item.title }}
            </h3>

            <p class="card-property-desc text-white mb-4">
                {{ item.desc }}
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
                title: 'Titre',
                desc: 'Suspendisse potenti. Ut tincidunt tincidunt erat. Suspendisse eu ligula. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.',
                img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                id: 0
            }
        }, 
    }
}
</script>