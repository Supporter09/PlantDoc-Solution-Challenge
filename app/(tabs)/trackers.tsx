import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, Divider, Surface } from 'react-native-paper';
import Ionicon from '@expo/vector-icons/Ionicons';

import ResultPage from '@/components/Scan/ResultPage';

export default function Trackers() {

  return (
    <SafeAreaView style={styles.container}>
      <ResultPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
    backgroundColor: '#FFF'
  },
});
