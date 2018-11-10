import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './../../../../assets/styles/default.style';
import logo from './../../../../assets/img/logoApp.png';

class LoginLogo extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <View style={styles.viewContainer}>
                    <Image style={styles.image} resizeMode="contain" source={logo} />
                </View>
            </View>
        );
    }
}
export default LoginLogo;
