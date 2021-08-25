window.onclick=function changeColor() {
    var colors=["blue","orange","red","yellow"];
    var newcolor=Math.floor(Math.random()*colors.length)
    for(var n=0;n<9;n++){

        document.getElementsByClassName("grid-box")[n].style.background = colors[newcolor];

    }
    return false;
}
