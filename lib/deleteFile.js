let reg=require("./regExp")

let Files=(fs)=>{
return {delete:(nameFolder,variantFileName)=>{

       // here is the nameFolder validation and we will remove the file  

if(reg.pickupSpecialCharacter(nameFolder)==true
    ){


        throw Error(`error: ${nameFolder} : The subfolder cannot contain the name of any characters that follow: '/,\,|<,>,?," " : * } `)


    
}else{
if(reg.pickPointString(nameFolder)==true ||
reg.pickPointBarSpace(nameFolder)==true  ){

    
    let file=nameFolder+variantFileName

    if(fs.existsSync(file)){
        fs.unlink(file,()=>0)
    }else{
        
        throw Error(`error:  file ${variantFileName}  does not exist`)
   
    }

        }else{
            throw Error(`error: diretory ${nameFolder}`)
            
        }
      }
    }
  }
}
/*
file validation
* call the function to delete files
*/

let Delete=(fs)=>{

return {deleteFile:function(nameFolder,...variantFileName){
    
    // here is the nameFolderVariant validation that will be our subfolder and deleted    
    var lastParameter= variantFileName.length-1;
   
    for(let i=0; i< variantFileName.length; i++){
        if( typeof variantFileName[lastParameter]=="function" && lastParameter >0 ){
   
        if(reg.pickupSpecialCharacter(variantFileName[i])==true && typeof variantFileName[i] !="function"){
    
            erro=`error: ${variantFileName[i]} :cannot contain the name of any characters that follow: '/,\,|<,>,?,"" * } `   
    
        }else  if(reg.catchBarString(
variantFileName[i])==true){
                
    /*function that will delete our folders*/
    
    Files(fs).delete(nameFolder,variantFileName[i])
                
            }
            else if(reg.pickPointStringSubfolder(variantFileName[i])==true && typeof variantFileName[i] !="function" )
            {
                erro= `error: in file ${variantFileName[i]} `
                
            }
        }else{
            throw Error(`error:  callback" `)    
    
         }
        }
 // urcalback

        var calbackError= ()=>  typeof erro !='undefined'?Error(erro):"";

let calbackParametrofile=variantFileName.filter(filename=>typeof filename != "function")


variantFileName[lastParameter](calbackError(),calbackParametrofile)
     
}
}
}
module.exports=Delete
