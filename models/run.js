module.exports = function(sequelize, DataTypes) {
  var Run = sequelize.define("Run", {
    date: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
      len: [1]
    },
    distance: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    {
            classMethods:{
                associate:function(models){
                    Run.belongTo(models.User, { foreignKey: allowNull:false } );
                }
            }
        }
  }
  //var BelongsTo = sequelize.belongsTofunction()

  );
  return Run;
};