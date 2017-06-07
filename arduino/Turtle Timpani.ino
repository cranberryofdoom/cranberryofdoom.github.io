#include <Keyboard.h>

int pinA5 = A5;
int pinA4 = A4;
int pinA3 = A3;
int pinA2 = A2;
int pinA1 = A1;
int pinA0 = A0;

void setup() {
  Serial.begin(57600);
  pinMode(pinA5, INPUT);
  pinMode(pinA4, INPUT);
  pinMode(pinA3, INPUT);
  pinMode(pinA2, INPUT);
  pinMode(pinA1, INPUT);
  pinMode(pinA0, INPUT);
  Keyboard.begin();
}

void loop() {
  float valueA5;
  float valueA4;
  float valueA3;
  float valueA2;
  float valueA1;
  float valueA0;
  valueA5 = analogRead(pinA5);
  valueA4 = analogRead(pinA4);
  valueA3 = analogRead(pinA3);
  valueA2 = analogRead(pinA2);
  valueA1 = analogRead(pinA1);
  valueA0 = analogRead(pinA0);
  boolean isA5Pressed = valueA5 > 100;
  boolean isA4Pressed = valueA4 > 100;
  boolean isA3Pressed = valueA3 > 100;
  boolean isA2Pressed = valueA2 > 100;
  boolean isA1Pressed = valueA1 > 100;
  boolean isA0Pressed = valueA0 > 100;

  if (isA5Pressed) {
    Keyboard.press(49);
  }
  if (isA4Pressed) {
    Keyboard.press(50);
  }
  if (isA3Pressed) {
    Keyboard.press(51);
  }
  if (isA2Pressed) {
    Keyboard.press(52);
  }
  if (isA1Pressed) {
    Keyboard.press(53);
  }
  if (isA0Pressed) {
    Keyboard.press(54);
  }
  if (!isA5Pressed && !isA4Pressed && !isA3Pressed && !isA2Pressed && !isA1Pressed && !isA0Pressed) {
    Keyboard.releaseAll();
  }
}
