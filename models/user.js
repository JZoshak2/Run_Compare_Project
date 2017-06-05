module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User ID model a type of INTEGER
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    zip: DataTypes.INTEGER
  };
  },
   {
            classMethods:{
                associate:function(models){
                    User.hasMany(models.Run, 
                    	{ foreignKey: allowNull:false } );
                }
            }
        });
  return User;
};