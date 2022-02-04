class Pajaro {
    
    constructor() {
        this.y = height/2
        this.x = 64

        //movimiento
        this.gravedad = 0.5;
        this.velocidad = 0;
        this.salto = -10;
    }
    
    pintarPajaro(){
        fill(255, 0, 0);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, 20, 20);
    }

    saltoPajaro(){
        this.velocidad = this.salto;
    }

    movimientoPajaro(){
        this.velocidad += this.gravedad;
        this.y += this.velocidad;

        //configuración del suelo del juego
        if(this.y > height ) {
            this.y = height ;
            this.velocidad = 0;
        }

        //configuración del techo del juego
        if(this.y <= this.height) {
            this.y = this.height;
            this.gravedad= 0;
        }
    }
}
