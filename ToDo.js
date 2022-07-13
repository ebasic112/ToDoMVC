const el = document.getElementById("main")
const textel = document.getElementById("textDiv")
const inp = document.getElementById("input");
i = 0
j = 0


inp.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) { 
      event.preventDefault();
	 //code to Run
     let task = document.createElement("p")
     task.setAttribute("id", j)
     let form = document.createElement("form")
     form.setAttribute( "style", "text-align: center")
     form.setAttribute("class", "well menu")
     form.setAttribute("id", i)
     let input = document.getElementById("input").value;
     let close = document.createElement("a")
     close.innerHTML = "&times;"
     close.setAttribute("class", "close leftAlign")
     task.setAttribute("class", "size font")
     task.innerHTML = input
     form.appendChild(task)
     form.appendChild(close)
     document.getElementById("input").value = ""
     done = document.createElement("button")
     done.innerHTML = "Done!"
     done.setAttribute("id", i+1)
     done.setAttribute("onClick", "doneHandler(this.id)")
     form.appendChild(done)
     textel.appendChild(form)
     i += 1
     j += 1
  
    }
  });

a = 0

  function doneHandler(id){
    let currtask = getChild(id).innerHTML
    console.log(currtask)
    localStorage.setItem(a, currtask)
    a+=1  
    document.getElementById(id-1).remove()
   }

   function getChild(id){
    var parent = document.getElementById(id-1);
    var notes = null;
    for (var i = 0; i < parent.childNodes.length; i++) {
      if (parent.childNodes[i].className == "size font") {
        notes = parent.childNodes[i];
        break;
    }        
  }
return notes
}
 
