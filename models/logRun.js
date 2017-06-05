module.exports = function(sequelize, DataTypes) {
var Runs = sequelize.define("Runs", {
        distance: {
            type: DataTypes.FLOAT,
            notEmpty: true
        },
        time: {
            type: DataTypes.TIME,
            notEmpty: true
        },
        pace: {
            type: DataTypes.TIME,
            notEmpty: true
        },
        run_notes: {
            type: DataTypes.STRING,
        }
      },
      {
        // We're saying that we want our Author to have Posts
        classMethods: {
          /*associate: function(models) {
            // An Author (foreignKey) is required or a Post can't be made
            Runs.belongsTo(models.Users, {
              foreignKey: {
                allowNull: false
              }
            });
          }*/
        }
      }

);
return Runs;
};
