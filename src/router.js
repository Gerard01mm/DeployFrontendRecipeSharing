import {createWebHistory, createRouter} from "vue-router";

import HomePage from "./pages/HomePage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import AddRecipePage from "./pages/AddRecipePage.vue";
import ProfilePage from "./pages/ProfilePage.vue"
import RecipePage from "./pages/RecipePage.vue"

const routes = [
  {
    path: "",
    component: HomePage,
    name: "home",
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/addRecipe",
    component: AddRecipePage,
    name: "addRecipe",
  },
  {
    path: "/profile",
    component: ProfilePage,
    name: "profile",
  },
  {
    path: "/recipePage",
    component: RecipePage,
    name: "recipePage",
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;