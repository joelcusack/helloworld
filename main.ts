basic.showNumber(7)
basic.forever(function () {
    basic.showNumber(8)
    basic.showLeds(`
        # . . . #
        . # . # .
        # # # # #
        . # . # .
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
