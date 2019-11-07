
document.getElementById("add").addEventListener("click",todoList);
var ul=document.getElementById("items");
function todoList(){
    var value=document.getElementById("todolist").value;
    if(value === "")
    alert("enter the task...!!");
    else{
      var li=document.createElement("li");
      li.innerHTML=value;
      li.setAttribute('onclick','removeItem(this)')
      document.getElementById("items").appendChild(li);
      document.getElementById("todolist").value="";
    }
  }

  function removeItem(a)
  {
       document.getElementById("items").removeChild(a);
  }

 
