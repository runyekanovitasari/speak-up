
/**
 * @author runy.novitasari
 */

import React, { Component } from 'react';
import { AtiCard, AtiText } from 'ati-ui-elements';
import { Content } from 'native-base';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './../../../../assets/styles/default.style';
import logoSpeaker from './../../../../assets/img/icon-speaker.png';
import logoEvents from './../../../../assets/img/icon-event.png';

class WidgetMenu extends Component {
    render() {
        // const { onPressSimInfo, onPressDeviceInfo } = this.props;
        return (
            <Content>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 20,
                    }}>
                    <TouchableOpacity >
                        <AtiCard>
                            <Image style={{ width: 30, height: 30, resizeMode: 'contain' }}source={logoSpeaker} />
                        </AtiCard>
                            <AtiText style={{ fontSize: 13, color: 'black', textAlign: 'center' }}>Speaker</AtiText>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <AtiCard>
                            <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={logoEvents} />
                        </AtiCard>
                            <AtiText style={{ fontSize: 13, color: 'black', textAlign: 'center' }}>Events</AtiText>
                    </TouchableOpacity>
                </View>
            </Content>
        );
    }
}

export default WidgetMenu;