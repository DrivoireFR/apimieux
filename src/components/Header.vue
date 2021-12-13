<template>
    <header class="header bg-emerald-400 shadow-md">
        <div class="header__container flex justify-between p-6">
            <img src="" alt="">

            <nav class="nav">
                <router-link
                v-for="(item, index) in nav"
                :key="index"
                class="m-6 text-white"
                :to="item.path"
            >
                {{ item.name }}
            </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            nav: [
                {
                    path: "/",
                    name: "Login"
                },
                {
                    path: "/agencies",
                    name: "Agencies"
                },
                {
                    path: "/edit-agency",
                    name: "Edit agency"
                },
                {
                    path: "/clients",
                    name: "Clients"
                },
                {
                    path: "/users",
                    name: "Users"
                },
                {
                    path: "/properties",
                    name: "Properties"
                }
            ]
        }
    }
}
</script>