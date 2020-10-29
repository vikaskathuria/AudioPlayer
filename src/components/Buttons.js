import React, { Component } from 'react'
import { Text, View, Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
const { height, width } = Dimensions.get("window");
import { Icon } from 'react-native-elements'

export default class Buttons extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { style, name, type, size, color, OnPress, Label } = this.props
        return (
            <TouchableOpacity style={style} onPress={() => OnPress()}>
                <Text style={{ fontSize: height / 40, color: "#fff", marginHorizontal: height / 100 }}>{Label}</Text>


                {type ?
                    <Icon

                        name={name}
                        type={type}
                        size={size}
                        color={color}
                    />
                    : null
                }

            </TouchableOpacity>

        )
    }
}
