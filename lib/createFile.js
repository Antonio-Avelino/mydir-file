let reg=require("./regExp");


/*create the function that will create the mosso directory (folder)
* and that will also create the files
*/
let FileFolder=(fs)=>{

return {create:(nameFolder,variantFileName)=>{

       // here is the nameFolder validation

if(reg.pickupSpecialCharacter(nameFolder)==true
    ){
        

 throw Error(`error: ${nameFolder} : The subfolder cannot contain the name of any characters that follow
 : '/,\,|<,>,?," " : * } `)


    
}else{
if(reg.pickPointString(nameFolder)==true ||
reg.pickPointBarSpace(nameFolder)==true  ){


    fs.mkdir(nameFolder,()=>0)
     
    let file=nameFolder+variantFileName
    
        fs.writeFile(file,"",(e,r)=>0)


}else{
        
throw Error(`error: Towards the directive ${nameFolder}`)
        
    }
  }
}
}
}

/*
file validation
*call the function to generate files
*/

let file=(fs)=>{
return { createFile:function(nameFolder,...variantFileName){
    
    // here is the nameFolderVariant validation that will be our subfolder
   
    var lastParameter= variantFileName.length-1;

    for(let i=0; i<variantFileName.length; i++){
        if( typeof variantFileName[lastParameter]=="function" && lastParameter >0 ){
   
        if(reg.pickupSpecialCharacter(variantFileName[i])==true && typeof variantFileName[i] !="function"){
    
            erro=`error: ${variantFileName[i]} :  cannot contain the name of any characters that follow: '/,\,|<,>,?,"" * } `   
    
        }else if(reg.catchBarString(variantFileName[i])==true ){
            
    
    
            FileFolder(fs).create(nameFolder,variantFileName[i])
                
           
    
            } else if(reg.pickPointStringSubfolder(variantFileName[i])==true && typeof variantFileName[i] !="function" )
            {
                erro= `error: in file  ${variantFileName[i]} `
         
       
            }
        } else{
    
            throw Error(`error:  callback " `)    
    
              }
        }
        // our calback

var calbackError= ()=>  typeof erro !='undefined'?Error(erro):"";

let calbackParameterFile=variantFileName.filter(nomefile=>typeof nomefile != "function")

variantFileName[lastParameter](calbackError(),calbackParameterFile)
     
        }
    }
}
module.exports= file
