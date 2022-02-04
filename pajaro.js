class Pajaro {
    
    constructor() {
        this.y = height/2
        this.x = width/2-150

        //movimiento
        this.gravedad = 1;
        this.velocidad = 0;
        this.salto = 1;
    }
    
    pintarPajaro(){
        fill(255, 0, 0);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, 20, 20);
    }

    movimientoPajaro(){
        this.velocidad += this.gravedad;
        this.y += this.velocidad;

        if(this.y > height) {
            this.y = height;
            this.gravedad = 0;
        }
    }
}
