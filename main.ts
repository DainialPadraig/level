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
let x_value = 0
let multiplier = 0
multiplier = 1
basic.forever(function () {
    x_value = Math.round((input.rotation(Rotation.Roll) + 90) / multiplier)
    basic.showNumber(x_value)
})
