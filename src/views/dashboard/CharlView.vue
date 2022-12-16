<template>
  <div>
    <!-- Titulo -->
<div class="position-relative d-inline-block w-100">
  <img src="@/assets/imgnav.jpg" class="w-100 img-titulo-fondo" alt="">
  <h1 class="text-titulo position-absolute text-center  w-100">SOLICITA TU CHARLA 
    <div class=" d-flex justify-content-around pt-2">
       <div class="bg-green p-1 w-25" ></div>
       <div class="bg-green p-1 w-25" ></div>
    </div>
  </h1>
</div>
<!-- Fin Titulo -->
   <!-- Profesionales -->
   <section class="py-5">
    <div class="d-flex justify-content-center">
      <div class=" w-50">
        <p class="text-center ">Promover espacios en los que se afiancen las habilidades sociales, emocionales y
          académicas en pro de favorecer la adaptación universitaria y la mejora de la calidad de vida de los
          estudiantes y colaboradores del Politécnico Gran Colombiano.</p>
      </div>
    </div>
    <div class="w-100 d-flex flex-wrap my-5">
      <div class="text-center mx-auto mt-4">
        <div class="">
          <p class="fs-5 mb-2">Ana Maria Echeverry <br> Enfermera</p>
          <img src="@/assets/psicologo1.webp" class="img-profesionales" alt="" />
        </div>
      </div>
      <div class="text-center mx-auto mt-4">
        <div class="">
          <p class="fs-5 mb-2">Angie Lorena Quintana <br> Psicóloga</p>
          <img src="@/assets/psicologo1.webp" class="img-profesionales" alt="" />
        </div>
      </div>
      <div class="text-center mx-auto mt-4">
        <div class="">
          <p class="fs-5 mb-2">Jose Danilo Ortega <br> Psicólogo</p>
          <img src="@/assets/psicologo1.webp" class="img-profesionales" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- Profesionales -->
  <main class="text-center d-flex flex-column justify-content-center align-items-center" id="form-charla">
      <p class="fs-3 fw-semibold w-50">SOLICITA TU CHARLA DE FORMA GRUPAL O PERSONAL</p>
      <div class="bg-green pt-1 w-25 "></div>
      <form class="needs-validation w-50 " novalidate>
          <div class="row g-2 my-2">
              <div class="col-sm-12 mt-4 mt-md-5">
                  <input type="text" class="form-control border-green" id="firstName"
                  value="" placeholder="Nombre completo*" required>
                  
                </div>

        <div class="col-sm-6 mt-4 mt-md-5">
            <div class="input-group has-validation">
                <input type="date" class="form-control border-green" id="fecha"
                    required>

            </div>
        </div>

        <div class="col-sm-6 mt-4 mt-md-5">
            <input type="time" class="form-control border-green" id="motivo"
                required>

        </div>

        <div class="col-md-12 mt-4 mt-md-5">
            <select class="form-select col-md-12 border-green" id="validationCustom04" required>
                <option selected disabled value=""> Selecciona una opcion...</option>
                <option>Ana Maria Psicologa</option>
                <option>Angie Gutierrez Enfermera</option>
                <option>Camilo Figueroa Deportes</option>
            </select>

        </div>

        <div class="col-sm-12 mt-4 mt-md-5">
            <textarea type="text" class="form-control border-green" id="address2" rows="5"
                placeholder="Motivo de su cita*" required></textarea>
        </div>


        <div class="col-md-12 my-4 mt-md-5">
            <button type="submit" class="btn btn-green btn-lg">Solicitar</button>
        </div>
    </div>
    </form>
</main>
  </div>
</template>

<script>
export default {

}
</script>>



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