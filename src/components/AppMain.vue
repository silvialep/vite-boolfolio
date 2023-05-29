<script>

import axios from "axios";

import ProjectCard from './ProjectCard.vue';

export default {

    name: 'AppMain',

    data() {
        return {
            projects: [],
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
            axios.get('http://127.0.0.1:8000/api/projects').then(response => {
                this.projects = response.data.results;
            });
        },
    },



}


</script>

<template>

    <div id="main-container" class="container">
        <ProjectCard :project="project" v-for="project in projects" class="single-card"></ProjectCard>
    </div>



</template>

<style lang="scss" scoped>

#main-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 50px 0;
    margin: auto;


    .single-card {
        width: calc(100% / 2);
    }
}
</style>








