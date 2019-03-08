'use strict'
const uuid = require('uuid-base62')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
     type: DataTypes.UUID,
     primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    salt: DataTypes.TEXT,
    password: DataTypes.TEXT
  }, {
    indexes: [
      {
        unique: true,
        fields: ['salt', 'username', 'email']
      }
    ]
  })
  User.associate = models => {
    // associations can be defined here
  }
  User.beforeCreate(user => {
    user.id = uuid.uuid(4)
  })
  return User
}

