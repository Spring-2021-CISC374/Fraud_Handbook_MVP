class s1 extends Phaser.Scene {

    constructor() {
        super("s1Page");
    }

    create() {
        
        
        this.backG = this.add.tileSprite(0, 0, 800, 800, "gushi2");
        this.backG.setOrigin(0,0);
        
        var btn_back = this.add.text(630, 500, 'Next', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_back.on('pointerdown', () => { this.scene.start('s3Page'); });

        //testing block
        //var btn1 = this.add.text(200, 500, 'losepage2').setInteractive();
        //btn1.on('pointerdown', () => { this.scene.start('losePage2'); });
    }
}
