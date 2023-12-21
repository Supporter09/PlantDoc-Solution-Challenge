import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Pressable, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, Divider, Surface } from 'react-native-paper';
import Ionicon from '@expo/vector-icons/Ionicons';

export default function AlertCard({
    icon ='leaf-outline',
    title = 'Height',
    desc = 'Small',
    mainColor = '#4B8364',
    bgColor = '#EEF7E8'
}) {

    const styles = StyleSheet.create({
        data_card: {
            flexDirection: 'row',
            gap: 16,
            alignItems: 'center'
        },
        iconContainer: {
            justifyContent: 'center',
            aspectRatio: '1/1',
            height: 64,
            width: 'auto',
            backgroundColor: bgColor,
            alignItems: 'center',
            borderRadius: 12
        },
        card_text_title: {
            fontWeight: 'bold',
            color: mainColor,
            fontSize: 12
        },
        card_text: {
            fontSize: 16,
            fontWeight: 'bold',
            paddingTop: 4
        }
    });

    return (
        <Surface elevation={0} style={styles.data_card}>
            <Surface elevation={0} style={styles.iconContainer} >
                <Ionicon name={icon} color={mainColor} size={24} />
            </Surface>

            <Surface elevation={0} >
                <Text variant='bodyMedium' style={styles.card_text_title}>
                    {title}
                </Text>
                <Text variant='bodyMedium' style={styles.card_text}>
                    {desc}
                </Text>
            </Surface>
        </Surface>
    );
}


