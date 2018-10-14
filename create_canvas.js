var xnum = 16, ynum = 16, buffer = 3;

var create_canvas = function(x, y, b){
    xnum = x, ynum = y, buffer = b;
    try{
        var canvas = document.getElementById("gameCanvas");
        var c2d = canvas.getContext("2d");
    }
    catch{
        alert("Game Canvas Not Found");
    }
    var gridwidth = Math.floor(canvas.width/xnum);
    var gridheight = Math.floor(canvas.height/ynum);
    canvas.width = gridwidth*xnum;
    canvas.height = gridheight*ynum
    canvas.style = "border:3px solid #000000;"
    c2d.lineWidth = buffer;
    c2d.beginPath();
}

var initialize_dots = function(){
    dots = Array();
    for (var i = 0; i<xnum; i++){
        dots[i] = Array();
        for(var j = 0; j < ynum; j++){
            dots[i][j] = new Dot(i, j);
        }
    }
}

var players = Array();
var create_player = function(x, y, xreal, yreal, dir){
    players[players.length] = new Player(x, y, xreal, yreal, dir);
    dots[x][y].appear = false;
}

console.log("Hello")
var hgrid = Array();
var vgrid = Array();
for (var i = 0; i<xnum+1; i++){
    hgrid[i] = Array(ynum+1);
    hgrid[i].fill(false);
    vgrid[i] = Array(ynum+1);
    vgrid[i].fill(false);
    console.log(1);
}
console.log(vgrid[1][1]);

var is_wall = function(x, y, dir){
    if((x == 0 && dir == 3 ) || (x == 15 && dir == 1)){
        return true;
    }
    if((y == 0 && dir == 0) || (y == 15 && dir == 2)){
        return true;
    }
    if(dir == 0){
        return hgrid[x][y] == true;
    }
    else if(dir == 1){
        return vgrid[x+1][y] == true;
    }
    else if(dir == 2){
        return hgrid[x][y+1] == true;
    }
    else{
        return vgrid[x][y] == true;
    }
}

var generate_maze = function(hstart, vstart, hend, vend, divider){
    if(divider%2 == 0){
        if(hend-hstart == 1){
            return;
        }
        var vdivision = Math.floor(Math.random()*(hend-hstart-1));
        var opening = Math.floor(Math.random()*(vend-vstart))
        for(var i = vstart; i<vend; i++){
            if(i != vstart+opening){
              vgrid[hstart+vdivision+1][i] = true;
            }
        }
        generate_maze(hstart, vstart, hstart+vdivision+1, vend, (divider+1)%2);
        generate_maze(hstart+vdivision+1, vstart, hend, vend, (divider+1)%2);
    }
    else{
        if(vend-vstart == 1){
            return;
        }
        var hdivision = Math.floor(Math.random()*(vend-vstart-1));
        var opening = Math.floor(Math.random()*(hend-hstart))
        for(var i = hstart; i<hend; i++){
            if(i != hstart+opening){
              hgrid[i][vstart+hdivision+1] = true;
            }
        }
        generate_maze(hstart, vstart, hend, vstart+hdivision+1, (divider+1)%2);
        generate_maze(hstart, vstart+hdivision+1, hend, vend, (divider+1)%2);
    }
}
