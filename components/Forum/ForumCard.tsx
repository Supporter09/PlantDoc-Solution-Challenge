import { StyleSheet, Pressable } from 'react-native';
import { Text, Surface, Avatar } from 'react-native-paper';
import { Image } from 'react-native';
import { useNavigation } from 'expo-router';

let imagePath = require('@/assets/images/props1.png')

export default function ForumCard() {
    const navigation = useNavigation()
    return (
        <Surface elevation={1} style={styles.cardContainer} >
            <Pressable onPress={() => navigation.navigate('post')}>
                <Image source={imagePath} style={styles.cardImage} />

                <Surface elevation={0} style={{
                    justifyContent: 'center',
                    padding: 16,
                    backgroundColor: '#FFF',
                    borderRadius: 10,
                }} >
                    <Text variant='bodyLarge' style={{
                        color: '#36455A',
                        fontWeight: 'bold'
                    }} >
                        My plant are not growing. I don’t know what happen to it. Please help me.
                    </Text>

                    <Surface elevation={0} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        paddingTop: 16
                    }}>
                        <Surface elevation={0} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <Avatar.Image size={32} source={imagePath} />

                            <Surface elevation={0}>
                                <Text variant='bodyMedium' style={{
                                    fontWeight: 'bold',
                                    color: '#36455A'
                                }}>
                                    Duc Tu
                                </Text>
                                <Text variant='bodySmall' style={{
                                    fontWeight: 'bold',
                                    color: '#A1A8B9'
                                }}>
                                    2019 . 01 . 01
                                </Text>
                            </Surface>
                        </Surface>

                        <Surface elevation={0} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 8
                        }}>
                            <Text variant='bodySmall' style={{
                                fontWeight: 'bold',
                                color: '#A1A8B9'
                            }}>
                                #wither
                            </Text>
                            <Text variant='bodySmall' style={{
                                fontWeight: 'bold',
                                color: '#A1A8B9'
                            }}>
                                #cactus
                            </Text>
                        </Surface>
                    </Surface>
                </Surface >
            </Pressable>
        </Surface >
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 24
    },
    cardImage: {
        width: '100%',
        aspectRatio: '16/9',
        height: 'auto',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
});
