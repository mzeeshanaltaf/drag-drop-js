let lists = document.getElementsByClassName("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

for(list of lists){
    list.addEventListener("dragstart", (e)=>{
        let selected = e.target
        // console.log(selected)

        rightBox.addEventListener("dragover", (e)=>{
            e.preventDefault()
        })

        rightBox.addEventListener("drop", (e)=>{
            
            if(selected !== null){
                rightBox.appendChild(selected)
            }
            selected = null;
        })
        leftBox.addEventListener("dragover", (e)=>{
            e.preventDefault()
        })

        leftBox.addEventListener("drop", (e)=>{
            if(selected !== null){
                leftBox.appendChild(selected)
            }
            
            selected = null;
        })

    })
}