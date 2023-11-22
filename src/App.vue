<template>
    <div>
        <router-view :logged="logged" :username="username" @login-success="onLoginSuccess"
                     @username-success="onUsernameSuccess" @email-success="onEmailSuccess"
                     @password-sucess="onPasswordSuccess"/>

        <AppHeader :logged="logged" :username="username" :email="email" :password="password"/>
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
    components: {
        AppHeader,
    },
    data() {
        return {
            logged: localStorage.getItem('logged') === 'true',
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
        };
    },
    methods: {
        onLoginSuccess(logged) {
            this.logged = logged;
            localStorage.setItem('logged', logged);
        },
        onUsernameSuccess(username) {
            this.username = username;
            localStorage.setItem('username', username);
        },
        onEmailSuccess(email) {
            this.email = email;
            localStorage.setItem('email', email);
        },
        onPasswordSuccess(password) {
            this.password = password;
            localStorage.setItem('password', password);
        },
    },
};
</script>
