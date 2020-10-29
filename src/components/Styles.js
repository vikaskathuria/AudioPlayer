import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const BigTitleFontSize = height / 35;
const TitleFontSize = height / 45;
const ValueFontSize = height / 55;
const ButtonFontSize = height / 60;
export const Margin = width / 20;
export const Button_Margin = height / 50;
export const MinMargin = width / 40;
export const BorderRadius = height / 200;


export default StyleSheet.create(props => ({
    input_style: { color: "#000", fontSize: TitleFontSize, minHeight: 0 },
    LabelStyle: { fontSize: TitleFontSize, color: "grey" },
    DefaultErrorStyle: { height: 0, margin: 0 },
    IPIconDefaultContainerStyle: { height: 'auto', marginVertical: 0, paddingHorizontal: height / 100 },
    GlobalLoginInputCont: { borderBottomWidth: 0,height:height/13 },
    LoginButton: { height: height / 12, width:'100%', flexDirection: 'row', backgroundColor: "orange", borderRadius: height / 90, justifyContent: 'center', alignItems: 'center' },


}))