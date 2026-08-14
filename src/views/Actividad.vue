<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos e información del turismo de aventura',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> validar la apropiación de los conceptos relacionados con el sistema turístico, la oferta turística territorial, la gestión de la información, la caracterización de visitantes, la normatividad aplicable y la seguridad en el turismo de aventura, como soporte para la planificación y operación de actividades turísticas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del sistema turístico dentro del desarrollo de un destino?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar la interacción entre los diferentes actores, recursos y servicios que participan en la actividad turística.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el número de visitantes mediante campañas publicitarias permanentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar exclusivamente los establecimientos de alojamiento y gastronomía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regular únicamente las actividades comerciales realizadas por los operadores turísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Dentro de la cadena de valor del turismo, ¿cuál es la finalidad principal de la comercialización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar los protocolos de seguridad para las actividades de aventura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar el mantenimiento de la infraestructura turística.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dar a conocer la oferta turística y facilitar su acceso al mercado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elaborar inventarios de recursos naturales y culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Según la metodología para la elaboración del inventario turístico de Colombia, un atractivo turístico corresponde a:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cualquier recurso natural existente dentro del territorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un recurso natural o cultural que ha sido puesto en valor para el uso turístico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Toda empresa inscrita en el Registro Nacional de Turismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una infraestructura construida para facilitar el acceso al destino.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos forma parte de la oferta turística territorial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los procedimientos internos de contratación del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las estrategias financieras de las empresas del sector.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los indicadores macroeconómicos del país.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los prestadores de servicios, los productos turísticos y la identidad territorial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal finalidad de validar la información turística antes de utilizarla en la planificación de una actividad de turismo de aventura?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el número de documentos utilizados durante la operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar que la información sea confiable, pertinente y actualizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la consulta de fuentes oficiales relacionadas con el turismo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la experiencia del personal operativo durante la actividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la principal finalidad de organizar la información turística dentro de una empresa u organización?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de visitantes al destino.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar la consulta, actualización y utilización de la información para apoyar la gestión turística.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir los procesos de promoción turística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el número de documentos institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes criterios es fundamental para validar la información turística antes de utilizarla?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actualidad, confiabilidad y pertinencia de la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de documentos recopilados durante la investigación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de personas que consultan la información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiempo empleado para registrar los datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El tratamiento de los datos personales en Colombia se encuentra regulado principalmente por:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Ley 300 de 1996.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El Decreto 1074 de 2015.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La Ley 1581 de 2012.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La Ley 397 de 1997.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué información aporta principalmente la caracterización del turista de aventura?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El valor comercial de los atractivos turísticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El inventario de infraestructura disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El estado financiero de los prestadores de servicios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las características, motivaciones y necesidades de las personas visitantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es uno de los principales beneficios de conocer las motivaciones del turista de aventura?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar productos turísticos acordes con las expectativas del mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el número de normas aplicables al destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la capacidad de carga de los atractivos turísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir los procesos de gestión documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la finalidad principal del Registro Nacional de Turismo (RNT)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar los recursos naturales destinados al turismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar los inventarios turísticos de cada municipio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Formalizar e identificar a los prestadores de servicios turísticos autorizados para operar en Colombia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Certificar las competencias laborales del personal turístico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la Ley General de Turismo en Colombia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 397 de 1997.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 2068 de 2020.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ley 1581 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ley 300 de 1996.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el propósito de la NTC-ISO 21101:2020 aplicada al turismo de aventura?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular la clasificación de los establecimientos de alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer requisitos para los sistemas de gestión de la seguridad en las organizaciones de turismo de aventura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir la metodología para elaborar inventarios turísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamentar el funcionamiento del Registro Nacional de Turismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El Código Mundial de Ética para el Turismo promueve principalmente:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La clasificación de los atractivos turísticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La regulación de las tarifas de los servicios turísticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La organización de los inventarios turísticos nacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Principios orientados al desarrollo responsable, sostenible y respetuoso de la actividad turística.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Por qué es importante mantener actualizada la información normativa dentro de una organización turística?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque facilita el cumplimiento de los requisitos legales y la toma de decisiones durante la operación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque reemplaza la capacitación del personal operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque disminuye la necesidad de realizar mantenimiento a los equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque elimina los riesgos asociados a las actividades de aventura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el objetivo principal de la gestión del riesgo en turismo de aventura?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la duración de las actividades turísticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promover únicamente el uso de equipos especializados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar, evaluar y controlar los riesgos para proteger a las personas participantes y al entorno.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir los procedimientos de planificación del destino.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes documentos aporta información para verificar el estado de los equipos utilizados en una actividad de turismo de aventura?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El registro de inspección y mantenimiento de equipos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El inventario de atractivos turísticos del destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La encuesta de satisfacción de las personas visitantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El portafolio de servicios del operador turístico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'De acuerdo con la NTC-ISO 21101:2020, la información documentada permite:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la experiencia del personal operativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar todos los riesgos asociados a la actividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Respaldar la planificación, la operación y la mejora continua del sistema de gestión de la seguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir el cumplimiento de la normatividad turística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de los siguientes elementos aporta información para la toma de decisiones durante la evaluación de riesgos en turismo de aventura?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las campañas de promoción turística del destino.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diseño del logotipo de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El registro de ventas mensuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las condiciones del terreno, el clima y el perfil de las personas participantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el principal aporte del manejo de la información dentro del turismo de aventura?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir los procedimientos operativos establecidos por la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Apoyar la planificación, la toma de decisiones y la prestación de servicios turísticos seguros y sostenibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar exclusivamente el número de visitantes al destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centralizar únicamente la información financiera de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y evidencia comprensión de los contenidos del componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>