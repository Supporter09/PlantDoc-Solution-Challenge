import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import { Pressable, ScrollView, Image } from 'react-native';
import { Text, Button, Divider, Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Ionicon from '@expo/vector-icons/Ionicons';

import DataCard from './DataCard'
import Description from './Description'

let imgPath = require('@/assets/images/infected_rice.png')

export default function ResultPage({ data, uri }) {

  const navigation = useNavigation();
  const value = data[0];
  console.log('uri', value['uri']);

  // Back to homepage
  const goBackHomepage = () => {
    navigation.navigate('home');
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image source={{ uri: value['uri'] ? value['uri'] : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FOryza_sativa&psig=AOvVaw2m8moWreOWZyEw2UYbO2S0&ust=1708265165491000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODQgLHFsoQDFQAAAAAdAAAAABAI' }} style={{
        aspectRatio: '4/3',
        width: '100%',
        height: 'auto',
        position: 'relative'
      }} />

      <Surface elevation={0} style={styles.diagnose_container} >

        <Surface elevation={0} style={styles.status_container}>
          <Ionicon name='checkmark-circle-outline' color={'#61AF2B'} size={28} />
          <Text variant='bodyMedium' style={styles.status_text}>
            Hurray, finish scanning
          </Text>
        </Surface>

        <Text variant='headlineMedium' style={styles.plant_title}>
          {value['class'] ? value['class'].split("___")[0].replaceAll("_"," ") : 'Rice ( Oryza sativa )'}
        </Text>

        <Surface elevation={0} style={styles.tags_container}>
          <View style={styles.tag}>
            <Text variant='bodySmall' style={styles.tag_text}>
              {'Status: '}
            </Text>
            <Text variant='bodySmall' style={styles.tag_status_text}>
              {value['class'] ? value['class'].split("___")[1].replaceAll("_"," ") : 'Healthy'}
            </Text>
          </View>

          {/* <View style={styles.tag}>
            <Text variant='bodySmall' style={styles.tag_text}>
              Papaveraceae
            </Text>
          </View> */}
        </Surface>

        <Text variant='headlineSmall' style={styles.desc_title}>
          Description
        </Text>

        <Text variant='bodyMedium' style={styles.origin} >
          From Wikipedia, the free encyclopedia
        </Text>

        <Description description={"Rice is the seed of the grass species Oryza sativa (Asian rice) or, much less commonly, O. glaberrima (African rice). As a cereal grain, domesticated rice is the most widely consumed staple food for over half of the world's human population..."} />

        <Divider style={{ backgroundColor: '#D9D9D9' }} />

        <Surface elevation={0} style={styles.data_container}>
          <Surface elevation={0} style={styles.data_row}>
            <DataCard />
            <DataCard icon='water-outline' title='Water' desc='333ml' mainColor='#7C95E4' bgColor='#E6EAFA' />
          </Surface>
          <Surface elevation={0} style={styles.data_row}>
            <DataCard icon='sunny-outline' title='Light' desc='Normal' mainColor='#EAC069' bgColor='#FCF1E3' />
            <DataCard icon='thermometer-outline' title='Humidity' desc='56%' mainColor='#C390E6' bgColor='#F8E8F8' />
          </Surface>
        </Surface>

        <Button mode='contained' style={styles.button} onPress={() => alert('Click')} >
          See possible disease
        </Button>
        <Button mode='outlined' style={styles.buttonHome} onPress={goBackHomepage} >
          Back to homepage
        </Button>
      </Surface>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    backgroundColor: '#FFF'
  },
  diagnose_container: {
    paddingHorizontal: 16,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    backgroundColor: '#fff',
    position: 'relative',
    bottom: 20
  },
  status_container: {
    paddingTop: 24,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  status_text: {
    color: '#61AF2B'
  },
  plant_title: {
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 16
  },
  tags_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 20
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#F0F3F6',
    borderRadius: 6
  },
  tag_text: {
    color: '#696969'
  },
  tag_status_text: {
    color: '#5EC815'
  },
  desc_title: {
    fontWeight: 'bold',
  },
  origin: {
    fontWeight: 'bold',
    color: '#8C8C8C',
    paddingBottom: 8
  },
  desc: {
    color: '#515151',
    paddingBottom: 24,
  },
  data_container: {
    paddingVertical: 24,
    flexDirection: 'column',
    gap: 16
  },
  data_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 10,
    paddingVertical: 8,
    backgroundColor: '#61AF2B',
    shadowColor: 'rgba(154, 207, 117, 0.25)',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 12,
  },
  buttonHome: {
    borderRadius: 10,
    paddingVertical: 8,
    borderColor: '#61AF2B',
    elevation: 5
  }
});
