window.onload = function () {
    allPiece = document.body.children[2].children[0].children;
    pieces = Array.from(allPiece);
    $(allPiece).addClass("puzzlepiece");

    bckgrndPos();
    tilePlace();
}

function bckgrndPos () {
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
    $("#puzzlearea").css("display", "grid");
    $("#puzzlearea").css("grid-template-columns", "100px 100px 100px 100px");
    $("#puzzlearea").css("grid-template-rows", "100px 100px 100px 100px");
    let row1 = pieces.slice(0,4);
    let row2 = pieces.slice(4,8);
    let row3 = pieces.slice(8,12);
    let row4 = pieces.slice(12,15);
    for (let i = 0, r = 1; i <= row1.length; i++) {
        $(row1[i]).css({"grid-row-start":r.toString(), "grid-column-start":(i+1).toString()});
    }
    for (let i = 0, r = 2; i <= row2.length; i++) {
        $(row2[i]).css({"grid-row-start":r.toString(), "grid-column-start":(i+1).toString()});
    }
    for (let i = 0, r = 3; i <= row3.length; i++) {
        $(row3[i]).css({"grid-row-start":r.toString(), "grid-column-start":(i+1).toString()});
    }
    for (let i = 0, r = 4; i <= row4.length; i++) {
        $(row4[i]).css({"grid-row-start":r.toString(), "grid-column-start":(i+1).toString()});
    }
}