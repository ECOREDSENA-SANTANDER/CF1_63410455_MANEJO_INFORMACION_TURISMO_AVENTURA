<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta los fundamentos del turismo de aventura y su relación con el sistema turístico, la cadena de valor, el destino y la oferta turística territorial. Asimismo, desarrolla los conceptos relacionados con los recursos, atractivos, inventarios, infraestructura, patrimonio, prestadores de servicios, productos e identidad territorial, necesarios para comprender la organización de la actividad turística. También aborda los procesos de búsqueda, validación, organización, almacenamiento y protección de la información, así como la caracterización de las personas visitantes según sus motivaciones, necesidades y perfiles. Finalmente, presenta la normatividad aplicable, el Registro Nacional de Turismo, las normas técnicas, la gestión del riesgo y la importancia de la información documentada para apoyar la planificación, la toma de decisiones y la prestación de servicios de turismo de aventura seguros, sostenibles y de calidad.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Fundamentos e información del turismo de aventura”, organizado en cinco ejes temáticos. El primer eje, Turismo de aventura y sistema turístico, incluye sistema turístico, cadena de valor, características y tipología. El segundo, Destino y oferta turística territorial, integra recursos, atractivos, inventario, planta turística, infraestructura, superestructura, patrimonio, prestadores, productos e identidad territorial. El tercer eje, Gestión de la información turística, comprende búsqueda, validación, organización, almacenamiento y protección. El cuarto, Caracterización del visitante, reúne visitante y turista, motivaciones, necesidades, perfil y caracterización. El quinto eje, Normatividad y seguridad, incluye legislación, Registro Nacional de Turismo —RNT—, normas técnicas, gestión del riesgo, materiales y equipos. Los cinco ejes se conectan con el tema central y sintetizan los principales contenidos del componente formativo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
