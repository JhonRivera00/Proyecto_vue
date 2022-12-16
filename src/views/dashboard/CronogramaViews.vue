<template>
  <div>
     <!-- Titulo -->
<div class="position-relative d-inline-block w-100">
    <img src="@/assets/imgnav.jpg" class="w-100 img-titulo-fondo" alt="">
    <h1 class="text-titulo position-absolute text-center  w-100">CRONOGRAMA 
      <div class=" d-flex justify-content-around pt-2">
         <div class="bg-green p-1 w-25" ></div>
         <div class="bg-green p-1 w-25" ></div>
      </div>
    </h1>
  </div>
  <!-- Fin Titulo -->
    <!-- Inicio Contenido -->
    <main class="px-5 py-5">
        <p class="fs-3 fw-semibold ms-0 ms-lg-4 my-0 my-lg-4 "><img src="@/assets/icons/calendar2-week.svg" class="me-4" alt="">LISTADO DE ACTIVIDADES</p>
        <hr>
<div class="container-fluid mt-6">
    <div class="row d-flex justify-content-around">
        <div class="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
            <div class="border-green mx-2 px-4 py-3 ">
                <p class="fs-5 fw-bold"> <img src="@/assets/icons/check-circle.svg" class="me-3" alt="">Dia del aprendiz</p>
                <p class="fs-6  m-0"><b>Descripcion:</b>  Participa de grandes premios Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit odio inventore aspernatur quia iusto. Quia odio asperiores minima.</p>
                <p class="fs-6  m-0"><b>Lugar:</b>  Agora CTPI</p>
                <p class="fs-6  m-0"><b>Hora:</b> 10:00 AM - 12:00 AM</p>
                <p class="fs-6 fw-semibold text-muted m-0 mt-3 w-100"> Lunes - 15 Diciembre, 2023</p>
            </div>

        </div>
        <div class="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
            <div class="border-green mx-2 px-4 py-3">
                <p class="fs-5 fw-bold"> <img src="@/assets/icons/check-circle.svg" class="me-3" alt="">Despedida de los aprendices</p>
                <p class="fs-6  m-0"><b>Descripcion:</b>  Participa de grandes premios</p>
                <p class="fs-6  m-0"><b>Lugar:</b>  Coliseo</p>
                <p class="fs-6  m-0"><b>Hora:</b> 4:00 AM - 6:00 AM</p>
                <p class="fs-6 fw-semibold text-muted m-0 mt-3 w-100"> Martes - 16 Diciembre, 2023</p>
            </div>

        </div>
        <div class="col-12 col-lg-4 col-md-6  my-4 d-flex align-items-stretch contenedor-actividades">
            <div class="border-green mx-2 px-4 py-3">
                <p class="fs-5 fw-bold"> <img src="@/assets/icons/check-circle.svg" class="me-3" alt="">Despedida de año en compañia de grupos musicales </p>
                <p class="fs-6  m-0"><b>Descripcion:</b>  Participa de grandes premios</p>
                <p class="fs-6  m-0"><b>Lugar:</b>  Agora CTPI</p>
                <p class="fs-6  m-0"><b>Hora:</b> 10:00 AM - 12:00 AM</p>
                <p class="fs-6 fw-semibold text-muted m-0 mt-3 w-100"> Miercoles - 17 Diciembre, 2023</p>
            </div>

        </div>
        <div class="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
            <div class="border-green mx-2 px-4 py-3">
                <p class="fs-4 fw-semibold"> <img src="@/assets/icons/check-circle.svg" class="me-3" alt="">Dia del aprendiz</p>
                <p class="fs-6  m-0"><b>Descripcion:</b>  Participa de grandes premios</p>
                <p class="fs-6  m-0"><b>Lugar:</b>  Agora CTPI</p>
                <p class="fs-6  m-0"><b>Hora:</b> 10:00 AM - 12:00 AM</p>
                <p class="fs-6 fw-semibold text-muted m-0 mt-3 w-100"> Lunes - 15 Diciembre, 2023</p>
            </div>

        </div>
        <div class="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
            <div class="border-green mx-2 px-4 py-3">
                <p class="fs-4 fw-semibold"> <img src="@/assets/icons/check-circle.svg" class="me-3" alt="">Dia del aprendiz</p>
                <p class="fs-6  m-0"><b>Descripcion:</b>  Participa de grandes premios</p>
                <p class="fs-6  m-0"><b>Lugar:</b>  Agora CTPI</p>
                <p class="fs-6  m-0"><b>Hora:</b> 10:00 AM - 12:00 AM</p>
                <p class="fs-6 fw-semibold text-muted m-0 mt-3 w-100"> Lunes - 15 Diciembre, 2023</p>
            </div>

        </div>
        <div class="col-12 col-lg-4 col-md-6 my-4 d-flex align-items-stretch contenedor-actividades">
            <div class="border-green mx-2 px-4 py-3">
                <p class="fs-4 fw-semibold"> <img src="@/assets/icons/check-circle.svg" class="me-3" alt="">Dia del aprendiz</p>
                <p class="fs-6  m-0"><b>Descripcion:</b>  Participa de grandes premios</p>
                <p class="fs-6  m-0"><b>Lugar:</b>  Agora CTPI</p>
                <p class="fs-6  m-0"><b>Hora:</b> 10:00 AM - 12:00 AM</p>
                <p class="fs-6 fw-semibold text-muted m-0 mt-3 w-100"> Lunes - 15 Diciembre, 2023</p>
            </div>

        </div>
    </div>
</div>
    </main>
    <!-- Fin Contenido -->
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