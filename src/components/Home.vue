<template>
  <div>
     <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">API Gateway - NEWS</a>
        <ul>
            <li>
                <img v-if="country === 'br'" src="https://image.flaticon.com/icons/svg/330/330430.svg" width="30px">
                <img v-if="country === 'us'" src="https://image.flaticon.com/icons/svg/330/330459.svg" width="30px">
                <img v-if="country === 'gb'" src="https://image.flaticon.com/icons/svg/330/330425.svg" width="30px">
            </li>
            <li>
                <a href="/salvo" title="Ver notícias salvas">
                    <div class="contadorLer">
                        <span>{{salvos.length}}</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <div class="container">
        <div class="currency">
            <ul>
                <li>
                    <span>USD $</span>
                    <br>
                    <span>
                        R${{ dolar }}
                    </span>
                </li>
                <li>
                    <span>GBP £</span>
                    <br>
                    <span>
                        R${{libra}}
                    </span>
                </li>
            </ul>
        </div>
        <ul v-for="(article, index) of articles" :key="article.id">
            <li>
                <a :href="`${article.url}`">
                    <div class="news" :class="{ 'active': index === 0 }">
                        <div class="news-image">
                            <img :src="`${article.urlToImage}`" alt="">
                        </div>
                        <div class="text">
                            <small>{{ article.publishedAt.substring(0,10).split('-').reverse().join('-') }}</small> <br>
                            <span v-if="article.title.length < 90" :title="`${article.title}`">
                                {{ article.title.substring(0,90) }}
                            </span>
                            <span v-if="article.title.length > 90" :title="`${article.title}`">
                                {{ article.title.substring(0,90) }} ...
                            </span>
                            <br>
                            <small>
                                {{ article.source.name }}
                            </small>
                        </div>
                    </div>
                </a>
                <button style="background-color: white; border: none; font-size: 20px; position: absoute;" type="submit" title="Ler mais tarde" @click="lerMaisTarde(article.title, article.url, article.urlToImage, article.publishedAt.substring(0,10).split('-').reverse().join('-'))"><img src="https://img.icons8.com/ios-glyphs/30/000000/bookmark-ribbon.png"></button>
            </li>
            
        </ul>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import Data from './../services/data'
import LerMaisTarde from './../services/lerMaisTarde'
import Noticia from '../models/noticia'

export default {
  data(){
    return {
      dolar: '',
      libra: '',
      country: '',
      articles: [],
      salvos: []
    }
  },
  mounted(){
    Data.listar().then(res =>{
      console.log(res.data[2])
      this.dolar = res.data[1].USD.low;
      this.libra = res.data[1].GBP.low;
      this.country = res.data[0].country;
      this.articles = res.data[2].articles;
    })
    LerMaisTarde.listar().then(res =>{
      console.log(res.data)
      this.salvos = res.data;
    })
  },
  methods: {
       lerMaisTarde: function(titulo,url,imagem, data) {
          var noticiaObj = new Noticia(titulo, url, imagem, data);
        //   console.log(titulo);
        //   console.log(url);
        //   console.log(imagem);
        //   console.log(data);
        console.log(noticiaObj);
          LerMaisTarde.marcarLerDepois(noticiaObj).then(res => {
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

        .contadorLer{
            background: black;
            border-radius: 50px;
            color: white;
            text-align: center;
            width: 30px;
            height: 30px;
            padding-top: 0.1em;
        }

        .navbar{
            background-color: #fff !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.137);
            height: 80px;
        }

        .navbar-brand{
            margin-top: -0.6em;
        }

        .news{
            width: 300px;
            height: 350px;
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.137);
            color: rgb(58, 58, 58);
            transition: 0.3s;
            word-wrap: break-word;
        }
        .news:hover{
            color: black;
            box-shadow: 0px 0px 8px 0px rgba(167, 160, 160, 0.541);
            transition: 0.3s;
        }
        .news-image{    
            width: 100%;
            height: 50%;
            background-color: #c4c3c3;
        }
        .news-image img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        li{
            float: left;
            padding: 1em;
        }
        ul{ 
            list-style: none;
        }
        a:hover{
            text-decoration: none;
        }
        small{
            color: gray;
        }
        .text{
            padding: 0.5em;
        }
        .currency{
            width: 100%;
            height: 100px;
            /* background-color: #f1f1f1; */
            padding: 1em;
            color: #fff;
            text-align:center;
        }
        .currency ul li{
            border-radius: 50px;
            margin-left: 1em;
            background-color: rgb(41, 41, 41);

        }
        .active{
          margin-top: 1em;
        }
</style>
