import { _decorator, Component, EventKeyboard, input, Input, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

import { CharacterManager } from './CharacterManager';

@ccclass('ControllerManager')
export class ControllerManager extends Component {

    @property({
        type: CharacterManager
    })

    public character: CharacterManager;

    start() {

    }

    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.SPACE:
                this.character.flap = true;
                this.character.jump();
                break;
        }
    }

    update(deltaTime: number) {

    }
}
 

