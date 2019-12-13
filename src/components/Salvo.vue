<template>
  <div>
     <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">API Gateway - NEWS</a>
        <ul>
            <li>
                <a href="/home" title="Ver notícias salvas">
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="/salvo" title="Ver notícias salvas">
                    <div class="contadorLer">
                        <span>{{articles.length}}</span>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
    <div class="container">
        <ul v-for="(article, index) of articles.reverse()" :key="article.id">
            <li>
                <a :href="`${article.url}`">
                    <div class="news" :class="{ 'active': index === 100 }">
                        <div class="news-image">
                            <img :src="`${article.imagem}`" alt="">
                        </div>
                        <div class="text">
                            <small>{{ article.data }}</small> <br>
                            <span v-if="article.titulo.length < 90" :title="`${article.titulo}`">
                                {{ article.titulo }}
                            </span>
                            <span v-if="article.titulo.length > 90" :title="`${article.titulo}`">
                                {{ article.titulo }} ...
                            </span>
                            <br>
                        </div>
                    </div>
                </a>
                <!-- <button style="background-color: white; border: none; font-size: 20px; position: absoute;" type="submit" title="Remover" @click="removerDaLista(article.id ,article.titulo, article.url, article.imagem, article.data)"><img src="https://img.icons8.com/material/24/000000/filled-trash.png"></button> -->
            </li>
            
        </ul>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import Data from './../services/data'
import LerMaisTarde from './../services/lerMaisTarde'
import Noticia from '../models/noticiaRemover'

export default {
  data(){
    return {
      articles: []
    }
  },
  mounted(){
    LerMaisTarde.listar().then(res =>{
      console.log(res.data)
      this.articles = res.data;
    })
  },
  methods: {
       removerDaLista: function(id,titulo,url,imagem, data) {
          var noticiaObj = new Noticia(id, titulo, url, imagem, data);
          console.log(noticiaObj);
          LerMaisTarde.remover(noticiaObj).then(res => {
            // this.$router.push('/salvo')
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

        .navbar-brand{
            margin-top: -0.6em;
        }

        .navbar{
            background-color: #fff !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.137);
            height: 80px;
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
