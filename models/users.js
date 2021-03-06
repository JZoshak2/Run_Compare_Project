
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    zip: {
      type: DataTypes.INTEGER,
    }
  },
    {
      classMethods: {
        associate: function(models) {
          Users.hasMany(models.Runs, {
            onDelete: "cascade",
          });
        }
      }
    }
  );
  return Users;
};
