import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Pressable } from 'react-native';
import { Text, Surface, Divider } from 'react-native-paper';

import TrackerCard from './TrackerCard';

export default function TrackerSection() {

    return (
        <View style={styles.tracker}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }} >
                <Text variant='titleMedium' style={styles.titleRecommend}>
                    Your Trackers
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
                <Surface elevation={0} style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 24
                }} >
                    <TrackerCard numOfPlants={2} name='Rice Field' mainColor='#4B8364' bgColor='#EEF7E8' />
                    <TrackerCard numOfPlants={1} name='Corn Field' mainColor='#5676DC' bgColor='#E6EAFA' />
                </Surface>

                <Surface elevation={0} style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 24
                }} >
                    <TrackerCard numOfPlants={2} name='Carrot Field' mainColor='#E6B44C' bgColor='#FCF1E3' />
                    <TrackerCard numOfPlants={8} name='Backyard' mainColor='#A559D9' bgColor='#F8E8F8' />
                </Surface>
            </View>

            <Divider style={{ backgroundColor: '#D9D9D9' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    titleRecommend: {
        fontFamily: 'DM-Sans',
        fontSize: 20
    },
    tracker: {
        // paddingTop: 24
    },
    iconContainer:{
        justifyContent: 'center',
        aspectRatio: '1/1',
        height: 52,
        width: 'auto',
        backgroundColor: '#EEF7E8',
        alignItems: 'center',
        borderRadius: 12
    }

});
