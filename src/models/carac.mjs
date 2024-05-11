export function create_carac(sequelize, DataTypes) {
    return sequelize.define(
        'Carac',
        {
            strength: DataTypes.INTEGER,
            dexterity: DataTypes.INTEGER,
            constitution: DataTypes.INTEGER, 
        },
        { timestamps: false }
    );
}