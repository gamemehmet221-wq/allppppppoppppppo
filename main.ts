basic.showIcon(IconNames.Meh)
if (true) {
    basic.showString("arabam yoolda davadan sonra o bi tünsekmi motosikletmi?1")
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # # .
        . . . # .
        `)
} else {
    basic.showIcon(IconNames.Giraffe)
}
radio.setGroup(75)
basic.forever(function () {
	
})
