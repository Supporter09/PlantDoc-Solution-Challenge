import { StyleSheet } from 'react-native';

import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResultPage from '@/components/Scan/ResultPage';

import { useRoute } from '@react-navigation/native';

export default function Result() {
    const route = useRoute();
    const { data } = route.params; // Access the passed data
    console.log(data)
    return (
        <SafeAreaView style={styles.container}>
            <ResultPage />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 16,
        backgroundColor: '#FFF'
    },
});
