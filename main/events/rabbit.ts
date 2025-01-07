import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-2', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class RabbitEvent extends RpgEvent {
    onInit() {
        this.setGraphic('rabbit')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Rabbit: 水獺好啊!! 我是兔子!! Hello World!!', {
            talkWith: this
        })
    }
}