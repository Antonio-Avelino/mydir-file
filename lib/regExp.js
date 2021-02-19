
let SpecialCharacter=/[|,?,*,:,>,<,""]+/
let BarString=/^\/{1}\w+/ 
let PointString=/^.{1}\/{1}\w+/ 
let PointBarSpace=/^\.{1}$/
let PointStringSubfolder=/^\.*\/*\s*/ 


/*
regExp will be used for validation in our directory (folder)
    * It will also be used to validate our files
    */

module.exports={
SpecialCharacter,
BarString,
PointString,
PointBarSpace,
PointStringSubfolder, 

pickupSpecialCharacter:function(name){

        return this.SpecialCharacter.test(name)
    },

    catchBarString:function(name){

        return this.BarString.test(name)
    },

    pickPointString:function(name){

        return this.PointString.test(name)
    },

    pickPointBarSpace:function(name){

        return this.PointBarSpace.test(name)
    }
    ,
    pickPointStringSubfolder:function(name){

        return this.PointStringSubfolder.test(name)
    }
 
}
