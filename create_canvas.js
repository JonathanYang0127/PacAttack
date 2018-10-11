var xnum = 16, ynum = 16, buffer = 3

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
    canvas.width = gridwidth*xnum-buffer;
    canvas.height = gridheight*ynum-buffer;
    canvas.style = style="border:3px solid #000000;"
    c2d.lineWidth = buffer;
    c2d.beginPath();
    /*
    for(var i = 1; i<ynum; i++){
        c2d.moveTo(gridwidth*i-buffer, 0);
        c2d.lineTo(gridwidth*i-buffer, canvas.height);
        c2d.stroke();
    }
    for(var i = 1; i<xnum; i++){
        c2d.moveTo(0, gridwidth*i-buffer);
        c2d.lineTo(canvas.width, gridwidth*i-buffer, canvas);
        c2d.stroke();
    }*/
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

var draw_maze = function(hstart, vstart, hend, vend){
    var canvas = document.getElementById("gameCanvas");
    var c2d = canvas.getContext("2d");
    var gridwidth = Math.floor(canvas.width/xnum);
    var gridheight = Math.floor(canvas.height/ynum);
    for(var i = hstart; i<=hend; i++){
        for(var j = vstart; j<vend; j++){
            if(vgrid[i][j] == true){
                c2d.moveTo(gridwidth*i-buffer, gridheight*j);
                c2d.lineTo(gridheight*i-buffer, gridheight*(j+1));
                c2d.stroke();
            }
        }
    }
    for(var i = hstart; i<hend; i++){
        for(var j = vstart; j<=vend; j++){
            if(hgrid[i][j] == true){
                c2d.moveTo(gridwidth*i, gridheight*j-buffer);
                c2d.lineTo(gridheight*(i+1), gridheight*j-buffer);
                c2d.stroke();
            }
        }
    }

}
