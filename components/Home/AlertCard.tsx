import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Pressable, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, Divider, Surface } from 'react-native-paper';
import Ionicon from '@expo/vector-icons/Ionicons';

export default function AlertCard({
    title = 'The rice field humidity is too high. Please check it out.',
    desc = 'The smart box record a jump of 30% of humid. Please check it out.',
    mainColor = '#4B8364',
    bgColor = '#EEF7E8'
}) {

    const styles = StyleSheet.create({
        iconContainer: {
            justifyContent: 'center',
            aspectRatio: '1/1',
            height: 44,
            width: 'auto',
            backgroundColor: bgColor,
            alignItems: 'center',
            borderRadius: 12
        },

    });

    return (
        <Surface elevation={0} style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 16
        }} >
            <Surface elevation={0} style={{
                flexDirection: 'row',
                alignItems: 'center'
            }} >
                <Surface elevation={0} style={styles.iconContainer} >
                    <Ionicon name='leaf-outline' color={mainColor} size={24} />
                </Surface>

                <Surface elevation={0} style={{
                    paddingLeft: 16
                }} >
                    <Text variant='bodyMedium' style={{
                    fontWeight: 'bold'
                    }}>
                    {title.slice(0, 38) + '...'}
                </Text>
                <Text variant='bodySmall' style={{
                        
                    }} >
                {desc.slice(0, 38) + '...'}
            </Text>
        </Surface>

            </Surface >

        <Ionicon name='chevron-forward-outline' color={'#033858'} size={24} />
        </Surface >
    );
}


