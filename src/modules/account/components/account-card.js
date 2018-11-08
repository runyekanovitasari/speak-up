import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { AtiCarousel } from 'ati-ui-elements';
import { AtiField } from 'ati-redux-form';
import PropTypes from 'prop-types';
import leftIcon from './../../../../assets/img/kiri.png';
import rightIcon from './../../../../assets/img/kanan.png';
import leftIconx from './../../../../assets/img/kiri_p.png';
import rightIconx from './../../../../assets/img/kanan_p.png';
import styles from './../../../../assets/styles/default.style';

const { width, height } = Dimensions.get('window');

class AccountCard extends Component {

     /**
     * Initialize the data that is going to change.
     * You should initialize state in the constructor, and then call setState when you want to change it.
     */
    state = {
        currentIndex: 0,
    }


    /**
     * This function will rendered left arrow icon based on the index of data.
     * If the index of data 0, the return of left arrow icon will be white color (hide).
     * And if the index of data != 0 the return of left arrow will be displayed.
     */
    renderLeftArrow = (accountList) => {
        if (accountList === 0) {
            return (
                <View style={styles.viewLeftArrowStyle}>
                    <Image source={leftIconx} style={styles.arrowStyle} />
                </View>
            );
        }
        return (
            <View style={styles.viewLeftArrowStyle}>
                <Image source={leftIcon} style={styles.arrowStyle} />
            </View>
        );
    }

     /**
     * This function will rendered right arrow icon based on the index of data.
     * If the index of data 0, the return of right arrow icon will be white color (hide).
     * And if the index of data != 0 the return of right arrow will be displayed.
     */
    renderRightArrow = (index, accountList) => {
        if (index === accountList.length - 1) {
            return (
                <View style={styles.viewRightArrowStyle}>
                    <Image source={rightIconx} style={styles.arrowStyle} />
                </View>
            );
        }
        return (
            <View style={styles.viewRightArrowStyle}>
                <Image source={rightIcon} style={styles.arrowStyle} />
            </View>
        );
    }

    /**
     * This function will rendered componenent of carousel (the wraper of datas) based on the value data of redux.
     */
    renderCarousel = () => {
        if (this.props.reduxForm) {
            return (
                <AtiField name={this.props.fieldName} type="carousel">
                    <AtiCarousel
                        keyValue={this.props.keyValue}
                        ref={(c) => { this._carousel = c; }}
                        data={this.props.accountList}
                        renderItem={this.props.renderContent}
                        sliderWidth={width * 0.8}
                        itemWidth={width * 0.8}
                        events={{
                            onSnapToItem: (index) => {
                                this.setState({ currentIndex: index });
                            },
                        }}
                    />
                </AtiField>
            );
        }
        return (
            <AtiCarousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.accountList}
                renderItem={this.props.renderContent}
                sliderWidth={width * 0.8}
                itemWidth={width * 0.8}
                events={{
                    onSnapToItem: (index) => {
                        this.setState({ currentIndex: index });
                    },
                }}
            />
        );
    }

    render() {
        return (
            <View style={{ alignItems: 'center', height: height * 0.15 }}>
                {this.renderCarousel()}
                {this.renderLeftArrow(this.state.currentIndex)}
                {this.renderRightArrow(this.state.currentIndex, this.props.accountList)}
            </View>
        );
    }
}

AccountCard.defaultProps = {
    accountList: [],
    fieldName: null,
    keyValue: null,
    reduxForm: false,
    renderContent: null,
};

AccountCard.propTypes = {
    /**
     * listData that will be loaded
     */
    accountList: PropTypes.array,
    /**
     * field name for carousel with redux form
     */
    fieldName: PropTypes.string,
    /**
     * key of json data that will be used as value
     */
    keyValue: PropTypes.string,
    /**
     * define type will be used on redux form or not
     */
    reduxForm: PropTypes.bool,
    /**
     * return display content of card
     */
    renderContent: PropTypes.func,
};

export default AccountCard;