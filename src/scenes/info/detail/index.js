import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const DetailScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: 'https://blog.naver.com/dilrong' }}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default DetailScreen;