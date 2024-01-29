import { Text, View } from '@/components/Themed';
import { Camera } from 'expo-camera';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios';



const CameraScreen: React.FC = () => {
  const [permission, setPermission] = useState<boolean | null>(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<Camera>(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  // For navigation
  const navigation = useNavigation();

  useEffect(() => {
    return () => {
      // Clean up resources when the component is unmounted
      // This will stop the camera and release its resources
      if (cameraRef.current) {
        cameraRef.current.pausePreview();
      }
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Function to run when the screen comes into focus
      // Get permission for camera and media writing
      const setupCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setPermission(status === 'granted');

        const { status: mediaLibraryStatus } = await MediaLibrary.requestPermissionsAsync();
        setHasMediaLibraryPermission(mediaLibraryStatus === 'granted');
      };

      setupCamera();

      // Function to run when the screen is unfocused => Pause the camera
      return () => {
        if (cameraRef.current) {
          cameraRef.current.pausePreview();
        }
      };
    }, [])
  );

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setCapturedPhoto(uri);

      // Save the photo to the device's gallery
      savePhotoToDeviceGallery(uri);
    }
  };

  const savePhotoToDeviceGallery = async (photoUri) => {
    if (Platform.OS === 'ios') {
      await MediaLibrary.saveToLibraryAsync(photoUri);
    } else {
      // On Android, MediaLibrary.saveToLibraryAsync is deprecated
      // Use MediaLibrary.createAssetAsync instead
      const asset = await MediaLibrary.createAssetAsync(photoUri);
      await MediaLibrary.createAlbumAsync('CameraApp', asset, false);
    }
  };

  const handleUploadPhoto = async () => {
    if (capturedPhoto) {
      try {
        // Post image to api
        // Structure: {file: <image>}
        let formData  = new FormData();
        formData.append('data', JSON.stringify({ key: 'value' }));
        const photoUriParts = capturedPhoto.split('.');
        const fileExtension = photoUriParts[photoUriParts.length - 1];
        formData.append('file', {
          uri: capturedPhoto,
          name: `photo.${fileExtension}`,
          type: `image/${fileExtension}`,
        });

        const response = await axios.post('http://192.168.1.6:8000/predict', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // console.log('Upload Response:', response.data);
        
        // Navigate to result page with returned data
        navigation.navigate('result', { data: response.data });
      } catch (error) {
        console.error('Error uploading photo:', error);
      }
    }
  };

  if (permission === null) {
    return <View />;
  }

  if (permission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef}>
        <View
          style={styles.container}
        >
          <TouchableOpacity onPress={handleTakePhoto} style={{ marginBottom: 20 }}>
            <View
              style={styles.buttonContainer}
            >
              <View
                style={styles.button}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedPhoto && (
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: capturedPhoto }} style={{ width: 200, height: 200, marginTop: 20 }} />
          <TouchableOpacity onPress={handleUploadPhoto} style={{ marginTop: 20 }}>
            <Text>Upload Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 40,
    width: 40,
    backgroundColor: 'white',
  },
  text: {

  }
});

export default CameraScreen;