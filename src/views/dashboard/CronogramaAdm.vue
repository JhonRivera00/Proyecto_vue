<template>
    <div class="col px-3">
    <div class="centrarcontenido">
      <div class="position-relative d-inline-block w-100" >
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
        <!--cards desde aqui-->
<div class="container">
  <div class="fs-1 text-center pt-3 fw-bold">Eventos Disponibles</div>
  <div class="row">
      <div class="col-sm-4 pt-5">
          <div class="card border border-success" id="cardd" style="width: 18rem;">
              <img src="@/assets/futbol.png" class="card-img-top" alt="futbol">
              <div class="card-body">
                <h5 class="card-title text-center">Torneo De Futbol</h5>
                <p class="card-text ">El evento de ... será una gran oportunidad para que los aprendices del SENA CTPI demuestren su habilidad en el deporte y también su integración en el equipo.</p>
                <div> Fecha  y Hora de Inicio  </div>
                 <input class="form-control" type="datetime-local" placeholder="selecciones fecha" required>
                 <br>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                  <label class="form-check-label" for="flexSwitchCheckChecked">Evento Activo</label>
                </div>

                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Desactivar Evento</label>
                </div>
              </div>
            </div>
      </div>

      <div class="col-sm-4 pt-5">
          <div class="card border border-success" id="cardd" style="width: 18rem;">
              <img src="@/assets/baloncesto2.jpg" class="card-img-top" alt="..." id="bal" >
              <div class="card-body">
                  <h5 class="card-title text-center">Torneo De Baloncesto</h5>
                  <p class="card-text ">El evento de ... será una gran oportunidad para que los aprendices del SENA CTPI demuestren su habilidad en el deporte y también su integración en el equipo.</p>
                  <div> Fecha  y Hora de Inicio  </div>
                   <input class="form-control" type="datetime-local" placeholder="selecciones fecha" required>
                   <br>
                   <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
                      <label class="form-check-label" for="flexSwitchCheckDisabled">Evento Inactivo</label>
                    </div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                      <label class="form-check-label" for="flexSwitchCheckDefault">Activar Evento</label>
                    </div>

                 
                </div>
            </div>
      </div>

      <div class="col-sm-4 pt-5">
          <div class="card border border-success" id="cardd" style="width: 18rem;">
              <img src="@/assets/volei.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title text-center pt-3">Torneo De Voleibol</h5>
                  <p class="card-text ">El evento de ... será una gran oportunidad para que los aprendices del SENA CTPI demuestren su habilidad en el deporte y también su integración en el equipo.</p>
                  <div> Fecha  y Hora de Inicio  </div>
                   <input class="form-control" type="datetime-local" placeholder="selecciones fecha" required>
                   <br>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked">Evento Activo</label>
                  </div>

                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Desactivar Evento</label>
                  </div>
                </div>
            </div>
      </div>
</div>

<div class="row">
  <div class="col-sm-4 pt-5">
      <div class="card border border-success"  id="cardd" style="width: 18rem;">
          <img src="@/assets/charla.jpg" class="card-img-top" alt="futbol">
          <div class="card-body">
            <h5 class="card-title text-center">Charla</h5>
            <p class="card-text ">El evento de ... será una gran oportunidad para que los aprendices del SENA CTPI demuestren su habilidad en el deporte y también su integración en el equipo.</p>
            <div> Fecha  y Hora de Inicio  </div>
             <input class="form-control" type="datetime-local" placeholder="selecciones fecha" required>
             <br>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked">Evento Activo</label>
            </div>

            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Desactivar Evento</label>
            </div>
          </div>
        </div>
  </div>

  <div class="col-sm-4 pt-5">
      <div class="card border border-success"  id="cardd" style="width: 18rem;">
          <img src="@/assets/divulgacion.jpg" class="card-img-top" alt="..." id="bal" >
          <div class="card-body">
              <h5 class="card-title text-center">Divulgacion Tecnologica</h5>
              <p class="card-text ">el SENA continuará promoviendo la divulgación tecnológica en todos sus programas de formación. Con esta iniciativa, buscamos fomentar el interés de los aprendices por las nuevas tecnologías y prepararlos para enfrentar con éxito los desafíos del mundo laboral en una sociedad cada vez más tecnificada. .</p>
              <div> Fecha  y Hora de Inicio  </div>
               <input class="form-control" type="datetime-local" placeholder="selecciones fecha" required>
               <br>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                <label class="form-check-label" for="flexSwitchCheckChecked">Evento Activo</label>
              </div>

              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Desactivar Evento</label>
              </div>
            </div>
        </div>
  </div>

  <div class="col-sm-4 pt-5">
      <div class="card border border-success"  id="cardd" style="width: 18rem;">
          <img src="@/assets/psico.jpg" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title text-center">Charlas Psicologicas</h5>
              <p class="card-text ">Los aprendices del SENA CTPI tendran la oportunidad de participar en charlas psicológicas con el fin de mejorar su bienestar emocional y su integración en el equipo. Estas charlas seran muy valiosas para los aprendices, ya que les permitiran comprender mejor sus emociones y aprender a manejarlas de manera saludable.</p>
              <div> Fecha  y Hora de Inicio  </div>
               <input class="form-control" type="datetime-local" placeholder="selecciones fecha" required>
               <br>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                <label class="form-check-label" for="flexSwitchCheckChecked">Evento Activo</label>
              </div>

              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Desactivar Evento</label>
              </div>
            </div>
        </div>
  </div>
</div>


</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>