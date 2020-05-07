<template>
    <div id="main">
        <v-row id="toprow">
<!-- :elevation="n - 24" -->
            <v-img id="image"  v-bind:src="project.img" contain max-height="700" max-width="700"></v-img>
            <v-card id="topright" class="mx-12" max-height="300">
                <h2 id="typeheader">{{ typehead }}</h2>
                <v-divider></v-divider>
                <p id="typetext"> {{ project.type }} </p>
                
                <a v-if="this.project.id == 3" href="https://firebasestorage.googleapis.com/v0/b/mmd-pdf.appspot.com/o/Rapport_eksamen.pdf?alt=media&token=bcfe0e94-e021-4074-95ab-f9e6a7a13c75" target="_blank" id="lingz">Se PDF</a>
              
                <h2 id="softwareheader">{{ softwarehead }}</h2>
                <v-divider></v-divider>
                <p id="softwaretext">{{ project.software }}</p>
            </v-card>

        </v-row>
        <v-row id="botrow">

            <v-card id="botleft" class="mx-12">
                <h2 id="descheader">{{ deschead }}</h2>
                <v-divider></v-divider>
                <p id="desctext">
                    {{ project.desc }}</p>
            </v-card>
            <v-card id="botright" class="mx-12">
                <h2 id="roleheader">{{ rolehead }}</h2>
                <v-divider></v-divider>
                <p id="roletext"> {{ project.role }} </p>
            </v-card>
            
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        var project = this.$route.params
        return{
            typehead: 'Type',
            softwarehead: 'Software brugt',
            deschead: 'Beskrivelse',
            rolehead: 'Min Rolle',
            project: {
                id: project.id,
                headline: project.headline,
                type: project.type,
                software: project.software,
                shortdesc: project.shortdesc,
                desc: project.desc,
                role: project.role,
                img: project.img,
            }
        }
    }
}


</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css?family=Monda:700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Martel+Sans&display=swap');

    h2{
        font-family: 'Monda', sans-serif;
        color: map-get($colorpalette , primary );
        font-size: map-get($fontsizepalette , headers );
    }

    p{
        font-family: 'Martel sans', sans-serif;
        color: map-get($colorpalette , primary );
        font-size: map-get($fontsizepalette , paragraphs );
    }

    #topright, #botleft, #botright{
        background-color: map-get($colorpalette , secondary );
        display: flex;
        flex-direction: column;
    }

    #topright{
        max-width: 350px;
        min-width: 300px;
    }

    #botleft, #botright{
        max-width: 400px;
    }

    #topright{
        align-self: center;
    }

    #toprow, #botrow{
        margin-top: 100px;
        justify-content: center;
    }

    #typeheader, #softwareheader, #descheader, #roleheader{
        align-self: center;
        margin: 10px 0 10px 0;
    }

    #typetext, #softwaretext, #desctext, #roletext{
        margin: 20px;
        align-self: center;
    }

    a{
        align-self: center;
        text-decoration: underline;
    }

    a:visited{
        color: map-get($colorpalette , primary );
    }

    @media only screen and (max-width: 500px){

        #image{
            width: 100%;
            margin-bottom: 50px;
        }

        #toprow{
            margin: 20px 0 50px 0;
        }

        #typeheader, #softwareheader, #descheader, #roleheader{
            font-size: map-get($fontsizepalette , phonebody );
        }

        #typetext, #softwaretext, #desctext, #roletext, #lingz{
            font-size: map-get($fontsizepalette , phonesmall );
        }

        #botrow{
            margin: 0;
        }

        #botleft{
            margin: 0 0 50px;
        }

        #main{
            margin: 0;
        }

        #topright, #botleft, #botright{
            min-width: 100%;
            max-width: 100%;
        }
    }

</style>