// const btn=document.querySelector("#crtbttn");
// btn.addEventListener("click",()=>{
//     btn.href="./choose.html"
//     console.log("ram");
// })


// frstname.addEventListener("submit",()=>{
//     console.log("ram");
// })
// lastname.addEventListener("submit",()=>{
//     console.log("ram");
// })

const frstName=document.getElementById("frstName");
frstName.addEventListener("input",()=>{
const frsn=frstName.value;
console.log("fr",frsn);
document.getElementById("name1").innerText=frsn;

});
const lastName=document.getElementById("lastName");
lastName.addEventListener("input",()=>{
    const lstn=lastName.value;
    
    
    const lname=document.getElementById("name2");
  
    lname.innerText=lstn;
});
const jobttle=document.getElementById("jobtitleinp");
    jobttle.addEventListener("input",()=>{
        const job=jobttle.value;
        document.getElementById("jobtittle").innerText=job; 

    });
const mobnmbr=document.getElementById("mblinp");
mobnmbr.addEventListener("input",()=>{
    const mob=mobnmbr.value;
    document.getElementById("mobnmbr").innerText=mob;

})
const email=document.getElementById("emlinp");
email.addEventListener("input",()=>{
    const eml=email.value;
    document.getElementById("emal").innerText=eml;
})

// add social links:----
const bttnsl=document.getElementById("btnsl");
bttnsl.addEventListener("click",socilalinks);
function socilalinks(){

    const linkdiv=document.createElement("div")
    
    const linkname=document.createElement("input");
    const link=document.createElement("input");
    link.style.borderColor="grey";
    link.style.borderWidth="1px";
    link.style.margin="10px";
    link.style.borderRadius="5px";
    link.placeholder="paste your links"
    linkname.placeholder="Decsiption"
    linkname.style.borderRadius="5px";
    linkname.style.borderColor="grey";
    linkname.style.borderWidth="1px";
    linkname.style.margin="10px";
    link.className="dcpinp";
    linkname.className="linkinp";
    linkname.classList.add( "w-full","bg-gray-100" ,"bg-opacity-50", "rounded" ,"border" ,"border-gray-300", "focus:border-green-500" ,"focus:bg-white" ,"focus:ring-2", "focus:ring-green-200", "text-base" ,"outline-none", "text-gray-700" ,"py-1", "px-3", "leading-8" ,"transition-colors", "duration-200", "ease-in-out" );
    link.classList.add( "w-full","bg-gray-100" ,"bg-opacity-50", "rounded" ,"border" ,"border-gray-300", "focus:border-green-500" ,"focus:bg-white" ,"focus:ring-2", "focus:ring-green-200", "text-base" ,"outline-none", "text-gray-700" ,"py-1", "px-3", "leading-8" ,"transition-colors", "duration-200", "ease-in-out" );
   

    linkdiv.append(linkname);
    linkdiv.append(link);
    document.getElementsByClassName("addlinks")[0].append(linkdiv);
    // 
    link.className="dcpinp";
    const dcplinl=document.querySelector(".dcpinp");
    dcplinl.addEventListener("input",()=>{
        const dcp=dcplinl.value;
        document.getElementById("dcp").innerText=dcp;
    })
    linkname.className="linkinp";





   
    console.log("ks");
}
/*******************************project detail************************ */
// let projects=[];
// function renderprojects(){
//     document.getElementById("showproject").innerHTML="";
//     projects.forEach((item,index)=>{
//         const shwprjctname=document.createElement("dt");
//         shwprjctname.innerText=item.project_name;
//         const shwprjctdetail=document.createElement("dt")
//          shwprjctdetail.innerText=item.project_deatil;
//         document.getElementById("showproject").append(shwprjctname);
//         document.getElementById("showproject").append(shwprjctdetail1);
//     })
// }
// function adddivprjct(){
//     const divs=document.createElement("div");
//     document.getElementById("creatprjctdiv").append(divs);
//    const prokectnamelabel =document.createElement("label");
//    divs.append(prokectnamelabel);
//    prokectnamelabel.innerText="project name";
//     const projectnameinput=document.createElement("input");
//     projectnameinput.type="text"
//     projectnameinput.placeholder="projrctname"
//     const projectdetaillabel=document.createElement("label");
//     projectdetaillabel.innerText="project detail";
//     divs.append(projectdetaillabel);
//     const projectdetailinput=document.createElement("input");
//     projectdetailinput.type="text"
//     divs.append(projectnameinput);
//     divs.append(projectdetailinput);
//     projectnameinput.setAttribute("data-index",projects.length)
//     projectdetailinput.setAttribute("data-index",projects.length)
//     // projectnameinput.className="prjctsinpname";
//    projectnameinput.addEventListener("input",(e)=>{
//     // projects[e.target.dataset.index].project_name=e.target.value;
   
