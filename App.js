import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Animated,
  Dimensions
} from 'react-native';
import TimeAndDate from './components/TimeAndDate';

const screen = Dimensions.get("screen");

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <SafeAreaView style={{ backgroundColor: "black" }}>
          <Animated.Text style={styles.headerText}>Good morning Charles</Animated.Text>
        </SafeAreaView>
        <View style={{ flex: 1 }}>
          <Animated.View style={styles.view3}>

          </Animated.View>
          <Animated.View style={styles.view2}>

          </Animated.View>
          <Animated.View style={styles.view1}>
            <TimeAndDate />
          </Animated.View>
        </View>
      </View>
      
    </Fragment>
  );
};

const styles = StyleSheet.create({
  headerText: { 
    color: "white", 
    fontSize: 38, 
    lineHeight: 45, 
    paddingHorizontal: 47, 
    paddingVertical: 40,
    fontFamily: "MaisonNeue-Medium",
    letterSpacing: -0.41
  },
  view1: {
    position: "absolute",
    width: screen.width,
    height: screen.height,
    backgroundColor: "#3D21E8",
    borderTopRightRadius: 31,
    left: -40,
    top: 120
  },
  view2: {
    position: "absolute",
    width: screen.width,
    height: screen.height,
    backgroundColor: "#2164E8",
    borderTopRightRadius: 40,
    left: -30,
    top: 60
  },
  view3: {
    position: "absolute",
    width: screen.width,
    height: screen.height,
    backgroundColor: "#33E1FF",
    borderTopRightRadius: 46,
    left: -20,
    top: 0
  }
});

export default App;
