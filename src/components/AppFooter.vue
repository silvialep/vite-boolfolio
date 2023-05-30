<script>



export default {

    name: 'AppFooter',

    data() {
        return {

        }
    },

    props: {

    },

    emits: ['',

    ],

    components: {

    },


    computed: {

    },



}


</script>

<template>
    <footer class="text-center">
        <div class="container p-4 pb-0">
            <section class="mb-4">
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a>
            </section>
        </div>
        <div class="text-center p-3 footer-link" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a href="https://sooooolvia.com/">Silvia</a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

footer {
    height: 150px;
    background-color: rgb(36, 36, 36);

    .footer-link {
        color: white;

        a {
            text-decoration: none;
            color: white;
        }
    }
}
</style>



