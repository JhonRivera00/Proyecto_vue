<template>
  <div>
    <!-- Mebu Lateral -->
<div class="col-auto col-md-3 col-xl-3 px-sm-2 px-0 bg-color-blue position-fixed">
  <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 bg-white bg-opacity-25 mx-3  " >
      <div class="py-2 mt-2 mb-md-0 me-md-auto text-white text-decoration-none d-flex shadow-black rounded-3 w-100" >
         <img src="@/assets/icons/person-circle.svg" class="ms-3 " alt="">
         <div class="d-flex flex-column ms-3 mt-1">
           <span class=" text-white fw-light ms-1"> Jennifer Villegas Pino</span>
             <span class="badge rounded-pill bg-green w-50 mt-2">En linea</span>             
         </div>           
        </div>
        <ul class="navbar-nav flex-column mb-sm-auto mt-4 align-items-center align-items-sm-start w-100" id="menu">
          <li class="nav-item w-100 rounded-4 shadow-lg" >
            <router-link to="/admin" class="nav-link pt-3 ps-2">

                <img src="@/assets/icons/house1.svg" alt="" class=" bg-green-opacity p-2 rounded-2">
                <span class=" d-none d-sm-inline text-white fs-5 ms-4 fw-light" >INICIO</span>
            </router-link>
          </li>
          <li class="nav-item w-100  rounded-4 shadow-lg" >
            <router-link to="/cronograma:adm" class="nav-link pt-4 ps-2">
              <img src="@/assets/icons/calendar3.svg" alt="" class=" bg-green-opacity p-2 rounded-2">
              <span class="d-none d-sm-inline text-white fs-5 ms-4 fw-light">CRONOGRAMA</span>
            </router-link>
          </li>
          <li class="nav-item w-100  rounded-4 shadow-lg" >
            <router-link to="/charlas:adm" class="nav-link pt-4 ps-2">
              <img src="@/assets/icons/calendar3.svg" alt="" class=" bg-green-opacity p-2 rounded-2">
              <span class="d-none d-sm-inline text-white fs-5 ms-4 fw-light">CHARLAS</span>
          </router-link>   
          </li>
          <li class="nav-item w-100  rounded-4 shadow-lg" >
              <router-link to="/solicitudes:adm"  class="nav-link pt-4 ps-2">
              <img src="@/assets/icons/card-list.svg" alt="" class=" bg-green-opacity p-2 rounded-2">
              <span class="d-none d-sm-inline text-white fs-5 ms-4 fw-light" >SOLICITUDES</span></router-link>
          </li>  
          <li class="nav-item w-100  rounded-4 shadow-lg" >
            <router-link to="/usuarios:adm"  class="nav-link pt-4 ps-2">
            <img src="@/assets/icons/card-list.svg" alt="" class=" bg-green-opacity p-2 rounded-2">
            <span class="d-none d-sm-inline text-white fs-5 ms-4 fw-light" >USUARIOS</span></router-link>
        </li>                  
      </ul>
      <hr>
  </div>
</div>
<!-- Fin Menu Lateral -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>