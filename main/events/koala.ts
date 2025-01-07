import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-3', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class KoalaEvent extends RpgEvent {
    onInit() {
        this.setGraphic('koala')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Koala: 水獺好啊!! 我是無尾熊!! Hello World!!', {
            talkWith: this
        })
    }
}