import { Button, Text, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
    // Hàm điều hướng
    const navigateToLogin = () => {
        navigation.navigate('Login');
    };
    return <View style={{
        alignItems:'center',
        marginTop:300
    }}>
        <Text style={{
            fontWeight:'bold',
            fontSize:40,
            color:'red'
        }}>Nguyễn Thanh Thúy</Text>
    </View>
};

export default Home;