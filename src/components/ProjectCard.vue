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

    
    <div class="card mb-3" style="width: 640px;">
        <div class="row g-0" id="row-container">
            <div class="col-md-4" id="card-image">
                <img :src="projectImage" id="project-image" alt="immagine progetto">
            </div>
            <div class="col-md-8">
                <div class="card-body" id="card-text">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <small>{{ project.description }}</small>
                    <p class="card-text">{{ project.content }}</p>
                </div>
            </div>
        </div>
    </div>

    
    

</template>

<style lang="scss" scoped>

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
        }
    }
}

#card-text {
    color:rgb(5, 19, 32);
}

</style>
