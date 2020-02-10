class IntroConfig {
    constructor() {
        this.game = new Phaser.Game(this.getConfig());
    }

    getConfig() {
        return {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        }
    }
    
    getGameObj() {
        return game;
    }

    preload() {

    }

    create() {

    }

    update() {

    }
    
}

var game = new IntroConfig();