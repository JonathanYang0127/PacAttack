var dots;
var hgrid = Array();
var vgrid = Array();

var is_wall = function(x, y, dir){
    if(x<0 || y<0 || x>=xnum || y>=ynum){
        return true;
    }
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




class Dot {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.appear = true;
   }
}

class Player{
    constructor(x, y, xreal, yreal, dir){
        this.canvas = document.getElementById("gameCanvas");
        this.xnum = 16;
        this.ynum = 16;
        this.x = x;
        this.y = y;
        this.xreal = xreal;
        this.yreal = yreal;
        this.blocked = true;
        this.dir = dir; //0 = up, 1 = right, 2 = down, 3 = left
        this.rdir = this.dir; 
        this.numdots = 0;
    }
    dir_to_x(dir){
        return dir == 3 ? -1 : dir == 1 ? 1 : 0;
    }

    dir_to_y(dir){
        return dir == 0 ? -1 : dir == 2 ? 1 : 0;
    }

    update_grid_values(){
        var orgx = this.x, orgy = this.y;
        var gridwidth = canvas.width/this.xnum;
        var gridheight = canvas.height/this.ynum;
        if(this.dir == 0){
            this.y = Math.floor((this.yreal-gridheight/2)/gridheight)+1;
        }
        else if(this.dir == 1){
            this.x = Math.floor((this.xreal-gridwidth/2)/gridwidth);
        }
        else if(this.dir == 2){
            this.y = Math.floor((this.yreal-gridheight/2)/gridheight);
        }
        else{
            this.x = Math.floor((this.xreal-gridwidth/2)/gridwidth)+1;
        }
        var nx = this.x+this.dir_to_x(this.dir);
        var ny = this.y+this.dir_to_y(this.dir);
        if(!(this.x == orgx && orgy == this.y)){
            
            if(!is_wall(this.x, this.y, this.rdir) || this.blocked){
                this.dir = this.rdir;
            }
            if(dots[this.x][this.y].appear == true){
                this.numdots++;
                dots[this.x][this.y].appear = false
            }
        }
        if(Math.abs(this.dir-this.rdir)%2 == 0){
            if(!is_wall(this.x, this.y, this.rdir) || this.blocked){
                this.dir = this.rdir;
            }
        }
    }

    move(){
        if(this.dir == 0){
            this.yreal--;
        }
        else if (this.dir == 1){
            this.xreal++;
        }
        else if (this.dir == 2){
            this.yreal++;
        }
        else{
           this.xreal--;
        }
        this.update_grid_values();
    }
}
