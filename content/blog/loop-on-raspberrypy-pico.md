---
external: false
title: 🍓 Raspberry Pi Pico, Turn an LED on and learn how for loops work
description: Learn how to visualise a for loop in action using a Raspberry Pi Pico microcontroller by making an LED blink
date: 2025-11-29
---

![giscus post cover](/images/blog/raspberry_pico_cover_1200*627.jpg)

Have you ever wondered what a for loop actually "looks like" when it's running? With the Raspberry Pi Pico microcontroller, you can literally see your code execute by making an LED blink with each iteration of a loop. It's a fantastic way to understand programming concepts in a tangible, visual way.

## Microprocessors, Microcontrollers, and Raspberry Pi: What's the Difference?

Before we dive into the hands-on part, let's clarify what we're working with:

**Microprocessors** (like the CPU in your laptop) are powerful chips designed to handle complex tasks but require external components like memory, storage, and input/output interfaces to function. Think of them as the brain that needs a whole body to work.

**Microcontrollers** are complete computer systems on a single chip. They include the processor, memory, and input/output interfaces all in one package. They're designed for specific tasks and are perfect for controlling devices, sensors, and LEDs. The Raspberry Pi Pico uses the RP2040 microcontroller.

**Raspberry Pi computers** (like the Pi 5) are full single-board computers that run operating systems like Linux. They're more like tiny desktop computers and are great for complex projects that need an OS.

The **Raspberry Pi Pico** is different from the traditional Raspberry Pi computers - it's a microcontroller board that's perfect for learning embedded programming and controlling hardware directly.

## Setting Up Your Development Environment

### Installing Thonny IDE

Thonny is a beginner-friendly Python IDE that has excellent support for the Raspberry Pi Pico:

