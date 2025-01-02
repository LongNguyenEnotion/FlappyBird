import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GroundManager')
export class GroundManager extends Component {

    @property({
        type: Node
    })
    public ground: Node;

    public speed: number = 100;

    start() {

    }

    update(deltaTime: number) {
        this.ground.position = new Vec3(this.ground.position.x - this.speed * deltaTime, this.ground.position.y, 0);

        if (this.ground.position.x <= -22) {
            this.ground.position = new Vec3(0, this.ground.position.y, 0);
        }
    }
}


