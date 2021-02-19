const directory=require("./createFolder.js");
const file=require("./createFile.js");
const Delete=require("./deleteFile.js");

let dir=(fs)=>{
    const createFolder =directory(fs).createFolder;
    const createFile =file(fs).createFile;
    const deleteFile =Delete(fs).deleteFile
     
    return{ createFolder,
        createFile,
        deleteFile
 }

}

module.exports=dir

     
 


