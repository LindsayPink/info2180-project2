let _row = null;
let _col = null;
window.onload = function () {
    allPiece = document.body.children[2].children[0].children;
    pieces = Array.from(allPiece);
    $(allPiece).addClass("puzzlepiece");
    btn = document.getElementById("shufflebutton");
    bckgrndPos();
    tilePlace();
    empty();
    moveable();
    try_move();
}

function bckgrndPos () {
    $(allPiece[0]).css("background-position",  "0000px 0000px");
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
        $(row1[i]).attr("id", "tile_"+((r).toString())+"_"+((i+1).toString()));
    }
    for (let i = 0, r = 2; i <= row2.length; i++) {
        $(row2[i]).css({"grid-row-start":r.toString(), "grid-column-start":(i+1).toString()});
        $(row2[i]).attr("id", "tile_"+((r).toString())+"_"+((i+1).toString()));
    }
    for (let i = 0, r = 3; i <= row3.length; i++) {
        $(row3[i]).css({"grid-row-start":r.toString(), "grid-column-start":(i+1).toString()});
        $(row3[i]).attr("id", "tile_"+((r).toString())+"_"+((i+1).toString()));
    }
    for (let i = 0, r = 4; i <= row4.length; i++) {
        $(row4[i]).css({"grid-row-start":r.toString(), "grid-column-start":(i+1).toString()});
        $(row4[i]).attr("id", "tile_"+((r).toString())+"_"+((i+1).toString()));
    }
}

function findTile (r, c) {    
    for (let i = 0; i <= pieces.length; i++) {
        if ((parseInt($(pieces[i]).css("grid-row-start")))===r && 
        ((parseInt($(pieces[i]).css("grid-column-start"))))===c) {
            $(pieces[i]).attr("id", "tile_"+((r).toString())+"_"+((c).toString()));
            return pieces[i];
        }
    }
}

function empty () {
    for (let i = 0; i <= 3; i++){
        if ((findTile(1,i+1))===undefined) {
            free_row = 1;
            free_col = i+1;
        }
        else if ((findTile(2,i+1))===undefined) {
            free_row = 2;
            free_col = i+1;
        }
        else if ((findTile(3,i+1))===undefined) {
            free_row = 3;
            free_col = i+1;
        }
        else if ((findTile(4,i+1))===undefined) {
            free_row = 4;
            free_col = i+1;
        }
    }
}

function move (tile) {
    if (tile.classList[1] === "movablepiece") { 
        $(tile).css({"grid-row-start":free_row.toString(), "grid-column-start":free_col.toString()});
        $(tile).attr("id", "tile_"+((free_row).toString())+"_"+((free_col).toString()));
        empty();
        moveable();
        try_move();
    }
}

function moveable () {
    for (let i = 0; i < pieces.length; i++) {
        _row = parseInt($(pieces[i]).css("grid-row-start"));
        _col = parseInt($(pieces[i]).css("grid-column-start"));
        if ((_row===free_row) && (_col===(free_col+1) || _col===(free_col-1))) {
            pieces[i].classList.add("movablepiece");
        }
        else if ((_col===free_col) && (_row===(free_row+1) || _row===(free_row-1))) {
            pieces[i].classList.add("movablepiece");
        }
        else {
            pieces[i].classList.remove("movablepiece");
        }
    }
}

function try_move () {
    for(let i=0;i<pieces.length;i++) {
        pieces[i].onclick = function(){move(pieces[i])}
    }
}