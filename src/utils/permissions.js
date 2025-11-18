import {Platform} from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

const CAMERA_PERMISSION =
  Platform.OS === 'ios'
    ? PERMISSIONS.IOS.CAMERA
    : PERMISSIONS.ANDROID.CAMERA;

/**
 * Check if camera permission is granted
 * @returns {Promise<boolean>} True if permission is granted
 */
export const checkPermission = async () => {
  try {
    const result = await check(CAMERA_PERMISSION);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.error('Error checking camera permission:', error);
    return false;
  }
};

/**
 * Request camera permission
 * @returns {Promise<boolean>} True if permission is granted
 */
export const requestPermission = async () => {
  try {
    const result = await request(CAMERA_PERMISSION);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.error('Error requesting camera permission:', error);
    return false;
  }
};

