class Pajaro {
    
    constructor() {
        this.y = 100
        this.x = 100

        //movimiento
        this.gravedad = 1;
        this.salto = 1;
    }
    
    pintarPajaro(){
        fill(255, 0, 0);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, 100, 100);
    }

    movimientoPajaro(){
        this.y = this.gravedad ++;
    }
}
