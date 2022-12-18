'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Pet, {
        foreignKey: 'ownerId',
        as: 'Pets',
        onDelete: 'CASCADE'
      })
    }
  }
  Owner.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      telephone: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Owner',
      timestamps: false
    }
  )
  return Owner
}
