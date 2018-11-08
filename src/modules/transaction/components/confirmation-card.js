/**
 * This component will display screen confirmation and get value of sourceData from ConfirmationScreen
 */

import React, { Component } from 'react';
import { ConvertJSONToArray, AtiCard, AtiGridView, AtiText } from 'ati-ui-elements';
import { View } from 'native-base';
import { Loc } from 'ati-react-native-redux-i18n';
import styles from './../../../../assets/styles/default.style';

class ConfirmationCard extends Component {
    render() {
        return (
            <AtiCard>
                <AtiGridView
                    data={this.props.sourceData}
                    itemsPerRow={2}
                    renderItem={item => (
                        <View style={{ padding: 5 }}>
                            <Loc style={styles.textTitleConfirmation} locKey={'label.'.concat(item.label)} />
                            <AtiText style={styles.textValueConfirmation}>{item.value}</AtiText>
                        </View>
                    )}
                />
            </AtiCard>
        );
    }
}

export default ConfirmationCard;