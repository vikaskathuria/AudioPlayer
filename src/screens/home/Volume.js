import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, Dimensions, TouchableOpacity, Modal, TouchableHighlight, TextInput } from "react-native";
import Slider from "react-native-slider";
const { height, width } = Dimensions.get('window')

export default class Volume extends React.Component {
    constructor(props) {
        super(props);
        this.passwordTextInputRef = React.createRef();
        this.state = { modalVisible: true,   value: 0.2,
          range:0 };
      }
      setModalVisible = (visible) => {
        this.setState({ modalVisible: true });
      }
    
    render() {
        const { modalVisible } = this.state;

        return (
            <View style={styles.MainContainer}>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
    
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
                      <View style={{marginRight:20}}>
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
    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:15 }}>
                      <View style={{marginRight:20}}>
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
    
    
    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:15 }}>
                      <View style={{marginRight:20}}>
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
    
    
    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:15 }}>
                      <View style={{marginRight:20}}>
                        <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                        <Text>Fire</Text>
                      </View>
                      <View style={{ width: width - 140  }}>
                        <Slider
                          value={this.state.range}
                          thumbTintColor='gray'
                          onValueChange={(range) => this.setState({ range })} />
                        {/* <Text>Value: {this.state.value}</Text> */}
    
                      </View>
    
                    </View>
    
    
    
    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:15 }}>
                      <View style={{marginRight:20}}>
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
    
    
    
    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:15 }}>
                      <View style={{marginRight:20}}>
                        <Image source={require("../../assets/image/img1.png")} style={{ height: 40, width: 40 }} />
                        <Text>Rain</Text>
                      </View>
                      <View style={{ width: width - 140  }}>
                        <Slider
                          value={this.state.range}
                          thumbTintColor='gray'
                          onValueChange={(range) => this.setState({ range })} />
                        {/* <Text>Value: {this.state.value}</Text> */}
    
                      </View>
    
                    </View>
    
    
    
    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop:15 }}>
                      <View style={{marginRight:20}}>
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
                </View>
          </View>
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
  
  
  