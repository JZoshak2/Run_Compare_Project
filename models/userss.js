module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50]
			}
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50]
			}
		},
		zip: {
			type: DataTypes.INTEGER(5),
			allowNull: false,
			validate: {
				len: [5]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,100]
			}
		},
	},
	{
		classMethods: {
			associate: function(models) {
				User.hasMany(module.logRun, {
					onDelete: "cascade"
				});
			}
		}
	}
	);
	return User;
};