//         const projectnametext=e.currentTarget.value;
//         //
//         const index=e.currentTarget.dataset.index;
//         projects[index]["project_name"]=projectnametext;
//         // 
        
//     })
//     projectdetailinput.addEventListener("input",(e)=>{
//         const projectdetailtext=e.currentTarget.value;
//         projects[index]["project_deatil"]=projectdetailtext;
//     })
   
//     renderprojects();

   

    
//    projects.push({"project_name":""});
//    projects.push({"project_deatil":""});
   
  
// }

// document.getElementById("adddivprjct").addEventListener("click",adddivprjct);



// professionl detal------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>
let wrkexp =[
    {"position_title":""},
    {"job_tittle":""},
    {"company_name":""},
    {"start_date":""},
    {"end_date":""},
    {"description":""}
]
function adddivwrkexp(){
    
    const create2ndmaininpdivs=document.createElement("div");
    document.getElementById("wrkexpmaindiv").append(create2ndmaininpdivs);
    const divs=["createinpdivs2" ,"createinpdivs3" ,"createinpdivs4","createinpdivs5","createinpdivs6"];
    divs.forEach((content,index) =>{
      const  newdiv=document.createElement("div");
      newdiv.innerHTML=content;
      create2ndmaininpdivs.append(newdiv);
         const lebelpositiontittle=document.createElement("label");
    lebelpositiontittle.innerText="Position Title";
    newdiv.append(lebelpositiontittle);
         positiontittleinput=document.createElement("input");
     positiontittleinput.type="text";
      newdiv.append(positiontittleinput);
      
      
    })
    divs[2].input.type="date"



//   content.document.createElement("div");
// const labels=["labelps" ,"lable2" ,"label3" ,"label4" , "label5"];
// labels.forEach(label =>{
//     const newlabel=document.createElement("label");
//     newlabel.innerHTML=label;
//     newdiv.append(newlabel);
// })
    // const inpts=["inp1", "inp2" ,"inp3" ,"inp4" ,"ip5"]
    // inpts.forEach(inp =>{
    //     const newinp=document.createElement("input");
    //     newinp.type="text";
        
    //     newinp.placeholder="Enter "+inp;
    //     newdiv.append(newinp);
    //     })
    }
   

 

        
  

//    const lebelpositiontittle=document.createElement("label");
//     lebelpositiontittle.innerText="Position Title";
//     newdiv.append(lebelpositiontittle);
//      positiontittleinput=document.createElement("input");
//    positiontittleinput.type="text";
//      newdiv.append(positiontittleinput);

    //   const newdiv2=document.createElement("div");
    //  create2ndmaininpdivs.append(newdiv2);
   

    

  
    // const createinpdivs2=document.createElement("div");
    // create2ndmaininpdivs.appendChild(createinpdivs2);
    // const lebelpositiontittle=document.createElement("label");
    // lebelpositiontittle.innerText="Position Title";
    // createinpdivs2.append(lebelpositiontittle);
    // const positiontittleinput=document.createElement("input");
    // positiontittleinput.type="text";
    // createinpdivs2.appendChild(positiontittleinput)
    // positiontittleinput.dataset.index=wrkexp.length;
   
    // positiontittleinput.addEventListener("input",(e)=>{
    //     const positiontittletext=e.currentTarget.value;
    //     wrkexp[e.currentTarget.dataset.index]["position_title"]=positiontittletext;
    // })
   
    // const createinpdivs3=document.createElement("div");
    // create2ndmaininpdivs.appendChild(createinpdivs3);
    // const lebeljobtittle=document.createElement("label");
    // lebelpositiontittle.innerText="jOb Title";
    // createinpdivs3.append(lebeljobtittle)
    // const jobinputeinput=document.createElement("input");
    // positiontittleinput.type="text";
    // createinpdivs3.append(jobinputeinput)
    // jobinputeinput.dataset.index=wrkexp.length;
   

    document.getElementById("incrdivbttnwrk").addEventListener("click",adddivwrkexp);
