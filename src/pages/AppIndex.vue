<script>

import axios from "axios";

import ProjectCard from '../components/ProjectCard.vue';

export default {

    name: 'AppIndex',

    data() {
        return {
            projects: [],

            apiUrl: 'http://127.0.0.1:8000/api/projects',

            pagination: {},

        }
    },

    components: {
        ProjectCard,
    },

    props: {

    },

    created() {
        this.getProjects(this.apiUrl);
    },

    methods: {
        getProjects(apiUrl) {
            axios.get(apiUrl).then(response => {
                // console.log(response.data);
                this.projects = response.data.results.data;
                this.pagination = response.data.results;
                console.log('pagination: ', this.pagination);
            });
        },

    },



}


</script>

<template>
    <div v-if="projects.length > 0" class="container" id="main-container">
        <ProjectCard :project="project" v-for="project in projects"></ProjectCard>
    </div>
    <div v-else class="container" id="loader-container">
        <div class="d-flex justify-content-center">
            <div class="spinner-grow text-light" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

    <div class="container my-3 d-flex justify-content-center gap-1">
        <button class="btn btn-outline-light" :disabled="pagination.current_page == pagination.first_page_url.substr(pagination.first_page_url.length - 1) ? true : false" @click="getProjects(pagination.first_page_url)">First</button>
        <button class="btn" 
        v-for="link in pagination.links" 
        v-html="link.label" 
        :disabled="link.url == null ? true : false" 
        :class="link.active ? 'btn-danger' : 'btn-outline-light'" 
        @click="getProjects(link.url)"></button>
        <button class="btn btn-outline-light" :disabled="pagination.current_page == pagination.last_page_url.substr(pagination.last_page_url.length - 1) ? true : false" @click="getProjects(pagination.last_page_url)">Last</button>
    </div>
</template>

<style lang="scss" scoped>

#loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 250px);
}

#main-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 50px 0;
    margin: 100px auto 0;
    height: calc(100vh - 250px);



}
button {
    color: #2e241f;
    background-color: #823a68;
}
</style>








