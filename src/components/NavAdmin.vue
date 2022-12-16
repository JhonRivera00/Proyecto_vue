<template>
  
      <!-- Inicio Nav -->
  <nav class="navbar navbar-expand-lg p-0 navbar-dark bg-color-blue sticky-top w-100" id="menu">
    <div class="container-fluid ">
      <router-link class="navbar-brand" to="/admin">
        <img src="@/assets/Horizontal.png" alt="Logo" class="img-logo" />
        <img src="@/assets/favicon2.png" alt="Logo" class="img-logo-mini d-none me-auto" /></router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
<a href="#" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#exampleModalIN">+ Crear evento</a>
      <div class="d-inline d-flex navbar-brand" id="navbarSupportedContent">
        <div class="navbar-nav ms-3">
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"><img src="@/assets/icons/bell2.svg" alt="icon-user" /></a>
            <ul class="dropdown-menu bg-color-blue" style="left: -120px" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item text-white"  data-bs-toggle="modal" href="" data-bs-target="#exampleModal" ><img src="@/assets/icons/gear.svg" alt="icon-ajustes"
                    class="me-3"/>
                  Ajustes</a>
              </li>  
            </ul>
          </li>
        </div>
        <div class="navbar-nav ms-3 h-100">
          <li class="nav-item dropdown">
            <a class="nav-link h-100" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"><img src="@/assets/icons/person-circle2.svg" alt="icon-user" /></a>
            <ul class="dropdown-menu bg-color-blue" style="left: -120px" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item text-white"  data-bs-toggle="modal" href="" data-bs-target="#exampleModal" ><img src="@/assets/icons/gear.svg" alt="icon-ajustes"
                    class="me-3"/>
                  Ajustes</a>
              </li>
              <li>
              </li>   
              <li>
                <router-link class="dropdown-item text-white" to="/"><img src="@/assets/icons/box-arrow-right.svg"
                    alt="icon-cerrarsesion" class="me-3" />
                  Cerrar Sesion</router-link>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
 <!-- Modal CREAR EVENTO -->
 <div class="modal fade" id="exampleModalIN" tabindex="-1" aria-labelledby="exampleModalIN" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="row g-2 needs-validation" action="" novalidate>
          <div class="text-center w-100">
            <h2 class="h2 pt-4 pb-5 f">CREAR EVENTO</h2>
            
          </div>
          <!-- Nombre Usuario -->
          <div class="col-12 mt-0" style="padding: 0 50px 0 50px;">
            <label for="validationCustom01" class="form-label">NOMBRE DEL EVENTO</label>
            <input type="text" class="form-control" id="validationCustom01" required>
          </div>
          <!-- Contraseña Usuario -->
          <div class="col-12 mt-0" style="padding: 0 50px 0 50px;">
            <label for="validationCustom02" class="form-label" >FECHA Y HORA DE INICIO</label>
            <input type="date"  class="form-control" id="validationCustom02" required>
           
          </div>
          <div class="col-12 mt-0" style="padding: 0 50px 0 50px;">
            <label for="validationCustom02" class="form-label" >FECHA Y HORA FINAL</label>
            <input type="date"  class="form-control" id="validationCustom02" required>
           
          </div>
          <div class="col-12 mt-0" style="padding: 0 50px 0 50px;">
            <label for="validationCustom02" class="form-label" >FECHA Y HORA FINAL</label>
            <input type="date"  class="form-control" id="validationCustom02" required>
           
          </div>
          <div class="col-12 mt-0" style="padding: 0 50px 0 50px;">
            <label for="validationCustom02" class="form-label" >SELECCIONAR INSTRUCTOR</label>
            
                            
            <select class="form-control" id="exampleFormControlSelect1">
              <option selected disabled>Seleccionar...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
    
           <!-- Boton CREAR EVENTO -->
           <div class="col-12 d-flex justify-content-center mb-2 pb-4 pt-3">
            <button class="btn-green btn"   type="submit">CREAR EVENTO</button>
          </div>
    
        </form>
            
          </div>
         




      </div>
    </div>
  </div>

<!-- FinModal MODAL CREAR EVENTO -->
  <!-- Modal Ajustes -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="needs-validation" action="" novalidate autocomplete="off">
      <div class="modal-header">
        <h4 class="modal-title">Datos Generales</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container">

          <div class="col-md-7 col-lg-8 text-secondary mx-auto">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label ">Nombre:</label>
                  <input type="text" class="form-control bg-white border-green" id="firstName" placeholder="" value="" required>
                </div>
    
                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Apellido:</label>
                  <input type="text" class="form-control  bg-white border-green" id="lastName" placeholder="" value="" required>
                </div>
    
                <div class="col-12">
                  <label for="username" class="form-label">Direccion correo electronico</label>
                  <div class="input-group has-validation">
                    <span class="input-group-text border-green">@</span>
                    <input type="text" class="form-control  bg-white border-green" id="username" required>
                  </div>
                </div>
    
                <div class="col-12">
                  <label for="email" class="form-label">Numero Telefono<span
                      class="text-muted"></span></label>
                  <input type="number" class="form-control  bg-white border-green" id="email" required>
                </div>
    
                <div class="col-12">
                  <label for="address" class="form-label">Direccion:</label>
                  <input type="text" class="form-control  bg-white border-green" id="address" required>
                </div>
                </div>    
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="submit" class="btn btn-green border-green">Guardar cambios</button>
          </div>
        </form>
        </div>
    </div>
  </div>
<!-- Fin Modal Ajustes -->
  
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
.img-titulo-fondo-admin{
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
.bg-green-opacity{
    background-color: #38a900b0;

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