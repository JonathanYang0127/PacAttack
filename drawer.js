var canvas = document.getElementById("gameCanvas");
var c2d = canvas.getContext("2d");
var gridwidth, gridheight;

var draw_maze = function(hstart, vstart, hend, vend){
    gridwidth = Math.floor(canvas.width/xnum);
    gridheight = Math.floor(canvas.height/ynum);
    c2d.lineWidth = 3;
    for(var i = hstart; i<=hend; i++){
        for(var j = vstart; j<vend; j++){
            if(vgrid[i][j] == true){
                c2d.moveTo(gridwidth*i, gridheight*j);
                c2d.lineTo(gridheight*i, gridheight*(j+1));
                c2d.stroke();
            }
        }
    }
    for(var i = hstart; i<hend; i++){
        for(var j = vstart; j<=vend; j++){
            if(hgrid[i][j] == true){
                c2d.moveTo(gridwidth*i, gridheight*j);
                c2d.lineTo(gridheight*(i+1), gridheight*j);
                c2d.stroke();
            }
        }
    }
}

var draw_dots = function(){
    c2d.fillStyle = 'orange';
    c2d.strokeStyle = 'black';
    c2d.lineWidth = 1;
    for (var i = 0; i<xnum;  i++){
        for(var j = 0; j<ynum; j++){
            if(dots[i][j].appear == true){
                c2d.beginPath();
                c2d.arc(gridwidth*(2*i+1)/2, gridheight*(2*j+1)/2, 5, 0, 2 * Math.PI, false);
                c2d.fill();
                c2d.stroke();
            } 
        }
    } 
}

var draw_players = function(){
    c2d.fillStyle = 'yellow';
    c2d.strokeStyle = 'black';
    c2d.lineWidth = 1;
    for(var i = 0; i<players.length; i++){
        c2d.beginPath();
        c2d.arc(gridwidth*(2*players[i].x+1)/2, gridheight*(2*players[i].y+1)/2, 10, 0, 2 * Math.PI, false);
        c2d.fill();
        c2d.stroke();
    }
}
