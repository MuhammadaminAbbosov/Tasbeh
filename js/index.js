const count = document.getElementById("count")
const clear = document.getElementById("clear")

let s = 0


count.addEventListener("click",function(e) {
    e.preventDefault()
    s++
    document.getElementById("counter").textContent = s

    if(Number(s) % 33 === 0 && Number(s) % 9 === 0)
    {
        document.querySelector(".circle").style.border = "5px solid yellow"
        document.querySelector(".word").textContent = "Subhanalloh"
        document.querySelector(".arab").textContent = "سبحان الله"
    }        
    else if(Number(s) % 33 === 0 && Number(s) % 6 === 0)
    {
        document.querySelector(".circle").style.border = "5px solid red"
        document.querySelector(".word").textContent = "Allohu akbar"
        document.querySelector(".arab").textContent = " الله أكبر"
    }        
    else if(Number(s) % 33 === 0 && Number(s) % 3 === 0)
    {
        document.querySelector(".circle").style.border = "5px solid blue"
        document.querySelector(".word").textContent = "Alhamdulillah"
        document.querySelector(".arab").textContent = " ٱلْحَمْدُ لِلَّٰهِ"
    }        
})

clear.addEventListener("click",function(e) {
    e.preventDefault()
    s = 0
    document.getElementById("counter").textContent = s
    document.querySelector(".word").textContent = "Subhanalloh"
    document.querySelector(".arab").textContent = "سبحان الله"
})