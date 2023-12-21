import { StyleSheet } from 'react-native';

import { Text, Surface } from 'react-native-paper';
import Ionicon from '@expo/vector-icons/Ionicons';

export default function TrackerCard({ numOfPlants = 2, name = 'Rice Field', mainColor = '#4B8364', bgColor = '#EEF7E8' }) {
    const styles = StyleSheet.create({
        iconContainer: {
            justifyContent: 'center',
            aspectRatio: '1/1',
            height: 52,
            width: 'auto',
            backgroundColor: bgColor,
            alignItems: 'center',
            borderRadius: 12
        },
        textContainer: {
            paddingLeft: 14,
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        desc: {
        color: '#628093',
        fontSize: 12
    },
        title: {
        fontWeight: 'bold'
}
    });

return (
    <Surface elevation={0} style={{
        width: 140,
        flexDirection: 'row',
        alignItems: 'center',
    }} >
        <Surface elevation={0} style={styles.iconContainer} >
            <Ionicon name='leaf-outline' color={mainColor} size={24} />
        </Surface>

        <Surface elevation={0} style={styles.textContainer} >
            <Text variant='bodyMedium' style={styles.desc} >
                {numOfPlants + ' Plants'}
            </Text>
            <Text variant='bodyLarge' style={styles.title} >
                {name}
            </Text>
        </Surface>
    </Surface>
);
}

