input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
    servos.P0.stop()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P0, 20)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 160)
        basic.pause(1000)
    }
    servos.P0.stop()
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        pins.servoWritePin(AnalogPin.P14, 20)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P14, 160)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P14, 90)
})
basic.showIcon(IconNames.SmallDiamond)
