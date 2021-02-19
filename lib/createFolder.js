let reg=require("./regExp")


/*Create the function that will return an object that will create our directory (folder)*/
let create=(fs)=>{
return { FolderSubfolder:(nameFolder,nameSubFolderVariant)=>{
    
    // here is the nameFolder validation that will be our root folder

        if(reg.pickupSpecialCharacter(nameFolder)==true
        ){
    
            throw Error(`error: ${nameFolder} : The folder cannot contain the name of any characters that follow: '/,\,|<,>,?," " : * } `)
   
        
         }else{  
        if(reg.pickPointString(nameFolder)==true || 
            reg.pickPointBarSpace(nameFolder)==true  ){

    
            fs.mkdir(nameFolder,()=>0)
     
        let subfolder=nameFolder+nameSubFolderVariant
    
     fs.mkdir(subfolder,()=>0)


}else{
            
        throw Error(`error: Towards the directive ${nameFolder}`)
            
        }
      }
    }
  }
}



/*

directory validation (folder) sub folders
 * Call the function that will return the object to generate the directory (folder) and our sub-folder
*/


let directory=(fs)=>{
    
return {createFolder:(nameFolder,...nameSubFolderVariant)=>{
        
    // here is the validation of the nameSubFolderVariant that will be our subfolder
    
    var lastParameter= nameSubFolderVariant.length-1;
for(let i=0; i<nameSubFolderVariant.length; i++){
      
    if( typeof nameSubFolderVariant[lastParameter]=="function" && lastParameter >0 ){
   
            if(reg.pickupSpecialCharacter(nameSubFolderVariant[i])==true && typeof nameSubFolderVariant[i] !="function"  ){


                erro=`error: ${nameSubFolderVariant[i]} :          cannot contain the name of any characters that follow: '/,\,|<,>,?,"" * } `
       
    }   
    else if(reg.catchBarString(nameSubFolderVariant[i])==true ){
           

                create(fs).FolderSubfolder(nameFolder,nameSubFolderVariant[i])
                         
     }
     else if(reg.pickPointStringSubfolder(nameSubFolderVariant[i])==true && typeof nameSubFolderVariant[i] !="function" )
        {
            erro= `error: on the way ${nameSubFolderVariant[i]} `
     
   
        }
    }
    else{
    
        throw Error(`error:  callback" `)    

          }
    
        }
// ur calback

var calbackError= ()=>  typeof erro !='undefined'?Error(erro):"";

let calbackParameterFile=nameSubFolderVariant.filter(nomesubfolders=>typeof nomesubfolders != "function")

nameSubFolderVariant[lastParameter](calbackError(),calbackParameterFile)
                      
     }
    }
}

module.exports=directory

   