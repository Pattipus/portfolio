<template>
  <v-column id="main">
    <v-column id="vidbox">
      <h1>{{ title }}</h1>
      <iframe :elevation="n - 24" width="560" height="315" src="https://www.youtube.com/embed/riKSDBWc6lA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-column>
    <v-column id="cvbox">
      <v-img id="images" :elevation="n - 24"  src="./../assets/CV.png"></v-img>
      <v-img id="images" :elevation="n - 24"  src="./../assets/CV2.png"></v-img>
    </v-column>
  </v-column>

</template>

<script>
export default {
  name: 'about',
  data(){
    return{
      title: 'Om mig',
    }
  }
  
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Monda:700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Martel+Sans&display=swap');

  h1{
    color: map-get($colorpalette , tertiary );
    font-size: map-get($fontsizepalette , headers );
    font-family: 'Monda', sans-serif;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  #vidbox{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #cvbox{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 140px;
  }

  #images{
    height: 874px;
    width: 614px;
  }

  @media only screen and (max-width: 500px){

    h1{
      font-size: map-get($fontsizepalette , phoneheader );
    }

    iframe{
      width: 100%;
    }

    #images{
      width: 537px;
      height: 714px;
      margin: 5px 0 5px 0;
    }

  }

</style>