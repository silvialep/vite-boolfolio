<script>

import axios from "axios";

import ProjectCard from '../components/ProjectCard.vue';

export default {

    name: 'AppIndex',

    data() {
        return {
            projects: [],

            apiUrl: 'http://127.0.0.1:8000/api/projects?page=1',

            pagination: {},

            currentPage: 1,

            types: [],

            selectedTypeId: '',

            
            isLoading: true,
            projectsFound: false,
        }
    },

    components: {
        ProjectCard,
    },

    props: {

    },


    methods: {
        getProjects(apiUrl) {

            apiUrl = apiUrl + '&type_id=' + this.selectedTypeId;

            axios.get(apiUrl).then(response => {

                if (response.data.success) {
                    this.projectsFound = true;
                    this.isLoading = false;

                    this.projects = response.data.results.data;
                    this.pagination = response.data.results;
                    this.types = response.data.types;
                } else {
                    this.isLoading = false;
                    this.projectsFound = false;
    
                }

            });

        },
    },

    
    mounted() {
        this.getProjects(this.apiUrl);
    },



}


</script>

<template>

    <div id="index-container">

        <div v-if="isLoading" class="text-center py-5">
            <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div v-else>

            <div v-if="projectsFound" class="container" id="main-container">
                <ProjectCard :project="project" v-for="project in projects"></ProjectCard>
            </div>

            
            <!-- <div class="container d-flex justify-content-center gap-1">
                <button v-for="link in pagination.links"
              class="btn" 
              :class="link.active ? 'btn-primary' : 'btn-outline-secondary'" 
              v-html="link.label" 
              :disabled="link.url == null ? true : false" 
              @click="getProjects(link.url)">
          
            </button> -->

            <div class="container d-flex justify-content-center gap-1">
                <button class="btn btn-outline-light" :disabled="pagination.current_page == pagination.first_page_url.substr(pagination.first_page_url.length - 1) ? true : false" @click="getProjects(pagination.first_page_url)">First</button>
                <button class="btn" 
                v-for="link in pagination.links" 
                v-html="link.label" 
                :disabled="link.url == null ? true : false" 
                :class="link.active ? 'btn-danger' : 'btn-outline-light'" 
                @click="getProjects(link.url)"></button>
                <button class="btn btn-outline-light" :disabled="pagination.current_page == pagination.last_page_url.substr(pagination.last_page_url.length - 1) ? true : false" @click="getProjects(pagination.last_page_url)">Last</button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

#index-container {
    height: 100%;
}

#loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

#main-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 50px 0;
    margin: 100px auto 0;



}
button {
    color: #2e241f;
    background-color: #823a68;
}
</style>








