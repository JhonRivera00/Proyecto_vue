<template>
  <div class="col px-3">
    <div class="centrarcontenido">
      <div class="position-relative d-inline-block w-100">
        <img src="@/assets/imgnav.jpg" class="w-100 img-titulo-fondo" alt="" />
        <h1 class="text-titulo position-absolute text-center w-100">
          CHARLAS
          <div class="d-flex justify-content-around pt-2">
            <div class="bg-green p-1 w-25"></div>
            <div class="bg-green p-1 w-25"></div>
          </div>
        </h1>
      </div>
      <!-- Fin Titulo -->
      <!-- Inicio Contenido -->
      <main class="px-5 py-5">
        <div class="table-responsive">
          <table class="table table-hover table-sm border-green">
            <thead class="border-1">
              <tr class="table-active bg-color-blue text-white">
                <th>APRENDIZ</th>
                <th>FICHA</th>
                <th>MOTIVO</th>
                <th>ESTADO</th>
                <th>CORREO</th>
                <th>BOTONES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="paciente">Jhon Alexander Rivera</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion"><!-- Button trigger modal -->
                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        SOLICITUD ACEPTADA
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        SOLICITUD APLAZADA
                      </h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion"><!-- Button trigger modal -->
                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>
                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
            </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion"><!-- Button trigger modal -->
                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion"><!-- Button trigger modal -->
                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion"><!-- Button trigger modal -->
                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion"><!-- Button trigger modal -->
                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
              <tr>
                <td data-label="paciente">David</td>
                <td data-label="ficha">2452439</td>
                <td data-label="motivo">Problema familiar</td>
                <td data-label="estado">En espera</td>
                <td data-label="correo">jrdavidrui426@gmail.com</td>
                <td data-label="descripcion"><!-- Button trigger modal -->
                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                  Aceptar
                </button>

                <button type="button" class="btn btn-green" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                  Aplazar
                </button>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>