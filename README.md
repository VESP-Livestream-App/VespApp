# VespApp

A React Native mobile application for real-time object detection using YOLO11. This app supports both iOS and Android platforms.

## Features

- 📸 Camera access and live preview
- 🔄 Front/back camera switching
- 🔐 Automatic permission handling
- 📱 Cross-platform support (iOS & Android)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** >= 18.x
- **npm** or **yarn**
- **React Native development environment** set up:
  - For iOS: Xcode (macOS only)
  - For Android: Android Studio
- **CocoaPods** (for iOS development)

## Installation

**Note:** If you're setting up from scratch, you'll need to initialize a React Native project first:
```bash
npx react-native init VespApp --version 0.73.2
cd VespApp
# Then copy the src/ folder and App.js, index.js, etc. from this project
```

1. **Navigate to the project directory**:
   ```bash
   cd VespApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **iOS Setup** (macOS only):
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### iOS

```bash
npm run ios
# or
yarn ios
```

This will open the app in the iOS Simulator. For a physical device, open the project in Xcode and run it from there.

### Android

1. Start an Android emulator or connect a physical device with USB debugging enabled.

2. Run:
   ```bash
   npm run android
   # or
   yarn android
   ```

## Project Structure

```
VespApp/
├── android/              # Android native code and configuration
├── ios/                  # iOS native code and configuration
├── src/
│   ├── screens/         # Screen components
│   │   └── CameraScreen.js
│   └── utils/           # Utility functions
│       └── permissions.js
├── App.js               # Main app component with navigation
├── index.js             # App entry point
├── package.json         # Dependencies and scripts
└── README.md
```

## Features Overview

### Camera Screen

The main screen provides:
- **Live camera preview** with permission handling
- **Camera flip button** to switch between front and back cameras
- **Capture button** (placeholder for future photo capture functionality)
- **Modern UI** with overlay controls

## Upcoming Features

- 📷 Photo capture functionality
- 🤖 YOLO11 integration for object detection
- 📊 Object detection visualization
- 💾 Image saving capabilities

## Permissions

The app requires camera permissions to function:

- **iOS**: Camera usage permission is requested automatically
- **Android**: Camera permission is included in AndroidManifest.xml

## Development

### Key Dependencies

- `react-native-vision-camera`: Camera functionality
- `react-native-permissions`: Permission handling
- `@react-navigation/native`: Navigation
- `react-native-screens`: Native screen components

### Troubleshooting

**iOS Build Issues:**
- Ensure CocoaPods are installed: `sudo gem install cocoapods`
- Run `pod install` in the `ios/` directory
- Clean build folder in Xcode (Cmd + Shift + K)

**Android Build Issues:**
- Ensure Android SDK is properly configured
- Check that `ANDROID_HOME` environment variable is set
- Clean build: `cd android && ./gradlew clean`

**Camera Permission Issues:**
- On iOS: Check Info.plist includes `NSCameraUsageDescription`
- On Android: Verify AndroidManifest.xml includes camera permissions

## License

This project is part of CPEN 491 coursework.

## Contributors

- Your name here
