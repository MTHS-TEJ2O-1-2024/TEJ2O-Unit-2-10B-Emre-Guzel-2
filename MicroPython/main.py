"""
Created by: Emre Guzel
Created on: Oct 19 2024
This module is a Micro:bit MicroPython reads the anmount of light 
"""

from microbit import *
import neopixel

# Setting the screen
display.clear()
display.show(Image.HAPPY)
# Loop
while True:
    # Setting my veriblas for the program
    light_Level = int
    display.read_light_level()
    lights = neopixel.NeoPixel(pin16, 3)

    # Making the ligths off when it is smaller than 51
    if light_Level <= 51:
        lights[0] = (0, 0, 0)
        lights[1] = (0, 0, 0)
        lights[2] = (0, 0, 0)
        lights[3] = (0, 0, 0)

# When it is bigger than 52 turns on one LED
    if light_Level > 52:
        lights[0] = (122, 50, 40)

    lights.show()
