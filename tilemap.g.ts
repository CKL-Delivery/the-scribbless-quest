// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000004000000000000000000000000000005040000000000000000000000000000060400000000000000000000000000000704000000000000000000000000000005040000000000000000000000000000060400000000000000000000000000000704080808010000000000000000000005040808080101000000000000000000090408010101010100000000000000000704080101010101010000000000030303040101010101010000000000000303030401010101010000000000000003030302020202020202020202020202030303020202020202020202020202020303030202020202020202020202020203030302020202020202020202020202`, img`
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
`, [myTiles.transparency16,sprites.swamp.swampTile1,sprites.dungeon.darkGroundCenter,sprites.dungeon.hazardLava1,sprites.builtin.field0,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTeal,sprites.dungeon.buttonPink,sprites.swamp.swampTile2,sprites.dungeon.buttonTealDepressed], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000001000000000000000000000000000006010000000000000000000000000000050100000000000000000000000000000701000000000000000000000000000006010000000000000000000000000000050100000000000000000000000000000701000004040000000000000000000006010404040400000000000000000000050104040404040400000000000000000701040404040400000000000000000006010404040404000000000000000000050104040404000000000000000000000701030303030303030303030303020202030303030303030303030303030202020303030303030303030303030302020203030303030303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 2 2 2 . . . . . . . . . 
. . . 2 . . 2 . . . . . . . . . 
. . . 2 2 2 2 . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.field0,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundNorthWest1,sprites.swamp.swampTile1,sprites.dungeon.buttonTeal,sprites.dungeon.buttonOrange,sprites.dungeon.buttonPinkDepressed], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100000000002000000000000000000000000000004020000000000000000000000000000050200000000000000000000000000000602000000000000000000000000000004020000000000000000000000000000050200000000000000000000000000000602000000000000000000000000000004020101000000000000000000000000050201010100000000000000000000000602010101010000000000000000000004020101010101000000000000000000070201010101000000000000000000000602080808080808080808080808030303080808080808080808080808080303030808080808080808080808080803030308080808080808080808080808`, img`
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.swamp.swampTile1,sprites.builtin.field0,sprites.dungeon.hazardLava1,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTeal,sprites.dungeon.buttonPinkDepressed,sprites.dungeon.buttonTealDepressed,sprites.dungeon.darkGroundNorthWest1], TileScale.Sixteen);
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
