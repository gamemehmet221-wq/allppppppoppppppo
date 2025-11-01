def on_gesture_shake():
    basic.show_leds("""
        . . # # #
        . . # # .
        . # . . .
        . . # . #
        . . . # .
        """)
    basic.show_string("Merhaba" + "isim " + "isim" + "soy ad")
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
