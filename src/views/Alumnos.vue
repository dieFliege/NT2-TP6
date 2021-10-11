<template>
  <div class="alumnos">
    <h1>Listado de alumnos</h1>
    <Alumno />
  </div>
</template>

<script>
    import Alumno from "@/components/Alumno.vue"

    export default {
        name: 'Alumnos',
        components:{
            Alumno
        }
    }
</script>