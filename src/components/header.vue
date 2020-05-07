<template>
    <header>
        <router-link id="h1" to="/"> {{ title }} </router-link>
        <v-spacer></v-spacer>
        <router-link id="gallery_p" to="/gallery">Galleri</router-link>
        <v-divider class="mx-4" vertical inset></v-divider>
        <router-link id="about_p" to="/About">Om mig</router-link>
    </header>
</template>

<script>
export default {
    data(){
        return{
            title: 'Patricks Portfolio',
            gallery: 'Galleri',
            about: 'Om mig',
        }
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Monda:700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Martel+Sans&display=swap');

    header{
        background-color: map-get($colorpalette , secondary );
        height: 70px;
        display: flex;
        align-items: center;
        margin-right: -12px;
    }

    #h1{
        font-size: map-get($fontsizepalette , headlines );
        color: map-get($colorpalette , primary );
        margin-left: 50px;
        box-sizing: border-box;
        font-family: 'Monda', sans-serif;
        text-decoration: none;
    }

    #gallery_p, #about_p{
        color: map-get($colorpalette , primary );
        font-size: map-get($fontsizepalette , subheaders );
        font-family: 'Martel Sans' sans-serif;
        font-weight: 400;
        text-decoration: none;
    }

    #about_p{
        margin-right: 50px;
    }

    @media only screen and (max-width:500px){

        header{
            margin: 0;
        }

        #h1{
            font-size: map-get($fontsizepalette , phoneheader );
            margin: 0 0 0 10px;
        }

        #gallery_p, #about_p{
            margin: 0 10px 0 0;
            font-size: map-get($fontsizepalette , phonebody );
        }
    }

</style>