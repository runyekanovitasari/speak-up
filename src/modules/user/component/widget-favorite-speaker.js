/**
 * @author runy.novitasari
 */

import React, { Component } from 'react';
import { AtiCard, AtiText, AtiCardItem, AtiThumbnail } from 'ati-ui-elements';
import { ScrollView } from 'native-base';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './../../../../assets/styles/default.style';
import logoSpeaker from './../../../../assets/img/icon-speaker.png';

class WidgetFavouriteSpeaker extends Component {
    render() {
        return (
            <View>
                    <Image
                        source={logoSpeaker}
                        style={{
                        width: 30,
                        height: 30,
                    }}
                    />
            </View>
        );
    }
}

export default WidgetFavouriteSpeaker;