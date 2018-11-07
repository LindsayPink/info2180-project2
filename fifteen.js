window.onload = function () {
    allPiece = document.body.children[2].children[0].children; //gets the tile divs in puzzlearea as HTML collection
    pieces = Array.from(allPiece); //converts HTML collection to array so that array methods can be done on them
    $(allPiece).addClass("puzzlepiece"); //applies puzzlepiece class to tiles
    btn = document.getElementById("shufflebutton"); //for accessing shuffle button
    num_shifts = null; //initializing var which determine the num of moves to be made when tiles are shuffled
    bckgrndPos();
    tilePlace();
    empty();
    moveable();
    try_move();
    shuffle();
}

function bckgrndPos () { //positions background image on each tile
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

function tilePlace () { //positions tiles in grid row by row
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

function findTile (r, c) { //helper function to determine where empty tile is
    for (let i = 0; i <= pieces.length; i++) {
        if ((parseInt($(pieces[i]).css("grid-row-start")))===r && 
        ((parseInt($(pieces[i]).css("grid-column-start"))))===c) {
            return pieces[i];
        }
    }
}

function empty () {
/* determines where empty tile is row by row, and stores row/col components in appropriate vars
Searching row by row is not problematic since the empty square is only ever in one row
*/
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

function move (tile) { //helper function to move tile and restart the try_move process
    if (tile.classList[1] === "movablepiece") { 
        $(tile).css({"grid-row-start":free_row.toString(), "grid-column-start":free_col.toString()});
        empty();
        moveable();
        try_move();
    }
}

function moveable () {
/* applies or removes movablepiece class based on whether or not tile
in question is next to the empty square
First checks if tile is in the same row/column as empty square then if it is
to the left or right of north or south of it*/
    let _row = null;
    let _col = null;
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

function try_move () { //moves a tile on click if it is moveable
    for(let i=0;i<pieces.length;i++) {
        pieces[i].onclick = function(){move(pieces[i])}
    }
}

function shuffle() { //rearranges tiles on click of shuffle button using a max of 20 shifts
    btn.onclick = function() {
    num_shifts = Math.floor(Math.random() * 200) + 1; //right hand side of assignment ensures num-shifts != 0 but can be 200
        for(let i = 0; i <= num_shifts; i++){
            let mTiles = document.getElementsByClassName("puzzlepiece movablepiece");
            m_Tiles = Array.from(mTiles);
            let x = Math.floor(Math.random() * m_Tiles.length);
            move(m_Tiles[x]);
        }
    }
}