<template>
  <div>
  <!-- Inicio Nav -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-color-blue p-3" id="menu">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html">
        <img src="@/assets/Horizontal.png" alt="Logo" class="img-logo" />
        <img src="@/assets/favicon2.png" alt="Logo" class="img-logo-mini d-none me-auto" /></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse opciones-navbar" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item fs-6 ">
            <router-link to="/" class="nav-link" aria-current="page" >INICIO</router-link>
          </li>
          <li class="nav-item fs-6">
            <router-link to="/conocenos" class="nav-link" aria-current="page" >CONOCENOS</router-link>
          </li>
          <li class="nav-item fs-6">
            <router-link to="/charla"  data-bs-toggle="modal" href="" data-bs-target="#exampleModal1" class="nav-link" aria-current="page" >CHARLA</router-link>
          </li>
          <li class="nav-item fs-6">
            <router-link to="/cronograma" class="nav-link" aria-current="page" >CRONOGRAMA</router-link>
          </li>
          <li class="nav-item fs-6">
            <router-link to="/contactanos" class="nav-link" aria-current="page" >CONTACTANOS</router-link>
          </li>
        </ul>
        <div class="navbar-nav ms-3 user">
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
              aria-expanded="false"><img src="@/assets/icons/person-circle.svg" alt="icon-user" /></a>
            <ul class="dropdown-menu bg-color-blue" style="left: -120px" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item text-white"  data-bs-toggle="modal" href="" data-bs-target="#exampleModal" ><img src="@/assets/icons/gear.svg" alt="icon-ajustes"
                    class="me-3"/>
                  Ajustes</a>
              </li>
              <li>
                <a class="dropdown-item text-white" href="#">
                  <div class="d-inline-block position-relative">
                    <img src="@/assets/icons/bell.svg" alt="icon-cerrarsesion" class="" />
                    <span class="position-absolute top-0 start-100 translate-middle p-1 bg-green border  rounded-circle"></span>

                    </div>
                    &nbsp; &nbsp; Notificaciones</a>
              </li>   
              <li>
                <router-link to="/admin" class="dropdown-item text-white" ><img src="@/assets/icons/box-arrow-right.svg"
                    alt="icon-cerrarsesion" class="me-3" />
                  Cerrar Sesion</router-link>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  </nav>
<!-- Modal Inicio Sesion -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="row g-2 needs-validation" action="/index.html" novalidate>
          <div class="text-center w-100">
            <h2 class="h2 pt-4 pb-5 f">Iniciar Sesion</h2>
            
          </div>
          <!-- Nombre Usuario -->
          <div class="col-12 mt-0" style="padding: 0 70px 0 70px;">
            <label for="validationCustom01" class="form-label">Usuario</label>
            <input type="text" class="form-control" id="validationCustom01" required>
            <div class="invalid-feedback">
              Por favor, ingrese su nombre de usuario.
            </div>
          </div>
          <!-- Contraseña Usuario -->
          <div class="col-12 " style="padding: 0 70px 0 70px;">
            <label for="validationCustom02" class="form-label" >Contraseña</label>
            <input type="password"  class="form-control" id="validationCustom02" required>
            <div class="invalid-feedback">
              Por favor, ingrese su contraseña.
            </div>
          </div>
    
          <div class="col-12">
            <!-- Terminos y Condiciones -->
            <div class="form-check ps-0 mt-1 ms-5 ps-5">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
              <label class="form-check-label" for="invalidCheck">
                 Acepta los términos y condiciones
              </label>
              <div class="invalid-feedback ms-5">
                Debe estar de acuerdo antes de enviar.
              </div>
            </div>
            <!-- BOton y Texto Registrarse -->
            <span class="mt-2 me-4 pe-2 d-flex justify-content-end align-items-center">No tienes cuenta? <button
                type="button" class="btn text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Registrarte</button></span>
          </div>
          <!-- Boton Iniciar Sesion -->
          <div class="col-12 d-flex justify-content-center mb-2 pb-4 pt-3">
            <router-link class="btn-green btn"  to="/charla" >Iniciar Sesion</router-link>
          </div>
    
        </form>




      </div>
    </div>
  </div>
</div>
<!-- FinModal Inicio Sesion -->
<!-- Modal Registrarse -->

<div class="modal fade text-dark " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="contenedores-modal position-relative ">

  <!-- Modal Registrarse -->
  <div id="modal-usuario-registro">
    <div class="modal-dialog ">
      <div class="modal-content ">
        <form class="needs-validation contenedor-registro rounded-3" action="/index.html" novalidate>              
          <div class="row g-3  text-white  p-4 rounded-3 ">
            <div class="w-100 d-flex justify-content-end ">
              <button type="button" class="btn-close bg-light" style="width: 20px; height: 20px;" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <h3 class="text-center pb-3 text-dark">Regístrate</h3>

            <div class="col-sm-6">
              <label for="firstName" class="form-label text-dark">Nombres</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label text-dark">Apellidos</label>
              <input type="text" class="form-control" id="lastName" placeholder="" required>
            </div>

            <div class="col-12">
              <label for="username" class="form-label text-dark">Nombre de Usuario</label>
              <d class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="" required>
              </d>
            </div>

            <div class="col-12">
              <label for="email" class="form-label text-dark">Correo</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
            </div>

            <div class="col-12">
              <label for="address" class="form-label text-dark">Contraseña</label>
              <input type="password" class="form-control" id="address" placeholder="" required>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label text-dark">Confirmar Contraseña</label>
              <input type="password" class="form-control" id="address2" placeholder="" required>
            </div>

            <div class="col-12">
              <label for="telefono" class="form-label text-dark">Telefono</label>
              <input type="Number" class="form-control" id="telefono" placeholder="305 4321 5432" required>
            </div>

            <div class="col-12">
              <label for="validationGenero" class="form-label text-dark">Genero</label>
              <select class="form-select" id="validationGenero" aria-label="Default select example" required>
                <option selected disable value="">Genero</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
              </select>
            </div>

            <div class="ms-2">
              <input type="checkbox" class="form-check-input" id="same-address">
              <label class="form-check-label text-dark" for="same-address">Recordar</label>
            </div>

            <button class="w-100 btn btn btn btn-green" type="submit" id="botton-registrar">Registrar</button>

          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
<!-- Fin Modal Registrarse -->
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

  <!-- Fin Nav -->
  
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