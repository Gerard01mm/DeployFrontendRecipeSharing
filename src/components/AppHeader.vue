<template>
    <header class="app-header">
        <div class="image-container">
            <img class="button-image-logo" @click="handleLogoClick" src="../assets/images/Logo.png" alt="Button">
            <img class="image" :src="imageUrl" alt="Image">
            <!-- Use the v-if directive to show the user button only if the user is logged in -->
            <AppHeaderUserButton :logged="logged" :username="username" :email="email" :password="password"/>
            <div class="text-overlay">
                <p class="animated-title">{{ title }}</p>
            </div>
        </div>
    </header>
</template>

<script>

import AppHeaderUserButton from "@/components/AppHeaderUserButton.vue";

export default {
    props: {
        logged: Boolean,
        username: String,
        email: String,
        password: String,
    },
    components: {
        AppHeaderUserButton,
    },
    data() {
        return {
            title: "Chef's Nook",
            imageUrl: require("../assets/images/HeaderImage.jpg"),
        };
    },
    methods: {
        handleLogoClick() {
            // Logic for the logo click
            // You can use Vue Router to navigate to the main page:
            this.$router.push('/');
        },
    },
};

</script>

<style scoped>

.app-header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}

.image-container {
    position: relative;
    height: 100px;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-overlay {
    position: absolute;
    top: 0;
    left: 300px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-overlay p {
    color: #fff;
    font-style: oblique;
    font-size: 1cm;
    text-align: center;
}

.animated-title {
    color: #fff;
    font-size: 24px;
    animation: bounce 10s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
}

.button-image-logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    margin-top: 12px;
    margin-left: 20px;
    border-radius: 50%;
}

</style>
