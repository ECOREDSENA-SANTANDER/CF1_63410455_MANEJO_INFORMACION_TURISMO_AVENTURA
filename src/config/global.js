export default {
  global: {
    Name: 'Fundamentos e información del turismo de aventura',
    Description: 'Este componente formativo aborda los fundamentos del sistema turístico, el destino, la oferta territorial y las actividades de turismo de aventura. Además, orienta la búsqueda, validación, clasificación, registro y protección de información turística, así como la caracterización de visitantes, la aplicación de la normatividad vigente y la identificación de condiciones de seguridad y gestión del riesgo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Turismo de aventura y sistema turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistema turístico y cadena de valor',
            hash: 't_1_1'
          },
          {
            numero: '1.2',
            titulo: 'Características y tipología del turismo de aventura',
            hash: 't_1_2'
          }
        ]
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Destino y oferta turística territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Recursos, atractivos e inventario turístico',
            hash: 't_2_1'
          },
          {
            numero: '2.2',
            titulo: 'Planta, infraestructura, superestructura y patrimonio',
            hash: 't_2_2'
          },
          {
            numero: '2.3',
            titulo: 'Prestadores, productos e identidad de la oferta turística territorial',
            hash: 't_2_3'
          }
        ]
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de la información turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Búsqueda y validación de la información',
            hash: 't_3_1'
          },
          {
            numero: '3.2',
            titulo: 'Organización, registro, almacenamiento y protección de la información',
            hash: 't_3_2'
          }
        ]
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Caracterización del visitante de turismo de aventura',
        desarrolloContenidos: true
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Normatividad y seguridad en turismo de aventura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Legislación, registro y normas técnicas',
            hash: 't_5_1'
          },
          {
            numero: '5.2',
            titulo: 'Gestión del riesgo, materiales y equipos',
            hash: 't_5_2'
          }
        ]
      }
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Atractivo turístico',
      significado: 'recurso natural o cultural que ha sido puesto en valor mediante procesos de planificación, conservación e interpretación, convirtiéndose en un motivo de visita para las personas visitantes.',
    },
    {
      termino: 'Cadena de valor',
      significado: 'conjunto de procesos y actores que intervienen de manera articulada en la creación, prestación y mejoramiento de productos y servicios turísticos.',
    },
    {
      termino: 'Caracterización',
      significado: 'proceso de recopilación, organización y análisis de información que permite identificar las características de un territorio, un destino o un grupo de visitantes.',
    },
    {
      termino: 'Destino turístico',
      significado: 'espacio geográfico que integra recursos, atractivos, infraestructura, servicios, organizaciones y comunidades para ofrecer experiencias turísticas.',
    },
    {
      termino: 'Gestión de la información',
      significado: 'conjunto de actividades orientadas a buscar, validar, organizar, registrar, almacenar, proteger y utilizar información para apoyar la planificación y la toma de decisiones.',
    },
    {
      termino: 'Gestión del riesgo',
      significado: 'proceso sistemático de identificación, análisis, evaluación, tratamiento y seguimiento de los riesgos.',
    },
    {
      termino: 'Identidad territorial',
      significado: 'conjunto de características naturales, culturales, históricas y sociales que diferencian un destino turístico y fortalecen su reconocimiento.',
    },
    {
      termino: 'Información turística',
      significado: 'datos organizados y actualizados sobre el territorio, la oferta, la demanda, los servicios y las condiciones del destino que apoyan la gestión turística.',
    },
    {
      termino: 'Inventario turístico',
      significado: 'instrumento técnico utilizado para identificar, registrar, clasificar y valorar los recursos y atractivos turísticos de un territorio.',
    },
    {
      termino: 'Oferta turística',
      significado: 'conjunto de bienes, servicios, actividades y experiencias disponibles en un destino para satisfacer las necesidades de las personas visitantes.',
    },
    {
      termino: 'Patrimonio turístico',
      significado: 'bienes naturales y culturales con valor ambiental, histórico, social o cultural que enriquecen la experiencia turística y fortalecen la identidad del territorio.',
    },
    {
      termino: 'Registro Nacional de Turismo (RNT)',
      significado: 'Registro público en el que se inscriben los prestadores obligados por la normativa turística.',
    },
    {
      termino: 'Sistema turístico',
      significado: 'conjunto de elementos, actores y relaciones que intervienen en el desarrollo de la actividad turística dentro de un territorio.',
    },
    {
      termino: 'Turismo de aventura',
      significado: 'modalidad de turismo de naturaleza que implica actividad física y actividades recreativas desarrolladas en escenarios naturales, caracterizadas por diferentes niveles de desafío físico y riesgos que deben gestionarse mediante medidas técnicas y de seguridad.',
    },
    {
      termino: 'Validación de la información',
      significado: 'proceso mediante el cual se verifican la actualidad, la confiabilidad, la pertinencia y la exactitud de la información antes de utilizarla en la planificación, operación o evaluación de la actividad turística.',
    },
  ],
  referencias: [
    {
      referencia: 'Acerenza, M. A. (2006). Conceptualizacion, origen y evolucion del turismo. Trillas.',
      link: '',
    },
    {
      referencia: 'Adventure Travel Trade Association. (2024). Adventure Travel Industry Snapshot: State of the Adventure Travel Industry.',
      link: '',
    },
    {
      referencia: 'Archivo General de la Nacion. (2024, 29 de febrero). Acuerdo 001 de 2024: Por el cual se establece el Acuerdo Unico de la Funcion Archivistica, se definen los criterios tecnicos y juridicos para su implementacion en el Estado Colombiano y se fijan otras disposiciones.',
      link: '',
    },
    {
      referencia: 'Buckley, R. (2010). Adventure Tourism Management. Elsevier.',
      link: '',
    },
    {
      referencia: 'Congreso de Colombia. (1996, 26 de julio). Ley 300 de 1996: Por la cual se expide la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 42.845.',
      link: '',
    },
    {
      referencia: 'Congreso de Colombia. (1997, 7 de agosto). Ley 397 de 1997: Ley General de Cultura. Diario Oficial No. 43.102.',
      link: '',
    },
    {
      referencia: 'Congreso de Colombia. (2012, 17 de octubre). Ley 1581 de 2012: Por la cual se dictan disposiciones generales para la proteccion de datos personales. Diario Oficial No. 48.587.',
      link: '',
    },
    {
      referencia: 'Congreso de Colombia. (2020, 31 de diciembre). Ley 2068 de 2020: Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 51.544.',
      link: '',
    },
    {
      referencia: 'Departamento Administrativo Nacional de Estadistica [DANE]. (2024). Encuesta de gasto interno en turismo (EGIT).',
      link: '',
    },
    {
      referencia: 'ICONTEC. (2020). NTC-ISO 21101:2020. Turismo de aventura. Sistemas de gestion de la seguridad. Requisitos.',
      link: '',
    },
    {
      referencia: 'International Organization for Standardization. (2016). ISO 15489-1:2016, Information and documentation---Records management---Part 1: Concepts and principles.',
      link: '',
    },
    {
      referencia: 'International Organization for Standardization. (2018). ISO 31000:2018, Risk management---Guidelines.',
      link: '',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2020). Metodologia para la elaboracion del inventario de atractivos turisticos.',
      link: '',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2024). Registro Nacional de Turismo (RNT).',
      link: '',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2012). Politica de Turismo de Naturaleza.',
      link: '',
    },
    {
      referencia: 'Organizacion Mundial del Turismo. (1999). Codigo Mundial de Etica para el Turismo.',
      link: '',
    },
    {
      referencia: 'Porter, M. E. (1985). Competitive advantage: Creating and sustaining superior performance. Free Press.',
      link: '',
    },
    {
      referencia: 'Presidencia de la Republica de Colombia. (2013, 27 de junio). Decreto 1377 de 2013: Por el cual se reglamenta parcialmente la Ley 1581 de 2012. Diario Oficial No. 48.834.',
      link: '',
    },
    {
      referencia: 'Presidencia de la Republica de Colombia. (2015, 26 de mayo). Decreto 1074 de 2015: Por medio del cual se expide el Decreto Unico Reglamentario del Sector Comercio, Industria y Turismo. Diario Oficial No. 49.523.',
      link: '',
    },
    {
      referencia: 'Swarbrooke, J., Beard, C., Leckie, S., & Pomfret, G. (2003). Adventure tourism: The new frontier. Butterworth-Heinemann.',
      link: '',
    },
    {
      referencia: 'United Nations. (2016). International recommendations for tourism statistics 2008: Compilation guide.',
      link: '',
    },
    {
      referencia: 'World Tourism Organization [UNWTO]. (2019). UNWTO tourism definitions.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
