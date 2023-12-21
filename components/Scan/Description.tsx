import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { View } from '../../components/Themed';
import { Pressable} from 'react-native';
import { Text } from 'react-native-paper';

export default function ResultPage({description = ''}) {
    let tmp = description.slice(0, description.length / 2) +'...'
    const [context, setContext] = useState(tmp)
    const [shown, setShown] = useState(false)

    const showMore = () => {
        if(shown){
            setContext(description.slice(0, description.length / 2) + '...')
        } else {
            setContext(description)
        }
        setShown(!shown)
    }
    return (
        <Pressable onPress={showMore} >
            <Text variant='bodyMedium' style={styles.desc} >
                {context}
                <Text variant='bodyMedium' style={{ color: '#333', fontWeight: 'bold' }} >
                    {shown ? '' :'Read more'}
                </Text>
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    desc: {
        color: '#515151',
        paddingBottom: 24,
    },
});
