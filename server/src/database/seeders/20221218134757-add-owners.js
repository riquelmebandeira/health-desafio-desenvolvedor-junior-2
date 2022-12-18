'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Owners',
      [
        {
          firstName: 'Jennie',
          lastName: 'Parsons',
          telephone: '(99) 99999-9999'
        },
        {
          firstName: 'Tomiris',
          lastName: 'Courtenay',
          telephone: '(99) 99999-9999'
        },
        {
          firstName: 'Valentinianus',
          lastName: 'Roussel',
          telephone: '(99) 99999-9999'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Owners', null, {})
  }
}
