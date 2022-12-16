<template>
  <div>
    <!-- Titulo -->
  <div class="position-relative d-inline-block w-100">
    <img src="@/assets/imgnav.jpg" class="w-100 img-titulo-fondo" alt="">
    <h1 class="text-titulo position-absolute text-center  w-100">CONTACTANOS
      <div class=" d-flex justify-content-around pt-2">
        <div class="bg-green p-1 w-25"></div>
        <div class="bg-green p-1 w-25"></div>
      </div>
    </h1>
  </div>
  <!-- Fin Titulo -->
  <!--CONTACT STAR-->

  <main class="my-5">

<div class="d-flex flex-wrap justify-content-around">
  <div class="bg-green p-4 mt-5 rounded-4 text-center w-25 shadow-black align-items-stretch contenedor-icons-contact">
      <img src="@/assets/icons/phone.svg" alt="">
      <p class="text-white fs-5 mt-5">+57 321 0908 000</p>
      <p class="text-white fs-5">+57 321 0908 000</p>
    
  </div>
  <div class="bg-green p-4 mt-5 rounded-4 text-center w-25 shadow-black align-items-stretch contenedor-icons-contact">
      <img src="@/assets/icons/house.svg" alt="">
      <p class="text-white fs-5 mt-5"> a 3-111, Cra. 3 #3-1</p>
      <p class="text-white fs-5">Popayán, Cauca</p>
    
  </div>
  <div class="bg-green p-4 mt-5 rounded-4 text-center w-25 shadow-black align-items-stretch contenedor-icons-contact">
    <img src="@/assets/icons/chat-dots.svg" alt="">
    <p class="text-white fs-5 mt-5">soysena@sena.edu.co</p>
    <p class="text-white fs-5">baprendiz@sena.edu.co</p>
  </div>
</div>

    <div class="text-center d-flex flex-column justify-content-center align-items-center mt-5">


        <h1 class="mb-4"> Ponte en contacto</h1>
        <h6 >Si tiene alguna pregunta, solo complete el formulario de contacto y <br> le responderemos a la brevedad.</h6>
        <form class="needs-validation w-50 " novalidate>
          <div class="row g-2 my-2">
              <div class="col-sm-12 mt-4 mt-md-5">
                  <input type="text" class="form-control border-green" id="firstName"
                     value="" placeholder="Nombre completo*" required>
      
              </div>
      
              <div class="col-sm-6 mt-4 mt-md-5">
                  <div class="input-group has-validation">
                      <input type="number" class="form-control border-green" id="fecha" placeholder="Numero telefono*"
                          required>
      
                  </div>
              </div>
      
              <div class="col-sm-6 mt-4 mt-md-5">
                  <input type="email" class="form-control border-green" id="motivo" placeholder="Email*"
                      required>
      
              </div>
      
              <div class="col-sm-12 mt-4 mt-md-5">
                  <textarea type="text" class="form-control border-green" id="address2" rows="5"
                      placeholder="Mensaje*" required></textarea>
              </div>
      
      
              <div class="col-md-12 my-4 mt-md-5">
                  <button type="submit" class="btn btn-green btn-lg">Enviar mensaje</button>
              </div>
          </div>
          </form>
      
    </div>
  </main>

  <!--CONTACT END-->
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