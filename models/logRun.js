module.exports = function(sequelize, DataTypes) {
var Runs = sequelize.define("Runs", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER //this should probably be based on the ID of the user. ugh.
        },
        distance: {
            type: Sequelize.FLOAT,
            notEmpty: true
        },
        time: {
            type: Sequelize.TIME,
            notEmpty: true
        },
        pace: {
            type: Sequelize.TIME,
            notEmpty: true
        },
        note: {
            type: Sequelize.STRING,
        }
      },
      {
        // We're saying that we want our Author to have Posts
        classMethods: {
          associate: function(models) {
            // An Author (foreignKey) is required or a Post can't be made
            Runs.belongsTo(models.User, {
              foreignKey: {
                allowNull: false
              }
            });
          }
        }
      }

);
return Runs;
};
