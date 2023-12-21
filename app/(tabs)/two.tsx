
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
// import { Camera } from 'react-native-vision-camera'
import { useEffect, useRef, useMemo } from 'react';
// const { hasPermission, requestPermission } = useCameraPermission();
// const { hasPermission, requestPermission } = useMicrophonePermission();

export default function CameraScreen() {
  // const camera = useRef<Camera>(null)
  // const hasMicrophonePermission = useMemo(() => Camera.getMicrophonePermissionStatus() === 'granted', [])

  return (
    <View>
      <Text>
        Camera Not Found
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
});
