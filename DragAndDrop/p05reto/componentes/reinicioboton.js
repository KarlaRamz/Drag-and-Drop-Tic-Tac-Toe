export class Resetboton{

    constructor(scene)
    {
        this.relatedScene = scene;
    }
    preload()
    {
        /* boton para reiniciar la esena  */
        this.relatedScene.load.spritesheet('boton','assets/boton.png',{frameWidth:190,frameHeeight:49});

    }
    create()
    {
        const eventos = Phaser.Input.Events;
        this.starBoton = this.relatedScene.add.sprite(496,400,'boton').setInteractive();

        this.starBoton.on('pointerover',()=>{
            this.starBoton.setFrame(1);
        });
        this.starBoton.on('pointerout',()=>{
            this.starBoton.setFrame(0);
        });
        this.starBoton.on('pointerdown',()=>{
            // cargar la esena de boot
            this.relatedScene.scene.start('Bootloader');
        });
    }
}