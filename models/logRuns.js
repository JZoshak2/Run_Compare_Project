module.exports = function(sequelize, DataTypes) {
  var logRun = sequelize.define("logRun", {
    distance: {
    	type: DataTypes.FLOAT,
    	allowNull: false,
    	validate: {
    		isDecimal: true,
    		len: [1]
    	}
    },
    time: {
    	type: DataTypes.TIME,
    	allowNull: false,
    	len: [1]
    },
    pace: {
    	type: DataTypes.TIME,
    	allowNull: false,
    	len: [1]
    },
    notes: {
    	type: DataTypes.STRING,
    }
  },
  	{
  		classMethods: {
  			associate: function(models) {
  				logRun.belongsTo(models.User, {
  					foreignKey: {
  						allowNull: false
  					}
  				});
  			}
  		}
  	}
  );
  return logRun;
};
