import React from 'react';
import { View, StyleSheet, Alert, Dimensions } from 'react-native';

import { Button, Text, Textarea } from "native-base";
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';


var { width, height } = Dimensions.get('screen');

class IntroduceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  displayIcon = () => {
    const { targetUser } = this.props;

    if(targetUser) {
      return <Icon style={styles.icon} name={targetUser.image} size={30} />
    } else {
      return <Icon style={styles.icon} name="user-circle" size={30} />
    }
  }

  onPressIntroduce = () => {
    const { text } = this.state;
    const { currentUser, targetUser, addPost } = this.props;

    if(!currentUser || !targetUser) {
      Alert.alert('ユーザーを選択してください')
      return;
    }

    if(currentUser.id === targetUser.id) {
      Alert.alert('同一人物です')
      return;
    }

    if(text.length < 5) {
      Alert.alert('5文字以上入力してください')
      return;
    }

    addPost(text);
    this.setState({ text: '' });
  }

  render() {
    const { items, changeTargetUser } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>あなたの仲間の行動を紹介しよう！</Text>
        <View style={styles.formContainer}>
          <View>
            {this.displayIcon()}
            {/* <RNPickerSelect
              onValueChange={value => changeTargetUser(value)}
              items={items}
              placeholder={{ label: 'select..' }}
            /> */}
          </View>
          <View style={styles.textAreaContainer}>
            <Textarea 
              multiline={true}
              rowSpan={3}
              onChangeText={text => this.setState({text})}
              value={text}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressIntroduce} primary>
            <Text>紹介する</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 15
  },
  icon: {
    textAlign: 'center'
  },
  text: {
    fontWeight: 'bold'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  textAreaContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    width: width / 1.3,
  },
  buttonContainer: {
    flex: 0.4,
    alignSelf: 'flex-end',
    width: 100,
    marginTop: 10
  }
})

export default IntroduceForm