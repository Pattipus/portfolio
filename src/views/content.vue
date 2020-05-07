<template>
    <main>
        <v-row id="tophalf">
            <h1>{{ welcome }}</h1>
            <h4>{{ welcome_two }}</h4>
        </v-row>
        <v-row id="bothalf">
            <v-btn id="button" class="buttons" to="/gallery" rounded ripple color="#aadcf5">Galleri</v-btn>
            <v-btn id="button" class="buttons" to="/About" rounded ripple color="#aadcf5">Om mig</v-btn>
        </v-row>
    </main>
</template>

<script>
export default {
    data(){
        return{
            welcome: 'Velkommen til min portfolio!',
            welcome_two: 'Tag et kig rundt!'
        }
    }
    
}
</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css?family=Monda:700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Martel+Sans&display=swap');

    main{
        height: 330px;
    }

    #tophalf{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 265px;
        box-sizing: border-box;
    }


    h1{
        color: map-get($colorpalette , tertiary );
        font-size: map-get($fontsizepalette , headlines );
        font-family: 'Monda', sans-serif;
        margin-bottom: 20px;
    }

    h4{
        color: map-get($colorpalette , textlight );
        font-size: map-get($fontsizepalette , subheaders );
        font-family: 'Martel Sans', sans-serif;
        font-weight: 500;
    }

    #bothalf{
        height: 265px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: -100px;
        box-sizing: border-box;
    }

    .buttons{
        color: map-get($colorpalette , primary );
        font-size: map-get($fontsizepalette , subheaders );
        font-family: 'Martel Sans', sans-serif ;
        font-weight: 500;
    }

    @media only screen and (max-width: 500px){

        h1{
            font-size: map-get($fontsizepalette , phoneheader );
        }

        h4{
            font-size: map-get($fontsizepalette , phonebody );
        }

        #button{
            font-size: map-get($fontsizepalette , phonebody );
        }

    }

</style>