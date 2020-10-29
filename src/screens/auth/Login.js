import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, ScrollView, ActivityIndicator,StyleSheet, Alert } from 'react-native'
import Buttons from '../../components/Buttons';
import GlobalInput from '../../components/GlobalInput';
import Styles, { Margin, MinMargin } from '../../components/Styles';
const { height, width } = Dimensions.get('window');
import Config from "../../utils/Config";
import { ApiCall } from '../../utils/service';
import { connect } from 'react-redux';
import { DispatchFunc, loginprops } from '../../redux/dispatcher'
import Volume from '../home/Volume';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: ''
        }
    }


    async Login() {
        const { name, password, } = this.state;

        if (!name.trim() || name.trim() === null) {
            Alert.alert(
                ' Alert ',
                'Please enter name ',
                [
                    { text: 'Okay', onPress: () => { console.log('okay'); } },
                ], { cancelable: false })
        }
        else if (!password.trim() || password.trim() === null || password.trim().length < 6) {
            Alert.alert(
                ' Alert ',
                'Please enter password minimum 6 word ',
                [
                    { text: 'Okay', onPress: () => { console.log('okay'); } },
                ], { cancelable: false })
        }


        else {

            this.goToHomePage()

        }
    }
    async goToHomePage() {
        const { name, password } = this.state
        this.props.loginPending()

        let data = {
            "UserName": name,
            "Password": password
        }
        await ApiCall(Config.LoginApi,data)
            .then((response) => {

                if (response) {
                    let result = response;
                    console.log('handleLogin----', result)
                    this.props.getLoginFullFill(result)
                    this.props.navigation.navigate("Home")
                }
            })
            .catch((err) => {
                this.props.getLoginReject(err)
                console.log(err)
            })

    }


    render() {
        const { password, name } = this.state
                console.log('loading', this.props.app.login.loading)
        if (this.props.app.login.loading) {
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator color="orange" size="large" />
               </View>
   
            )
        }
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>
                    <View style={{ height: height / 4, width: width,  justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 30, fontWeight: 'bold' }}>Welcome home</Text>
                        <Text style={{ fontSize: height / 45, marginVertical: height / 30 }}>Login to continue</Text>

                    </View>
                    <View style={{ height: height / 3, width: width, justifyContent: 'center', alignItems: 'center',  }}>
                        <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>

                            <GlobalInput
                                Placeholder="Username"
                                AutoFocus={false}
                                ContainerStyle={{ justifyContent: 'center', alignItems: 'center', borderWidth: StyleSheet.hairlineWidth * 3, borderRadius: 5 }}
                                inputContainerStyle={Styles().GlobalLoginInputCont}
                                Value={name}
                                OnChangeText={(val) => this.setState({ name: val })}
                            />

                            <GlobalInput
                                Placeholder="Password"
                                SecureTextEntry={true}
                                AutoFocus={false}
                                ContainerStyle={{ justifyContent: 'center', alignItems: 'center', marginVertical: Margin, borderWidth: StyleSheet.hairlineWidth * 3, borderRadius: 5 }}
                                inputContainerStyle={Styles().GlobalLoginInputCont}
                                Value={password}
                                OnChangeText={(val) => this.setState({ password: val })}
                            />


                            <Buttons
                                style={[Styles().LoginButton]}
                                OnPress={() => this.Login()}
                                Label={"Login"}

                            />

                        </View>


                    </View>

                </ScrollView>
                {/* <Volume
                visible={true}
                /> */}
            </SafeAreaView>
        )
    }
}

export default connect(loginprops, DispatchFunc)(Login)
