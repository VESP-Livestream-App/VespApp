import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {Camera, useCameraDevice, useCameraPermission} from 'react-native-vision-camera';

const CameraScreen = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const [isActive, setIsActive] = useState(true);
  const [cameraPosition, setCameraPosition] = useState('back');
  
  const device = useCameraDevice(cameraPosition === 'back' ? 'back' : 'front');

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    if (!hasPermission) {
      const permission = await requestPermission();
      if (!permission) {
        console.warn('Camera permission not granted');
      }
    }
  };

  const toggleCamera = () => {
    setCameraPosition(prev => {
      const newPosition = prev === 'back' ? 'front' : 'back';
      return newPosition;
    });
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.permissionText}>
          Camera permission is required to use this app
        </Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.loadingText}>Loading camera...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Camera
        style={styles.camera}
        device={device}
        isActive={isActive}
        orientation="portrait"
      />
      
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.title}>VespApp</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.captureButton}
            onPress={() => {
              // TODO: Implement photo capture
              console.log('Capture photo pressed');
            }}>
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.switchButton}
            onPress={toggleCamera}>
            <Text style={styles.switchButtonText}>Flip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  footer: {
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  captureButtonInner: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#ffffff',
  },
  switchButton: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  switchButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  permissionText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 40,
  },
  permissionButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  permissionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 20,
  },
});

export default CameraScreen;

