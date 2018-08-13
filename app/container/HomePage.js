import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import PopupDialog from 'react-native-popup-dialog';
import Header from '../component/Header';
import Task from '../component/Task';
import Form from '../component/Form'

class HomePage extends Component{
    getTaskList(){
        const { listTask } = this.props;
        return listTask;
    }
    render(){
        return(           
            <View style={style.container}>
                <Header style={style.header} />
                <View style={style.list}>
                    <FlatList 
                            data={this.getTaskList()}
                            renderItem={({ item }) => <Task task={item} />}
                            keyExtractor={item => item.id}
                        />                    
                </View>
                <ActionButton
                    buttonColor="rgba(231,76,60,1)"
                    onPress={() => {
                        this.popupDialog.show();
                    }}
                    />
                    <PopupDialog
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    >
                        <Form />
                    </PopupDialog>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {       
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center' 
    },
    header: {
        flex: 20,
    },
    list:{
        flex: 80,        
        backgroundColor: '#fff',
    },
    flapBtn: {
        width: 50,
        height: 50,
        position: 'absolute',
        right: 5,
        bottom: 5,
        backgroundColor: 'blue'
    }

})

function mainStateProps(state){
    return {
        listTask: state.listTask
    }
}
export default connect(mainStateProps)(HomePage);