import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <Text style={{ color: "white" }}>Hello there</Text>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
