//import {HoffmanCoder} from './HuffmanCoder.js'
console.log("welcome");
let file=document.getElementById("file");
let encoder=document.getElementById("encode");
let decoder=document.getElementById("decode");
let h1=document.getElementById("h1");
let coder = new HuffmanCoder();
let text="";
let encode="";
let fileName="";

encoder.addEventListener("click",function(){      
        console.log(file.files);
        const fileReader = new FileReader();
        fileReader.readAsText(file.files[0], "UTF-8");
        fileReader.onload = function(fileLoadedEvent){
            console.log(fileLoadedEvent.target.result);
            text=fileLoadedEvent.target.result;
            if(text.length===0){
                alert("Text can not be empty ! Upload another file !");
                return;}
            //setText(text+1);
            console.log(text);

            let [encoded, tree_structure, info] = coder.encode(text);
            h1.innerHTML=`${info}`
            encode=encoded;
            //handle2(encoded);
            fileName=file.files[0].name.split('.')[0]+'_encoded.txt';
            //downloadFile(uploadedFile.name.split('.')[0] +'_encoded.txt', encoded);
            /*treearea.innerText = tree_structure;
            treearea.style.marginTop = '2000px';
            temptext.innerText = info;*/
            console.log(text);
            downloadFile(fileName, encode);
        };
      

});



decoder.addEventListener("click",function(){      
        console.log(file.files);
        const fileReader = new FileReader();
        fileReader.readAsText(file.files[0], "UTF-8");
        fileReader.onload = function(fileLoadedEvent){
            console.log(fileLoadedEvent.target.result);
            text=fileLoadedEvent.target.result;
            if(text.length===0){
                alert("Text can not be empty ! Upload another file !");
                return;}
            //setText(text+1);
            console.log(text);

            let [result,tree, info2] = coder.decode(text);
            h1.innerHTML=`${info2}`;
            //encode=encoded;
            //handle2(encoded);
            fileName=file.files[0].name.split('.')[0]+'_encoded_decoded.txt';
            //downloadFile(uploadedFile.name.split('.')[0] +'_encoded.txt', encoded);
            /*treearea.innerText = tree_structure;
            treearea.style.marginTop = '2000px';
            temptext.innerText = info;*/
            console.log(text);
            downloadFile(fileName, result);
        };
      

});

function downloadFile(fileName, data){
    let a = document.createElement('a');
    a.href = "data:application/octet-stream,"+encodeURIComponent(data);
    a.download = fileName;
    a.click();
}