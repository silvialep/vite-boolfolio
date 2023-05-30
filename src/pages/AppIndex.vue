<script>

import axios from "axios";

import ProjectCard from '../components/ProjectCard.vue';

export default {

    name: 'AppIndex',

    data() {
        return {
            projects: [],

            currentPage: 1,

            pagination: {},
        }
    },

    components: {
        ProjectCard,
    },

    props: {

    },

    created() {
        this.getProjects();
    },

    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects?page=' + this.currentPage).then(response => {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;
            });
        },
    },



}


</script>

<template>
    <div class="container" id="main-container">
        <ProjectCard :project="project" v-for="project in projects" id="single-card"></ProjectCard>
    </div>
    <div class="container my-3 d-flex justify-content-center">
        <button class="btn">Avanti</button>
    </div>
</template>

<style lang="scss" scoped>

#main-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 50px 0;
    margin: 100px auto 0;
    height: calc(100vh - 250px);


    #single-card {
        border-radius: 10px;
        background-color: rgb(109, 74, 74);
        width: calc(100% / 2);
    }

}
button {
    color: rgb(5, 19, 32);
    background-color: rgb(109, 74, 74);
}
</style>








