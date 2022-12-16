<template>
  <div>
    <section class="">
  <img src="@/assets/zyro-image.png" class="titulo-objetivo" alt="">
  <div class="px-5 py-5">
    <p class="fs-3 fw-semibold"><img src="@/assets/icons/bullseye.svg" alt="" class="pe-3"> OBJETIVOS</p>
        <hr class="w-25">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="">
            <p class="fs-5 fw-semibold"> <img src="@/assets/icons/1-circle.svg" class="me-3" alt="">Objetivo </p>
            <p>Implementar estrategias de acompañamiento para el desarrollo integral del aprendiz en su proceso formativo.</p>
            <p class="fs-5 fw-semibold"><img src="@/assets/icons/2-circle.svg" class="me-3" alt="">Objetivo </p>
            <p>Incentivar al aprendiz en su proceso de formación profesional integral mediante la implementación de un programa de estímulos.</p>
            <p class="fs-5 fw-semibold"> <img src="@/assets/icons/3-circle.svg" class="me-3" alt="">Objetivo </p>
            <p>Entregar con oportunidad y calidad los servicios de bienestar al aprendiz documentando procedimientos que soporten una operación ágil y flexible.</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="@/assets/opjetivo1.webp" class="img-obj" alt="">
        </div>        
      </div>
     
  </div>
</section>
 <!-- Video -->
 <section class="video">
  <p class="fs-1 fw-semibold d-flex justify-content-center titulos">
    VIDEO PRESENTACION
  </p>
  <video src="" width="640" height="580" controls></video>
</section>
<!-- Fin Video -->
<div class="text-center py-5 d-flex justify-content-center">
  <div class="w-50">

    <h1>¿Quiénes pueden acceder al Plan de Bienestar al Aprendiz?</h1>
    <p class="mt-4">Aprendices matriculados en formación Laboral y Formación tecnológica, de todos los niveles y jornadas, en sus diferentes modalidades: presencial, virtual o a distancia.
      Los Centros de Formación Profesional Integral incorporarán estrategias para la inclusión de aprendices pertenecientes a las comunidades minoritarias y vulnerables</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
}
.img-logo{
    max-height: 5rem;
    display: flex; 
}
.bg-color-blue{
    background-color: #00324d;
}

.img-slider{
    height: 550px;
    width: 100%;
    object-fit:cover ;
    padding-bottom: 50px;
    
}
.card{
    border-color: #39a900 !important;
    border: 1px solid;
    max-width: 800px;
}
.card-img-top{
height: 270px;
object-fit: cover;
}
.card-group > div{
min-width: 300px;
}
.video{
    width: 100%;
    display: flex;
    justify-content:center ;
    flex-direction: column;
}
.video > video{
    width: 100%;
    
    
}
.text-green{
    color: #39a900 !important;
}
.text-muted1{
color: rgb(235, 235, 235);
line-height: 35px;
}
.bg-green{
    background-color: #39a900;
}
.btn-green{
 background-color: #39a900; 
 color: white;  
 --bs-btn-hover-color:#39a900;
--bs-btn-hover-bg: #ffffff;
--bs-btn-hover-border-color: #39a900;
}
.border-green{
    border: 1px solid #39a900;
}
.img-profesionales{
    width: 200px;
    height: 150px;
    object-fit: cover;
}
.titulos{
    font-family:'Times New Roman', Times, serif;
}

.titulo-objetivo{
    width: 100%;
    max-height: 450px;
    background-size:cover;
}
.img-obj{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-titulo{
    top: 24%;
}
.img-titulo-fondo{
    height: 200px;
    object-fit: cover;
    opacity: 0.2;
}
.contenedor-actividades{
width: 400px;
min-width: 400px;
}
.shadow-black{
    box-shadow: 6px 7px 24px 3px rgba(0,0,0,0.73);
}
.shadow-black:hover{
    transform:scale(1.06);
}
.contenedor-icons-contact{
    width: 250px;
    min-width: 250px;  
}
@media (max-width:992px){
    
.user{
    margin-left: 0px !important;
}
.img-slider{
    /* max-height: 28rem; */
    height: 350px;
    width: 100%;
    object-fit:cover ;
    
}
.nosotros{
    width: 100% !important;
    margin-right: 15px;
    text-align: center;
    display: flex !important;
    justify-content: center;
    align-items: center;
    
}
.text-titulo{
    top: 34%;
}

}
@media(max-width: 662px){
    .img-logo{
        max-height: 4rem;
        display: none;
    }
    .img-logo-mini{
        max-height: 4rem;
        display: flex !important;
    }
}
</style>