<script>

import axios from "axios";


export default {

    name: 'SingleProject',

    data() {
        return {
            project: {},
            projectSlug: '',
            apiUrl: 'http://127.0.0.1:8000/api/projects/',

        }
    },

    components: {
        
    },

    props: {

    },


    methods: {
        getProject() {
            axios.get(this.apiUrl + this.projectSlug).then(response => {
                // console.log(this.apiUrl + this.projectSlug);
                this.project = response.data.project;
            })
        }
    },

    computed: {
        projectImage() {
            
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
            <p class="my-4">{{ project.content }}</p>
        </div>
        <div id="project-image">

        </div>
    </div>
</template>

<style lang="scss" scoped>

#single-project-container {
    display: flex;
    justify-content: space-between;
    margin: 100px auto 0;
    padding-top: 50px;
    color: #cf4fa0;

    h2 {
        text-transform: uppercase;
        font-weight: bolder;
    }
}

</style>








