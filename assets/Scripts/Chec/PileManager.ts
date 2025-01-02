import { _decorator, Component, debug, Node, randomRange, RigidBody2D, BoxCollider2D, Sprite, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import { GroundManager } from './GroundManager';

@ccclass('PileManager')
export class PileManager extends Component {

    @property({
        type: Node
    })

    public piles: Node[] = []

    @property({
        type: GroundManager
    })

    public ground: GroundManager;

    start() {

    }

    update(deltaTime: number) {
        this.node.position = new Vec3(this.node.position.x - this.ground.speed * deltaTime, 0, 0);

        if (this.node.position.x <= -200) {
            this.randomHeight();
            this.node.position = new Vec3(200, 0, 0);
        }

        for (let i = 0; i < this.piles.length; i++) {
            let random = randomRange(100, 200);

            this.piles[i].getComponent(BoxCollider2D).size.height = 300;
        //    this.piles[i].getComponent(BoxCollider2D).offset = new Vec2(0, 100);

            console.log(this.piles[i].getComponent(BoxCollider2D).size);
        }
    }

    public randomHeight() {
        for (let i = 0; i < this.piles.length; i++) {
            let random = randomRange(100, 200);
            this.piles[i].getComponent(UITransform).height = random;

           /* this.piles[i].getComponent(BoxCollider2D).size = new Size(52, random * 2);
            this.piles[i].getComponent(BoxCollider2D).offset = new Vec2(0, 100);

            console.log(this.piles[i].getComponent(BoxCollider2D).size);*/
        }
    }
}


