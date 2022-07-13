const el = document.getElementById("write")
for (let i = 0; i<localStorage.length; i++){
    let task = localStorage.getItem(i)
    let well = document.createElement("form")
    well.setAttribute("class", "well menu")
    well.setAttribute( "style", "text-align: center")
    let paragraph = document.createElement("p")
    paragraph.setAttribute("style", "font-size:25px")
    paragraph.innerHTML = task
    well.appendChild(paragraph)
    el.appendChild(well)
}