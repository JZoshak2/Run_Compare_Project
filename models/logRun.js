module.exports = function(sequelize, DataTypes) {
  var Runs = sequelize.define("Runs", {
    distance: DataTypes.FLOAT,
    time: DataTypes.TIME,
    pace: DataTypes.TIME,
    notes: DataTypes.STRING
  });
  return Runs;
};
