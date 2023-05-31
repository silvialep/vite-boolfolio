<script>

import axios from "axios";


export default {

    name: 'SingleProject',

    data() {
        return {
            project: {},
            projectSlug: '',
            apiUrl: 'http://127.0.0.1:8000/',

        }
    },

    components: {
        
    },

    props: {

    },


    methods: {
        getProject() {
            axios.get(this.apiUrl + 'api/projects/' + this.projectSlug).then(response => {
                // console.log(this.apiUrl + this.projectSlug);
                this.project = response.data.project;
            })
        }
    },

    computed: {
        projectImage() {
            return this.apiUrl + 'storage/' + this.project.project_cover;
        }
    },

    mounted() {
        this.projectSlug = this.$route.params.slug;
        this.getProject();
    },



}


</script>

<template>
    <div class="container" id="single-project-container">
        <div id="project-text">
            <h2>{{ project.title }}</h2>
            <strong>{{ project.description }}</strong>
            <div class="d-flex justify-content-between">
                <div>
                    <span v-for="technology in project.technologies" class="badge rounded-pill" :style="{ backgroundColor: technology.color }">{{ technology.name }}</span>
                </div>
                <span>{{ project.type ? project.type.name : 'Nessuna tipologia' }}</span>
            </div>
            <p class="my-4">{{ project.content }}</p>
        </div>
        <div id="project-image">
            <img :src="projectImage" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>

#single-project-container {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin: 100px auto 0;
    padding-top: 50px;
    color: #cf4fa0;
    width: 100%;

    h2 {
        text-transform: uppercase;
        font-weight: bolder;
    }

    #project-image {
        width: 100%;

        img {
            width: 100%;
        }
    }
}

</style>








