var create_canvas = function(rows, columns, buffer){
    try{
        var canvas = document.getElementById("gameCanvas");
        var c2d = canvas.getContext("2d");
    }
    catch{
        alert("Game Canvas Not Found");
    }
    var gridwidth = Math.floor(canvas.width/columns); 
    var gridheight = Math.floor(canvas.height/rows);
    canvas.width = gridwidth*columns-buffer;
    canvas.height = gridheight*rows-buffer;
    canvas.style = style="border:3px solid #000000;"
    c2d.lineWidth = buffer;
    c2d.beginPath();
    for(var i = 1; i<columns; i++){
        c2d.moveTo(gridwidth*i-buffer, 0);
        c2d.lineTo(gridwidth*i-buffer, canvas.height);
        c2d.stroke();
    }
    for(var i = 1; i<rows; i++){
        c2d.moveTo(0, gridwidth*i-buffer);
        c2d.lineTo(canvas.width, gridwidth*i-buffer, canvas);
        c2d.stroke();
    }
}


