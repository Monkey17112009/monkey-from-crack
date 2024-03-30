enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
    export const Npc1 = SpriteKind.create()
    export const Npc2 = SpriteKind.create()
    export const Life = SpriteKind.create()
    export const Npc3 = SpriteKind.create()
    export const Boss1 = SpriteKind.create()
    export const Npc4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc1, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Elias.sayText("Prazer meu nome Elias e Vamos VASCOOOO!!!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc4, function (sprite, otherSprite) {
    game.showLongText("Ual, não esperava ver você por aqui, é bom te ver de novo aqui o caminho é grande, MAS TOME CUIDADO!!! fique sabemdo que tem uma pesso chamada craquencio ele é um monstro.", DialogLayout.Bottom)
    pause(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_Paw.vy == 0) {
        Hops_and_Paw.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    current_level += 1
    startLevel()
})
function Misboss () {
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleInsignia)) {
        My_boss = sprites.create(img`
            ....................
            .......44444........
            ......4444444.......
            .....44d444d444.....
            .....dddddddddd.....
            .....ddaaaddaaad....
            .....55ccc55cce5....
            .....ddbbbddbbbd....
            .....ddddddddddd....
            .....dddddd2eeeeee2.
            .....dddddd22dddd...
            .....ddddddddddd....
            .....dddddddddd.....
            .....cc7777777cc....
            ....cccc777777ccc...
            ....cccc7777777cc...
            ....dddd77777777d...
            ...7dddd777777777...
            ...7dddd777777777...
            ...7dddd777777777...
            ...6dddd666666666...
            ...66dd6666666666...
            ....666666666666....
            .....6666666666.....
            .....dddd..dddd.....
            .....dddd..dddd.....
            .....dddd..dddd.....
            .....8888..8888.....
            .....88888.88888....
            ....................
            `, SpriteKind.Boss1)
        tiles.placeOnTile(My_boss, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        My_boss.setScale(1.5, ScaleAnchor.Middle)
        My_boss.ay = 500
        tiles.placeOnTile(My_boss, tiles.getTileLocation(9, 13))
        BossAlive = true
        statusbar = statusbars.create(140, 10, StatusBarKind.EnemyHealth)
        statusbar.positionDirection(CollisionDirection.Bottom)
        statusbar.setOffsetPadding(0, 5)
        statusbar.setColor(2, 12, 5)
        statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        statusbar.setBarBorder(2, 15)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(My_boss, effects.disintegrate, 500)
    sprites.destroy(statusbar)
    BossAlive = false
    info.changeScoreBy(20)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Life, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        ..........ffffff.............
        .........ffffffff............
        .........ffffffff............
        .........11111111............
        .......ffffffffffff..........
        .......ffffffffffff..........
        ........d11111111d...........
        ........d11111111d...........
        ........ddd1111ddd...........
        .....dd.bd22ddffdd.dd........
        ....dccdcd2211ffdcdccd.......
        ...dcccdcb111111bcdcccd......
        ...dccdccdcdb1bddccdccd......
        .....d..d.cbeb.b.d..d........
        ....d........e.......d.......
        ..............effe...........
        ...............ee............
        .............................
        .............................
        .............................
        .............................
        .............................
        `,img`
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        ..........ffffff.............
        .........ffffffff............
        .........ffffffff............
        .........11111111............
        .......ffffffffffff..........
        .......ffffffffffff..........
        ........d11111111d...........
        ...ddd..d11111111d..ddd......
        ..dcccd.ddd1111ddd.dcccd.....
        .dcccccdbd22ddffdbdcccccd....
        .d.cccdccd2211ffdccdccc.d....
        ....cdcccb111111bcccdc.......
        ....dccccdcdb1bddccccd.......
        ...d..c.d.cbeb.b.d.c..d......
        .............e...............
        ..............effe...........
        ...............ee............
        .............................
        .............................
        .............................
        .............................
        .............................
        `,img`
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        .............................
        ..........ffffff.............
        .........ffffffff............
        .........ffffffff............
        .........11111111............
        .......ffffffffffff..........
        .......ffffffffffff..........
        ........d11111111d...........
        ........d11111111d...........
        ....ddd.ddd1111ddd.ddd.......
        ...dcccdbd22ddffdbdcccd......
        ..dccccdcd2211ffdcdccccd.....
        ..d.ccdccb111111bccdcc.d.....
        ....cd..cdcdb1bddc..dc.......
        ....d...d.cbeb.b.d...d.......
        .............e...............
        ..............effe...........
        ...............ee............
        .............................
        .............................
        .............................
        .............................
        .............................
        `],
    200,
    true
    )
    bee.setPosition(Hops_and_Paw.x + 80, Hops_and_Paw.y - 80)
    bee.follow(Hops_and_Paw, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc2, function (sprite, otherSprite) {
    info.changeScoreBy(20)
    Xota_xota.sayText("Meu nome é xota-xota jaimison, uma pessoa vai te visitar a noite.")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Npc3, function (sprite, otherSprite) {
    game.showLongText("Hamm, é bom te ver por aqui, desculpe deixe-me apresentar. Sou o doente verde, e estarei te acompanhando em seus caminhos, não perca tempo SUBA IMEDIATAMENTE  e continue sua jornada.", DialogLayout.Bottom)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss1, function (sprite, otherSprite) {
    if (Hops_and_Paw.vy > 0 && Hops_and_Paw.y < My_boss.y) {
        Hops_and_Paw.vy = -70
        statusbar.value += -10
    } else {
        info.changeLifeBy(-1)
    }
    pause(10000)
})
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level2`)
    } else if (current_level == 1) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffffff5fffff
            fffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff111111111111111ffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff11111111111111111fffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff111111111111111111ffff11111111111ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff11111111111111111111ff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff111ffff111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff11111ff1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff111111f11111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5ffffffff1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffff
            ffffffffffffff111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111fffffff111ffffffffffffffffffffffffffffff1111111f1111ffffffff
            ffffffffffffff111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff11111111ff11111111ffffffffffffffffffffffffffff11111111111111fffffff
            ffffffffffffff111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff1111111111f111111111ffffffffffffffffffffffffff1111111111111111ffffff
            ffffffffffffff111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffff11111111111111111ffffff
            ffffffffffffffff111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff111111111111111111111ff111fffffffffffffffffff11111111111111111ffffff
            fffffffffffffff1111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffff111111111111111111ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffff111111111111111111ffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffff11111111111111111ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffff5ffffffff11111111111111fffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff
            fffffffffffffffffffff5ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff666666ffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff66666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff6666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff66666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5fffffffffffffffff5fffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffff6666fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666ffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffff5fffffffff
            ffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666ffffffffffffffffffffffffffff666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666fffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666fffffffffffffffffffffff666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666ffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666fffffffffffffffff6666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffff6666666666666666666fffffffffffffffff5ffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666fffffffffff666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666ffffffff666666666666666666666666666ffffffffffffffffffffffff6fffffffffffffffffff
            fffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffff666666666666666666666666666666ffffffffffffffffffff66666fffffffffffffffff
            fffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffff66666666ffffffffffffffff
            fffffffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff666666666666ffffffffffffff
            fffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff6666666666666ffffffffff5fff
            fffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff66666666666666666ffffffffffff
            fffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff
            fffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffff
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setTilemap(tilemap`level1`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level7`)
    } else if (current_level == 3) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffffff5fffff
            fffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff111111111111111ffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff11111111111111111fffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff111111111111111111ffff11111111111ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff11111111111111111111ff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff111ffff111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff11111ff1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff111111f11111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5ffffffff1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffff
            ffffffffffffff111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111fffffff111ffffffffffffffffffffffffffffff1111111f1111ffffffff
            ffffffffffffff111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff11111111ff11111111ffffffffffffffffffffffffffff11111111111111fffffff
            ffffffffffffff111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff1111111111f111111111ffffffffffffffffffffffffff1111111111111111ffffff
            ffffffffffffff111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffff11111111111111111ffffff
            ffffffffffffffff111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff111111111111111111111ff111fffffffffffffffffff11111111111111111ffffff
            fffffffffffffff1111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffff111111111111111111ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffff111111111111111111ffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffff11111111111111111ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffff5ffffffff11111111111111fffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff
            fffffffffffffffffffff5ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff666666ffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff66666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff6666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff66666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5fffffffffffffffff5fffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffff6666fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666ffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffff5fffffffff
            ffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666ffffffffffffffffffffffffffff666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666fffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666fffffffffffffffffffffff666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666ffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666fffffffffffffffff6666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffff6666666666666666666fffffffffffffffff5ffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666fffffffffff666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666ffffffff666666666666666666666666666ffffffffffffffffffffffff6fffffffffffffffffff
            fffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffff666666666666666666666666666666ffffffffffffffffffff66666fffffffffffffffff
            fffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffff66666666ffffffffffffffff
            fffffffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff666666666666ffffffffffffff
            fffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff6666666666666ffffffffff5fff
            fffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff66666666666666666ffffffffffff
            fffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff
            fffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffff
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setTilemap(tilemap`level3`)
    } else if (current_level == 4) {
        tiles.setCurrentTilemap(tilemap`level15`)
    } else if (current_level == 5) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffffff5fffff
            fffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff111111111111111ffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff11111111111111111fffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff111111111111111111ffff11111111111ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff11111111111111111111ff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff111ffff111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff11111ff1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff111111f11111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5ffffffff1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffff
            ffffffffffffff111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111fffffff111ffffffffffffffffffffffffffffff1111111f1111ffffffff
            ffffffffffffff111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff11111111ff11111111ffffffffffffffffffffffffffff11111111111111fffffff
            ffffffffffffff111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff1111111111f111111111ffffffffffffffffffffffffff1111111111111111ffffff
            ffffffffffffff111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffff11111111111111111ffffff
            ffffffffffffffff111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff111111111111111111111ff111fffffffffffffffffff11111111111111111ffffff
            fffffffffffffff1111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffff111111111111111111ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffff111111111111111111ffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffff11111111111111111ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffff5ffffffff11111111111111fffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff
            fffffffffffffffffffff5ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff666666ffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff66666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff6666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff66666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5fffffffffffffffff5fffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffff6666fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666ffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffff5fffffffff
            ffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666ffffffffffffffffffffffffffff666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666fffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666fffffffffffffffffffffff666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666ffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666fffffffffffffffff6666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffff6666666666666666666fffffffffffffffff5ffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666fffffffffff666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666ffffffff666666666666666666666666666ffffffffffffffffffffffff6fffffffffffffffffff
            fffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffff666666666666666666666666666666ffffffffffffffffffff66666fffffffffffffffff
            fffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffff66666666ffffffffffffffff
            fffffffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff666666666666ffffffffffffff
            fffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff6666666666666ffffffffff5fff
            fffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff66666666666666666ffffffffffff
            fffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff
            fffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffff
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setCurrentTilemap(tilemap`level26`)
    } else if (current_level == 6) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffffff5fffff
            fffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff111111111111111ffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff11111111111111111fffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffff111111111111111111ffff11111111111ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff11111111111111111111ff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff111ffff111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff11111ff1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff111111f11111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5ffffffff1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffff
            ffffffffffffff111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111fffffff111ffffffffffffffffffffffffffffff1111111f1111ffffffff
            ffffffffffffff111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff11111111ff11111111ffffffffffffffffffffffffffff11111111111111fffffff
            ffffffffffffff111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff1111111111f111111111ffffffffffffffffffffffffff1111111111111111ffffff
            ffffffffffffff111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffff11111111111111111ffffff
            ffffffffffffffff111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff111111111111111111111ff111fffffffffffffffffff11111111111111111ffffff
            fffffffffffffff1111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffff111111111111111111ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffff111111111111111111ffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffff11111111111111111ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffff5ffffffff11111111111111fffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffff111111111111111111111111111111ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff
            fffffffffffffffffffff5ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff66fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff6666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff666666ffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff66666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff6666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff66666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffff5fffffffffffffffff5fffffffffffffffffffff666666666666666666fffffffffffffffffffffffffffffffffffff6666fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666ffffffffffffffffffffffffffffffff666666fffffffffffffffffffffffffffffffffffffffffffff5fffffffff
            ffffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666ffffffffffffffffffffffffffff666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666fffffffffffffffffffffffff6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666fffffffffffffffffffffff666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff6666666666666666666666666666666666ffffffffffffffffffff666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff66666666666666666666666666666666666666fffffffffffffffff6666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff666666666666666666666666666666666666666666fffffffffffff6666666666666666666fffffffffffffffff5ffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666fffffffffff666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666ffffffff666666666666666666666666666ffffffffffffffffffffffff6fffffffffffffffffff
            fffffffffffffffffffffffffffff666666666666666666666666666666666666666666666666666666fffff666666666666666666666666666666ffffffffffffffffffff66666fffffffffffffffff
            fffffffffffffffffffffffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffff66666666ffffffffffffffff
            fffffffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff666666666666ffffffffffffff
            fffffffffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff6666666666666ffffffffff5fff
            fffffffffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff66666666666666666ffffffffffff
            fffffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff
            fffffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffff
            66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fff
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setCurrentTilemap(tilemap`level10`)
        Misboss()
    } else {
    	
    }
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
    for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    scene.cameraFollowSprite(Hops_and_Paw)
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Flower)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        Elias = sprites.create(img`
            ....................
            ....................
            ....................
            ........ffffff......
            .....ffffffffff.....
            ....ffffffffffff....
            ...ffffffffffffff...
            ..fffffffffffffff...
            .ffffffffffffffff...
            .fffddffffddfffff...
            .fffddddddddffff....
            ..ffddddddddffff....
            ..fdd1ddd1ddfff.....
            ...ddfdddfdddff.....
            ..ddddddddddd.......
            ..dddddd2dddff......
            .dd22222dddd11ffff..
            .dddddddddbf1fff11f.
            ..ff1fbbbbf1fff1f11f
            .f1f11ffff122f11f11f
            .f1ff11111122111fff.
            .fff.f111fff1111fdd.
            ..dd.f11ffff1111fdd.
            ..dd.f1ffff111fffdd.
            ..dd.ffff111ff11fff.
            .fff.ffffffff111f.f.
            ..f..f1111111111f...
            ....f11111111111f...
            ....f1111ff11111f...
            ....f1211f.f1111f...
            ....f1211f.f11111f..
            ....fffff..ffffff...
            .....ddd.....ddd....
            .....fff.....fff....
            ...fffff...fffff....
            `, SpriteKind.Npc1)
        tiles.placeOnTile(Elias, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        Doente_verdim = sprites.create(img`
            ........cccccccccccc
            .......caaaaaaaaaaac
            ......ca777aaaaaaaac
            .....777777777aaaac.
            ....7777777777a7aac.
            ....77f177f1777aac..
            ...777ff77ff777cc...
            ...777777777777.....
            ....77f7f7777.......
            ....77777777........
            ....7ffff777........
            .....7777.77........
            ..........77........
            ......fff.77.fff....
            .....f111f77ff11f...
            ....f11f11ff1f11f...
            .....fff11112ff1f...
            .....77f111f21fff...
            ....77.f11ff11f77...
            ...77..f1ff111f.77..
            ...f7..fff1111f..777
            .......ffffffff...7f
            .......77777777.....
            .......f777777f.....
            ......f8ffffff8f....
            .......f888888f.....
            .......7f8888f7.....
            .......77f88f77.....
            .......77.ff.77.....
            .......77....77.....
            .......42....42.....
            .....7422..7422.....
            ffff.7224..7224.ffff
            ..ffffffffffffffff..
            ....ffffffffffff....
            `, SpriteKind.Npc3)
        tiles.placeOnTile(Doente_verdim, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        Xota_xota = sprites.create(img`
            ....dddddddddd......
            ...dd111ddddddd.....
            .ffddddddddddddd....
            ffffffffffdddddd....
            fffffffffddddddd....
            fffffffffddfdddd....
            ffffffffddd11dddd...
            ffffffdddddf1dddd...
            .ffffddddddf1dddd...
            ..ffddddddddddddd...
            ...dddddddddddd.....
            ....dddd22222.......
            .....dddddddd.......
            ......dddddd........
            ...ffffddddfff......
            ..f4444fddf444f.....
            .f444444ff44444f....
            .f444f44444f444f....
            .f44f4444444f44f....
            .ffff4444444ffff....
            ..ddffff55fffdd.....
            ..ddf8888888fddd....
            ..ddf8888888f.ddddd.
            ..ddf8888888f..ddd..
            ..ddf888f888f.......
            ..ddf888ff888f......
            ..ddf888f.f88f......
            ....f888f.f88f......
            ....f888f.f88f......
            ...f8888f.f888f.....
            ...f8888f.f8888f....
            ....fffff.fffff.....
            .....ddd...ddd......
            .....fff...fff......
            .....fffff.fffff....
            `, SpriteKind.Npc2)
        tiles.placeOnTile(Xota_xota, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        Doente = sprites.create(img`
            ........cccccccccccc
            .......caaaaaaaaaaac
            ......ca777aaaaaaaac
            .....777777777aaaac.
            ....7777777777a7aac.
            ....77f177f1777aac..
            ...777ff77ff777cc...
            ...777777777777.....
            ....77f7f7777.......
            ....77777777........
            ....7ffff777........
            .....7777.77........
            ..........77........
            ......fff.77.fff....
            .....f111f77ff11f...
            ....f11f11ff1f11f...
            .....fff11112ff1f...
            .....77f111f21fff...
            ....77.f11ff11f77...
            ...77..f1ff111f.77..
            ...f7..fff1111f..777
            .......ffffffff...7f
            .......77777777.....
            .......f777777f.....
            ......f8ffffff8f....
            .......f888888f.....
            .......7f8888f7.....
            .......77f88f77.....
            .......77.ff.77.....
            .......77....77.....
            .......42....42.....
            .....7422..7422.....
            ffff.7224..7224.ffff
            ..ffffffffffffffff..
            ....ffffffffffff....
            `, SpriteKind.Npc4)
        tiles.placeOnTile(Doente, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Hops_and_Paw.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
    otherSprite.destroy()
})
let Vida: Sprite = null
let fireball: Sprite = null
let flower: Sprite = null
let Doente: Sprite = null
let Doente_verdim: Sprite = null
let Xota_xota: Sprite = null
let bee: Sprite = null
let statusbar: StatusBarSprite = null
let BossAlive = false
let My_boss: Sprite = null
let Elias: Sprite = null
let Hops_and_Paw: Sprite = null
let current_level = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999991111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999911111111111111199999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111111111111119999911111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999111111111111111111999911111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999991111111111111111111199111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999911199991111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999111119911111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999111111911111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999991111111111111111111111111111111111111111111111999999999999999999999999999999991111199999999999999999999999999999999999999999991111999999999999999
    9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999991111111999999911199999999999999999999999999999911111119111199999999
    9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999991111111199111111119999999999999999999999999999111111111111119999999
    9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999911111111119111111111999999999999999999999999991111111111111111999999
    9999999999999911111111111111111111111111111111111111111111111199999999999999999999999999999911111111111111111111199999999999999999999999911111111111111111999999
    9999999999999999111111111111111111111111111111111111111111111999999999999999999999999999999911111111111111111111199111999999999999999999911111111111111111999999
    9999999999999991111111111111111111111111111111111111111111999999999999999999999999999999999911111111111111111111111111199999999999999999111111111111111111999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111999999999999999111111111111111111999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111199999999999999911111111111111111999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999111111111111119999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111119999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999996666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999966666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999666666666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999996666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999966666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999666666666666666666999999999999999999999999999999999999966669999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999996666666666666666666666999999999999999999999999999999996666669999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999966666666666666666666666669999999999999999999999999999666666666999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999666666666666666666666666666699999999999999999999999996666666666999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999966666666666666666666666666666669999999999999999999999966666666666699999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999996666666666666666666666666666666666999999999999999999996666666666666669999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999666666666666666666666666666666666666669999999999999999966666666666666669999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999996666666666666666666666666666666666666666669999999999999666666666666666666699999999999999999999999999999999999999999999999999
    9999999999999999999999999999999996666666666666666666666666666666666666666666666999999999996666666666666666666666669999999999999999999999999999999999999999999999
    9999999999999999999999999999999966666666666666666666666666666666666666666666666669999999966666666666666666666666666699999999999999999999999969999999999999999999
    9999999999999999999999999999966666666666666666666666666666666666666666666666666666699999666666666666666666666666666666999999999999999999996666699999999999999999
    9999999999999999999999999996666666666666666666666666666666666666666666666666666666966666666666666666666666666666666666666999999999999999666666669999999999999999
    9999999999999999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999966666666666699999999999999
    9999999999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999666666666666699999999999999
    9999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699966666666666666666999999999999
    9999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999
    9999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
current_level = 0
Hops_and_Paw = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hops_and_Paw, 80, 0)
Hops_and_Paw.setFlag(SpriteFlag.BounceOnWall, false)
startLevel()
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`tile4`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . f f f e f . . . . . 
            . . . . . f 5 f f f f . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . f 5 c 5 c f . . . . . . . 
            . . . f 5 5 5 5 f . . . . . . . 
            . . . f 5 5 a a e e e e e 2 . . 
            . . . f 5 5 5 5 5 5 f f . . . . 
            . . . f f f 5 5 f f 6 6 f f . . 
            . . . f 6 6 f f 6 6 6 6 6 6 f f 
            . . . . f 6 6 6 6 6 6 6 6 6 6 f 
            . . . . . f f 6 6 6 6 6 6 f f . 
            . . . . . . . f f f f f f f . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        flower,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . f f f e f . . . . . 
            . . . . . f 5 f f f f . . b . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . f 5 5 5 f . . . . . b . 
            . . . f 5 c 5 c f . . . b . . . 
            . . . f 5 5 5 5 f . . . . . . . 
            . . . f 5 5 a a e e e e e 2 . . 
            . . . f 5 5 5 5 5 5 f f . . . . 
            . . . f f f 5 5 f f 6 6 f f . . 
            . . . f 6 6 f f 6 6 6 6 6 6 f f 
            . . . . f 6 6 6 6 6 6 6 6 6 6 f 
            . . . . . f f 6 6 6 6 6 6 f f . 
            . . . . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f . . b . . 
            . . . . . . f f f e f . . . . . 
            . . . . . f 5 f f f f . . . . b 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . f 5 5 5 f . . . . b . . 
            . . . f 5 c 5 c f . . . . . . . 
            . . . f 5 5 5 5 f . . . . . b . 
            . . . f 5 5 a a e e e e e 2 . . 
            . . . f 5 5 5 5 5 5 f f . . . . 
            . . . f f f 5 5 f f 6 6 f f . . 
            . . . f 6 6 f f 6 6 6 6 6 6 f f 
            . . . . f 6 6 6 6 6 6 6 6 6 6 f 
            . . . . . f f 6 6 6 6 6 6 f f . 
            . . . . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f . . . . . 
            . . . . . . f f f e f . . b . . 
            . . . . . f 5 f f f f . . . . . 
            . . . . f 5 5 5 f . . . . . b . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . f 5 c 5 c f . . . . b . . 
            . . . f 5 5 5 5 f . . . . . . . 
            . . . f 5 5 a a e e e e e 2 . . 
            . . . f 5 5 5 5 5 5 f f . . . . 
            . . . f f f 5 5 f f 6 6 f f . . 
            . . . f 6 6 f f 6 6 6 6 6 6 f f 
            . . . . f 6 6 6 6 6 6 6 6 6 6 f 
            . . . . . f f 6 6 6 6 6 6 f f . 
            . . . . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f . . b . . 
            . . . . . . f f f e f . . . . . 
            . . . . . f 5 f f f f . . . . . 
            . . . . f 5 5 5 f . . . . . . b 
            . . . . f 5 5 5 f . . . b . . . 
            . . . f 5 c 5 c f . . . . . b . 
            . . . f 5 5 5 5 f . . . . . . . 
            . . . f 5 5 a a e e e e e 2 . . 
            . . . f 5 5 5 5 5 5 f f . . . . 
            . . . f f f 5 5 f f 6 6 f f . . 
            . . . f 6 6 f f 6 6 6 6 6 6 f f 
            . . . . f 6 6 6 6 6 6 6 6 6 6 f 
            . . . . . f f 6 6 6 6 6 6 f f . 
            . . . . . . . f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . b . 
            . . . . . . . . f f f . . . . . 
            . . . . . . f f f e f . . . . b 
            . . . . . f 5 f f f f . . b . . 
            . . . . f 5 5 5 f . . . . . . . 
            . . . . f 5 5 5 f . . . . b . . 
            . . . f 5 c 5 c f . . . . . . . 
            . . . f 5 5 5 5 f . . . . . . . 
            . . . f 5 5 a a e e e e e 2 . . 
            . . . f 5 5 5 5 5 5 f f . . . . 
            . . . f f f 5 5 f f 6 6 f f . . 
            . . . f 6 6 f f 6 6 6 6 6 6 f f 
            . . . . f 6 6 6 6 6 6 6 6 6 6 f 
            . . . . . f f 6 6 6 6 6 6 f f . 
            . . . . . . . f f f f f f f . . 
            `],
        300,
        true
        )
        tiles.placeOnTile(flower, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile5`)) {
        flower = sprites.create(img`
            ........................
            .....bbbbb..............
            ....b33333bb............
            ...b33331113b...........
            ...b333311113b..........
            ..b1133331113bc.........
            .b11133333333bbb........
            bb1133113333bbbc.bbbb...
            cbb3311113bbddbcb3311b..
            cbbbbddddbbdddcbb33113c.
            .cbbbbddbbbddbbddb3333bc
            ..ccbbbbbbbbccbddbbbddbc
            ....cccccccb.ccbbbbbddbc
            ......b1ddb....ccbbbbbc.
            .....b11ddb.....bccccc..
            .....b1ddbb.....bddb....
            `, SpriteKind.Flower)
        tiles.placeOnTile(flower, value)
        tiles.setTileAt(value, assets.tile`tile0`)
    }
})
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`tile11`)) {
        fireball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . 5 5 2 5 5 4 5 5 . . . . 
            . . . . . 4 4 4 4 2 4 . . . . . 
            . . . 5 4 4 2 2 2 2 4 5 . . . . 
            . . . 5 4 . 2 8 2 8 4 2 . . . . 
            . . . 5 5 . 2 8 8 2 4 5 . . . . 
            . . . 2 5 2 2 8 2 4 4 5 . . . . 
            . . . . 5 4 2 2 2 4 5 . . . . . 
            . . . . . . 4 . 4 4 5 . . . . . 
            . . . 5 . 5 5 5 4 5 5 . . . . . 
            . . . . . . . 2 5 5 . . . . . . 
            . . . . . . . . . . . . . 5 . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fireball)
        tiles.placeOnTile(fireball, value)
        tiles.setTileAt(value, assets.tile`tile0`)
        animation.runMovementAnimation(
        fireball,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            Vida = sprites.create(img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                .....3..............
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                ....................
                `, SpriteKind.Life)
            animation.runImageAnimation(
            Vida,
            [img`
                ....................
                ....................
                ....................
                ..11.............11.
                .1d11...........11d1
                .d1111dff...ffd1111d
                .d1111f22f.f22f1111d
                .d11df2122f2222fd11d
                .d11df212222222fd1.d
                .d.1df222222222fd1.1
                .1.1.1f2222212f1.1..
                ...1..1f22212f1..1..
                ......1.f222f.1.....
                .........f2f........
                ..........f.........
                ....................
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ....................
                ....................
                ..d11..ff...ff..11d.
                .d111df22f.f22fd111d
                .d11df2122f2222fd11d
                .d11df212222222fd1.d
                .d.1d.222222222fd1.1
                .1.1.d.2222212fd.1.1
                .1.1.1..22212f.1.1..
                ...1....f222f....1..
                ...1.....f2f.....1..
                ...1......f.........
                ....................
                ....................
                ....................
                ....................
                ....................
                `,img`
                ....................
                ....................
                ....................
                ....................
                ..d1.............1d.
                .d111..ff...ff..111d
                .d111df22f.f22fd111d
                .d11df2122f2222fd11d
                .d11df212222222fd1.d
                .d.1df222222222fd..1
                .1..1df2222212fd1...
                ....11df22212fd11...
                ...1..1.f222fd...1..
                .....1...f2f.1......
                ..........f...1.....
                ....................
                ....................
                ....................
                ....................
                ....................
                `],
            200,
            true
            )
            tiles.placeOnTile(Vida, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
})
game.onUpdate(function () {
    if (Hops_and_Paw.vy < 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . f f f f f . . . . 
            . . . . f f f e e e e e f . . . 
            . . . f d d e e e e d d d f . . 
            . . . c d b e e e d d d d d c . 
            . . . c d b e e d d d d d d c . 
            . f f . c f e e d f d d f d d c 
            f e f . . f e e d f d d f d d c 
            f e f . . f e e d d d d e e d c 
            f e f . . f f e e d c d d d f . 
            f e f . f e e e e e d f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f f e e e e e e f f . . . . 
            . f f d e e e e e f f e f . . . 
            f d b d d f e c d d b d d f . . 
            f d c d f f f d d d c d d f . . 
            f f f f . . f f f f f f f . . . 
            `)
    } else if (Hops_and_Paw.vy > 0) {
        null.setImage(img`
            . . . . . . . f f f f f . . . . 
            . . . . f f f e e e e e f . . . 
            . . . f d d e e e e d d d f . . 
            . . . c d b e e e d d d d d c . 
            . . . c d b e e d d d d d d c . 
            . f f . c f e e d f d d f d d c 
            f e f . . f e e d f d d f d d c 
            f e f . . f e e d d d d e e d c 
            f e f . . f f e e d c d d d f . 
            f e f . f e e e e e d f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f f e e e e e e f f . . . . 
            . f f d e e e e e f f e f . . . 
            f d b d d f e c d d b d d f . . 
            f d c d f f f d d d c d d f . . 
            f f f f . . f f f f f f f . . . 
            `)
    } else if (Hops_and_Paw.x % 2 == 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d e . 
            . . . f d d e e d f d d f d e . 
            . . . c d b e e d d d d e e d e 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `)
    } else {
        Hops_and_Paw.setImage(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `)
    }
    if ((Hops_and_Paw.isHittingTile(CollisionDirection.Left) || Hops_and_Paw.isHittingTile(CollisionDirection.Right)) && Hops_and_Paw.vy >= 0) {
        Hops_and_Paw.vy = 0
        Hops_and_Paw.ay = 0
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d d d d f . . 
            . . . f d d e e d f f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d f f c 
            . . . . f e e e f f f e f d d f 
            . . . . f f f f f e e e f d d f 
            . f f . f f e e e e e f f f f f 
            . f e . f f e e e f f e f f f . 
            . f e f f f b b f f e f d b f . 
            . f e f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `)
    } else {
        Hops_and_Paw.ay = 350
    }
    if (Hops_and_Paw.vx < 0 || Hops_and_Paw.isHittingTile(CollisionDirection.Left)) {
        Hops_and_Paw.image.flipX()
        Hops_and_Paw.setImage(Hops_and_Paw.image)
    }
})
game.onUpdate(function () {
    if (BossAlive) {
        if (Hops_and_Paw.x + 30 < My_boss.x) {
            My_boss.vx = -20
            My_boss.setImage(img`
                ....................
                ........44444.......
                .......4444444......
                .....444d444d44.....
                .....dddddddddd.....
                ....daaaddaaadd.....
                ....5ecc55ccc55.....
                ....dbbbddbbbdd.....
                ....ddddddddddd.....
                .2eeeeee2dddddd.....
                ...dddd22dddddd.....
                ....ddddddddddd.....
                .....dddddddddd.....
                ....cc7777777cc.....
                ...ccc777777cccc....
                ...cc7777777cccc....
                ...d77777777dddd....
                ...777777777dddd7...
                ...777777777dddd7...
                ...777777777dddd7...
                ...666666666dddd6...
                ...6666666666dd66...
                ....666666666666....
                .....6666666666.....
                .....dddd..dddd.....
                .....dddd..dddd.....
                .....dddd..dddd.....
                .....8888..8888.....
                ....88888.88888.....
                ....................
                `)
        } else if (Hops_and_Paw.x - 30 > My_boss.x) {
            My_boss.vx = 20
            My_boss.setImage(img`
                ....................
                .......44444........
                ......4444444.......
                .....44d444d444.....
                .....dddddddddd.....
                .....ddaaaddaaad....
                .....55ccc55cce5....
                .....ddbbbddbbbd....
                .....ddddddddddd....
                .....dddddd2eeeeee2.
                .....dddddd22dddd...
                .....ddddddddddd....
                .....dddddddddd.....
                .....cc7777777cc....
                ....cccc777777ccc...
                ....cccc7777777cc...
                ....dddd77777777d...
                ...7dddd777777777...
                ...7dddd777777777...
                ...7dddd777777777...
                ...6dddd666666666...
                ...66dd6666666666...
                ....666666666666....
                .....6666666666.....
                .....dddd..dddd.....
                .....dddd..dddd.....
                .....dddd..dddd.....
                .....8888..8888.....
                .....88888.88888....
                ....................
                `)
        } else {
            My_boss.vx = 0
        }
    }
})
