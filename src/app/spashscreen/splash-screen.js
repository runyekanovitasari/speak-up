import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { AtiText } from 'ati-ui-elements';
import styles from './../../../assets/styles/default.style';
import logo from './../../../assets/img/logoApp.png';
import navigate from '../../common/navigation/action';

class LogoSplashScreen extends Component {
    render() {
        return (
                <View style={{ alignSelf: 'center', paddingTop: 100 }}>
                    <Image style={styles.logoSplash} resizeMode="contain" source={logo} />
                    {/* <TouchableOpacity
                     onPress={() => this.props.navigate('LoginScreen') }
                    > */}
                        <AtiText style={{ textAlign: 'center', marginTop: -50 }}> Easier to find you a speaker</AtiText>
                    {/* </TouchableOpacity> */}
                </View>
        );
    }
}

const mapStateToProps = state => ({ ...state });
const mapActionToProps = () => ({
    navigate,
  });

export default connect(mapStateToProps, mapActionToProps())(LogoSplashScreen);