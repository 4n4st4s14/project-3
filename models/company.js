module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    companyName : {
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
    culture: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    benefits: {
      type: DataTypes.TEXT,
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

  Company.associate = function (models) {
    models.Company.hasMany(models.Application, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Company;
};
