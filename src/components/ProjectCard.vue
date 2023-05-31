<script>

export default {

    name: 'ProjectCard',

    data() {
        return {
            basicPath: 'http://127.0.0.1:8000/',
        }
    },

    props: {
        project: Object,
    },

    computed: {

        projectImage() {
            if (this.project.project_cover == null) {
                return "https://pic.onlinewebfonts.com/svg/img_98811.png";
            } else {
                return this.basicPath + 'storage/' + this.project.project_cover;
            }
        }
    },
}



</script>

<template>

    <div class="card mb-3" id="project-card">
        <div class="row g-0" id="row-container">
            <div class="col-md-4" id="card-image">
                <img :src="projectImage" id="project-image" alt="immagine progetto">
            </div>
            <div class="col-md-8">
                <div class="card-body" id="card-text">
                    <h4 class="card-title">{{ project.title }}</h4>
                    <small>{{ project.description }}</small>
                    <p class="card-text">{{ project.content }}</p>
                    <router-link class="btn btn-outline-light show-button" :to="{name: 'projects.show', params: {slug: project.slug}}">Vai al progetto</router-link>
                </div>
            </div>
        </div>
    </div>

    
    

</template>

<style lang="scss" scoped>

#project-card {
    width: calc(100% / 2 - 20px);
    max-height: 230px;
    border-radius: 10px;
    background-color: #823a68;
}

#row-container {
    width: 100%;
    height: 100%;

    #card-image {
        height: 100%;
    
        #project-image {
            height: 100%;
            width: 100%;
            object-fit: contain;
            object-position: center;
            overflow: hidden;
            border-radius: 10px;
            padding: 5px;
        }
    }
    

    #card-text {
        display: flex;
        flex-flow: column nowrap;
        gap: 5px;
        max-height: 230px;
        color:#2e241f;

        p {
            overflow-y: auto;
            flex-grow: 1;
        }

        .show-button {
            align-self:flex-end;
        }
    }
}

</style>
