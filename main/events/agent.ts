import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-4', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('agent')
    }
    async onAction(player: RpgPlayer) {
        const choice = await player.showChoices('Agent: What color do you prefer?', [
            { text: 'Black', value: 'black' },
            { text: 'Rather the blue', value: 'blue' },
            { text: 'I don\'t have a preference!', value: 'none' }
        ])
        console.log(choice) // { text: 'Black', value: 'black' }
        if (choice) {
            await player.showText(`Agent: 你選擇了 ${choice.text}`, {
                talkWith: this
            })
        }
    }
} 
