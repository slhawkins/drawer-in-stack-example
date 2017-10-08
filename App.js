import React from 'react'
import { Button, Platform, ScrollView, StyleSheet, Text } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={styles.container}>
    <Text>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('DrawerOpen')}
      title="Open drawer"
    />
  </ScrollView>
)

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
)
InboxScreen.navigationOptions = {
  title: 'Inbox',
}

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
)
DraftsScreen.navigationOptions = {
  title: 'Drafts',
}

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      screen: InboxScreen,
    },
    Drafts: {
      screen: DraftsScreen,
    },
  },
)

const Stack = StackNavigator(
  {
    Main: {
      screen: DrawerExample,
    }
  },
  {
    //headerMode: 'none',
  },
)

export default class App extends React.Component {
  render() {
    return (
        <Stack />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
})
