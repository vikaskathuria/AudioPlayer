import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import { Button, Input, Icon, Text, Overlay, Image, CheckBox } from "react-native-elements";
import Styles from './Styles';
const { width, height } = Dimensions.get("window");

export default class GlobalInput extends Component {
    render() {
        const { ContainerStyle, AutoCapitalize, InputStyle,PlaceholderTextColor, OnChangeText, Value,AutoFocus, KeyboardType, Label,InputContainerStyle,
             ReturnType, MaxLength, Ref, Placeholder, ErrorMessage, RightIcon, RightText, LeftIcon, inputContainerStyle, SecureTextEntry, OnSubmitEditing, Multiline, DisableEdit } = this.props
        return (
            <Input
                containerStyle={[{ paddingHorizontal:0, },ContainerStyle]}
                autoCapitalize={AutoCapitalize}
                inputStyle={[Styles().input_style, InputStyle,{maxHeight:Multiline?height/5:'auto',}]}
                placeholderTextColor={PlaceholderTextColor}
                onChangeText={OnChangeText}
                value={Value}
                keyboardType={KeyboardType}
                multiline={Multiline}
                label={Value ? Label : ''}
                labelStyle={[Styles().LabelStyle,{ height : Label ? 'auto' : 0}]}
                returnKeyType={ReturnType}
                maxLength={MaxLength}
                ref={Ref}
                editable={DisableEdit ? false : true}
                placeholder={Placeholder}
                errorMessage={ErrorMessage}
                errorStyle={Styles().DefaultErrorStyle}
                inputContainerStyle={[inputContainerStyle]}
                rightIcon={RightIcon}
                leftIcon={LeftIcon}
                rightText={RightText}
                autoFocus={AutoFocus}
                secureTextEntry={SecureTextEntry}
                leftIconContainerStyle={Styles().IPIconDefaultContainerStyle}
                rightIconContainerStyle={Styles().IPIconDefaultContainerStyle}
                onSubmitEditing={OnSubmitEditing}
            />
        );
    }
}
