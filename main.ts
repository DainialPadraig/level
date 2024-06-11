input.onButtonPressed(Button.A, function () {
    if (multiplier == 1) {
        multiplier = 10
        basic.showString("x" + multiplier)
    } else if (multiplier == 10) {
        multiplier = 30
        basic.showString("x" + multiplier)
    } else if (multiplier == 30) {
        multiplier = 45
        basic.showString("x" + multiplier)
    } else {
        basic.showString("x" + multiplier)
    }
})
input.onButtonPressed(Button.AB, function () {
    multiplier = 1
    basic.showString("x" + multiplier)
})
input.onButtonPressed(Button.B, function () {
    if (multiplier == 45) {
        multiplier = 30
        basic.showString("x" + multiplier)
    } else if (multiplier == 30) {
        multiplier = 10
        basic.showString("x" + multiplier)
    } else if (multiplier == 10) {
        multiplier = 1
        basic.showString("x" + multiplier)
    } else {
        basic.showString("x" + multiplier)
    }
})
let display_y = 0
let display_x = 0
let y_value = 0
let x_value = 0
let multiplier = 0
multiplier = 1
basic.forever(function () {
    x_value = Math.round(input.rotation(Rotation.Roll) / multiplier)
    y_value = Math.round(input.rotation(Rotation.Pitch) / multiplier)
    display_x = Math.map(x_value, 0 - 2 * multiplier, 2 * multiplier, 0, 4)
    display_y = Math.map(y_value, 0 - 2 * multiplier, 2 * multiplier, 0, 4)
    basic.clearScreen()
    led.toggle(display_x, display_y)
})
