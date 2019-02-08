var div1 = document.getElementById("div1");
var div2 =document.createElement("div");
div2.setAttribute("id","mydiv");
div1.appendChild(div2);
var head1 = document.createElement("h1")
head1.setAttribute("id","h1");
var text1 = document.createTextNode("ToDo App");
head1.appendChild(text1);
div2.appendChild(head1);
var input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("placeholder","Enter work");
input1.setAttribute("id","text1");
div2.appendChild(input1)
var button1 = document.createElement("input");
button1.setAttribute("type","button");
button1.setAttribute("value","Add Work");
button1.setAttribute("id","button1");
button1.setAttribute("onClick","buttonFun()");
div2.appendChild(button1)
function buttonFun() {
var value1= document.getElementById("text1").value;
if(value1 === ""){
alert("sorry Add Data")}
else{

var div3 = document.createElement("div")
var ol1 = document.createElement("ul");
var li1 = document.createElement("li");
li1.setAttribute("id",value1);
var text2 = document.createTextNode(value1);
li1.appendChild(text2)
ol1.appendChild(li1);
div3.appendChild(ol1);
div1.appendChild(div3)
var edit1 = document.createElement("input");
edit1.setAttribute("type","button");
edit1.setAttribute("value","Edit")
edit1.setAttribute("id","edit1")
edit1.setAttribute("onclick","Edit1Fun()")

edit1.addEventListener('click', function () {
    var li = this.parentNode;
    console.log("li",li);
    var text = prompt("enter value",li.id)
    console.log("text",text);
    li.innerText = text
    li.appendChild(edit1)
    li.appendChild(delet1)
})
var delet1 = document.createElement("input");
delet1.setAttribute("type","button");
delet1.setAttribute("value","Remove")
delet1.setAttribute("id","delet1")
delet1.setAttribute("onclick","deletFun()")
li1.appendChild(edit1);
li1.appendChild(delet1)
delet1.addEventListener("click", function () {
    delet1.parentNode.remove()
})
}
}






