/**
 * This component will display your content. Such as list of account, menu, or etc.
 */


import React, { Component } from 'react';
import { View } from 'react-native';
import { AtiText, AtiCard, AtiCardItem } from 'ati-ui-elements';
import AccountCardSwiper from './../../account/container/account-card-swiper';
import WidgetMenu from './widget-menu';
import WidgetFavouriteSpeaker from './widget-favorite-speaker';

import styles from './../../../../assets/styles/default.style';

class HomeComponent extends Component {
  render() {
    return (
      <View>
        <WidgetMenu />
        {/* <WidgetFavouriteSpeaker /> */}
      </View>
    );
  }
}

export default HomeComponent;