//     jobinputeinput.addEventListener("input",(e)=>{
//         const jobtittletext=e.currentTarget.value;
//         wrkexp[e.currentTarget.dataset.index]["job_tittle"]=jobtittletext;
//     })
// }
        
        // const createinpdivs4=document.createElement("div");
        // createinpdivs.append(createinpdivs4);
        // const lebelcompanyname=document.createElement("label");
        // lebelpositiontittle.innerText="Company Name";
        // createinpdivs4.append(lebelcompanyname);
        // const companynameinput=document.createElement("input");
        // positiontittleinput.type="text";
        // createinpdivs4.append(companynameinput);
        // companynameinput.dataset.index=wrkexp.length;
        // jobinputeinput.addEventListener("input",(e)=>{
        //     const Companytittletext=e.currentTarget.value;
        //     wrkexp[e.currentTarget.dataset.index]["company_name"]=Companytittletext;
        //     })
            
        // const createinpdivs5=document.createElement("div");
        // createinpdivs.append(createinpdivs5);
        // const start_date=document.createElement("label");
        // lebelpositiontittle.innerText="start date";
        // createinpdivs5.append(start_date);
        // const start_dateinput=document.createElement("input");
        // start_date.type="date";
        // createinpdivs5.append(start_dateinput);
        // start_dateinput.dataset.index=wrkexp.length;
        // start_dateinput.addEventListener("input",(e)=>{
        //     const Companytittletext=e.currentTarget.value;
        //     wrkexp[e.currentTarget.dataset.index]["start_date"]=Companytittletext;
        //     });
        
        // const createinpdivs6=document.createElement("div");
        // createinpdivs.append(createinpdivs6);
        // const end_date=document.createElement("label");
        // end_date.innerText="End date";
        // createinpdivs6.append(end_date);
        // const end_dateinput=document.createElement("input");
        // end_dateinput.type="date";
        // createinpdivs6.append(start_dateinput);
        // end_dateinput.dataset.index=wrkexp.length;
        // end_dateinput.addEventListener("input",(e)=>{
        //     const Companytittletext=e.currentTarget.value;
        //     wrkexp[e.currentTarget.dataset.index]["end_date"]=Companytittletext;
        //     });
        

        
       

        
        
        



    // wrkexp.push({})



//skills--------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let skills=[];
// function renderskill(){
//     document.getElementById("skillShow").innerHTML="";
//     skills.forEach((items,index)=>{
        
//         let skillsli=document.createElement("li");
//         skillsli.innerText=items.name;
//         document.getElementById("skillShow").append(skillsli);
    
//     })
// }
// function addskillinput(){
//     const input= document.createElement("input");
//     // const ul=document.getElementById("listskill");
//     // ul.appendChild(input);
//     input.type="text";
//     input.setAttribute("data-index",skills.length);

//     input.addEventListener("input",(event)=>{
//         const inputtext=event.currentTarget.value;
//         const index=event.currentTarget.dataset.index;
//         skills[index]["name"]=inputtext;
//         console.log(inputtext)
//         renderskill();
//     })
//     skills.push({"name":""})
//     document.getElementById("inputdiv").append(input);
// }
// document.getElementById("skklbtn").addEventListener("click",addskillinput);



// addextraelements--------------------->>>>>>>>>>>>>>
// let addextraselements=[];
// function rendersxtraact(){
//     document.getElementById("shwxtas").innerHTML="";
//     addextraselements.forEach( (item,index)=>{
        
//         let listOfextra =document.createElement("li");
//         listOfextra.innerText=item.ext_name;
//         document.getElementById("shwxtas").append(listOfextra);
//     })

// }
// function addxtrainput(){
//     let xtainput =document.createElement("input");
//     xtainput.type="text";
    
//     xtainput.placeholder="add extra";
//     xtainput.setAttribute("data-index", addextraselements.length);
//     xtainput.addEventListener("input",(e)=>{
//         let addxtraText=e.currentTarget.value;
//         let index=e.currentTarget.dataset.index;
//         addextraselements[index]["ext_name"]=addxtraText;
//        console.log(addextraselements["ext_name"]);
//        rendersxtraact();
        
//     })
  
//     addextraselements.push({"ext_name":""});
//     document.getElementById("inputxtra").append(xtainput);
// }
// document.getElementById("addxtrabbtn").addEventListener("click",addxtrainput);