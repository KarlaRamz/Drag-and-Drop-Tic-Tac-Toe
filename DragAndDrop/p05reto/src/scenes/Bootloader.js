class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['yoshif', 'yoshi']);
        this.load.image(['bowser', 'kirby']);
        this.load.image(['canvas']);
        this.load.image("drop", "drop.png");
        //this.load.image(['cursor2']);

        this.drop= new Array(9);

        this.kirby= new Array(5);
        this.bowser= new Array(5);

        this.posicion= new Array(5);
        this.bowser= new Array(5);
        this.aux = new Array(9);
        for(var i=0;i<9; i++)
        {
            this.aux[i]=i;
        }
        
    }

   

    create() {


        this.turno1 = true;
        this.turno2 = false;
        this.winn = {
            valor: false
        };


        this.canvas = this.add.image(500, 220, "canvas");
        //this.puntero = this.add.image(0, 0, 'cursor2').setOrigin(0.15, 0.15).setDepth(5);
        this.canvas.setDepth(-1);

        

        /////////////////////////////////////////////////////// ARRAY TABLERO ////////////////////////////////////////////////////////
        for (let index = 0; index < (this.drop.length)/3; index++){
            this.drop[index] = this.add.image(375 + (index*123), 120, "drop").setOrigin(0.5).setDepth(3).setInteractive().input.dropZone = true;
            this.drop[index+3] = this.add.image(375 + (index*123), 240, "drop").setOrigin(0.5).setDepth(3).setInteractive().input.dropZone = true;
            this.drop[index+6] = this.add.image(375 + (index*123), 355, "drop").setOrigin(0.5).setDepth(3).setInteractive().input.dropZone = true;
        }
        ///////////////////////////////////////////////////// ARRAY KIRBY //////////////////////////////////////////////////////////
        for (let index = 0; index < (this.kirby.length); index++){
            this.kirby[index] = this.add.image(850, 115, "kirby").setDepth(3).setInteractive().setName("kirby");
        }
        ///////////////////////////////////////////////////  ARRAY BOWSER /////////////////////////////////////////////////////////
        for (let index = 0; index < (this.bowser.length); index++){
            this.bowser[index] = this.add.image(160, 110, "bowser").setDepth(3).setInteractive().setName("bow");
        }
        ///////////////////////////////////////////////////
        this.input.setDraggable(this.kirby);
        this.input.setDraggable(this.bowser);
     
        
        //////////////////////////////////////////////////
        

        const eventos = Phaser.Input.Events;

        this.input.on(eventos.DRAG_START, (pointer, obj, sprite, dragX, dragY) => {
            obj.setScale(0.9);
            });
        
        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;

            });
        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
            obj.setScale(1.0);
            console.log(obj.sprite);
    
            if ( !dropzone ) {
                obj.x = obj.input.dragStartX;
                obj.y = obj.input.dragStartY;
                }
            // if(this.input.visible){
            //     console.log("bowser");
            //     obj.disableInteractive();
            //     this.kirby.visible=false;
            //     obj.disableInteractive();
            //     obj.disableInteractive(this.kirby);
                

            // }
            
            });

            
        // this.bowser[index].on(eventos.DRAG_END, (pointer, obj) => {
        //     obj.setScale(1.0);
    
        //     if ( !dropzone ) {
        //         obj.x = obj.input.dragStartX;
        //         obj.y = obj.input.dragStartY;
        //         }
        //     // if(this.obj=="bowser"){
        //     //     console.log("bowser");
        //     // }
        //     });

        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
            dropzone.setTint(0xff0000);
            
            });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
            dropzone.clearTint();
            });
        this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
                obj.x = dropzone.x;
                obj.y = dropzone.y;
                obj.disableInteractive();
                dropzone.disableInteractive();

                if(this.turno1==true && this.turno2==false){
                    // this.text2.setText('Turno 1');
                    this.turno1=false;
                    this.turno2=true;
                }
                else if(this.turno1 == false && this.turno2 == true){
                    this.text2.setText('Turno 2');
                    this.turno1=true;
                    this.turno2=false;
                }
                ganar(obj,dropzone,this.aux,this.winn); 
                
                

        
            });

            this.text1 = this.add.text(350, 430, 'Tic Tac toe',{
                fontFamily: 'Consolas', fontSize: '15px'
            });
            this.text2 = this.add.text(600, 430, 'Turno',{
                fontFamily: 'Consolas', fontSize: '15px'
            });

            // this.sys.canvas.style.cursor = 'none';
            // this.input.on(events.POINTER_MOVE, (event) => {
            //     this.puntero.x = event.worldX;
            //     this.puntero.y = event.worldY;
            // });
            
  function ganar(GameObject,dropzone,arreglo,winn){

    console.log(GameObject);
    console.log("holaa");
    //console.log(drop);
    console.log(dropzone);
    console.log(winn);
   
    var auxOBj = "b";
   

    if(GameObject.name == "kirby")
    {
            auxOBj = "kirby";

    }else{
        auxOBj = "bow";
    }
    console.log("objeto");
    console.log(auxOBj);
    
    if(dropzone.x == 375 && dropzone.y==120){
        arreglo[0] = auxOBj
        console.log("arreglo");
        console.log(arreglo[0]);
       
      
    }
   if(dropzone.x == 498 && dropzone.y==120){
        arreglo[1] =  auxOBj
        console.log("1");
        console.log(arreglo[1]);
   
    }
    if(dropzone.x == 621 && dropzone.y==120){
        arreglo[2] =  auxOBj
        console.log("2");
        //console.log(arreglo[2]);
   
    }
    if(dropzone.x == 375 && dropzone.y==240){
        arreglo[3] =  auxOBj
        console.log("3");
        console.log(arreglo[3]);
   
    }
    if(dropzone.x == 498 && dropzone.y==240){
        arreglo[4] =  auxOBj
        console.log("4");
        console.log(arreglo[4]);
   
    }
    if(dropzone.x == 621 && dropzone.y==240){
        arreglo[5] =  auxOBj
        console.log("a5");
        console.log(arreglo[5]);
   
    }
    if(dropzone.x == 375 && dropzone.y==355){
        arreglo[6] =  auxOBj
        console.log("6");
        console.log(arreglo[6]);
   
    }
    if(dropzone.x == 498 && dropzone.y==355){
        arreglo[7] =  auxOBj
        console.log("7");
        console.log(arreglo[7]);
   
    }
    if(dropzone.x == 621 && dropzone.y==355){
        arreglo[8] =  auxOBj
        console.log("8");
        console.log(arreglo[8]);
   
    }
    
    // for(var i=0; i <9;i++)
    // {
    //     console.log("valor de i "+i)
    //     console.log(arreglo[i]+"\n");
    // }}

    //// diagonal 
    if(arreglo[4] == arreglo[0] && arreglo[4] == arreglo[8])
    {
        console.log("linea");
        winn.valor = true;
        
    }
    ///diagonal 2
    if(arreglo[4] == arreglo[2] && arreglo[4] == arreglo[6])
    {
        console.log("linea");
        winn.valor = true;
    }
    // cruz 1
    if(arreglo[4] == arreglo[1] && arreglo[4] == arreglo[7])
    {
        console.log("linea");
        winn.valor = true;
    }
    /// cruz 2
    if(arreglo[4] == arreglo[3] && arreglo[4] == arreglo[5])
    {
        console.log("linea");
        winn.valor = true;
    }
    // linea 1
    if(arreglo[1] == arreglo[0] && arreglo[1] == arreglo[2])
    {
        console.log("linea");
        winn.valor = true;
    }
    // linea 2
    if(arreglo[7] == arreglo[6] && arreglo[7] == arreglo[8])
    {
        console.log("linea");
        winn.valor = true;
    }
    // columna  1
    if(arreglo[3] == arreglo[0] && arreglo[3] == arreglo[6])
    {
        console.log("linea");
        winn.valor = true;
    }
    // columna  2
    if(arreglo[5] == arreglo[2] && arreglo[5] == arreglo[8])
    {
        console.log("linea");
        winn.valor = true;
    
    }

    
   
    }
    }


    update(time, delta) {
       
        if(this.turno1==true && this.turno2==false){
            this.text2.setText('Turno 1');

            for (let index = 0; index < this.kirby.length; index++) {
                this.kirby[index].disableInteractive();
                this.bowser[index].setInteractive();
            }


        }
        else if(this.turno1 == false && this.turno2 == true){
            this.text2.setText('Turno 2');

            
            for (let index = 0; index < this.bowser.length; index++) {
                this.bowser[index].disableInteractive();
                this.kirby[index].setInteractive();
            }
        }
        //console.log(this.winn);
        if(this.winn.valor)
        {
            console.log("end game");
            this.showReboot();
        }
    }
    showReboot()
    {
        this.scene.start('Reboot');
    }

    
}

// var result = 'Drag a sprite';
// function onDragStart(sprite, pointer) {

//     result = "Dragging " + sprite.key;

// }
export default Bootloader;