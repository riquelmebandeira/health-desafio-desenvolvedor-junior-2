'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      breed: {
        type: Sequelize.STRING,
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Owners',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pets')
  }
}
