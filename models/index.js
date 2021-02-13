const User = require('./User');
const Skills = require('./Skills');
const Status = require('./Status');

// associations
// Skills.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });


module.exports = { User, Skills };