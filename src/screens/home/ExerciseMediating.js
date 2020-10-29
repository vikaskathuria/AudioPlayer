import React, { Component } from 'react'
import { Text, View, SafeAreaView, Dimensions, FlatList, Image, ScrollView, Modal, ActivityIndicator, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import Buttons from '../../components/Buttons';
import Styles, { Margin, MinMargin } from '../../components/Styles';
const { height, width } = Dimensions.get('window');
import { Icon } from 'react-native-elements'
import Sound from 'react-native-sound';
import CountDown from 'react-native-countdown-component';
import Slider from "react-native-slider";

let sound1
let tim = ''
var fiveMinutes = 0
export default class ExerciseMediating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: '',
            min: this.props.route.params.min,
            modalVisible: false
        }
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    componentDidMount() {

        console.log('this.props', this.props.route.params.soundUrl)

        Sound.setCategory('Playback');
        sound1 = new Sound(this.props.route.params.soundUrl, (error, _sound) => {
            if (error) {
                alert('error' + error.message);
                return;
            }
            sound1.play(() => {
                sound1.release();
            });
            sound1.getCurrentTime((seconds) => console.log('atyyy' + seconds));
            sound1.setNumberOfLoops(-1);
            // sound1.setCurrentTime(5000);

        });
        let min = this.props.route.params.min
        this.setState({ min: min })

        this.didBlurListener = this.props.navigation.addListener('blur', () => {
            this.componentDidBlur();
        });

    }

    componentWillUnmount() {
        this.setState({})
    }




    componentDidBlur() {
        sound1.stop(() => {
            console.log('Stop');
        });
    }
    handlePause() {
        this.props.navigation.navigate("MeditateLast")
    }

    handleTimeFinish = () => {
        const { submitArr, min } = this.state
        this.props.navigation.navigate('LastStack', {
            screen: 'MeditateLast',
            params: { min: min },
        })

    }


    render() {
        const { timer, min, modalVisible } = this.state
        if (sound1) {
            console.log('render', this.props, sound1.getCurrentTime((seconds) => console.log('at ' + seconds)))

        }
        console.log('timer', timer)
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                <View style={{ width: '95%', flex: 1 }}>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Icon reverse reverseColor="#fff" name='cross' type='entypo' color='orange' size={height / 35} onPress={() => this.props.navigation.goBack(null)} />

                    </View>
                    <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon reverse reverseColor="#fff" name='controller-paus' type='entypo' color='orange' size={height / 20}
                        //  onPress={() => this.handlePause()} 
                        />
                        <CountDown
                            size={height / 50}
                            until={min ? min * 60 : 0}
                            onFinish={this.handleTimeFinish}
                            digitStyle={{ backgroundColor: '#FFF', borderWidth: 0, borderColor: '#2983D3' }}
                            separatorStyle={{ color: '#000' }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: null, s: null }}
                            showSeparator
                            onChange={(time) => this.setState({ timer: time })}
                        />

                    </View>
                    <View style={{ flex: 2, justifyContent: "center" }}>
                        <Buttons
                            style={[Styles().LoginButton]}
                            OnPress={() => this.setState({ modalVisible: true })
                                // this.props.navigation.navigate("Volume")
                            }
                            Label={"Adjust Volume"}

                        />

                    </View>

                </View>
                <Modal
                    animationType="slide"
                    transparent={true}

                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                >
                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'black', width: width, opacity: 0.6 }}
                        onPress={() => {
                            this.setModalVisible(false);
                        }}
                    >
                    </TouchableOpacity>
                    <View style={styles.modalView}>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Adjust Volume</Text>
                        </View>
                        <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ marginRight: 20 }}>
                                    <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                                    <Text>Guidance</Text>
                                </View>
                                <View style={{ width: width - 140 }}>
                                    <Slider
                                        value={this.state.value}
                                        onValueChange={(value) => this.setState({ value })} />
                                    {/* <Text>Value: {this.state.value}</Text> */}

                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ marginRight: 20 }}>
                                    <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                                    <Text>Waves</Text>
                                </View>
                                <View style={{ width: width - 140 }}>
                                    <Slider
                                        value={this.state.value}
                                        onValueChange={(value) => this.setState({ value })} />
                                    {/* <Text>Value: {this.state.value}</Text> */}

                                </View>

                            </View>



                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ marginRight: 20 }}>
                                    <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                                    <Text>Birds</Text>
                                </View>
                                <View style={{ width: width - 140 }}>
                                    <Slider
                                        value={this.state.range}
                                        thumbTintColor='gray'
                                        onValueChange={(range) => this.setState({ range })} />
                                    {/* <Text>Value: {this.state.value}</Text> */}

                                </View>

                            </View>



                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ marginRight: 20 }}>
                                    <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                                    <Text>Fire</Text>
                                </View>
                                <View style={{ width: width - 140 }}>
                                    <Slider
                                        value={this.state.range}
                                        thumbTintColor='gray'
                                        onValueChange={(range) => this.setState({ range })} />
                                    {/* <Text>Value: {this.state.value}</Text> */}

                                </View>

                            </View>




                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ marginRight: 20 }}>
                                    <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                                    <Text>Wind</Text>
                                </View>
                                <View style={{ width: width - 140 }}>
                                    <Slider
                                        value={this.state.range}
                                        thumbTintColor='gray'
                                        onValueChange={(range) => this.setState({ range })} />
                                    {/* <Text>Value: {this.state.value}</Text> */}

                                </View>

                            </View>




                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ marginRight: 20 }}>
                                    <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                                    <Text>Rain</Text>
                                </View>
                                <View style={{ width: width - 140 }}>
                                    <Slider
                                        value={this.state.range}
                                        thumbTintColor='gray'
                                        onValueChange={(range) => this.setState({ range })} />
                                    {/* <Text>Value: {this.state.value}</Text> */}

                                </View>

                            </View>




                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                                <View style={{ marginRight: 20 }}>
                                    <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                                    <Text>Thunder</Text>
                                </View>
                                <View style={{ width: width - 140 }}>
                                    <Slider
                                        value={this.state.range}
                                        thumbTintColor='gray'
                                        onValueChange={(range) => this.setState({ range })} />
                                    {/* <Text>Value: {this.state.value}</Text> */}

                                </View>

                            </View>











                        </View>
                    </View>
                </Modal>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    //Modal
    modalView: {
        flex: 1,
        backgroundColor: "white",
        width: width,
        bottom: 0,
        height: height - 100,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 100,
        position: 'absolute'
    },
});


