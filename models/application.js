'use strict';
module.exports = (sequelize, DataTypes) => {
  var Application = sequelize.define('Application', {
//date of last action? first action? timestamp?
      UserId: {
          type: DataTypes.INTEGER,
          allowNull: false
      },

      CompanyId: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
    date : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    companyName : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    stage: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    nextAction: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },

      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      }
  });

  Application.associate = function (models) {
    models.Application.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  Application.associate = function(models){
    models.Application.belongsTo(models.Company, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Application;
};
