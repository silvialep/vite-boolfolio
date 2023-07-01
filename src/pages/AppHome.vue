<script>


export default {

    name: 'AppHome',

    data() {
        return {
        }
    },

    components: {
    },

    props: {

    },

    created() {
    },

    methods: {
    },



}


</script>

<template>
    <div class="container" id="home-container">
        <h1>Benvenuti nel mio Boolfolio</h1>
    </div>
    <div>
        <!-- <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a> -->
        <router-link class="single-link" :to="{ name: 'login' }">Login</router-link>
    </div>
</template>

<style lang="scss" scoped>

#home-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 50px 0;
    margin: 100px auto 0;

    h1 {
        color: #cf4fa0;
    }

}
</style>








