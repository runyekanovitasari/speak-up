

import React, { Component } from 'react';
import { AtiFooterNavigation } from 'ati-navigation';
import footerHome from './../../../../assets/img/footer-home.png';
import footerHomeActive from './../../../../assets/img/footer-home-active.png';
import footerTransfer from './../../../../assets/img/footer-transfer.png';
import footerTransferActive from './../../../../assets/img/footer-transfer-active.png';
import footerPayment from './../../../../assets/img/footer-payment.png';
import footerPaymentActive from './../../../../assets/img/footer-payment-active.png';
import footerQR from './../../../../assets/img/footer-qr.png';
import footerQRActive from './../../../../assets/img/footer-qr-active.png';
import footerAccount from './../../../../assets/img/footer-account.png';
import footerAccountActive from './../../../../assets/img/footer-account-active.png';

class FooterNavigation extends Component {
    render() {
        const mapperMenu = [
            {
                screen: '',
                imageActive: footerHomeActive,
                image: footerHome,
            },
            {
                screen: '',
                imageActive: footerTransferActive,
                image: footerTransfer,
            },
            {
                screen: '',
                imageActive: footerQRActive,
                image: footerQR,
            },
            {
                screen: '',
                imageActive: footerPaymentActive,
                image: footerPayment,
            },
            {
                screen: '',
                imageActive: footerAccountActive,
                image: footerAccount,
            },
        ];
        return (
            <AtiFooterNavigation
                footerStyle={{
                    height: 65,
                    borderTopWidth: 1,
                    borderRadius: 2,
                    borderColor: '#ffffff',
                    shadowColor: 'black',
                    backgroundColor: 'black',
                    shadowOpacity: 0.8,
                    shadowRadius: 5,
                    shadowOffset: {
                        height: 1,
                        width: 0,
                    },
                }}
                imageStyle={{
                    width: 35,
                    height: 35,
                    marginBottom: 2,
                    marginTop: 3,
                }}
                mapperMenu={mapperMenu}
                containerStyle={{}}
                textStyle={{
                    fontFamily: 'AvenirNextLTPro',
                    fontSize: 8,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    letterSpacing: 0,
                    textAlign: 'center',
                    marginBottom: 3,
                    color: '#000000',
                  }}
                buttonStyle={{
                    backgroundColor: '#ffffff',
                }}
            />
        );
    }
}

export default FooterNavigation;