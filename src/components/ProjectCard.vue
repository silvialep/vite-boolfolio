<script>

export default {

    name: 'ProjectCard',

    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000/',
        }
    },

    props: {
        project: Object,
    },

    computed: {
        // shortContent() {
        //     if (this.post.content.length > 50) {
        //         return this.post.content.substring(0, 50) + '...';
        //     } else {
        //         return this.post.content;
        //     }
        // },

        projectImage() {
            if (this.project.project_cover == null) {
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
            } else {
                return this.baseUrl + 'storage/' + this.project.project_cover;
            }
        }
    },
}



</script>

<template>

    
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="projectImage" class="img-fluid rounded-start" alt="immagine progetto">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    </div>
    

</template>

<style lang="scss" scoped>

</style>
