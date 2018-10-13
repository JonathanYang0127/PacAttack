var xnum = 16, ynum = 16, buffer = 3;
var dots;

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
    canvas.style = style="border:3px solid #000000;"
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
var create_player = function(x, y){
    players[players.length] = new Player(x, y);
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
console.log(vgrid[1][1])

var convert_to_index = function(x, y, num){
    //0 = up, 1 = right, 2 = down 3 = left
    return x+xnum*y+xnum*ynum*num;
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
