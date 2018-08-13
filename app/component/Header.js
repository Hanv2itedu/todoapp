import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>To Do App</Text>
                <View style={styles.tabBar}> 
                    <TouchableHighlight style={styles.btnTabBar}>
                        <Text> Show All </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btnTabBar}>
                        <Text> To Do </Text>                        
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.btnTabBar}>
                        <Text> Done </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#40C7CC'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    tabBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }, 
    btnTabBar: {
        flex: 33,
        alignItems: 'center',        
    }
});