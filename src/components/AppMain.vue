<script>

import axios from "axios";

import ProjectCard from './ProjectCard.vue';

export default {

    name: 'AppMain',

    data() {
        return {
            projects: [],

            currentPage: 1,
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
        <button>Avanti</button>
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
    


    #single-card {
        border-radius: 10px;
        background-color: rgb(74, 53, 53);
        width: calc(100% / 2);
    }
}
</style>








