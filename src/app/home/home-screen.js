/*
 * This component will display home screen that contains components header, home-content, and home-side-menu.
 */


import React, { Component } from 'react';
import { Container } from 'native-base';
import HomeComponent from '../../modules/user/component/home-component';
import styles from '../../../assets/styles/default.style';

class HomeScreen extends Component {
    render() {
      return (
        <Container style={styles.containerBackground}>
            <HomeComponent />
        </Container>
      );
    }
  }
  
export default HomeScreen;
