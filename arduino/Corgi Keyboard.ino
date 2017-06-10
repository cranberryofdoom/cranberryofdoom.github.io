#include <Keyboard.h>

int fingerPinA5 = A5;
int fingerPinA4 = A4;
int fingerPinA3 = A3;
int fingerPinA2 = A2;

void setup() {
  Serial.begin(57600);
  pinMode(fingerPinA5, INPUT);
  pinMode(fingerPinA4, INPUT);
  pinMode(fingerPinA3, INPUT);
  pinMode(fingerPinA2, INPUT);
  Keyboard.begin();
}

void loop() {
  float valueA5;
  float valueA4;
  float valueA3;
  float valueA2;
  valueA5 = analogRead(fingerPinA5);
  valueA4 = analogRead(fingerPinA4);
  valueA3 = analogRead(fingerPinA3);
  valueA2 = analogRead(fingerPinA2);
  boolean isA5Pressed = valueA5 < 600;
  boolean isA4Pressed = valueA4 < 600;
  boolean isA3Pressed = valueA3 < 600;
  boolean isA2Pressed = valueA2 < 600;
  if (isA5Pressed) {
    Keyboard.press(215);
  }
  if (isA4Pressed) {
    Keyboard.press(217);
  }
  if (isA3Pressed) {
    Keyboard.press(216);
  }
  if (isA2Pressed) {
    Keyboard.press(218);
  }
  if (!isA5Pressed && !isA4Pressed && !isA3Pressed && !isA2Pressed) {
    Keyboard.releaseAll();
  }
}
