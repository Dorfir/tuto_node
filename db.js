import { clearParserCache } from 'mysql2'
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

const User = sequelize.define(
    'User',  
    {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE,
    },
    { timestamps: false }   
)
const Carac = sequelize.define(
    'Carac', 
    {
        strength: DataTypes.INTEGER,
        dexterity: DataTypes.INTEGER,
        constitition: DataTypes.INTEGER,
    },
    { timestamps: false }
)
User.hasOne(Carac)
Carac.belongsTo(User)

// await User.sync({ force: true })
// await Carac.sync({ force: true })
await sequelize.sync({ force: true })

const xavier = await User.create({
    username: 'dorfir',
    birthday: new Date(1977, 12, 9),
})

const carac1 = await Carac.create({
    strength: 12,
    dexterity: 15,
    constitition: 13,
    UserId: 1,
})

// console.log("Jane's auto-generated ID: ", jane.id)
// console.log("Jane's username: ", jane.username)

// console.log("Xavier's auto-generated ID: ", xavier.id)
// console.log("Xavier's username: ", xavier.username)

// const users = await User.findAll({attributes: [['username', 'name']]});
// const users = await User.findAll();
// console.log('All users: ', JSON.stringify(users, null, 2));
// console.log(users.every(user => user instanceof User))
// const caracs = await Carac.findAll()
// console.log("Caracs: ", JSON.stringify(caracs, null, 2))

const dorfir = await User.findOne({
    where : {
        username: "dorfir"
    }
})
console.log("Dorfir : ", JSON.stringify(dorfir, null, 2))
const dorfir_carac = await dorfir.getCarac()
console.log("Dorfir carac : ", JSON.stringify(dorfir_carac, null, 2))
