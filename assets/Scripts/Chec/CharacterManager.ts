import { _decorator, Component, Label, Node, RigidBody2D, Sprite, SpriteFrame, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterManager')
export class CharacterManager extends Component {

    @property({
        type: SpriteFrame
    })

    public spriteFrame: SpriteFrame[] = [];

    public sprite: Sprite;

    public frameCount: number = 0;
    public frameSpeed: number = 10;

    public flap: boolean;

    public rg2d: RigidBody2D;

    start() {
        this.sprite = this.getComponent(Sprite);
        this.rg2d = this.getComponent(RigidBody2D);
    }
    update(deltaTime: number) {

        let frame: number;
        frame = Math.floor(this.frameCount);
        //    frame == 3 ? this.frameCount = 0 : this.frameCount += deltaTime * this.frameSpeed;

        if (this.flap) {
            this.frameCount += deltaTime * this.frameSpeed;
            this.node.eulerAngles = new Vec3(0, 0, this.node.eulerAngles.z + 10);

            if (this.node.eulerAngles.z >= 0) {
                this.node.eulerAngles = new Vec3(0, 0, 0);
            }

            this.sprite.spriteFrame = this.spriteFrame[frame];
        }

        else {
            this.node.eulerAngles = new Vec3(0, 0, this.node.eulerAngles.z - 1);

            if (this.node.eulerAngles.z <= -90) {
                this.node.eulerAngles = new Vec3(0, 0, -90);
            }
        }

        if (frame == 3) {
            this.frameCount = 0;
            this.flap = false;
        }

     //   console.log(frame);

        if (this.node.position.y >= 400) {
            this.node.position = new Vec3(0, 400, 0);
        }  
    }

    public jump() {
        this.rg2d.linearVelocity = new Vec2(0, 0);
        this.rg2d.applyForceToCenter(new Vec2(0, 2500), true);
    }
}


