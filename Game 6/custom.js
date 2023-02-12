let x = document.getElementsByClassName("mcq")[0]
let z = document.getElementsByClassName("mcq")[1]
let k = document.getElementsByClassName("mcq")[2]
let q = document.getElementsByClassName("mcq")[3]



let main = document.getElementsByClassName("main")[0]


x.addEventListener("click" , function(){
    x.getAttribute("src")
    main.setAttribute("src" , "./images/sora 2.jpg")

})


z.addEventListener("click" , function(){
    z.getAttribute("src")
    main.setAttribute("src" , "./images/sora 3.jpg")

})

k.addEventListener("click" , function(){
    z.getAttribute("src")
    main.setAttribute("src" , "./images/sora 4.jpg")

})


q.addEventListener("click" , function(){
    z.getAttribute("src")
    main.setAttribute("src" , "./images/sora 5.jpg")

})


















