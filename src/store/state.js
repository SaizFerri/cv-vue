export default {
  selectedLanguage: 'english',
  projects: [],
  displayLanguages: {
    english: {
      titles: {
        work: 'Work Experience',
        education: 'Educational Background',
        languages: 'Languages',
        skills: 'Programming Skills'
      },
      workExperience: [
        {
          id: 1,
          years: '05/2017 - present',
          description: 'Frontend developer by click Solutions GmbH',
          detail: [
            {
              task: 'Developing the front-end side of web applications with Javascript'
            },
            {
              task: 'Using Foundation as CSS framework'
            },
            {
              task: 'Developing newsletters with Foundation emails'
            }
          ]
        },
        {
          id: 2,
          years: '11/2015 - 04/2017',
          description: 'Front Office Manager at the EasyHotel Berlin',
          detail: [
            {
              task: 'Responsible for the reception at the hotel'
            },
            {
              task: 'Managing incoming bookings'
            }
          ]
        },
        {
          id: 3,
          years: '05/2015 - 07/2015',
          description: 'German-Spanish translator for internet websites',
          detail: ''
        }
      ],
      educationalBackground: [
        {
          id: 1,
          years: '04/2016 - present',
          description: 'Currently studying Applied Informatics at the „University of applied sciences “, Berlin'
        },
        {
          id: 2,
          years: '10/2015 - 03/2016',
          description: 'Computer engineering at the „University of applied sciences “, Berlin'
        },
        {
          id: 3,
          years: '09/2012 - 05/2015',
          description: 'High school “Friedensburg Oberschule” (Berlin State bilingual High school German-Spanish)'
        }
      ],
      languages: [
        {
          id: 1,
          language: 'Spanish',
          skill: 'Mother Tonge'
        },
        {
          id: 2,
          language: 'German',
          skill: 'Fluent written and spoken'
        },
        {
          id: 3,
          language: 'English',
          skill: 'Fluent written and spoken'
        }
      ],
      programmingSkills: [
        {
          id: 1,
          label: 'Frontend',
          languages: 'Html, CSS, Javascript, Vue, Vuex, Bootstrap, jQuery, Less, Sass'
        },
        {
          id: 2,
          label: 'Backend',
          languages: 'Java, PHP'
        },
        {
          id: 3,
          label: 'Other',
          languages: 'Linux, Git, MySQL, Postgresql, npm, Bower, Grunt, Gulp, JSON'
        }
      ]
    },
    spanish: {
      titles: {
        work: 'Experiencia laboral',
        education: 'Educacion',
        languages: 'Idiomas',
        skills: 'Habilidades'
      },
      workExperience: [
        {
          id: 1,
          years: '05/2017 - actual',
          description: 'Desarrollador de Frontend en click Solutions GmbH',
          detail: [
            {
              task: 'Desarrollador de aplicaciones web con JavaScript'
            },
            {
              task: 'Uso de Foundation como Framework para CSS'
            },
            {
              task: 'Desarrollador de Newsletter con Foundation Emails'
            }
          ]
        },
        {
          id: 2,
          years: '11/2015 - 04/2017',
          description: 'Manager de la recepcion en EasyHotel Berlin',
          detail: [
            {
              task: 'Responsable de la recepcion en el hotel'
            },
            {
              task: 'Administrar las reservas'
            }
          ]
        },
        {
          id: 3,
          years: '05/2015 - 07/2015',
          description: 'Traductor aleman-español para paginas web',
          detail: ''
        }
      ],
      educationalBackground: [
        {
          id: 1,
          years: '04/2016 - actual',
          description: 'Estudiando informatica aplicada (Software Engineering) en la "Universidad de Ciencias Aplicadas" en Berlin'
        },
        {
          id: 2,
          years: '10/2015 - 03/2016',
          description: 'Ingenieria del Hardware en la "Universidad de Ciencias Aplicadas" en Berlin'
        },
        {
          id: 3,
          years: '09/2012 - 05/2015',
          description: 'Bachillerato y selectividad en “Friedensburg Oberschule” (Escuela estatal bilingüe de Berlin español-aleman)'
        }
      ],
      languages: [
        {
          id: 1,
          language: 'Español',
          skill: 'Lengua materna'
        },
        {
          id: 2,
          language: 'Aleman',
          skill: 'Fluido escrito y hablado'
        },
        {
          id: 3,
          language: 'Ingles',
          skill: 'Fluido escrito y hablado'
        }
      ],
      programmingSkills: [
        {
          id: 1,
          label: 'Frontend',
          languages: 'Html, CSS, Javascript, Vue, Vuex, Bootstrap, jQuery, Less, Sass'
        },
        {
          id: 2,
          label: 'Backend',
          languages: 'Java, PHP'
        },
        {
          id: 3,
          label: 'Otros',
          languages: 'Linux, Git, MySQL, Postgresql, npm, Bower, Grunt, Gulp, JSON'
        }
      ]
    }
  }
}
