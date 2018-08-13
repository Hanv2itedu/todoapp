import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { toggleActive } from '../action/Actions'

class Task extends Component{
    render(){
        const { id, taskName, taskDate, done} = this.props.task;
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.taskName}>{taskName}</Text>
                    <Text style={styles.taskDate}>{taskDate}</Text>
                </View>                
                <CheckBox
                    uncheckedColor= '#fff'
                    checkedColor='green'
                    checked= { done }
                    style={styles.checkBox}
                    onPress={() => this.props.toggleActive(id)}
                    />
            </View>
        )
    }
}

export default connect(null, { toggleActive })(Task);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',      
        margin: 10,        
        height: 75,
        backgroundColor: '#EFC312',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1.0,
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    content: {
        flex: 90,
        justifyContent: 'center',
    },
    taskName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold', 
        marginLeft: 22,       
    },
    taskDate: {
        color: 'white',
        fontSize: 16,
        marginLeft: 22,      
        fontWeight: 'normal'
    },
    checkBox: {
        backgroundColor: '#000',
        flex: 10,
        alignSelf: 'center',
        marginRight: 10,
    }
});