var draw_maze = function(hstart, vstart, hend, vend){
    var canvas = document.getElementById("gameCanvas");
    var c2d = canvas.getContext("2d");
    var gridwidth = Math.floor(canvas.width/xnum);
    var gridheight = Math.floor(canvas.height/ynum);
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
    for (var i = 0; i<xnum;  i++){
        for(var j = 0; j<ynum; j++){
            
        }
    } 
}
