var xnum = 16, ynum = 16, buffer = 3;
var gameTimer;

var initialize = function(){
    create_canvas(xnum, ynum, buffer);
    generate_maze(0, 0, 16, 16, 0);
    initialize_dots();
    draw_maze(0, 0, 16, 16);
    create_player(0, 0, gridwidth/2, gridheight/2, 1);
    create_player(xnum-1, ynum-1, gridwidth*(2*(xnum-1)+1)/2, gridheight*(2*(ynum-1)+1)/2, 3);
    draw_players();
}

var dir_to_x = function(dir){
    return dir == 3 ? -1 : dir == 1 ? 1 : 0;
}

var dir_to_y = function(dir){
    return dir == 0 ? -1 : dir == 2 ? 1 : 0;
}

var set_up_keys = function(){
    document.onkeydown = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        if(key == 37){
            players[0].rdir = 3;
        }
        else if(key == 38){
            players[0].rdir = 0;
        }
        else if(key == 39){
            players[0].rdir = 1;
        }
        else if(key == 40){
            players[0].rdir = 2;
        }
        else if(key == 65){
            players[1].rdir = 3;
        }
        else if(key == 87){
            players[1].rdir = 0;
        }
        else if(key == 68){
            players[1].rdir = 1;
        }
        else if(key == 83) {
            players[1].rdir = 2;
        }
    }
}


var step = function(){
    for (var i = 0; i<players.length; i++){
        for(var speed = 0; speed<10; speed++){
            if(!is_wall(players[i].x, players[i].y, players[i].dir)){
                players[i].blocked = false;
                players[i].move();
            }
            else{
                players[i].blocked = true;
                players[i].dir = players[i].rdir;
            }
        }
    }
    clear_canvas();
    draw_maze(0, 0, 16, 16);
    draw_dots();
    draw_players();
}

var start_game = function(){
    set_up_keys();
    gameTimer = setInterval(step, 1);
}

initialize();
start_game();


for (var i = 0; i<2; i++){
    for (var j = 0; j<=2; j++){
        console.log(vgrid[i][j])
    }
    console.log('\n')
}
