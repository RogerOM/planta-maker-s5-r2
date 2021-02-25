basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("O2")
    } else {
        basic.showString("CO2")
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature())
        basic.showString("grados")
    }
})
