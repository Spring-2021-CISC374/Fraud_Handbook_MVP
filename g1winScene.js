class g1winScene extends Phaser.Scene {
    constructor() {
        super("game1Success");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "gushi1");
        this.minigame1_background.setOrigin(0, 0);
        //this.minigame1_background.setOrigin(0, 0);

        var btns_1 = this.add.text(350, 500, 'Next Step').setInteractive();
        btns_1.on('pointerdown', () => { this.scene.start('mainPage'); });
        
        //this.scene.start('mainPage');
    }

    
}
