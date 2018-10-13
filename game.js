var xnum = 16, ynum = 16, buffer = 3;
var initialize = function(){
    create_canvas(xnum, ynum, buffer);
    generate_maze(0, 0, 16, 16, 0);
    initialize_dots();
    draw_maze(0, 0, 16, 16);
    draw_dots();
}
initialize();



for (var i = 0; i<2; i++){
    for (var j = 0; j<=2; j++){
        console.log(vgrid[i][j])
    }
    console.log('\n')
}
