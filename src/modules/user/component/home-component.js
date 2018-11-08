/**
 * This component will display your content. Such as list of account, menu, or etc.
 */


import React, { Component } from 'react';
import { View } from 'react-native';
import { AtiText, AtiCard, AtiCardItem } from 'ati-ui-elements';
import AccountCardSwiper from './../../account/container/account-card-swiper';

import styles from './../../../../assets/styles/default.style';

class HomeComponent extends Component {
  render() {
    return (
      <View>
        <AtiText style={styles.welcome}>HELLO</AtiText>
        <AtiText style={styles.instructions}>Here, will display your content</AtiText>
        <AtiCard>
              <AtiCardItem type="header" style={{ alignSelf: 'center' }}>
                  <AtiText style={styles.titleListAccountStyle}> List Of Accounts </AtiText>
              </AtiCardItem>
                  <AccountCardSwiper />
        </AtiCard>
      </View>
    );
  }
}

export default HomeComponent;

