/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 18 2024
 * This program reads the anmount of light 
*/
// Seting the screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)
// Settign my varibel and my code
let lightLevel: neopixel.Strip = null
// Setting the neopixel
lightLevel = neopixel.create(DigitalPin.P16, 4, NeoPixelMode .RGB)
lightLevel.setPixelColor(0,neopixel.colors(NeoPixelColors.Black))
lightLevel.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
lightLevel.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
lightLevel.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
lightLevel.show()

if (lightLevel <= 51) {

}

