    
function showBackGround(){
    let go_Back = document.getElementById("back")
    let bgChange = document.querySelector("body")
    let helloWorld = document.getElementById("hello")
    bgChange.style.backgroundImage = "url('images/img.jpg')";
    helloWorld.style.display = "none";
    go_Back.style.display = "inline-block"
}
function goBack(){
    let go_Back = document.getElementById("back")
    let bgChange = document.querySelector("body")
    let helloWorld = document.getElementById("hello")
    bgChange.style.backgroundImage = "url('images/bg-img-initial.jpg')";
    go_Back.style.display = "none"
    helloWorld.style.display = "inline-block"


}