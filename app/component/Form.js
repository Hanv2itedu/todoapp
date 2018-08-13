import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTask } from '../action/Actions'

class Form extends Component{
    getDateCreate(){
        newDate = new Date();
        console.log(newDate.getDate()+'/'+(newDate.getMonth()+1)+'/'+newDate.getFullYear());
        return newDate.getDate()+'/'+(newDate.getMonth()+1)+'/'+newDate.getFullYear(); 
    }
    constructor(props) {
        super(props);
        var dateCreate = this.getDateCreate();
        this.state = {
            taskName: '',
            taskDate: dateCreate,
        };
        this.onAdd = this.onAdd.bind(this);
    }
    onAdd() {
        const { taskName, taskDate } = this.state;
        this.props.addTask(taskName, taskDate);
    }
    render(){               
        return(
            <View style={{backgroundColor: '#000'}}>
                <Text>Task:</Text>
                <TextInput 
                    placeholder= 'Type your task'
                    onChangeText={text => this.setState({ taskName: text })}
                />
                <Text>Date:</Text>
                <Text>{this.getDateCreate()}</Text>
                <Button  
                    title= 'ADDdddd'
                    onPress= {this.onAdd}
                />                    
            </View>
        )
    }
}
export default connect(null, { addTask } )(Form);