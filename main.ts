basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
})
