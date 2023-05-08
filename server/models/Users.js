module.exports=(sequelize,DataTypes) =>{

    const Users =sequelize.define ("Users", {
              
              username:{

                type:DataTypes.STRING,
                allowNull: false,
               },

               password:{

                type:DataTypes.STRING,
                allowNull: false,
               },
              
              });

    //For assosiate the post table with comments

  /* { Users.associate=(models)=>{
      Users.hasMany(models.Comments,{
        onDelete:"cascade",

      });
    };}*/
 
      return Users ;
    
}