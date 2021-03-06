"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tools", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      link: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tools");
  },
};
