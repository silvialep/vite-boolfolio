<script>


export default {

    name: 'AppHeader',

    data() {
        return {

        }
    },

    props: {

    },

    emits: ['',

    ],

    components: {

    },


    computed: {

    },



}


</script>

<template>

    <header class="position-fixed top-0 w-100 z-1">
        <nav class="navbar navbar-dark p-2">
            <div id="navbar-container">
                <div id="nav-logo-links">
                    <h2><router-link class="logo-title" :to="{name: 'home'}">My Boolfolio</router-link></h2>
                    <ul id="nav-links">
                        <li><router-link class="single-link" :to="{name: 'home'}">Home</router-link></li>
                        <li><router-link class="single-link" :to="{name: 'about'}">Chi sono</router-link></li>
                        <li><router-link class="single-link" :to="{name: 'index'}">I miei progetti</router-link></li>
                    </ul>
                </div>
                <form class="d-flex gap-2 input-group w-auto">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span type="submit" class="input-group-text border-0 rounded" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </form>
            </div>
        </nav>

    </header>
</template>

<style lang="scss" scoped>

.logo-title {
    color: #cf4fa0;
    text-decoration: none;
}
.single-link {
    color: #823a68;
    text-decoration: none;
}
.router-link-active {
    color: #cf4fa0;
}

header {
    height: 100px;
    background-color: rgb(36, 36, 36);

    .navbar {
        height: 100%;

        #navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            width: 100%;
            padding: 5px 30px;

            #nav-logo-links {
                display: flex;
                align-items: center;
                height: 100%;

                h2 {
                    height: 100%;
                    font-size: 3rem; 
                    font-weight: bolder;

                }

                #nav-links {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    list-style-type: none;

                    
                }
            }
            
        }
    }
    
}

</style>

