
var arr=[];
var Arr;
class Employee{
    constructor(ID,Name,Sal){
        this.ID=ID;
        this.Name=Name;
        this.Sal=Sal;
    }
    
}




function check(){
    
    var id=null;
    id=document.getElementById("ID").value;
    var name=document.getElementById("Name").value;
    var sal=null;
    "use srict";
    sal=30000;
    
        
    let E1=new Employee(id,name,sal) 
            Arr=JSON.stringify(E1);
         
            arr.push(Arr);
       
  
    
    
   show();

}; 

function show(){
let text="<table><th>Id </th><th>Name</th><th>Basic Salary</th><th>Action<th>";
for(let j=0;j<arr.length;j++){
     let t=JSON.parse(arr[j]);
       
      text+= "<tr><td>"+t.ID+"</td><td>"+t.Name+"</td><td>"+t.Sal+"</td><td><button>Delete</button></tr>"
}
  
  
  
  

    text+= "</table>";
  
  
  document.getElementById("res").innerHTML=text;

   

    


}

