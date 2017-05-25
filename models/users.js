module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("user", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    lastName: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    email: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    password: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    zip: {
      type: Sequelize.INTEGER,
      notEmpty: true
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
