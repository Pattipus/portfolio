<template>

<div id="mainbox" style="width:900px; display:flex; flex-wrap:wrap; margin:auto">

    <v-row class="d-flex flex-wrap" justify="center" id="main" v-for="(project, index) in projects" :key="index">
        
        <v-card id="maincard"
            class="mx-12"
            max-width="344"
        >
            <v-img
                :src="project.img" 
                height="200px"
            ></v-img>
            <v-card-title>
                <p id="title">{{ project.headline }}</p>
            </v-card-title>
            <v-card-subtitle>
                <p id="type">{{ project.type }}</p>
            </v-card-subtitle>
            <v-card-actions>

                <v-btn class="buttons" v-bind:to="{ name: 'project', params: {
                    id: project.id,
                    headline: project.headline,
                    type: project.type,
                    software: project.software,
                    shortdesc: project.shortdesc,
                    desc: project.desc,
                    role: project.role,
                    img: project.img,
                    }}" 
                    rounded ripple id="goto">Projekt</v-btn>

                <v-spacer></v-spacer>
                <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text id="shortdesc">
                    {{ project.shortdesc }}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>

    </v-row>
    
</div>
</template>

<script>
export default {
    data(){
        return{
            show: false,
            projects: [
                {id:1,
                 headline: 'Time Period Assignment',
                 type: 'Content Creation',
                 software: 'Adobe InDesign',
                 shortdesc: 'På 2. semester fik vi udstillet en opgave angående forskellige designperioder og designere gennem tiden. Min valgte designer endte med at blive Alvin Lustig, der repræsenterer modernisme',
                 desc: 'I begyndelsen af 2. semester fik vi forbindelse med en teoretisk lektion udstillet en opgave angående de forskellige tidsperioder i design. Vi blev fremstillet med 27 forskellige designere, hvor vi skulle vælge én af disse og lave en slags “showcase”. Jeg valgte at lave en showcase af den amerikanske designer Alvin Lustig .  Retningslinjerne for denne opgave lød således at vi skulle lave en A3-plakat, der skulle indeholde både dato, tidsperiode og vi skulle inkorporere designeres egen stil i vores opgave. Dette inkluderede typografi, farver, former, teksturer og gestalt regler.',
                 role: 'Dette var en individuel opgave, så jeg har produceret og taget alle valg alene. Jeg startede med at gå igennem alle 27 designere og studere deres design, indtil jeg til sidst valgte at rekreere Alvin Lustig.   På baggrund af min research kunne jeg desværre ikke bruge Lustigs egne typografier, da de simpelthen var for dyre. Jeg fandt en gratis typografi, der var så tæt på som muligt.  Farverne er alle flat color, da Lustig ikke brugte nogle gradienter og jeg har prøvet med meget lidt noise, at genskabe den lidt grynede effekt design fra hans tidsperiode havde.',
                 img: require('../assets/Alvin_justig.png')
                },
                {id:2,
                 headline: 'CMS Promo',
                 type: 'Audio/Video',
                 software: 'Adobe Premiere Pro, Adobe Audition',
                 shortdesc: 'På 2. semester fik vi udstillet en opgave angående en promo for CMS på Fanø. Vi havde 2 uger til både at filme og redigere promoen for dem.  Selve promoen havde en tidsbegrænsning på 2 minutter',
                 desc: 'Link: https://www.youtube.com/watch?v=A1ZT-B5s2S8&feature=youtu.be . Som en del af vores AV-fag på 2. semester, havde CMS på Fanø kontaktet os angående en promo. Vi fik 2 uger til, I grupper, at lave en promo for CMS og dette inkluderede både at planlægge, filme og redigere førnævnte promo. Vi havde en maksimal tidsbegrænsning på 2 minutter for selve promoen. Der var nogle indholdskrav til selve promoen, hvilket bl.a. var at den skulle kunne fungere både med og uden lyd og skulle bruges til en messe i USA. Promoen skulle videre også vise både hvem CMS var, hvad de laver og hvad en sygdomsbehandler er.  CMS ville dermed også gerne have optagelser af forskellige procedurer og simulatorer med.',
                 role: 'Dette var en gruppeopgave, så grundet dette har jeg ikke deltaget i alle trin af produktionen. Jeg har deltaget i pre-production - hvilket inkluderede storyboard, og post-production – hvilket er selve redigeringen af promoen. I pre-production stadiet satte vi os ned som gruppe og tog en snak om vores ideer og forskellige tilgangsvinkler til  promoen og lavede et mindmap.  Vi bestemte os for en video-kompilation, der skulle kunne fungere som et loop. Da halvdelen af gruppen havde været ude og filme på Fanø, satte den anden halvdel af gruppen sig ned og brugte en eftermiddag og lidt af formiddagen på at redigere promoen sammen, og sikre os at promoen opfylder alle krav.',
                 img: require('../assets/CMSPROMO_pic.jpg')
                },
                {id: 3,
                 headline: '1st Semester Project',
                 type: 'Exam',
                 software: 'Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe XD, Visual Studio Code',
                 shortdesc: 'Mit 1. Semester afsluttende projekt, der kombinerer alle fag. Vi blev delt ind i grupper og blev derefter givet vores overordnede tema – Space. Min gruppe valgte at arbejde med Space Tourism. Eksamen endte med et 12-tal',
                 desc: 'Mit 1. Semester afsluttende projekt. Vi havde 2½ uge til at lave selve opgaven og derefter 1½ uge efter jul til at lave en præsentation af vores projekt. Vi fik det overordnede tema ‘Space’, hvor min gruppe valgte at gå videre med emnet ‘Space Tourism’. Vi fik til opgave at følge design thinking modellen, dog med et research stadie før empathize. Ved research skulle vi bruge vores Business fag – SWOT/TOWS og project management. Ved empathize brugte vi vores UX-fag – User Research, Persona, Journey Mapping.  Informationen skulle vi bruge til at  define et scope fremadrettet. Ved ideation skulle vi mindmappe og lave wireframes, hvor vi skulle udføre dem i prototype. Dette var vores CC-fag og DD-fag – logo, infografisk, hjemmeside og SEO. Til sidst skulle vi foretage en think aloud test – UX-fag. Efter dette skulle vi lave en præsentation.',
                 role: 'Siden dette har været en gruppeopgave, har jeg været med til at arbejde i alle stadier. Gruppen arbejde sammen i hele research, empathize og define stadiet, hvor vi divergerede i ideation og prototype for at konvergere igen i test. Jeg har vores project leader i processen og haft en meget stor betydning i research stadiet og planlagt hele projektet vha. Trello. Vi var alle ude og lave user research, men det var min opgave at opsamle vores data og få det renskrevet. Jeg har også stået for at lave grafisk materiale til hjemmesiden – ikoner, illustrationer og baggrund, samt infografisk materiale – plakater. Jeg fik derefter opgaven at lave SEO og være facilitator i vores tests, samt skrive script.',
                 img: require('../assets/astroxpress_forside.png') //indsæt PDF ting her, Kristian har en video om det
                },
                {id: 4,
                 headline: 'ParkVue Project',
                 type: 'Content Creation / User Experience',
                 software: 'Adobe XD, Adobe Illustrator, Adobe Photoshop',
                 shortdesc: 'På 2. semester fik vi en opgave udleveret, der inkluderede både vores CC – og UX-fag. Opgaven gik ud på at lave alt forarbejde til en hjemmeside. Temaet var udendørsaktiviteter i Esbjerg og min gruppe valgte at arbejde med parker',
                 desc: 'Link til online XD prototype: https://xd.adobe.com/view/c9ac8593-f606-41e2-4aff-9c3d77c6384a-bf9d/                              Én af vores store opgaver på 2. semester er denne combined CC/UX-class, som gik ud på at lave alt forarbejde op til en hjemmeside angående udendørsaktiviteter i Esbjerg. Min gruppe valgte at lave et kort over alle parker i Esbjerg. I forbindelse med dette projekt har vi gemmegået en sketching workshop, hvilke vi brugte til at lave en præsentation om vores koncept, core message og target groups. Desuden har vi også produceret; card sort, billeder/video, logo, indhold, mood board, style tiles og både desktop - og mobile prototyper. Projektet afsluttede med en fremvisning.',
                 role: 'Dette har været en gruppeopgave, men jeg har været en del af alle stadier og alt undtagen selve prototypen er lavet i fysisk fællesskab. Vi har arbejdet med en international studerende i gruppen, hvilket har været sjovt at prøve. Gruppen har sammen produceret alt angående koncept, core message og target groups, Efter dette divergerede vi og jeg kørte rundt i Esbjerg og fik taget de nødvendige billeder. Vi konvergerede igen og producerede logo og indhold. Alle i gruppen lavede mood board individuelt, hvorefter vi mødtes og bestemte os for én - vi brugte samme proces angående style tiles. Da det kom til prototypen, delte vi os op. Jeg lavede ikoner og det overordnede kort på forsiden.',
                 img: require('../assets/parkvue_forside.png')
                },
                {id: 5,
                 headline: 'Infomercial',
                 type: 'Audio/Video',
                 software: 'Adobe Premiere Pro, Adobe After Effects, Adobe Audition, Adobe Illustrator, FadeIn Pro, Ableton Live 10',
                 shortdesc: 'På 2. Semester fik vi udleveret en opgave angående en infomercial. Oprigtigt var planen vi skulle have lavet en kortfilm, men det blev ændret. Infomercialen var valgfrit emne og der var meget fokus på pre-production.',
                 desc: 'Link: https://www.youtube.com/watch?v=7KZxHQrxFj8. Som en del af vore s AV-fag på 2. Semester skulle vi lave en infomercial. Dette var en gruppeopgave og derfor delte vi os op og påtog forskellige ansvarsområder af opgaven.  Selve infomercialen skulle være 5 – 10 minutter med en afsluttende rapportindeholdende alt vores materiale. Vores gruppe valgte emnet camera basics. Kravene til opgaven var; 2 animerede VFX-shots, animeret intro/outro inkl. tekst, 2 animerede grafer/informativt materiale og en voiceover/narrator til at guide igennem infomercialen. Udover dette skulle vi have en rapport med, indeholdende: storyboard, screenplay, shooting list, synopsis, VFX-beskrivelse, dramaturgi og kamerateknik. ',
                 role: 'Dette har været en gruppeogave, og jeg fik rollen “Sound Engineer”. Dette vil sige mine ansvarsområder inkluderede speak til voiceoveren og selv at komponere alt baggrundsmusik og eventuelle lydeffekter. Voiceoveren lavede jeg ved hjælp af Adobe Audition og en dynamisk studiemikrofon. Jeg havde ikke noget pop-filter tilgængeligt, så jeg måtte improvisere med en strømpe.  Derefter redigerede jeg i Audition og smed EQ og amp på. Baggrundsmusikken har jeg komponeret ved hjælp af et midi-keyboard og Ableton Live 10. Jeg valgte at gå efter en dur-toneart, da musikken skal være glad. Siden kamerateknik er en teknisk ting, valgte jeg en elektronisk lyd. ',
                 img: require('../assets/infomercial.png')
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

    @import url('https://fonts.googleapis.com/css?family=Monda:700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Martel+Sans&display=swap');

    #mainbox{
        width: 1000px;
    }

    #maincard{
        background-color: map-get($colorpalette , secondary );
        margin-top: 100px;
    }

    #goto{
        background-color: map-get($colorpalette , tertiary );
    }

    #title{
        font-family: 'Monda', sans-serif;
        color: map-get($colorpalette , primary );
    }

    #type, #shortdesc{
        font-family: 'Martel Sans', sans-serif;
        color: map-get($colorpalette , primary );
    }

    @media only screen and (max-width: 500px){

        #mainbox{
            width: 500px;
        }

        #main{
            flex-direction: column;
            width: 500px;
            margin: auto;
            padding-left: 10px;
        }

        #title, #goto{
            font-size: map-get($fontsizepalette , phonebody );
        }

        #type, #shortdesc{
            font-size: map-get($fontsizepalette , phonesmall );
        }
    }

</style>