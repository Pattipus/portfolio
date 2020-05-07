<template>
    <footer>
        <v-row id="topfoot">
            <h1> {{ title }} </h1>
        </v-row>
            <v-divider></v-divider>
        <v-row id="botfoot">
            <v-spacer></v-spacer>
            <a href="https://www.linkedin.com/in/patrickchrjensen/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <v-divider class="mx-4" vertical inset></v-divider>
            <p> Email: {{ email }} </p>
            <v-divider class="mx-4" vertical inset></v-divider>
            <p> Tlf: {{ phone }} </p>
            <v-spacer></v-spacer>
        </v-row>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            title: 'Lyst til en samtale?',
            email: 'patrickchrjensen@gmail.com',
            phone: '23 88 28 16',
        }
    }
    
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Monda:700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Martel+Sans&display=swap');


    footer{
        background-color: map-get($colorpalette , secondary );
        height: 120px;
        display: flex;
        flex-direction: column;
        margin-top: 200px;
        margin-right: -12px;
    }

    #topfoot{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h1{
        color: map-get($colorpalette , primary );
        font-family: 'Monda', sans-serif;
        padding-top: 10px;
        box-sizing: border-box;
        font-size: map-get($fontsizepalette , headlines );
    }

    #botfoot{
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    p{
        font-size: map-get($fontsizepalette , subheaders );
        color: map-get($colorpalette , primary );
        margin-top: 15px;
        font-family: 'Martel Sans', sans-serif;
        font-weight: 400;
    }
    
    i{
        font-size: map-get($fontsizepalette, headlines );
    }

    @media only screen and (max-width: 500px){

        h1{
            font-size: map-get($fontsizepalette , phonebody );
        }

        p{
            font-size: map-get($fontsizepalette , phonesmall );
        }

        footer{
            margin-right: 0;
        }

        i{
            font-size: map-get($fontsizepalette , phoneheader );
        }
    }

</style>