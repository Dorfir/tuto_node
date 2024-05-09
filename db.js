import { Sequelize, DataTypes } from 'sequelize'
// const sequelize = new Sequelize('sqlite::memory:')
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: ':memory:',
// })
const sequelize = new Sequelize("node", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
})

const User = sequelize.define('User',  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
})
const Carac = sequelize.define('Carac', {
    strength: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    constitition: DataTypes.INTEGER,
})

await User.sync({ force: true })
await Carac.sync({ force: true })

const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
})
const xavier = await User.create({
    username: 'dorfir',
    birthday: new Date(1977, 12, 9),
})

const carac1 = await Carac.create({
    strength: 12,
    dexterity: 15,
    constitition: 13,
})

// console.log("Jane's auto-generated ID: ", jane.id)
// console.log("Jane's username: ", jane.username)

// console.log("Xavier's auto-generated ID: ", xavier.id)
// console.log("Xavier's username: ", xavier.username)

const users = await User.findAll({attributes: [['username', 'name']]});
console.log('All users: ', JSON.stringify(users, null, 2));
// console.log(users.every(user => user instanceof User))
const caracs = await Carac.findAll()
console.log("Caracs: ", JSON.stringify(caracs, null, 2))
