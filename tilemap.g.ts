// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000004000000000000000000000000000005040000000000000000000000000000060400000000000000000000000000000704000000000000000000000000000005040000000000000000000000000000060400000000000000000000000000000704080808010000000000000000000005040808080101000000000000000000060408010101010100000000000000000704080101010101010000000000030303040101010101010000000000000303030401010101010000000000000003030302020202020202020202020202030303020202020202020202020202020303030202020202020202020202020203030302020202020202020202020202`, img`
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile1,sprites.dungeon.darkGroundCenter,sprites.dungeon.hazardLava1,sprites.builtin.field0,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTeal,sprites.dungeon.buttonPink,sprites.swamp.swampTile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
