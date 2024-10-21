/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Emre Guzel
 * Created on: Oct 18 2024
 * This program reads the anmount of light 
*/

// Seting the screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Loop
basic.forever(function () {
    // Setting my varibel and my code
    let lightLevel: number = null

    // Setting the neopixel
    lightLevel = input.lightLevel()

    // Added ligths becasue we want to control the NeoPixel LEDs
    let lights = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    if (lightLevel <= 51) {
        lights.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        lights.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        lights.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        lights.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    }
    if (lightLevel > 52) {
        lights.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))    
    }
    if (lightLevel > 104) {
        lights.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    }
    if (lightLevel > 156) {
        lights.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    }
    if(lightLevel >208){
        lights.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
    }
    lights.show()
})
