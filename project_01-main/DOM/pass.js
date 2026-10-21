const change = document.getElementById("change")
change.addEventListener("click", change_all)

function change_all(){
     if(document.getElementsByTagName("div")[0].innerHTML==="Ковалева") {
         document.getElementsByTagName("div")[0].innerHTML = "Kovaleva"
         document.getElementsByTagName("div")[1].innerHTML = "Nadezhda"
         document.getElementsByTagName("div")[2].innerHTML = "Evgenyevna"
         document.getElementsByTagName("div")[3].innerHTML="Female &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10.08.2007"
         document.getElementsByTagName("div")[6].innerHTML="GU MVD PO G.MOSKVE"
         document.getElementsByTagName("div")[7].innerHTML="G.MOSKVA"
     }
     else{
         document.getElementsByTagName("div")[0].innerHTML="Ковалева"
         document.getElementsByTagName("div")[1].innerHTML="Надежда"
         document.getElementsByTagName("div")[2].innerHTML="Евгеньевна"
         document.getElementsByTagName("div")[3].innerHTML="Жен &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10.08.2007"
         document.getElementsByTagName("div")[6].innerHTML="ГУ МВД ПО Г.МОСКВЕ"
         document.getElementsByTagName("div")[7].innerHTML="Г.МОСКВА"

     }
}