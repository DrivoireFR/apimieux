import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Agencies from "../views/Agencies.vue";
import EditAgency from "../views/EditAgency.vue";
import Clients from "../views/Clients.vue";
import Users from "../views/Users.vue";
import Properties from "../views/Properties.vue";
import AddProperty from "../views/AddProperty.vue";
import AddAgency from "../views/AddAgency.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/agencies",
    name: "Agencies",
    component: Agencies,
  },
  {
    path: "/edit-agency",
    name: "Edit agency",
    component: EditAgency,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/properties",
    name: "Properties",
    component: Properties,
  },
  {
    path: "/add-property",
    name: "AddProperty",
    component: AddProperty,
  },
  {
    path: "/add-agency",
    name: "AddAgency",
    component: AddAgency,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;