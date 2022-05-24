import * as React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export function DrawerScreens() {
  return (
    <Drawer.Navigator
      screenOptions ={{headerShown : false, drawerPosition:'right'}}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name='Login' component={Login}/>
    </Drawer.Navigator>
  );
}