import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize("node", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
})

import { def_user } from './src/models/user.mjs'
const User = def_user(sequelize, DataTypes)
import { create_carac } from './src/models/carac.mjs'
const Carac = create_carac(sequelize, DataTypes)

User.hasOne(Carac)
Carac.belongsTo(User)

await sequelize.sync({ force: true })

const xavier = await User.create({
    username: 'dorfir',
    birthday: new Date(1977, 12, 9),
})

const carac1 = await Carac.create({
    strength: 12,
    dexterity: 15,
    constitution: 13,
    UserId: 1,
})

const dorfir = await User.findOne({
    where : {
        username: "dorfir"
    }
})
console.log("Dorfir : ", JSON.stringify(dorfir, null, 2))
const dorfir_carac = await dorfir.getCarac()
console.log("Dorfir carac : ", JSON.stringify(dorfir_carac, null, 2))
