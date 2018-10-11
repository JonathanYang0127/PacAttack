var rows = 20, columns = 20, buffer = 3;
var gridwidth, gridheight;

var create_game = function(){
    try{
        var canvas = document.getElementById("gameCanvas");
        var c2d = canvas.getContext("2d");
    }
    catch{
        alert("Game Canvas Not Found");
    }
    gridwidth = Math.floor(canvas.width/columns); 
    gridheight = Math.floor(canvas.height/rows);
    canvas.width = gridwidth*columns+buffer;
    canvas.height = gridheight*rows+buffer;
    c2d.lineWidth = buffer;
    c2d.beginPath();
    for(var i = 0; i<=columns; i++){
        c2d.moveTo(gridwidth*i+2, 0);
        c2d.lineTo(gridwidth*i+2, canvas.height);
        c2d.stroke();
    }
};

create_game();
