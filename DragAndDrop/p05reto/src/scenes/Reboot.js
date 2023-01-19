 import { Resetboton } from "../../componentes/reinicioboton.js"
 export class Reboot extends Phaser.Scene{
    constructor(){
        super({
            key: 'Reboot'

        });
        this.Resetboton = new Resetboton(this);
    }
    init() {
        console.log('Escena over');
    }
    preload(){
        this.Resetboton.preload();
        this.load.path = './assets/';
        this.load.image(['winner']);// imagen de game over
        this.load.image(['canvas']);// imagen de fondo
        this.load.image(['cursor2']);
    }
    create()
    {
        this.Resetboton.create();
        //this.puntero = this.add.image(0, 0, 'cursor2').setOrigin(0.15, 0.15).setDepth(5);

        
        this.canvas = this.add.image(500, 220, "canvas");
        this.canvas.setDepth(-1);
        var nombre = prompt("GANADOR: ");
        this.gameoverImage = this.add.image(500,216,'winner');/// imagen de gamer en el canvas 
        
        this.text1 = this.add.text(350, 430, 'GANADOR '+ nombre,{
            fontFamily: 'Consolas', fontSize: '15px'
        });
        // this.sys.canvas.style.cursor = 'none';
        // this.input.on(events.POINTER_MOVE, (event) => {
        //     this.puntero.x = event.worldX;
        //     this.puntero.y = event.worldY;
        // });
    }   
}
