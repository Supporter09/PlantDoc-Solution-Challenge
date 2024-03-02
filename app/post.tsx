import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Surface, Avatar, Button, TextInput } from 'react-native-paper';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

let img_uri = require('@/assets/images/rice_infected.png');
let rice_disease = require('@/assets/images/rice_disease.jpg')

export default function Post() {
    // const route = useRoute();
    // const { data } = route.params; // Access the passed data
    // console.log(data)

    const [text, setText] = React.useState("");
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <Image source={img_uri} style={{
                    height: 300,
                    width: '100%',
                    objectFit: 'fill'
                }} />

                <Surface elevation={0} style={styles.body}>

                    <View style={styles.tags_containter}>
                        <View style={styles.tag}>
                            <Text variant='bodyMedium' style={{
                                fontWeight: 'bold',
                                color: '#2F91EB'
                            }} >
                                DISEASE
                            </Text>
                        </View>
                        <View style={styles.tag}>
                            <Text variant='bodyMedium' style={{
                                fontWeight: 'bold',
                                color: '#2F91EB'
                            }} >
                                DISEASE
                            </Text>
                        </View>

                        <View style={styles.prof_tag}>
                            <Text variant='bodyMedium' style={{
                                fontWeight: 'bold',
                                color: '#44A700'
                            }} >
                                DISEASE
                            </Text>
                            <FontAwesome5 name="check-circle" size={16} color='#44A700' />
                        </View>
                    </View>

                    <Text variant='titleLarge' style={{
                        fontWeight: 'bold',
                        color: '#36455A',
                        paddingTop: 20
                    }}>
                        Rice crop disease topic. I want to find a solution for it.
                    </Text>

                    <View style={styles.user_info}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <Avatar.Image size={40} source={img_uri} />

                            <Surface elevation={0} style={{
                                display: 'flex',
                            }}>
                                <Text variant='bodyLarge' style={{
                                    fontWeight: 'bold',
                                    color: '#36455A'
                                }}>
                                    Duc Tu
                                </Text>
                                <Text variant='bodyMedium' style={{
                                    fontWeight: 'bold',
                                    color: '#A1A8B9'
                                }}>
                                    2019 . 01 . 01
                                </Text>
                            </Surface>
                        </View>

                        <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')} style={{
                            backgroundColor: '#2DDA93'
                        }}>
                            Follow
                        </Button>
                    </View>

                    <Text variant='bodyLarge' style={{
                        color: '#6A6F7D',
                        paddingTop: 24
                    }} >
                        Public parks aside, getting a dose of nature can be a tricky task during an urban escape. But nature should and can fit into that city getaway, according to Kally Ellis, the founder of the London florist company McQueens and the in-house florist for the Maybourne Hotel Group. “Connecting with the natural world wherever you are is a great antidote to jet lag and travel tiredness,” she said. “Plants and flowers can refresh us, boost our energy and help us recalibrate.”
                    </Text>

                    <View style={styles.comment_container}>
                        <Text variant='titleLarge' style={{
                            fontWeight: 'bold',
                            color: '#36455A',
                        }}>
                            Comments - 2
                        </Text>

                        <View style={styles.comment_list}>
                            <Surface elevation={1} style={{
                                backgroundColor: '#FFF',
                                padding: 16,
                                borderRadius: 10
                            }}>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 10
                                }}>
                                    <Avatar.Image size={28} source={rice_disease} />

                                    <Surface elevation={0} style={{
                                        display: 'flex',
                                    }}>
                                        <Text variant='bodyMedium' style={{
                                            fontWeight: 'bold',
                                            color: '#36455A'
                                        }}>
                                            Professor
                                        </Text>
                                        <Text variant='bodySmall' style={{
                                            fontWeight: 'bold',
                                            color: '#A1A8B9'
                                        }}>
                                            1 day ago
                                        </Text>
                                    </Surface>
                                </View>

                                <Text variant='bodyMedium' style={{
                                    color: '#6A6F7D',
                                    paddingTop: 8
                                }}>
                                    Identify the Disease: Proper diagnosis of the disease affecting the rice crop is crucial. Different diseases have different symptoms and require different management strategies.
                                </Text>
                            </Surface>
                            <Surface elevation={1} style={{
                                backgroundColor: '#FFF',
                                padding: 16,
                                borderRadius: 10
                            }}>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 10
                                }}>
                                    <Avatar.Image size={28} source={require('@/assets/images/props1.png')} />

                                    <Surface elevation={0} style={{
                                        display: 'flex',
                                    }}>
                                        <Text variant='bodyMedium' style={{
                                            fontWeight: 'bold',
                                            color: '#36455A'
                                        }}>
                                            Professor Ming
                                        </Text>
                                        <Text variant='bodySmall' style={{
                                            fontWeight: 'bold',
                                            color: '#A1A8B9'
                                        }}>
                                            3 days ago
                                        </Text>
                                    </Surface>
                                </View>

                                <Text variant='bodyMedium' style={{
                                    color: '#6A6F7D',
                                    paddingTop: 8
                                }}>
                                    Identify the Disease: Proper diagnosis of the disease affecting the rice crop is crucial. Different diseases have different symptoms and require different management strategies.
                                </Text>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingTop: 10
                                }}>
                                    <Image source={img_uri} style={{
                                        width: '48%',
                                        aspectRatio: '16/14',
                                        borderRadius: 10
                                    }} />
                                    <Image source={rice_disease} style={{
                                        width: '48%',
                                        aspectRatio: '16/14',
                                        borderRadius: 10
                                    }} />
                                </View>
                            </Surface>
                        </View>

                        <Surface elevation={1} style={{
                            backgroundColor: '#FFF',
                            padding: 16,
                            borderRadius: 10
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                paddingBottom: 12
                            }}>
                                <Avatar.Image size={28} source={require('@/assets/images/icon.png')} />

                                <Surface elevation={0} style={{
                                    display: 'flex',
                                }}>
                                    <Text variant='bodyMedium' style={{
                                        fontWeight: 'bold',
                                        color: '#36455A'
                                    }}>
                                        Hoang Huy
                                    </Text>
                                </Surface>
                            </View>
                            <TextInput
                                label="Your comment"
                                value={text}
                                onChangeText={text => setText(text)}
                                mode='outlined'
                                style={{

                                }}
                                outlineColor='#BEBEBE'
                            />
                        </Surface>
                    </View>
                </Surface>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 16,
        backgroundColor: '#FFF'
    },
    body: {
        padding: 16
    },
    tags_containter: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    tag: {
        paddingVertical: 8,
        paddingHorizontal: 24,
        backgroundColor: 'rgba(47,145,235,0.1)',
        borderRadius: 3
    },
    prof_tag: {
        paddingVertical: 8,
        paddingHorizontal: 24,
        backgroundColor: 'rgba(104,255,0,0.2)',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    user_info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    comment_container: {
        paddingVertical: 24,
    },
    comment_list: {
        paddingVertical: 16,
        display: 'flex',
        gap: 16
    }
});
