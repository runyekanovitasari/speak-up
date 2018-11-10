import { Dimensions } from 'react-native';
import { ColorProperties, PercentageSize } from './../../assets/js';

const { width, height } = Dimensions.get('window');

export default {
    containerBackground: {
        color: ColorProperties.SILVER,
    },
    textInputPassword: {
        marginTop: 30,
        fontSize: 20,
        color: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorProperties.WHITE,
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: ColorProperties.BLACK,
        marginBottom: 5,
    },
    inputValueStyle: {
        color: ColorProperties.DARK_GREY,
        fontSize: 16,
        fontWeight: 'normal',
    },

    /* HOME HEADER */
    headerHomeStyle: {
        paddingTop: 0,
        height: 60,
        backgroundColor: ColorProperties.NAVY,
    },
    /* HOME CONTENT */
    titleListAccountStyle: {
        fontWeight: 'normal',
        color: ColorProperties.DARK_GREY,
        fontSize: 18,
        textAlign: 'center',
    },
    arrowStyle: {
        width: width / 10,
        height: height / 8,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    walletIconStyle: {
        width: width / 6,
        height: height / 8,
        resizeMode: 'contain',
        marginRight: 20,
    },
    textStyleAmount: {
        fontWeight: 'normal',
        color: ColorProperties.DARK_GREY,
        fontSize: 18,
    },
    textStyleAccountNumber: {
        fontWeight: 'normal',
        color: ColorProperties.DARK_GREY,
        fontSize: 20,
    },
    viewLeftArrowStyle: {
        left: 0,
        position: 'absolute',
    },
    viewRightArrowStyle: {
        right: 0,
        position: 'absolute',
    },
    viewRenderContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewRenderContentText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    textInputTrxStyle: {
        color: ColorProperties.DARK_GREY,
        fontSize: 15,
        fontWeight: 'normal',
    },

    /* Master Detail Account */
    labelList: {
        color: ColorProperties.LIGHT_GREY,
        fontSize: 16,
        marginTop: 5,
        fontWeight: 'normal',
    },
    valueList: {
        color: ColorProperties.DARK_GREY,
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'normal',
    },
    historyList: {
        color: ColorProperties.RED,
        fontSize: 14,
        fontWeight: 'normal',
    },
    tab: {
        backgroundColor: ColorProperties.NAVY,
    },
    iconTab: {
        color: ColorProperties.WHITE,
        fontSize: 16,
    },
    textTab: {
        color: ColorProperties.WHITE,
        fontSize: 16,
        fontWeight: 'normal',
    },
    viewDetailAccountStyle: {
        flexDirection: 'row',
    },
    viewTextDetailAccount: {
        flex: 1,
        alignItems: 'flex-end', 
        paddingRight: 5,
    },

    /* LOGIN-SCREEN */
    containerLoginStyle: {
        flex: 2,
        backgroundColor: ColorProperties.SILVER,
    },

    /** LOGIN-SPLASH SCREEN */
    logoSplash: {
        height: PercentageSize.heightPercentageToDP('50%'),
        width: PercentageSize.widthPercentageToDP('50%'),
        paddingBottom: 10,
    },

    /** LOGIN-LOGO */
    logoContainer: {
        backgroundColor: ColorProperties.SILVER,
        alignItem: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    viewContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },
    image: {
        height: PercentageSize.heightPercentageToDP('40%'),
        width: PercentageSize.widthPercentageToDP('40%'),
    },
    title_bank: {
        fontSize: 18,
        textAlign: 'left',
        color: ColorProperties.WHITE,
        fontWeight: '100',
    },

    /* lOGIN-BOX */
    viewStyle: {
        flex: 1,
        backgroundColor: ColorProperties.SILVER,
        alignItem: 'center',
        paddingTop: 20,
    },
    Cont: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width + 0,
        height: 100,
      },
      inputPass: {
        color: ColorProperties.WHITE,
        width: width - 150,
        fontSize: 20,
        height: 42,
      },
      userCont: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 80,
        height: 40,
        backgroundColor: '#42A2A5',
      },
      user: {
        color: ColorProperties.WHITE,
        alignSelf: 'center',
        fontSize: 20,
      },
      buttonLoginStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 40,
        backgroundColor: ColorProperties.NAVY,
        borderRadius: 8,
        marginTop: 20,
    },
    registerButton: {
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: 30,
        width: 100,
        height: 40,
        backgroundColor: ColorProperties.NAVY,
        marginBottom: 30,
        borderRadius: 8,
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        fontFamily: 'AvenirNextLTPro',
        fontStyle: 'normal',
    },
    iconStyle: {
        paddingLeft: 10,
        width: 30,
        height: 30,
        color: ColorProperties.BLACK,
    },
    viewContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconUsernameStye: {
        marginTop: 10,
        width: 30,
        height: 30,
        color: 'black',
        alignSelf: 'flex-start',
        marginLeft: 50,
    },
    textInputStyle: {
        fontSize: 14,
        color: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        width: 50,
        height: 42,
    },
    iconLockStyle: {
        marginTop: 30,
        width: 30,
        height: 30,
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    textInputPasswordStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        fontSize: 14,
        color: 'black',
        borderBottomWidth: 0.5,
        borderBottomColor: 'black',
        width: 50,
        height: 42,
    },
    iconEyeStyle: {
        marginTop: 10,
        width: 30,
        height: 30,
        color: 'black',
        marginRight: 15,
    },
    containerPassword: {
        flexDirection: 'row', justifyContent: 'space-between', width: width - 80, height:42,
    },


    /* POPUP-ALERT */
    dialogStyle: {
        height: PercentageSize.heightPercentageToDP('25%'),
    },
    contentStyle: {
        height: PercentageSize.heightPercentageToDP('13%'),
    },
    messageStyle: {
        color: ColorProperties.DARK_GREY,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    containerButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonStyle: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: ColorProperties.DARK_YELLOW,
      color: ColorProperties.WHITE,
      width: PercentageSize.widthPercentageToDP('30%'),
    },

    /* Transfer-Screen */
    textTransfer: {
        color: ColorProperties.DARK_GREY,
        fontSize: 16,
        marginLeft: 5,
        marginTop: 10,
        alignItems: 'center',
        fontWeight: 'normal',
    },
    mandatoryStyle: {
        fontWeight: 'bold',
        color: ColorProperties.RED,
    },
    /* CONFIRMATION- SCREEN */
    textTitleConfirmation: {
        color: ColorProperties.DARK_GREY,
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
    },
    textValueConfirmation: {
        color: ColorProperties.DARK_GREY,
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'normal',
    },
    // registration
    containerStyle: {
        // height: PercentageSize.heightPercentageToDP('60%'),
        backgroundColor: ColorProperties.WHITE,
    },
    rowStyle: {
        padding: 5,
    },
    rowStyle1: {
        padding: 10,
    },
    titlePresetStyle: {
        fontWeight: 'bold',
        color: ColorProperties.DARK_GREY,
        marginTop: 20,
        marginLeft: 10,
    },
    firstContentStyle: {
        fontWeight: 'bold',
        color: ColorProperties.DARK_GREY,
        marginTop: 7,
        marginLeft: 5,
        marginRight: 3,
    },
    continerCheckboxStyle: {
        flex: 0.8,
        width: PercentageSize.widthPercentageToDP('100%'),
        flexWrap: 'wrap',
    },
    labelCheckboxStyle: {
        paddingLeft: PercentageSize.widthPercentageToDP('5%'),
    },
    checboxStyle: {
        width: PercentageSize.widthPercentageToDP('5%'),
        height: PercentageSize.heightPercentageToDP('3%')
    },
    buttonRegistrationStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        backgroundColor: ColorProperties.DARK_YELLOW,
        marginBottom: 30,
        borderRadius: 8,
        marginTop: 50,
    },
    dialog: {
        // width:width,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    message: {
        alignSelf: 'center',
        color: ColorProperties.NAVY,
    },
    indicator: {
        // alignSelf:'center',
    },
};