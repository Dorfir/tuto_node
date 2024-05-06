import { Sequelize, DataTypes } from 'sequelize'
// const sequelize = new Sequelize('sqlite::memory:')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
})

const User = sequelize.define('User',  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
})

await User.sync({ force: true })

const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
})
const xavier = await User.create({
    username: 'dorfir',
    birthday: new Date(1977, 12, 9),
})

console.log("Jane's auto-generated ID: ", jane.id)
console.log("Jane's username: ", jane.username)

console.log("Xavier's auto-generated ID: ", xavier.id)
console.log("Xavier's username: ", xavier.username)

const users = await User.findAll();
console.log('All users: ', JSON.stringify(users, null, 2));
