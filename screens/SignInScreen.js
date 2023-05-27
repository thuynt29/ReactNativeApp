import React, { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import log from '../Log';

const SignInScreen = (props) => {
    let users = [];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const doLogin = () => {
        // Kiểm tra dữ liệu gồm username và password
        if (username.length == 0) {
            alert('Username is required');
            return;
        }

        if (password.length == 0) {
            alert('Password is required');
            return;
        }
        let url_check_login = "http://192.168.1.60:3000/users" + "?username=" + username;


        fetch(url_check_login)
            .then((res) => {
                return res.json();
            })
            .then((res_login) => {
                if (res_login.length != 1) {
                    alert("Sai username hoặc lỗi trùng lặp dữ liệu");
                    return;
                } else {
                    let objU = res_login[0];
                    if (objU.password != password) {
                        alert("Sai password");
                        return;
                    } else {
                        try {
                            //await AsyncStorage.setItem('loginInfo', JSON.stringify(objU));
                            props.navigation.navigate('Home1');
                        } catch (error) {
                            console.error(error);
                        }
                    }
                }
            })
            .catch(e => {
                console.error(e);
                return e;
            })
    };


    // // Function to fetch data from the API
   

    const navigateToHome = () => {
        props.navigation.navigate('Home');
    };

    return (
        <View style={styles.root}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <CustomInput placeholder='Username' value={username} setValue={setUsername} secureTextEntry={false} />
            <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomButton btnLabel={'Sign In'} onPress={doLogin} />
            <CustomButton btnLabel={'Back to Home'} onPress={navigateToHome} />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    }
});
