input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
radio.setGroup(99)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
    radio.sendValue("z", input.acceleration(Dimension.Z))
    radio.sendValue("d", input.compassHeading())
})
