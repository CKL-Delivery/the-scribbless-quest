namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.splash("Seeing you out there, solving ", "that puzzle...")
        game.splash("it just set something off in me.", "I wanna join you!")
    }
})
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
mySprite.setPosition(73, 30)
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
mySprite2.setPosition(143, 68)
let mySprite3 = sprites.create(img`
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
mySprite3.setPosition(78, 57)
