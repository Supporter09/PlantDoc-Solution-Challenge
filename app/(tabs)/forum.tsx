import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Surface, Avatar } from 'react-native-paper';
import { Link } from 'expo-router';

let imagePath = require('@/assets/images/props1.png')

import ForumCard from '@/components/Forum/ForumCard';

export default function Saved() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
      >
        <ForumCard />
        <ForumCard />
        <ForumCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  cardContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    aspectRatio: '16/9',
    height: 'auto',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  }
});
