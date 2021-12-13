<template>
    <header class="header bg-emerald-400 shadow-md">
        <div class="header__container flex justify-between p-6">
            <img src="" alt="">

            <nav class="nav">
                <router-link class="m-4 text-white" to="/"> Login </router-link>
                <router-link class="m-4 text-white" to="/agencies"> Agences </router-link>
                <router-link class="m-4 text-white" to="/users"> Users </router-link>
                <router-link class="m-4 text-white" to="/clients"> Clients </router-link>
                <router-link class="m-4 text-white" to="/properties"> Propriétés </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            logedIn: false
        }
    },
    mounted() {

    }
}
</script>