1. Download Thonny from [thonny.org](https://thonny.org)
2. Install it on your system
3. Open Thonny after installation

### Connecting Your Pico

To connect your Raspberry Pi Pico to your computer:

1. Hold down the **BOOTSEL button** on your Pico
2. While holding the button, connect the Pico to your computer via USB
3. Release the BOOTSEL button
4. Your Pico should appear as a removable drive called "RPI-RP2"

{% details %}
{% summary %}🔧 Troubleshooting: Pico Not Showing Up on Mac{% /summary %}

If your Raspberry Pi Pico isn't appearing as a device on your Mac, the most common issue is using a **charge-only USB cable** instead of a **data transfer cable**. Many USB cables (especially those that come with phones) are designed only for charging and don't have the data wires needed for communication.

**Solution**: Try a different USB cable, preferably one you know works for data transfer (like the one that came with an external hard drive or a high-quality cable specifically labeled for data transfer).

You can also test this by trying the same cable with another device that requires data transfer - if it doesn't work there either, you've found your culprit!
{% /details %}

## Installing the Required Software

You have two options for setting up MicroPython on your Pico:

### Option 1: Manual Installation

Follow the official guide: [Getting Started with Pico](https://projects.raspberrypi.org/en/projects/getting-started-with-the-pico/3)

### Option 2: Using Thonny (Recommended)

1. With your Pico connected, open Thonny
2. Follow this guide: [Introduction to the Pico with Thonny](https://projects.raspberrypi.org/en/projects/introduction-to-the-pico/2)

Thonny will automatically detect your Pico and offer to install MicroPython for you - much easier!

## Seeing a For Loop in Action: Three Different Modes

Now for the fun part! Let's explore three different ways to visualise a for loop, each revealing something different about how loops execute.

### Mode 1: Constant LED On - The "Busy" Loop

Type this code into Thonny:

```python
from picozero import pico_led
from time import sleep

for _ in range(5):
    pico_led.on()
    sleep(0.5)
    pico_led.off()
```

When you run this code, you'll see the LED stay constantly **ON** for 2.5 seconds (5 × 0.5), then turn off. This happens because each iteration turns the LED on, waits, then immediately turns it off before starting the next iteration. The LED appears constantly on because it's being turned on again immediately after being turned off.

You can find this code in my [Raspberry Pi playground repository](https://github.com/safeamiiir/raspberry_playground/blob/main/pico/my_constant_on_loop.py).

**What this teaches us:** The loop executes so quickly between iterations that there's no visible gap. You can see when the loop **ends** because the LED finally stays off.

{% details %}
{% summary %}💡 Copy-Paste Analogy for Mode 1{% /summary %}

Think of it this way: the for loop is essentially **copying and pasting** the same code block 5 times. It's as if you wrote:

```python
# First iteration
pico_led.on()
sleep(0.5)
pico_led.off()

# Second iteration
pico_led.on()
sleep(0.5)
pico_led.off()

# Third iteration
pico_led.on()
sleep(0.5)
pico_led.off()

# Fourth iteration
pico_led.on()
sleep(0.5)
pico_led.off()

# Fifth iteration
pico_led.on()
sleep(0.5)
pico_led.off()

# Loop ends - no more code to execute
```

Notice how there's no pause between `pico_led.off()` and the next `pico_led.on()` - that's why the LED appears constantly on!
{% /details %}

### Mode 2: Constant LED Off with Quick Blinks - Hardware Constraints Revealed

Try this code:

```python
from picozero import pico_led
from time import sleep

for _ in range(5):
    pico_led.on()
    pico_led.off()
    sleep(0.5)
```

This time you'll see the LED stay constantly **OFF** for 2.5 seconds (5 × 0.5) with **very quick blinks** between each iteration. These quick blinks reveal something fascinating: the moment when one iteration ends and the next begins!

You can find this code in my [Raspberry Pi playground repository](https://github.com/safeamiiir/raspberry_playground/blob/main/pico/my_almost_no_blink_loop.py).

**What this teaches us:** Even though the LED is turned on then immediately off, you can still see brief flashes. This is a hardware constraint - the LED can't respond instantaneously. These blinks show you the exact moments when the loop transitions between iterations.

{% details %}
{% summary %}💡 Copy-Paste Analogy for Mode 2{% /summary %}

Think of it this way: the for loop is essentially **copying and pasting** the same code block 5 times. It's as if you wrote:

```python
# First iteration
pico_led.on()
pico_led.off()
sleep(0.5)

# Second iteration
pico_led.on()
pico_led.off()
sleep(0.5)

# Third iteration
pico_led.on()
pico_led.off()
sleep(0.5)

# Fourth iteration
pico_led.on()
pico_led.off()
sleep(0.5)

# Fifth iteration
pico_led.on()
pico_led.off()
sleep(0.5)

# Loop ends - no more code to execute
```

The quick blinks you see are the brief moments when `pico_led.on()` executes before immediately being turned off!
{% /details %}

### Mode 3: Clear Blinking Pattern - The Perfect Visualisation

For the clearest demonstration of how loops work, use this version that includes proper pauses between iterations:

```python
from picozero import pico_led
from time import sleep

for _ in range(5):
    pico_led.on()
    sleep(0.5)
    pico_led.off()
    sleep(0.5)
```

**This is the right way of thinking about loops!** You can find this exact code in my [Raspberry Pi playground repository](https://github.com/safeamiiir/raspberry_playground/blob/main/pico/my_flashing_pico_led.py).

With this version, you'll see:

- LED turns **ON** for 0.5 seconds
- LED turns **OFF** for 0.5 seconds
- This pattern repeats exactly 5 times
- After the 5th blink, the LED stays off permanently

**What this teaches us:** Each complete on-off cycle represents one iteration. You can count the iterations, see the pattern clearly, and observe exactly when the loop ends.

Think of it this way: the for loop is essentially **copying and pasting** the same code block 5 times. It's as if you wrote:

```python
# First iteration
pico_led.on()
sleep(0.5)
pico_led.off()
sleep(0.5)

# Second iteration
pico_led.on()
sleep(0.5)
pico_led.off()
sleep(0.5)

# Third iteration
pico_led.on()
sleep(0.5)
pico_led.off()
sleep(0.5)

# Fourth iteration
pico_led.on()
sleep(0.5)
pico_led.off()
sleep(0.5)

# Fifth iteration
pico_led.on()
sleep(0.5)
pico_led.off()
sleep(0.5)

# Loop ends - no more code to execute
```

## Understanding Loop Behaviour: Lessons from Three Modes

These three different approaches reveal crucial insights about how loops work:

**Mode 1 (Constant On)** shows that loops execute **continuously without gaps** between iterations. The LED stays on because each iteration immediately follows the previous one.

**Mode 2 (Quick Blinks)** reveals the **transition moments** between iterations. Those brief flashes show you exactly when one iteration ends and another begins - something usually invisible in code.

**Mode 3 (Clear Blinking)** provides the **perfect mental model** for understanding loops. Each complete blink cycle represents one iteration, making the abstract concept concrete and countable.

Here's the key insight: **when the loop finishes, there's no hidden wait time or mysterious pause**. The loop behaves exactly as if you had copied and pasted the same code block multiple times in sequence.

Once the 5th iteration completes, the programme immediately moves to the next line of code (which in our case doesn't exist, so the programme ends). There's no automatic delay, no background processing - just clean, predictable execution.

This is fundamentally different from what beginners might expect. The loop doesn't "rest" between finishing and moving on. It's mechanical, precise, and behaves exactly like manually written repetitive code would.
