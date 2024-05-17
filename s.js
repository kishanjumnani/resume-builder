let wrkexpfoeld=[
    {
        "wrkinptdiv": {
              "field":"text",
              "date":"text"
        }
    }
];
console.log(wrkexpfoeld);
function addddivwrk(){
        const creatediv=document.createElement("div");
        
        
            creatediv.setAttribute("id","wrkexpenputdiv");
            // dispatchEvent.setAttribute("data-index",wrkexpfoeld.length)
            
            document.getElementById("wrkexperences").append(creatediv);
            console.log("kisja",creatediv);
   wrkexpfoeld.push({wrkexpenputdiv});  
   createElementinput();

}
function createElementinput(){
    const filedinp=document.createElement("input");
    const filedinp2=document.createElement("input");
    filedinp.type="text"
    filedinp2.type="text"
    document.getElementById("wrkexpenputdiv").append(filedinp);
    document.getElementById("wrkexpenputdiv").append(filedinp2);
    

}
document.getElementById("addswrksbttn").addEventListener("click",addddivwrk,createElementinput);
