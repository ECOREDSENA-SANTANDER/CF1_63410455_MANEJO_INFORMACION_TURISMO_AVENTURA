<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de la información turística
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/1.svg', alt='')
      .col-lg-11   
        p.mb-0 La información es uno de los recursos estratégicos más importantes para el desarrollo del turismo de aventura. Su adecuada gestión permite conocer las características del territorio, identificar la oferta disponible, comprender el comportamiento de las personas visitantes y apoyar la toma de decisiones relacionadas con la planificación, la operación y la promoción de los destinos turísticos.
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos='fade-right')
        p En un entorno caracterizado por cambios permanentes en las preferencias del mercado, las condiciones ambientales y la normatividad, disponer de información confiable y actualizada favorece la prestación de servicios de mayor calidad y fortalece la competitividad de los territorios.
        .bg-color-2.p-4
          p.mb-0 La #[b gestión de la información turística] comprende un conjunto de procesos orientados a obtener, verificar, organizar, almacenar, proteger y utilizar datos relevantes para el funcionamiento del sistema turístico. Estos procesos no se limitan a recopilar información, sino que incluyen su análisis, interpretación y actualización para convertir los datos en conocimiento útil para la formulación de estrategias y la solución de problemas. En el turismo de aventura, la información interviene en todas las etapas de la experiencia turística. Antes del viaje facilita la planificación y la comercialización del producto; durante la prestación del servicio contribuye a la operación y la seguridad; y después de la actividad permite evaluar la satisfacción de las personas visitantes, identificar oportunidades de mejora y fortalecer la competitividad del destino.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/2.png', alt='')
    
    p.mb-4 La transformación digital también ha modificado la forma en que se produce y administra la información turística. Actualmente, los destinos disponen de plataformas digitales, sistemas de información geográfica, aplicaciones móviles, redes sociales y bases de datos que permiten recopilar información sobre la demanda, la oferta, el comportamiento de las personas visitantes y las condiciones de operación.
    
    .row
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p Estas herramientas fortalecen los procesos de planificación y permiten responder con mayor rapidez a los cambios del entorno. Sin embargo, su aprovechamiento requiere criterios que garanticen la calidad, confiabilidad y utilidad de la información.
        .bg-color-3.p-4.p-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img.p-3.px-lg-4(src='@/assets/curso/temas/t3/4.svg', alt='')
            .col-lg-7
              h5 La información como activo estratégico
              p El valor de la información turística no depende de la cantidad de datos disponibles, sino de su calidad, actualización, pertinencia y capacidad para apoyar las decisiones relacionadas con la planificación, la seguridad, la operación y la promoción del destino. 
    

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Búsqueda y validación de la información
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos='fade-right')
        p La gestión de la información comienza con la identificación de las necesidades de consulta y la selección de fuentes confiables que permitan responder a los objetivos de planificación, operación y promoción del destino turístico.
        p En turismo de aventura, este proceso adquiere especial importancia porque muchas decisiones dependen de información relacionada con las condiciones ambientales, la normatividad vigente, la oferta de servicios, las características del territorio y el comportamiento del mercado.
        .cajon.color-primario.bg-color-2.p-4
          p.mb-0 La #[b búsqueda] corresponde al proceso mediante el cual se localizan datos provenientes de diferentes fuentes documentales, institucionales y tecnológicas. Su propósito consiste en obtener información pertinente para apoyar la toma de decisiones y reducir la incertidumbre durante la planificación de las actividades.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/5.png', alt='')
    
    p La disponibilidad de grandes volúmenes de información exige establecer criterios que permitan distinguir los datos útiles y confiables de aquellos que carecen de respaldo técnico, presentan inconsistencias o no responden a las necesidades de la consulta.

    p.mb-5 En Colombia, la información turística puede obtenerse de fuentes institucionales, empresariales, territoriales, académicas y tecnológicas. A estas se suman organismos internacionales que aportan estudios y tendencias del turismo de aventura. El siguiente recurso presenta sus principales características.

    h4 Fuentes para consultar información turística

    ImagenInfografica.color-acento-botones.mb-4(data-aos='fade')
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t3/6.jpg', alt='')
      .tarjeta.bg-color-8.p-3(x="11%" y="83%" numero="1")
        .row.justify-content-center.align-items-center
          .col-lg-10
            h5.mb-0 Institucionales
            p.mb-0 Comprenden las publicaciones del Ministerio de Comercio, Industria y Turismo, el Fondo Nacional de Turismo (FONTUR), el Departamento Administrativo Nacional de Estadística (DANE) y las autoridades ambientales. Proporcionan datos para la planificación, la consulta de estadísticas y el reconocimiento de la normatividad.
      .tarjeta.bg-color-8.p-3(x="64.5%" y="81.5%" numero="2")
        .row.justify-content-center.align-items-center
          .col-lg-10
            h5.mb-0 Empresariales
            p.mb-0 Incluyen la información suministrada por prestadores de servicios turísticos y operadores. Permiten conocer la oferta disponible, los horarios, las tarifas y las condiciones operativas de las actividades.   
      .tarjeta.bg-color-8.p-3(x="33%" y="47.5%" numero="3")
        .row.justify-content-center.align-items-center
          .col-lg-10
            h5.mb-0 Territoriales
            p.mb-0 Comprenden inventarios turísticos, planes de desarrollo y documentos de ordenamiento territorial. Apoyan la caracterización y planificación del destino.
      .tarjeta.bg-color-8.p-3(x="38.5%" y="22%" numero="4")
        .row.justify-content-center.align-items-center
          .col-lg-10
            h5.mb-0 Académicas
            p.mb-0 Incluyen libros, artículos científicos, investigaciones y estudios especializados que contribuyen al análisis y la innovación turística.    
      .tarjeta.bg-color-8.p-3(x="71.5%" y="38%" numero="5")
        .row.justify-content-center.align-items-center
          .col-lg-10
            h5.mb-0 Tecnológicas
            p.mb-0 Comprenden sistemas de información, aplicaciones móviles y plataformas digitales que facilitan la consulta y actualización de datos.
      .tarjeta.bg-color-8.p-3(x="72%" y="17%" numero="6")
        .row.justify-content-center.align-items-center
          .col-lg-10
            h5.mb-0 Internacionales
            p.mb-0 Incluyen organismos como ONU Turismo y la Adventure Travel Trade Association, cuyas publicaciones permiten reconocer tendencias del turismo de aventura. 

    p.mb-5 Una vez identificadas las principales fuentes de información turística, es necesario aplicar criterios que permitan validar la calidad de los datos recopilados. La siguiente ruta presenta los pasos para determinar si la información es actual, confiable, pertinente, exacta y completa antes de utilizarla en la planificación o prestación de servicios turísticos.

    h4 Ruta para validar la información turística

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/7.png', alt='')
      .col-lg-9(data-aos='fade-left')
        TabsA.color-acento-botones
          .tarjeta.bg-color-2.p-4(titulo="Revisar la actualidad")
            p.mb-0 Comprobar la fecha de publicación o actualización. En turismo de aventura, este criterio permite identificar cambios en rutas, condiciones climáticas, restricciones de acceso o normatividad.
          .tarjeta.bg-color-2.p-4(titulo="Verificar la confiabilidad")
            p.mb-0 Identificar la procedencia de los datos y priorizar fuentes institucionales o publicaciones con respaldo técnico.
          .tarjeta.bg-color-2.p-4(titulo="Confirmar la pertinencia")
            p.mb-0 Determinar si la información responde al objetivo de la consulta y resulta útil para planificar, promocionar u operar una actividad turística.
          .tarjeta.bg-color-2.p-4(titulo="Comprobar la exactitud")
            p.mb-0 Revisar la coherencia y precisión de datos como la localización, las distancias, los niveles de dificultad y los servicios disponibles.
          .tarjeta.bg-color-2.p-4(titulo="Evaluar la integridad")
            p.mb-0 Verificar que la información esté completa y permita tomar decisiones sin depender de datos parciales. 
    
    p La aplicación de estos criterios favorece la construcción de diagnósticos más precisos y mejora la capacidad de respuesta frente a los cambios del entorno turístico.
    p.mb-5 Algunos datos pueden modificarse por las condiciones del territorio, las decisiones de las autoridades o los cambios en la oferta de servicios. El siguiente recurso presenta situaciones que deben verificarse antes de utilizar la información.

    h4 Aspectos que deben verificarse antes de utilizar la información

    .tarjeta.bg-fondo-2.p-4.mb-4(data-aos='fade')
      LineaTiempoC.color-acento-contenido
        .row.justify-content-center.align-items-center.mb-4(titulo="Estado de las rutas")
          .col-md-6.col-lg-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t3/8.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Una publicación antigua puede describir una ruta que actualmente se encuentra cerrada, deteriorada o restringida.        
        .row.justify-content-center.align-items-center.mb-4(titulo="Condiciones climáticas")
          .col-md-6.col-lg-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t3/9.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p La información climática debe consultarse antes de desarrollar una actividad, ya que las condiciones meteorológicas pueden cambiar y modificar el escenario previsto.          
        .row.justify-content-center.align-items-center.mb-4(titulo="Acceso al territorio")
          .col-md-6.col-lg-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t3/10.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Las autoridades ambientales o territoriales pueden establecer restricciones temporales de ingreso a determinadas áreas.        
        .row.justify-content-center.align-items-center.mb-4(titulo="Oferta de servicios")
          .col-md-6.col-lg-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t3/11.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Las tarifas, los horarios, la disponibilidad y las condiciones de los servicios pueden cambiar y deben confirmarse directamente con los prestadores.        
        .row.justify-content-center.align-items-center.mb-4(titulo="Seguridad de la actividad")
          .col-md-6.col-lg-5.mb-3.mb-md-0
            img(src='@/assets/curso/temas/t3/12.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Las decisiones operativas deben sustentarse en información actual, completa y verificada para evitar riesgos innecesarios. 

    p Estas situaciones evidencian que la verificación debe realizarse antes de emplear los datos en cualquier etapa del servicio turístico.
    
    .bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/13.png')})`}")
      .bloque-texto-g__texto.tarjeta.p-4
        h5 Verificar antes de utilizar #[br] #[br]
        p.mb-0 La información debe verificarse antes de emplearse en la planificación, promoción u operación de actividades turísticas. En turismo de aventura, la calidad de los datos puede incidir directamente en la seguridad de las personas visitantes y en la sostenibilidad del destino.
    
    p Para reconocer cómo la calidad de la información influye en la seguridad, la planificación y la experiencia de las personas visitantes, se invita a explorar el siguiente pódcast.

    .bg-color-3.mb-4
      img(src='@/assets/curso/temas/t3/14.svg', alt='')
      .bg-color-1.p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones(
          texto="<b>Pódcast:</b> Información confiable, aventura segura "
          :audio="require_src('@/assets/actividad/audio/success.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    
    p La búsqueda y la validación constituyen la base de las etapas posteriores de la gestión de la información. Una vez recopilados y validados los datos, deben organizarse sistemáticamente para facilitar su consulta, actualización y aprovechamiento.

    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Organización, registro, almacenamiento y protección de la información
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Organización y registro de la información
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        p La recopilación de datos representa solamente la primera etapa de un proceso orientado a generar conocimiento para la gestión turística. Una vez obtenida y validada la información, es necesario organizarla sistemáticamente para facilitar su localización, consulta, actualización y utilización.
        p.mb-0 En los destinos turísticos convergen diferentes tipos de información, entre ellos inventarios turísticos, registros de visitantes, bases de datos de prestadores de servicios, itinerarios, reportes de operación, registros de incidentes, estudios de mercado, cartografía, material fotográfico y documentos normativos.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/15.png', alt='')
      .col-lg-5
        p La diversidad de estos insumos exige establecer mecanismos para clasificarlos según su naturaleza, finalidad y nivel de actualización. De esta manera, se evita la dispersión de la información y se reduce la posibilidad de utilizar datos inconsistentes durante la toma de decisiones.
        p.mb-0 Una adecuada organización también fortalece la continuidad de los procesos institucionales. Cuando los documentos y registros se encuentran correctamente estructurados, es posible hacer seguimiento a las actividades, conservar el historial de los cambios y facilitar el acceso oportuno por parte de las personas autorizadas.
    
    p.mb-5 Los criterios esenciales para organizar la información turística se presentan a continuación.

    h4 Ruta para organizar la información turística

    .row.mb-5
      .col-sm-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t2/17.svg', alt='')
          h3 Clasificar
          p Agrupar la información según su temática o función, como registros de visitantes, inventarios, rutas, prestadores y documentos operativos.
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t2/18.svg', alt='')
          h3 Identificar
          p Asignar nombres, códigos, fechas y otros datos que faciliten la localización y consulta de los documentos.      
      .col-sm-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t2/19.svg', alt='')
          h3 Actualizar
          p Incorporar los cambios relacionados con las rutas, los servicios, la normatividad o las condiciones del destino.      
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t2/20.svg', alt='')
          h3 Facilitar el acceso
          p Permitir que las personas autorizadas consulten oportunamente la información necesaria para la planificación y la operación turística.      
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta--boton.bg-color-2.p-4.h-100
          .row.mb-3
            .col-3.col-md-4.col-lg-5
              img(src='@/assets/curso/temas/t2/21.svg', alt='')
          h3 Conservar la trazabilidad
          p Mantener el historial de las modificaciones realizadas y controlar las diferentes versiones de los documentos. 

    .row.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/16.png', alt='')
      .col-lg-9(data-aos='fade-left')
        .row.justify-content-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img.w-80x(src='@/assets/curso/temas/t3/17.svg', alt='')
          .col-lg
            p.mb-0 La organización facilita el registro de la información. Registrar consiste en documentar sistemáticamente los datos obtenidos durante la operación turística mediante formatos, bases de datos o sistemas diseñados para tal fin.
        p Este procedimiento permite conservar evidencia sobre las actividades desarrolladas y garantiza que la información se encuentre disponible para consultas posteriores.
        p La calidad del registro depende de que los datos sean claros, completos, legibles y elaborados bajo criterios uniformes. Cada documento debe permitir identificar el momento en que fue elaborado, la actividad desarrollada, las personas responsables y las observaciones relevantes para la operación.
        .tarjeta.bg-color-3(data-aos='fade')
          .row.justify-content-center.align-items-center
            .col-lg-7
              .p-4
                h5 El valor de registrar
                p.mb-0 Registrar información no consiste únicamente en diligenciar formatos. Significa documentar de manera organizada hechos, condiciones y resultados que respaldan la planificación, la operación, la evaluación y el mejoramiento continuo de los servicios turísticos. En turismo de aventura, los registros cumplen funciones administrativas, operativas, comerciales y preventivas. 
            .col-lg-5.d-none.d-lg-block
              img.px-lg-5.p-2(src='@/assets/curso/temas/t3/18.svg', alt='')
    
    p.mb-5 El siguiente recurso presenta los principales documentos utilizados durante la prestación del servicio. 

    h4 Registros de la operación turística

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos='fade-right')
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-6")
          .row(titulo="Registro de visitantes")
            p.mb-0 Permite identificar a las personas que participan en la actividad.
          .row(titulo="Formato de reserva")
            p.mb-0 Documenta la contratación y las características principales del servicio solicitado.
          .row(titulo="Consentimiento informado")
            p Participan Documenta que la persona recibió información sobre las condiciones, riesgos y requisitos de participación y manifestó su consentimiento.
          .row(titulo="Lista de verificación de equipos")
            p.mb-0 Permite comprobar el estado de los elementos utilizados antes y después de cada actividad.
          .row(titulo="Reporte de novedades")
            p.mb-0 Documenta incidentes, observaciones o situaciones relevantes presentadas durante la operación.
          .row(titulo="Encuesta de satisfacción")
            p.mb-0 Recopila información sobre la experiencia de las personas visitantes y apoya el mejoramiento continuo del servicio. 
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/19.png', alt='')    
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Almacenamiento de la información
    
    p Después de ser registrada, la información debe almacenarse de manera que se garantice su disponibilidad, integridad y conservación durante el tiempo requerido por la organización y la normatividad aplicable. El almacenamiento comprende los procedimientos destinados a conservar documentos y datos en medios físicos o digitales para que puedan consultarse cuando sean necesarios.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/20.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .cajon.color-acento-contenido.bg-color-11.p-4.mb-4
          p.mb-0 El avance de las tecnologías de la información ha favorecido la implementación de sistemas digitales para la gestión documental en el sector turístico. Las bases de datos, las plataformas de reservas, las aplicaciones móviles, los servicios de almacenamiento en la nube y los sistemas de información turística permiten administrar grandes volúmenes de datos, reducir los tiempos de búsqueda y facilitar la actualización de los registros.
        p No obstante, la utilización de herramientas digitales también exige establecer medidas que protejan la integridad de la información y reduzcan el riesgo de pérdida o alteración de los datos. La selección del medio de almacenamiento depende de las necesidades de la organización, el volumen de información generado y los procesos desarrollados. En algunos casos, los sistemas físicos y digitales coexisten como parte de una estrategia de respaldo documental.
    
    h4 Medios para almacenar información turística

    .row.justify-content-center.mb-4(data-aos='fade')
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.t3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-5.col-md-5.col-lg-6
              img(src='@/assets/curso/temas/t3/21.svg', alt='')
          h4.text-center Archivo físico
          p.mb-0 Conserva documentos impresos debidamente identificados y organizados. Puede utilizarse para contratos, consentimientos y documentación legal.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.t3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-5.col-md-5.col-lg-6
              img(src='@/assets/curso/temas/t3/22.svg', alt='')
          h4.text-center Base de datos
          p.mb-0 Permite organizar información estructurada y facilita la consulta de registros de visitantes y prestadores de servicios.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.t3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-5.col-md-5.col-lg-6
              img(src='@/assets/curso/temas/t3/23.svg', alt='')
          h4.text-center Plataforma digital
          p.mb-0 Centraliza información operativa y administrativa, como reservas, programación de actividades y reportes.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.t3.h-100.p-4
          .row.justify-content-center.mb-3
            .col-5.col-md-5.col-lg-6
              img(src='@/assets/curso/temas/t3/24.svg', alt='')
          h4.text-center Almacenamiento en la nube
          p.mb-0 Facilita el acceso remoto, la consulta de información y la generación de copias de respaldo. 

    p.mb-5 Estos procesos permiten construir una memoria institucional que favorece el aprendizaje organizacional, el seguimiento de las actividades y el mejoramiento continuo de la gestión turística.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Protección de datos e información turística
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos='fade-right')
        p La gestión de la información turística implica una responsabilidad permanente relacionada con el tratamiento adecuado de los datos recopilados durante la prestación de los servicios.
        p En el turismo de aventura es habitual obtener información personal mediante reservas, formatos de inscripción, consentimientos informados, registros de ingreso, pólizas de asistencia y encuestas de satisfacción. Estos datos permiten planificar las actividades, fortalecer la seguridad y mejorar la calidad del servicio, pero requieren mecanismos que garanticen su protección y uso responsable.
        .cajon.color-primario.bg-color-2.p-4
          p.mb-0 En Colombia, el tratamiento de datos personales se encuentra regulado por la Ley 1581 de 2012, que establece los principios y procedimientos para garantizar el derecho de las personas a conocer, actualizar y rectificar la información que repose sobre ellas en bases de datos o archivos. Esta regulación se desarrolla en el capítulo 25 del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.
      .col-lg-5.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/25.png', alt='')
    
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .bg-color-11.d-flex.align-items-center.p-4.h-100
          p.mb-0 La protección de los datos es esencial para generar confianza entre los prestadores de servicios turísticos y las personas visitantes. Su manejo responsable fortalece la transparencia institucional, reduce los riesgos asociados con el uso indebido de la información y favorece el cumplimiento de la normatividad vigente.
      .col-lg-3.d-none.d-lg-block
        .bg-color-7.tarjeta.h-100
          img(src='@/assets/curso/temas/t3/26.svg', alt='')
      .col-lg-5 
        img.mb-3.w-80x.d-none.d-lg-block(src='@/assets/curso/temas/t3/27.svg', alt='')
        p.mb-0 En turismo de aventura pueden recopilarse datos de contacto, contactos para emergencias y, en algunos casos, información relacionada con la salud de las personas participantes. Los datos relativos a la salud tienen carácter sensible y requieren medidas especiales de protección. Cuando su tratamiento requiera autorización, esta debe ser previa, expresa e informada, y debe aclararse que la persona no está obligada a autorizar el tratamiento de datos sensibles, salvo las excepciones previstas en la ley.
    
    p.mb-5 Los siguientes principios orientan el tratamiento responsable de la información personal.

    h4 Principios esenciales para proteger los datos personales

    SlyderF.mb-4(columnas="col-md-6 col-xl-4" data-aos='fade')
      .tarjeta.bg-color-6.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/28.svg' alt='')
        h4.text-center.text-white Legalidad
        p.text-white.mb-0 El tratamiento de los datos personales debe realizarse conforme a la legislación vigente.
      .tarjeta.bg-color-6.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/29.svg' alt='')
        h4.text-center.text-white Finalidad
        p.text-white.mb-0 La información solo puede utilizarse para los propósitos legítimos, informados y autorizados por la persona titular.    
      .tarjeta.bg-color-6.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/30.svg' alt='')
        h4.text-center.text-white Confidencialidad
        p.text-white.mb-0 Los datos deben mantenerse bajo reserva y protegerse para evitar que sean conocidos o utilizados por personas no autorizadas.    
      .tarjeta.bg-color-6.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/31.svg' alt='')
        h4.text-center.text-white Seguridad
        p.text-white.mb-0 Deben implementarse medidas técnicas, humanas y administrativas para evitar la pérdida, alteración, consulta o utilización indebida de la información. 
      .tarjeta.bg-color-6.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/t3/32.svg' alt='')
        h4.text-center.text-white Acceso y circulación restringida
        p.text-white.mb-0 Los datos personales solo pueden ser consultados, utilizados o compartidos por las personas autorizadas y en las condiciones permitidas por la ley. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/33.png', alt='')
      .col-lg-7(data-aos='fade-left')
        p ELa protección no se limita a los datos personales. También comprende los documentos técnicos, inventarios turísticos, registros operativos, cartografía, bases de datos institucionales y demás información que respalda la gestión del destino.
        p La pérdida, alteración o divulgación no autorizada de estos registros puede afectar la continuidad de los procesos, dificultar la toma de decisiones y limitar la capacidad de respuesta ante situaciones de emergencia. Por esta razón, el tratamiento responsable debe aplicarse durante la recopilación, utilización, almacenamiento y conservación de la información.
    
    p.mb-4 Las siguientes acciones permiten llevar estos principios a la práctica durante la gestión de la información turística.

    h4 Acciones para proteger la información turística

    .row.justify-content-center.mb-5  
      .col-lg-6(data-aos='fade-right')
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Obtener la autorización")
            .col-md-12
              p.mb-0 Obtener la autorización previa, expresa e informada de la persona titular antes de tratar sus datos personales, salvo las excepciones previstas en la ley.  
          .row(numero="2" titulo="Limitar la utilización")
            .col-md-12
              p.mb-0 Emplear la información únicamente para la finalidad que fue informada y autorizada.
          .row(numero="3" titulo="Controlar el acceso")
            .col-md-12
              p.mb-0 Permitir la consulta únicamente a las personas que requieren la información para cumplir sus funciones.
          .row(numero="4" titulo="Conservar los respaldos")
            .col-md-12
              p.mb-0 Mantener copias de seguridad que permitan recuperar la información en caso de pérdida, daño o fallas tecnológicas.  
          .row(numero="5" titulo="Evitar la divulgación")
            .col-md-12
              p.mb-0 Proteger los datos y documentos frente al acceso, publicación, circulación o utilización no autorizada. 
      .col-lg-6.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/34.png', alt='') 
    
    p.mb-4 La aplicación conjunta de estos principios y acciones ayuda a conservar la integridad y confidencialidad de la información y fortalece la responsabilidad de las organizaciones frente a las personas titulares de los datos.

    .bg-color-5(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/35.png', alt='')
        .col-lg-7
          .text-white.p-4
            h4 Protección de la información turística
            p La información turística es un activo institucional. Su protección garantiza la continuidad de los procesos, fortalece la confianza de las personas visitantes y contribuye al cumplimiento de los principios éticos y legales que orientan el turismo sostenible.
            p La implementación de procedimientos para organizar, almacenar y proteger la información fortalece la calidad de la gestión turística y promueve una cultura basada en la responsabilidad, la transparencia y el respeto por los derechos de las personas.
            p.mb-0 Estos principios deben aplicarse transversalmente en los procesos de planificación, operación y evaluación de las actividades de turismo de aventura. 



    

        
      
         







        


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
