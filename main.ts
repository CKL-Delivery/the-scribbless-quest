namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    scene.setBackgroundColor(13)
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    mySprite2.destroy()
    mySprite3.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    mySprite.setPosition(10, 9)
    tiles.setTilemap(tilemap`level2`)
    info.stopCountdown()
    game.showLongText("Walk up to the blue scribble and press the A button to talk to him", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTilemap(tilemap`level6`)
    scene.setBackgroundColor(9)
    tiles.placeOnRandomTile(mySprite, assets.tile`Door part 1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
	
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite3)) {
        game.splash("Hi! I heard you two talking")
        game.splash("I actually already ", "Defeated the monster...")
        game.splash("But you can still have the sword!")
        tiles.setTilemap(tilemap`level4`)
        game.showLongText("Go to the door", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite2)) {
        game.splash("Seeing you out there, solving ", "that puzzle...")
        game.splash("I think you can help us!", "You see there's a monster...")
        game.splash("AH!!! I'm scared just thinking about it!", "Can you help us?")
        game.splash("There's this yellow guy.", "He's the only one of us with a sword")
        game.splash("Go talk to him.", "Save us!")
        game.showLongText("Walk up to the yellow scribble and press the B button to talk to him", DialogLayout.Bottom)
        tiles.setTilemap(tilemap`level3`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTilemap(tilemap`level10`)
    scene.setBackgroundColor(0)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile10`)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTilemap(tilemap`level11`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
	
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
info.startCountdown(10)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.value = 100
scene.setBackgroundColor(0)
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
controller.startLightAnimation(light.cometAnimation, 5000)
