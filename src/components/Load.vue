<template>
  <div>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">API Gateway - NEWS</a>
    </nav>
    <div class="container">
        <div id="app">
          <scaling-squares-spinner
            :animation-duration="1250"
            :size="65"
            color="#000"
          />
        </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import Data from './../services/data'
import {ScalingSquaresSpinner} from 'epic-spinners'

export default {
  components: {
    ScalingSquaresSpinner
  },
  created(){
    setInterval();
  },
  mounted: function(){
      setInterval(function() {
        window.location.href = "/home"
      }, 3200);
      setInterval();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bree+Serif&display=swap');

        *{
            font-family: 'Bree Serif', serif;
        }

        .navbar{
            background-color: #fff !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.137);
            height: 80px;
        }
        .scaling-squares-spinner{
          margin: 12em auto;
        }
</style>
