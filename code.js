

import E1 from './new.js';




/*function check(){
    
    var id=document.getElementById("ID").value;
    var name=document.getElementById("Name").value;
    var sal=document.getElementById("Sal").value;
   
    let E1=new Employee(id,name,sal) 
            Arr=JSON.stringify(E1);
         
            arr.push(Arr);
       
           
     
 
   

}; */
let text="<table><th>Id </th><th>Name</th><th>Basic Salary</th><th>Action<th>";
//for(let j=0;j<arr.length;j++){
     // let t=JSON.parse(arr[j]);
       
      text+= "<tr><td>"+E1.ID+"</td><td>"+E1.Name+"</td><td>"+E1.Sal+"</td><td><button>Delete</button></tr>"
//}
  
  
  
  

    text+= "</table>";
  
  
  document.getElementById("res").innerHTML=text;

   

    




