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
                this.projects = response.data.results.data;
                this.pagination = response.data.results;
            });
        },

        getSlugs() {
            axios.get(`${this.apiUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.post = response.data.post;
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            });
        },
    },



}


</script>

<template>
    <div v-if="projects.length > 0" class="container" id="main-container">
        <ProjectCard :project="project" v-for="project in projects" id="single-card"></ProjectCard>
    </div>
    <div v-else class="container" id="loader-container">
        <div class="d-flex justify-content-center">
            <div class="spinner-grow text-light" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

    <div class="container my-3 d-flex justify-content-center gap-1">
        <button class="btn btn-outline-light" @click="getProjects('http://127.0.0.1:8000/api/projects?page=1')">First</button>
        <button class="btn" 
        v-for="link in pagination.links" 
        v-html="link.label" 
        :disabled="link.url == null ? true : false" 
        :class="link.active ? 'btn-danger' : 'btn-outline-light'" 
        @click="getProjects(link.url)"></button>
        <button class="btn btn-outline-light" @click="getProjects('http://127.0.0.1:8000/api/projects?page=5')">Last</button>
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








