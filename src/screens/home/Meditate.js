import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, FlatList, ScrollView, ActivityIndicator, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Buttons from '../../components/Buttons';
import GlobalInput from '../../components/GlobalInput';
import Styles, { Margin, MinMargin } from '../../components/Styles';
const { height, width } = Dimensions.get('window');
import Config from "../../utils/Config";
import { ApiCall } from '../../utils/service';
import { connect } from 'react-redux';
import { DispatchFunc, loginprops } from '../../redux/dispatcher'
import { Icon } from 'react-native-elements'
export default class Meditate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sound: [{ name: "Basu",url: require('../../resource/Water.mp3')}, 
            { name: "Skaya",url: require('../../resource/frog.wav') }, 
            { name: "Ombu",url: require('../../resource/koyal.mp3') }, 
            { name: "Zhada",url: require('../../resource/Namaste.mp3') }, 
            { name: "Cucko",url: require('../../resource/advertising.mp3') },],
            timeArr: [{ time: "1min",no:1 },{ time: "5min",no:5 }, { time: "10min",no:10 }, { time: "15min",no:15 }, { time: "20min",no:20 }, { time: "30min",no:30 }],
            selectedTime: '',
            selectedSound: '',
            soundUrl:"",
            min:0
        }
    }

    renderItem = ({ item, index }) => {
        const { selectedSound } = this.state

        return (
            <TouchableOpacity
                onPress={() => this.handleSound(item, index)}
                style={{ borderColor: selectedSound == item.name ? "orange" : "black", justifyContent: 'center', alignItems: 'center', width: (width - (width / 40 * 6)) / 4, borderWidth: 1, borderRadius: height / 150, marginLeft: width / 40, paddingVertical: width / 40, marginBottom: width / 40, marginTop: width / 40 }}>

                <Text style={{ fontSize: height / 48, color: selectedSound == item.name ? "orange" : "black" }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    handleSound(item, index) {
        this.setState({ selectedSound: item.name,soundUrl:item.url })
    }

    renderItem1 = ({ item, index }) => {
        const { selectedTime } = this.state

        return (
            <TouchableOpacity
                onPress={() => this.handleTime(item, index)}
                style={{ borderColor: selectedTime == item.time ? "orange" : "black", justifyContent: 'center', alignItems: 'center', width: (width - (width / 40 * 6)) / 4, borderWidth: 1, borderRadius: height / 150, marginLeft: width / 40, paddingVertical: width / 40, marginBottom: width / 40, marginTop: width / 40 }}>

                <Text style={{ fontSize: height / 48, color: selectedTime == item.time ? "orange" : "black" }}>{item.time}</Text>
            </TouchableOpacity>
        )
    }
    handleTime(item, index) {
        this.setState({ selectedTime: item.time,min:item.no })
    }
    handlePlay(){
        const { selectedSound, selectedTime } = this.state

        if (!selectedSound) {
            alert('Please select sound')
        }else if (!selectedTime) {
            alert('Please select sound')

        }
         else {
            this.props.navigation.navigate("Exercise",{soundUrl:this.state.soundUrl,min:this.state.min})

        }
    }
    render() {
        const { sound, timeArr } = this.state
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                <View style={{ width: '95%', flex: 1 }}>
                    <View style={{ flex: 1.5, justifyContent: 'flex-end' }}><Text style={{ fontWeight: 'bold', fontSize: height / 20 }}>Timer</Text></View>
                    <View style={{ flex: 2.5, }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 3, justifyContent: 'center' }}>
                                <Text style={{ fontSize: height / 45, fontWeight: '200' }}>Starting and ending bell</Text>
                            </View>
                            <View style={{}}>
                                <FlatList
                                    data={sound}
                                    renderItem={this.renderItem}
                                    extraData={this.state}
                                    // horizontal
                                    numColumns={4}

                                />
                            </View>

                        </View>
                    </View>
                    <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon reverse reverseColor="#fff" name='md-play' type='ionicon' color='orange' size={height / 20} onPress={() => this.handlePlay()} />
                    </View>
                    <View style={{ flex: 2, }}>
                        <FlatList
                            data={timeArr}
                            renderItem={this.renderItem1}
                            extraData={this.state}
                            // horizontal
                            numColumns={4}

                        />

                    </View>
                    <View style={{ flex: 1.5, justifyContent: "center" }}>
                        <Buttons
                            style={[Styles().LoginButton]}
                            OnPress={() => this.props.navigation.navigate("Volume")}
                            Label={"Adjust Volume"}

                        />

                    </View>

                </View>
            </SafeAreaView>
        )
    }
}
