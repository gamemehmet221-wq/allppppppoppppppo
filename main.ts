input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showLeds(`
        . . # # #
        . . # # .
        . # . . .
        . . # . #
        . . . # .
        `)
    basic.showString("Merhaba" + "isim " + "isim" + "soy ad")
    basic.clearScreen()
})
