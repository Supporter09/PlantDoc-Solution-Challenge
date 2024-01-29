import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, Divider, Surface } from 'react-native-paper';
import Ionicon from '@expo/vector-icons/Ionicons';
import RecommendCard from '@/components/Home/RecommendCard';
import TrackerSection from '@/components/Home/TrackerSection'
import AlertCard from '@/components/Home/AlertCard';
import { Link } from 'expo-router';
import { useEffect } from 'react';

let imagePath = require('@/assets/images/carrot.png')

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* Scan Section */}
        <Link href={'/camera'} asChild>
          <Button
            style={styles.scan}
            contentStyle={{
              paddingVertical: 8
            }}
            icon={() => <Ionicon name='scan-outline' size={28} color={'#61AF2B'} />}
          >

            <Text variant='bodyMedium' style={styles.scanText}>
              Scan and identify the plant
            </Text>
          </Button>
        </Link>

        {/* Recommend Plants */}
        <View style={styles.recommend}>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }} >
            <Text variant='titleMedium' style={styles.titleRecommend}>
              Recommend plants
            </Text>
            <Pressable onPress={() => alert('Click')} >
              <Text variant='bodyMedium' style={{
                color: '#61AF2B',
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
                textDecorationColor: "#61AF2B",
              }} >
                View all
              </Text>
            </Pressable>
          </View>

          <View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <RecommendCard />
              <RecommendCard plant='Carrot' img_uri={imagePath} />
              <RecommendCard />
            </ScrollView>
          </View>

          <Divider style={{ backgroundColor: '#D9D9D9' }} />
        </View>

        {/* Trackers */}
        <TrackerSection />

        {/* Alerts */}
        <View style={styles.recommend}>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }} >
            <Text variant='titleMedium' style={styles.titleRecommend}>
              Alerts for today
            </Text>
            <Pressable onPress={() => alert('Click')} >
              <Text variant='bodyMedium' style={{
                color: '#61AF2B',
                textDecorationLine: "underline",
                textDecorationStyle: "solid",
                textDecorationColor: "#61AF2B",
              }} >
                View all
              </Text>
            </Pressable>

          </View>

          <Surface elevation={0} style={{
            paddingTop: 24
          }}>
            <AlertCard />
            <AlertCard
              mainColor='#E6B44C'
              bgColor='#FCF1E3'
              title='The temperature of carrot field is not ensure'
              desc='The temperature of carrot field is 2 degree lower than expected'
            />
          </Surface>
          {/* <Divider style={{ backgroundColor: '#D9D9D9' }} /> */}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#FFF'
  },
  scan: {
    // height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    // alignItems:'center',
    backgroundColor: '#EEF7E8'
  },
  scanText: {
    color: '#61AF2B',
    fontWeight: 'bold',
    paddingLeft: 16,
  },
  recommend: {
    paddingVertical: 24
  },
  titleRecommend: {
    fontSize: 20
  },
  iconContainer: {
    justifyContent: 'center',
    aspectRatio: '1/1',
    height: 44,
    width: 'auto',
    backgroundColor: '#EEF7E8',
    alignItems: 'center',
    borderRadius: 12
  },

});
