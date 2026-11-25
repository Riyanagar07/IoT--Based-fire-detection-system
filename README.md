# IoT-Based Early Fire Detection and Smart Alert System

## Overview

The IoT-Based Early Fire Detection and Smart Alert System is an intelligent fire safety solution that combines IoT sensors and AI-powered computer vision for early fire hazard detection.

The system continuously monitors environmental conditions using gas, temperature, and flame sensors connected to an ESP32 microcontroller. In parallel, a camera feed is analyzed using OpenCV and YOLOv8 for real-time fire detection. The collected data is transmitted to a cloud backend and visualized through a web dashboard for remote monitoring and alert management.

---

## Features

* Real-time fire hazard monitoring
* Gas, temperature, and flame detection
* ESP32-based IoT communication
* AI-powered fire detection using YOLOv8
* Image processing with OpenCV
* Cloud data storage and synchronization
* Web dashboard visualization
* Real-time alert generation
* Historical sensor data tracking

---

## Technology Stack

### Hardware

* ESP32
* MQ2 Gas Sensor
* DHT22 Temperature Sensor
* Flame Sensor
* Buzzer
* LEDs

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* Flask API
* Firebase

### AI & Computer Vision

* OpenCV
* YOLOv8
* Python

---

## System Workflow

1. Sensors continuously monitor environmental conditions.
2. ESP32 collects and transmits sensor data through Wi-Fi.
3. OpenCV processes camera frames in real time.
4. YOLOv8 detects fire from image streams.
5. Backend receives and stores sensor and detection data.
6. Dashboard displays live readings and alerts.
7. Warning notifications are generated when fire risks are detected.

---

## SDG Alignment

This project supports:

### SDG 11 – Sustainable Cities and Communities

By improving fire safety through real-time monitoring and early hazard detection using IoT and AI technologies.

---

## Future Enhancements

* Mobile application integration
* SMS and Email alerts
* Cloud analytics
* Predictive fire risk assessment
* Industrial-scale deployment
