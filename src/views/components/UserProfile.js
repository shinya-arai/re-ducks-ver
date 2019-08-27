import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';


class UserProfile extends React.Component {
  displayIcon = () => {
    const { currentUser } = this.props;

    if(currentUser) {
      return <Icon style={styles.icon} name={currentUser.image} size={30} />
    } else {
      return <Icon style={styles.icon} name="user-circle" size={30} />
    }
  }

  render() {
    const { currentUser, items } = this.props

    console.log(this.props)
    return (
      <View style={styles.container}>
        <View>
          {this.displayIcon()}
          {/* <RNPickerSelect 
            onValueChange={value => changeCurrentUser(value)}
            items={items}
            placeholder={{ label: 'select..' }}
            // useNativeAndroidPickerStyle={false} エラーがでる
          /> */}
        </View>
        <Text style={styles.text}>拍手できる: {currentUser ? currentUser.canClap : 'null'}</Text>
        <Text style={styles.text}>拍手された: {currentUser ? currentUser.beClapped : 'null'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    textAlign: 'center'
  }
})

export default UserProfile