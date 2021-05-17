class resultScene extends Phaser.Scene {
    constructor() {
        super("resultPage");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "gushi3");
        this.minigame1_background.setOrigin(0, 0);
        var btn_test_end = this.add.text(710, 520, 'No!', { fontSize: '30px', fill: '#ff0' }).setInteractive();
        btn_test_end.on('pointerdown', () => { this.scene.start('endPage'); });

        //var btn_test_end = this.add.text(450, 500, 'Still No!', { fontSize: '20px', fill: '#f00' }).setInteractive();
        //btn_test_end.on('pointerdown', () => { this.scene.start('endPage'); });
    }
}