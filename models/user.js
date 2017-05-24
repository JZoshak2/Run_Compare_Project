module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User ID model a type of INTEGER
    name: DataTypes.STRING
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