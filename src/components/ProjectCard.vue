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
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
            } else {
                return this.basicPath + 'storage/' + this.project.project_cover;
            }
        }
    },
}



</script>

<template>

    
    <div class="card mb-3" style="width: 640px;">
        <div class="row g-0">
            <div class="col-md-4 card-image">
                <img :src="projectImage" class="project-image" alt="immagine progetto">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <small>{{ project.description }}</small>
                    <p class="card-text">{{ project.content }}</p>
                </div>
            </div>
        </div>
    </div>
    

</template>

<style lang="scss" scoped>

.card-image {

    .project-image {
        height: 100%;
        width: 100%;
        object-fit: contain;
        object-position: center;
    }
}

</style>
