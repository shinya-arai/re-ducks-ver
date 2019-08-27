import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, Alert, TouchableHighlight, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { onPressClap } from '../actions';

var { width, height } = Dimensions.get('screen');

class IntroduceList extends React.Component {
  onPressClap = (introducer, introduced, postId) => {
    const { currentUser, posts, onPressClap } = this.props;

    if(!currentUser) {
      Alert.alert('ユーザーを選択してください')
      return;
    }

    const thisPost = posts.find(post => post.id === postId)

    if(thisPost.clapUsers.length) {
      const specificUser = thisPost.clapUsers.find(clapUser => clapUser.id === currentUser.id)
      if(specificUser && (specificUser.count === 15)) {
        Alert.alert('拍手は15回までです')
        return;
      }
    }

    if(currentUser.canClap === 0) {
      Alert.alert('ポイントがありません')
      return;
    }

    const alert = () => {
      Alert.alert('紹介者、紹介された者は投稿に拍手することができません')
    }

    switch(currentUser.id) {
      case introducer.id:
        alert();
        return;
      case introduced.id:
        alert();
        return;
      default:
        onPressClap(introducer, introduced, postId)
    }
  }

  render() {
    const { posts, openModal } = this.props;

    // 時間で降順に並べなおす
    posts.sort((a, b) => a.time < b.time ? 1: -1);

    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList 
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              const { introducer, introduced, text, id, clapCount, formatTime } = item;
              
              return (
                <View key={index} style={styles.itemContainer}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                      <Icon name={introducer.image} size={30} style={styles.icon} />
                      <Text style={styles.name}>{introducer.name}</Text>
                    </View>
                    <Icon name="long-arrow-right" size={30} />
                    <View style={styles.iconContainer}>
                      <Icon name={introduced.image} size={30} style={styles.icon} />
                      <Text style={styles.name}>{introduced.name}</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1, alignSelf: 'center' }}>
                    <Text style={styles.text}>{text}</Text>
                  </View>
                  <View style={{ flex: 0.5, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={styles.clapContainer}>
                      <Icon 
                        onPress={() => this.onPressClap(introducer, introduced, id)} 
                        name="signing" 
                        size={30} 
                      />
                      <TouchableHighlight 
                        onLongPress={() => openModal(id)}
                        underlayColor="grey"
                      >
                        <View>
                          <Text style={styles.clapCount}>{clapCount}</Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <Text style={styles.text}>{formatTime}</Text>
                  </View>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
  },
  iconContainer: {
    width: width / 6,
  },
  icon: {
    textAlign: 'center'
  },
  itemContainer: {
    height: 250,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',    
  },
  clapContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  clapCount: {
    fontSize: 16, 
    fontWeight: 'bold',
    marginLeft: 10
  }
})

export default IntroduceList