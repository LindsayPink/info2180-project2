window.onload = function () {
    
    let allPiece = document.body.children[2].children[0].children;
    $(allPiece).addClass("puzzlepiece");

    bckgrndPos();
    tilePlace();
}

function bckgrndPos () {
    let allPiece = document.body.children[2].children[0].children;
    $(allPiece[0]).css("background-position",  "0000px 0000px",);
    $(allPiece[1]).css("background-position",  "-100px 0000px");
    $(allPiece[2]).css("background-position",  "-200px 0000px");
    $(allPiece[3]).css("background-position",  "-300px 0000px");
    $(allPiece[4]).css("background-position",  "0000px -100px");
    $(allPiece[5]).css("background-position",  "-100px -100px");
    $(allPiece[6]).css("background-position",  "-200px -100px");
    $(allPiece[7]).css("background-position",  "-300px -100px");
    $(allPiece[8]).css("background-position",  "0000px -200px");
    $(allPiece[9]).css("background-position",  "-100px -200px");
    $(allPiece[10]).css("background-position", "-200px -200px");
    $(allPiece[11]).css("background-position", "-300px -200px");
    $(allPiece[12]).css("background-position", "0000px -300px");
    $(allPiece[13]).css("background-position", "-100px -300px");
    $(allPiece[14]).css("background-position", "-200px -300px");
}

function tilePlace () {
    let allPiece = document.body.children[2].children[0].children;
    $("#puzzlearea").css("display", "grid");
    $("#puzzlearea").css("grid-template-columns", "100px 100px 100px 100px");
    $("#puzzlearea").css("grid-template-rows", "100px 100px 100px 100px");
    $(allPiece).css("position", "relative");
}