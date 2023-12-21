import { StyleSheet } from 'react-native';

import { Image } from 'react-native';
import { Text, Surface } from 'react-native-paper';

let imagePath = require('@/assets/images/rice.png')

export default function RecommendCard({ season = 'Spring', plant = 'Wheat', img_uri = imagePath }) {

    return (
        <Surface elevation={0} style={styles.cardContainer} >
            <Surface elevation={0} style={{
                justifyContent: 'center'
            }} >
                <Text variant='bodySmall' style={{
                    color: '#61AF2B'
                }} >
                {season}
            </Text>
            <Text variant='bodyLarge' style={{
                fontWeight: 'bold'
                }} >
            {plant}
        </Text>
            </Surface >

        <Image source={img_uri} style={styles.cardImage} />
        </Surface >
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#F8F8F8',
        width: 180,
        height: 130,
        padding: 12,
        borderRadius: 12,
        flexDirection: 'row',
        position: 'relative',
        marginTop: 32,
        marginBottom: 24,
        marginRight: 16
    },
    cardImage: {
        position: 'absolute',
        right: -16,
        top: -20,
        aspectRatio: '1/1',
        width: '100%',
        height: 'auto'
    }
});
