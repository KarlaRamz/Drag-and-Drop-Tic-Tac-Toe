class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'Start' });
    }

    init() {
        
        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;

        this.minScale = 0.75;
        this.maxScale = 1;
        this.deckSizeDelta = 0.05;

        this.bgDelta = 2;
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cursor2','fondo2','title2'
        ]);
        this.load.audio({
            key: "musica",
            url: "cancion.mp3"
        });
    }
    create() {
        
       
        this.musica = this.sound.add("musica");
        this.musica.play({
            volume: 1,
            loop: true
        });

        this.puntero = this.add.image(0, 0, 'cursor2').setOrigin(0.15, 0.15).setDepth(5);
        this.add.image(0, 0, "fondo2").setOrigin(0.0).setDepth(-1);

        this.title = this.add.image(
            this.width / 2,
            this.height / 2 - 15,
            "title2",
        ).setDepth(0).setInteractive();

        const events = Phaser.Input.Events;

        this.input.on(events.GAMEOBJECT_DOWN, (_, gameObject) => {
            //this.music.stop();
            this.scene.start("Bootloader", {
            });
        })
        this.sys.canvas.style.cursor = 'none';
        this.input.on(events.POINTER_MOVE, (event) => {
            this.puntero.x = event.worldX;
            this.puntero.y = event.worldY;
        });
    }
    update(time, delta) {
    }
}
export default Start;