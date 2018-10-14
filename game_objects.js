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
        this.rdir = this.dir
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
        if(!(this.x == orgx && orgy == this.y) || Math.abs(this.dir-this.rdir)%2 == 0){
            this.dir = this.rdir;
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
