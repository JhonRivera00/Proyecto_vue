<template>
  <div>
     <!-- Inicio Footer -->
     <footer>
        <div class="container-fluid bg-color-blue px-5 pt-5">
          <div class="row">
            <div class="col-lg-5 mt-lg-0">
              <div class="mx-4 te">
                <p class="text-white fs-4 fw-semibold text-center">
                  <img src="@/assets/icons/people-fill.svg" class="me-3" alt="iconnosotros" />ACERCA DE NOSOTROS
                </p>
                <hr class="text-white" />
                <p class="text-muted1 fs-6">
                  Es una estrategia institucional para contribuir en la
                  permanencia y el desempeño exitoso de los aprendices de la
                  entidad en su proceso formativo con enfoque territorial y
                  diferencial.
                </p>
              </div>
            </div>
            <div class="col-lg-3 mt-lg-0 mt-5">
              <p class="fs-4 fw-semibold text-center text-white">
                <img src="@/assets/icons/arrow-down-right-square.svg" class="me-3" alt="iconacceso" />ACCESO RAPIDO
              </p>
              <hr class="text-white" />
              <div class="text-muted1 text-center">
                <a class="nav-link active" aria-current="page" href="index.html">INICIO</a>
                <a class="nav-link" href="#">CONOCENOS</a>
                <a class="nav-link" href="#">CHARLA</a>
                <a class="nav-link" href="#">CRONOGRAMA</a>
                <a class="nav-link" href="#">CONTACTANOS</a>
              </div>
            </div>
            <div class="col-lg-4 mt-0 mt-md-0 mt-5">
              <div class="ps-3">
                <p class="fs-4 fw-semibold text-center text-white">
                  <img src="@/assets/icons/clock.svg" class="me-3" alt="iconreloj" />HORARIO DE ATENCION
                </p>
                <hr class="text-white" />
                <p class="d-flex justify-content-between text-muted1 fs-6">
                  Lunes a Viernes:
                  <span>8:00 AM A 12:00 AM <br />
                    2:00 PM A 9:00 PM</span>
                </p>
                <br />
                <p class="text-muted1 fs-6">
                  No se atiende fines de semana y festivos
                </p>
              </div>
            </div>
          </div>
          <hr class="text-white mt-5" />
          <div class="d-flex flex-wrap justify-content-center pb-3">
            <a href="#" class="text-decoration-none"><img src="@/assets/icons/facebook.svg" class="me-2 icon"
                alt="logofacebook" /></a>
    
            <a href="#" class="ms-4 text-decoration-none"><img src="@/assets/icons/twitter.svg" class="me-2 icon"
                alt="logotwiter" /></a>
    
            <a href="#" class="ms-4 text-decoration-none"><img src="@/assets/icons/instagram.svg" class="me-2 icon"
                alt="logoinstagram" /></a>
    
            <a href="#" class="ms-4 text-decoration-none"><img src="@/assets/icons/whatsapp.svg" class="me-2 icon"
                alt="logoWhatsaap" /></a>
          </div>
        </div>
      </footer>
      <!-- Fin Footer -->
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