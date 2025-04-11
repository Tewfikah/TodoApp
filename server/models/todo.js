module.exports = (sequelize, DataTypes) => {
    const todo = sequelize.define('todo', {
        activity: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return todo;
}