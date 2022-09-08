import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function Home() {
    const navigation = useNavigation();

    function irConverter() {
        navigation.navigate('Currency')
    }

    return (
        <ImageBackground source={require('../../assets/image.jpg')} style={styles.img} >
            <SafeAreaView style={styles.container}>

                <StatusBar backgroundColor="transparent" translucent={true} barStyle="light-content" />
                <View style={styles.title}>
                    <Text style={styles.titleText}>Converter<Text style={{ color: '#083404', fontSize: 40, fontWeight: 'bold' }}>ON</Text></Text>

                </View>

                <View style={styles.viewDetail}>
                    <Text style={styles.detailText}>Simule uma conversão com a moeda que desejar sem sair de casa, com valores atualizados a cada segundo.</Text>
                </View>

                <TouchableOpacity onPress={irConverter} style={styles.button}>
                    <Text style={styles.buttonText}>Fazer Conversão</Text>
                </TouchableOpacity>


            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0 + getStatusBarHeight()
    },
    img: {
        resizeMode: 'cover',
        height: h,
        width: w
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    titleText: {
        fontSize: 35,
        color: '#FFF'
    },
    viewDetail: {
        padding: 10
    },
    detailText: {
        fontSize: 20,
        textAlign: 'center',
        // fontWeight: 'bold',
        color: '#FFF'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(192,192,192,0.6)',
        height: 70,
        padding: 10,
        position: 'absolute',
        bottom: '15%',
        width: '80%',
        marginHorizontal: '10%',
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#500f0f'
    }
})