/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

import UserProfileContainer from './src/views/containers/UserProfileContainer';
// import IntroduceForm from './src/components/IntroduceForm';
// import IntroduceList from './src/components/IntroduceList';
// import ModalComponent from './src/components/ModalComponent';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={{ flex: 10 }}>
          <UserProfileContainer />
          {/* <IntroduceForm items={items} /> */}
          {/* <IntroduceList openModal={this.openModal} /> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 12 : 0
  }
})

export default App