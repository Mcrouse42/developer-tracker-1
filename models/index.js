const User = require('./User');
const Skills = require('./Skills');

Skills.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Skills };