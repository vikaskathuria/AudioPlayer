import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet,TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window')

export default class MeditateLast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      min: ''
    }
  }

  componentDidMount() {
    let min = this.props.route.params.min
    console.log('this.props', this.props)
    this.setState({ min: min })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperView}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Greate Job</Text>
          <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>{this.state.min}</Text>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>minute meditated</Text>

        </View>
        <View style={styles.bottomView}>
          <Text style={styles.text}>"Surrender to what is.Let go of </Text>
          <Text style={styles.text}>What was.Have faith in what </Text>
          <Text style={styles.text}> will be. "-Sonia Riccotti</Text>
          <TouchableOpacity 
          onPress={()=>{console.log("porpr",this.props)
          this.props.navigation.navigate("Home",{screen: 'Meditate',})
        }}
          style={styles.button}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Next</Text>

          </TouchableOpacity>

        </View>


      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperView: {
    flex: 1,
    backgroundColor: 'orange',
    shadowRadius: 2,
    shadowOpacity: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20, fontWeight: 'bold'

  },
  button: {
    height: height * 50 / 667,
    width: width - 30,
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: '35%',
    justifyContent: 'center',
    alignItems: 'center'

  }
})



