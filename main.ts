input.onButtonPressed(Button.A, function () {
    Frog.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Frog.change(LedSpriteProperty.Y, 1)
})
let Obstacle = 0
let ticks = 0
let Frog: game.LedSprite = null
let index = 0
let obstacles: game.LedSprite[] = []
Frog = game.createSprite(0, 2)
let Level = 0
game.setScore(0)
Frog.set(LedSpriteProperty.Blink, 300)
for (let index = 0; index <= 3; index++) {
    basic.showNumber(3 - index)
}
basic.showString("L1")
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
        game.addScore(1)
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        Obstacle = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 == Obstacle) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == Frog.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) != Frog.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(500)
    if (game.score() == 3) {
        Level = 2
        basic.showString("L2")
    }
    if (game.score() == 6) {
        Level = 3
        basic.showString("L3")
    }
})
