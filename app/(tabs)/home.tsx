import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';
import { Pressable, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, Surface } from 'react-native-paper';
import Ionicon from '@expo/vector-icons/Ionicons';



export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Scan Section */}
      <Button
        style={styles.scan}
        icon={() => <Ionicon name='scan-outline' size={28} color={'#61AF2B'} />}
        onPress={() => alert("Click")}>

        <Text variant='bodyMedium' style={styles.scanText}>
          Scan and identify the plant
        </Text>
      </Button>

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
          >
            <Surface elevation={0}>
              <View style={{
                backgroundColor:'#F8F8F8',
                width: 180,
                height: 130,
                padding: 12,
                borderRadius:12,
                justifyContent:'center'
              }} >
                <Text variant='bodySmall' style={{
                  fontFamily:'DM-Sans',
                  color:'#61AF2B'
                }} >
                  Spring
                </Text>
                <Text variant='bodyLarge' style={{
                  fontFamily:'DM-Sans',
                  fontWeight:'bold'
                }} >
                  Wheat
                </Text>
              </View>

              {/* <Image source={imagePath} /> */}
            </Surface>
          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#FFF'
  },
  scan: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    // alignItems:'center',
    backgroundColor: '#EEF7E8'
  },
  scanText: {
    color: '#61AF2B',
    fontFamily: 'DM-Sans',
    fontWeight: 'bold',
    paddingLeft: 16
  },
  recommend: {
    paddingTop: 24,
    paddingBottom: 16
  },
  titleRecommend: {
    fontFamily: 'DM-Sans',
    fontSize: 20
  }
});
