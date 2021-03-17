# -mydir-file
mydir-file is a javascrip library for nodejs, which allows you to generate or create several directories and files simultaneously and quickly in an asynchronous way. Facilitating for those working with programming architecture, Project standards.
The library makes it possible to create files, create folders and remove files in a quick and interactive way.

Example:

FOLDER
Create folders


    let mydir_file=require(“mydir-file”);
    let fs =require(“fs”);

    mydir_file(fs).createFolder("./rootfoldername ","/ foldername ",calback);

Create folder in root directory
mydir_file (fs).createfolder(".","/foldername", calback)
)


 Example in practice:

Create folder

a(fs).criarDirectorio("./app","/view",”/controler” ,”/model”,(error,result)=>{

})


 FILES
Create files

let mydir_file=require(“mydir-file”);
let fs =require(“fs”);

mydir_file(fs).createFile("./rootfoldername","/filename",calback)


Create file in root directory
mydir_file (fs).createFile(".","/filename",calback)


Example in practice:

Create file

mydir_file (fs). createFile ("./pp","/controler.js","/model.js",( error, result)=>{

})


Create files and folders at the same time with for


mydir_file(fs).createFolder("./app","/views","/controler","/model",( error, result)=>{
    
for(var i=0; i<  result.length;i++){
    mydir_file (fs). createFile("./app"+  result[i],"/index.js",()=>{
        
    })

}
});


Delete files


dir_file(fs).deleteFile("./app","/index.js",( error, result)=>{
    
})
