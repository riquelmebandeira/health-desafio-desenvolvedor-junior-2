'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pets',
      [
        {
          name: 'Tardar Sauce',
          age: '5',
          type: 'Gato',
          breed: 'Snowshoe',
          picture:
            'https://riotfest.org/wp-content/uploads/2019/05/grumpy-cat-1024x576.jpg',
          ownerId: 1
        },
        {
          name: 'Smudge',
          age: '6',
          type: 'Gato',
          breed: 'Scottish Fold',
          picture:
            'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/18/1_4691731.png?cache_timestamp=1574134871525',
          ownerId: 1
        },
        {
          name: 'Tom',
          age: '7',
          type: 'Gato',
          breed: 'Scottish Fold',
          picture:
            'https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2022/01/CATSTREET9.jpg?resize=1080%2C1080&ssl=1',
          ownerId: 1
        },
        {
          name: 'Caramelo',
          age: '6',
          type: 'Cachorro',
          breed: 'Vira lata',
          picture:
            'https://files.metropoles.com/stories/7-mitos-e-verdades-sobre-o-vira-lata-o-queridinho-dos-brasileiros/assets/1.jpeg',
          ownerId: 3
        },
        {
          name: 'Doge',
          age: '2',
          type: 'Cachorro',
          breed: 'Shiba Inu',
          picture:
            'https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg-900x510.jpg',
          ownerId: 2
        },
        {
          name: 'Simba',
          age: '6',
          type: 'Cachorro',
          breed: 'Pitbull',
          picture:
            'https://blog.petiko.com.br/wp-content/uploads/2021/02/capa-1.jpg',
          ownerId: 2
        },
        {
          name: 'Billy',
          age: '5',
          type: 'Cachorro',
          breed: 'Beagle',
          picture:
            'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10369/raca-beagle-2-cursos-cpt.jpg',
          ownerId: 2
        },
        {
          name: 'Lucy',
          age: '0.4',
          type: 'Cachorro',
          breed: 'Golden Retriver',
          picture:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*',
          ownerId: 3
        },
        {
          name: 'Luna',
          age: '0.3',
          type: 'Cachorro',
          breed: 'Rotweiller',
          picture:
            'https://www.agrosete.com.br/wp-content/uploads/2017/09/rottweiler_1-2-800x450.jpg',
          ownerId: 3
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pets', null, {})
  }
}
