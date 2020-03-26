const DEFAULT_HEIGHT = 600;
const DEFAULT_WIDTH = 800;

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT  
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/bkgd.jpg');
    this.load.image('btnAttack', 'assets/btnAttack.png');
    this.load.spritesheet('runRight', 'assets/runRight.png',
    {frameWidth: 9856 / 11, frameHeight: 960});
    this.load.spritesheet('idleRight', 'assets/idle.png',
    {frameWidth: 1792 / 2, frameHeight: 960});
}

function create() {
    this.add.image(400, 250, 'background').setScale(0.75); // Background

    // Animation config
    let runRight = {
        key: 'run',
        frames: this.anims.generateFrameNumbers('runRight'),
        frameRate: 15,
        repeat: -1
    }

    let idle = {
        key: 'idle',
        frames: this.anims.generateFrameNumbers('idleRight'),
        frameRate: 15,
        repeat: -1
    }

    anim = this.anims.create(runRight);

    sprite = this.add.sprite(100, 410, 'runRight').setScale(0.1);

    sprite.anims.load('run');
    
    let btnAttack = this.add.image(100, 540, 'btnAttack').setInteractive().setScale(.75);;

    function run(that, target) {
        that.add.tween({
            targets: target,
            duration: 2000,
            x: 550,
            onActive: target.anims.play('run'),
            onComplete: console.log("done")
            
        });
    }

    btnAttack.on('pointerdown', (e) => {
        run(this, sprite);
    });
}

function update() {
    
}

