<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos='fade-right')
        p El turismo de aventura transforma los recursos naturales y culturales de un territorio en experiencias que combinan exploración, actividad física y contacto con el entorno. Para planificar y desarrollar estas experiencias de manera segura, responsable y sostenible, es indispensable disponer de información confiable sobre los destinos, los servicios disponibles, las características de las personas visitantes y las condiciones en las que se realizan las actividades. En este contexto, la información constituye un recurso estratégico para la planificación, la gestión turística y la toma de decisiones.
        p En este componente formativo, el aprendiz reconocerá los elementos que conforman el sistema turístico y comprenderá cómo los recursos, atractivos, prestadores de servicios, infraestructura y comunidades se articulan para construir la oferta de un destino. Asimismo, identificará la importancia de buscar, validar, organizar, almacenar y proteger la información turística como soporte para la planificación, la operación y la mejora de los servicios turísticos.        
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            .tarjeta.bg-color-9.p-4.px-4.h-100
              img(src='@/assets/curso/temas/intro/1.svg', alt='')
          .col-lg-10
            p.mb-0 El recorrido por los contenidos permitirá analizar situaciones relacionadas con el turismo de aventura desde una perspectiva territorial, técnica y normativa. Además, facilitará la caracterización de las personas visitantes y el reconocimiento de aspectos asociados con la gestión del riesgo, la seguridad, los materiales y los equipos, con el propósito de contribuir al desarrollo de experiencias turísticas de calidad, acordes con las condiciones del entorno y los principios de sostenibilidad.
      .col-lg-3.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/intro/2.png', alt='')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
