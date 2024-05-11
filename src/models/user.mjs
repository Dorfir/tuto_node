export function def_user(sequelize, DataTypes) {
    return sequelize.define(
        'User',  
        {
            username: DataTypes.STRING,
            birthday: DataTypes.DATE,
        },
        { timestamps: false }   
    )
}


