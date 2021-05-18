namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    mySprite.setPosition(10, 9)
    tiles.setTilemap(tilemap`level2`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite3)) {
        game.splash("Hi! I heard you two talking")
        game.splash("Here's the sword!")
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.splash("Seeing you out there, solving ", "that puzzle...")
        game.splash("I think you can help us!", "You see there's a monster...")
        game.splash("AH!!! I'm scared just thinking about it!", "Can you help us?")
        game.splash("There's this yellow guy.", "He's the only one of us with a sword")
        game.splash("Go talk to him.", "Save us!")
        tiles.setTilemap(tilemap`level3`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    game.over(false)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 . 2 . . . 
    . . . . . 2 2 2 2 2 . . 2 2 2 . 
    . . . 2 2 2 2 . . . 2 2 2 . 2 2 
    . . 2 2 2 . . . . 2 2 . 2 . . 2 
    . 2 2 . . . . . . 2 . . 2 . . . 
    2 2 . . . . . . 2 2 2 2 2 2 2 2 
    . . 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
    . . . . 2 2 2 . 2 2 2 . . . 2 2 
    . . 2 2 . . . 2 2 2 . . . 2 . 2 
    . 2 . . . . 2 2 2 . . . 2 . 2 . 
    2 . . . 2 2 . 2 . . . 2 . 2 . . 
    . . 2 2 2 . . 2 . 2 2 . 2 . . . 
    . 2 2 2 . . 2 . 2 . . 2 2 2 2 . 
    . . . . 2 2 2 2 . . 2 2 . . . . 
    . . . 2 2 2 . . . 2 . . . . . . 
    . . . 2 2 . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(14, 16)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . 8 . . . . . . . 8 8 8 . . . . 
    . 8 . . . . . . 8 . . . 8 . . . 
    . 8 . . 8 8 8 8 . . . 8 8 8 . . 
    . 8 . . . . 8 8 8 8 8 8 8 8 . . 
    . . 8 . . 8 8 . . 8 8 . 8 8 . . 
    . . 8 . . 8 8 . 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 . . . 8 . 8 . . . 8 8 8 
    . . 8 . . . 8 . . . . . . 8 . 8 
    . . 8 . 8 8 . . . 8 . . 8 8 8 8 
    . . . 8 . . . 8 8 . . 8 8 8 . 8 
    . 8 8 8 . . 8 . . . . 8 . . . 8 
    . 8 . 8 . 8 . . . 8 8 . . . . 8 
    . . . 8 . . . . 8 . 8 . . . 8 . 
    . . 8 8 . . . . 8 . . . . 8 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
mySprite2.setPosition(129, 68)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . 5 5 
    . . . . . 5 5 . . . . . 5 5 5 . 
    . . . 5 5 . . 5 5 5 5 5 . 5 . . 
    . . . . 5 5 5 . 5 5 . . 5 . . . 
    . 5 . . 5 5 5 5 5 5 . 5 . 5 . . 
    . . 5 5 . 5 5 5 . . 5 . . 5 . . 
    . 5 . . 5 . . 5 5 5 5 5 5 5 . . 
    5 . . 5 5 5 5 5 5 5 . . . 5 5 . 
    5 5 5 5 . 5 . . 5 5 5 . . . 5 . 
    . . . . 5 . . 5 . . 5 5 . . 5 . 
    . . . 5 . . 5 . . 5 5 5 . . 5 5 
    . . . 5 5 5 5 5 5 5 5 5 . . 5 5 
    . . . 5 5 5 5 5 5 . . 5 5 5 . . 
    . 5 5 . . 5 . . 5 5 5 5 5 . . . 
    . 5 5 5 5 . . 5 5 5 . 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
