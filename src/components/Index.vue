<template>
  <div>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">API Gateway - NEWS</a>
    </nav>
    <div class="container">
        <form class="form" @submit.prevent="selecionar">
             <div class="form-group">
                <label for="exampleFormControlSelect1">Selecionar região</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="country.name">
                    <option disabled value="">Escolha uma região</option>
                    <option value="br">BR</option>
                    <option value="us">USA</option>
                    <option value="gb">UK</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Prosseguir</button>
        </form>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import Data from './../services/data'
export default {
  data(){
    return {
      country: {
        name: ''
      }
    }
  },
  methods:{
    selecionar(){
      Data.selecionar(this.country).then(res => {
        this.$router.push('/load')
        // this.$router.go(this.$router.currentRoute)
        // window.location.href = "/home" 
      })
    }
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
        .form{
            margin-top: 4em;
        }
        .btn{
            background-color: #538AE4;
        }
</style>
