

import React, {Component} from 'react';
import{createStackNavigator} from 'react-navigation';
import Home from './Home';
import Detail from './Detail';


const RootStack = createStackNavigator(
  {
    Home: Home,
    Detail:Detail,

  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}
