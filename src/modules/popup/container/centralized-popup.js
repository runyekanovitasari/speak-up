
/**
 * @author runy.novitasari
 * this component will be rendered to show popup message
 */
import { AtiAlert, AtiConfirmModal, AtiProgressModal } from 'ati-ui-elements';
import I18n from 'ati-react-native-redux-i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './../../../../assets/styles/default.style';
import * as action from './../store/popup-action';
import { ColorProperties } from '../../../../assets/js';

class CentralizedPopup extends Component {
  render() {
    const visibleAlert = (this.props.visibleAlert != null ? this.props.visibleAlert : false);
    const buttonTextAlert = (this.props.buttonTextAlert != null && this.props.buttonTextAlert !== '' ? I18n.t(this.props.buttonTextAlert) : 'OK');
    const eventsAlert = {
      onPressButton: () => {
        this.props.eventsAlert();
        this.props.dismissAlert();
      },
    };

    const visibleConfirm = (this.props.visibleConfirm != null ? this.props.visibleConfirm : false);
    const buttonTextPositive = (this.props.buttonTextPositive != null && this.props.buttonTextPositive !== '' ? I18n.t(this.props.buttonTextPositive) : 'OK');
    const buttonTextNegative = (this.props.buttonTextNegative != null && this.props.buttonTextNegative !== '' ? I18n.t(this.props.buttonTextNegative) : 'CANCEL');
    const eventsConfirm = {
      onClickPositiveButton: () => {
        this.props.eventsConfirmPositive();
        this.props.dismissConfirmDialog();
      },
      onClickNegativeButton: () => {
        this.props.eventsConfirmNegative();
        this.props.dismissConfirmDialog();
      },
    };

    const visibleProgress = (this.props.visibleProgress != null ? this.props.visibleProgress : false);

    const title = (this.props.title != null && this.props.title !== '' ? I18n.t(this.props.title) : '');
    const message = (this.props.message != null && this.props.message !== '' ? I18n.t(this.props.message.trim()) : '');

    return (
      <React.Fragment>
        <AtiAlert
          title={title}
          visible={visibleAlert}
          dialogStyle={styles.dialogStyle}
          titleStyle={{}}
          contentStyle={styles.contentStyle}
          containerButtonStyle={styles.containerButtonStyle}
          buttonStyle={styles.buttonStyle}
          buttonText={buttonTextAlert}
          message={message}
          messageStyle={styles.messageStyle}
          events={eventsAlert}
        />

        <AtiConfirmModal
          title={title}
          message={message}
          visible={visibleConfirm}
          buttonTextPositive={buttonTextPositive}
          buttonTextNegative={buttonTextNegative}
          events={eventsConfirm}
        />

        <AtiProgressModal
          dialogStyle={styles.dialog}
          messageStyle={styles.message}
          activityIndicatorStyle={styles.indicator}
          visible={visibleProgress}
          title={title}
          message={message}
          activityIndicatorColor={ColorProperties.TOSCA}
          activityIndicatorSize={30}
        />
      </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => {
  const { popup } = state;
  return {
    ...popup,
  };
};

const mapActionToProp = () => ({
  ...action,
});

export default connect(mapStateToProps, mapActionToProp())(CentralizedPopup);