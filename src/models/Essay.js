const { Model, DataTypes } = require('sequelize');

class Essay extends Model {
  static init(sequelize) {
    super.init({
      text: DataTypes.TEXT,
      note: DataTypes.TEXT,
      score: DataTypes.INTEGER,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Theme, { foreignKey: 'theme_id', as: 'theme' });
    this.belongsTo(models.Student, { foreignKey: 'writer_id', as: 'writer' });
    this.belongsTo(models.Student, { foreignKey: 'appreiser_id', as: 'appreiser' });
    this.belongsTo(models.School, { foreignKey: 'school_id', as: 'school' });
  }
}

module.exports = Essay;
