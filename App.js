import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Animated,
  Dimensions,
  Easing,
  TouchableOpacity
} from 'react-native';
import TimeAndDate from './components/TimeAndDate';
import Notifications from './components/Notifications';

const screen = Dimensions.get("screen");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTextAppearance: new Animated.ValueXY({ x: 0, y: 0 }),
      view1Appearance: new Animated.ValueXY({ x: 0, y: 0 }),
      view2Appearance: new Animated.ValueXY({ x: 0, y: 0 }),
      view3Appearance: new Animated.ValueXY({ x: 0, y: 0 }),
      activeView: 1,
      viewCount: 1
    }
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.headerTextAppearance, {
        toValue: { x: 1, y: 0 },
        duration: 1500,
        easing: Easing.bezier(0.23, 1.25, 0.46, 1)
      }),
      Animated.timing(this.state.view1Appearance, {
        toValue: { x: 1, y: 0 },
        duration: 1500,
        delay: 200,
        easing: Easing.bezier(0.23, 1.25, 0.46, 1)
      }),
      Animated.timing(this.state.view2Appearance, {
        toValue: { x: 1, y: 0 },
        duration: 1500,
        delay: 350,
        easing: Easing.bezier(0.23, 1.25, 0.46, 1)
      }),
      Animated.timing(this.state.view3Appearance, {
        toValue: { x: 1, y: 0 },
        duration: 1500,
        delay: 500,
        easing: Easing.bezier(0.23, 1.25, 0.46, 1)
      })
    ]).start()
  }

  onView1Click = () => {
    if(this.state.activeView === 1) {
      let activeView = this.state.activeView + 1;
      this.setState({ viewCount: activeView });

      Animated.parallel([
        Animated.timing(this.state.view1Appearance, {
          toValue: { x: 1, y: 1 },
          duration: 800,
          easing: Easing.bezier(0.64, 0.04, 0.35, 1)
        }),
        Animated.timing(this.state.view2Appearance, {
          toValue: { x: 1, y: 0.5 },
          duration: 800,
          easing: Easing.bezier(0.64, 0.04, 0.35, 1)
        }),
        Animated.timing(this.state.view3Appearance, {
          toValue: { x: 1, y: 0.25 },
          duration: 800,
          easing: Easing.bezier(0.64, 0.04, 0.35, 1)
        })
      ]).start(() => {
        this.setState({ activeView: activeView })
      });
    }
  }

  onView2Click = () => {
    if(this.state.activeView === 2) {
      let activeView = this.state.activeView + 1;
      this.setState({ viewCount: activeView })

      Animated.parallel([
        Animated.timing(this.state.view2Appearance, {
          toValue: { x: 1, y: 1 },
          duration: 800,
          easing: Easing.bezier(0.64, 0.04, 0.35, 1)
        }),
        Animated.timing(this.state.view3Appearance, {
          toValue: { x: 1, y: 0.5 },
          duration: 800,
          easing: Easing.bezier(0.64, 0.04, 0.35, 1)
        })
      ]).start(() => {
        this.setState({ activeView: activeView });
      });
    }
  }

  onView3Click = () => {
    if(this.state.activeView === 3) {
      Animated.parallel([
        Animated.timing(this.state.view3Appearance, {
          toValue: { x: 1, y: 1 },
          duration: 800,
          easing: Easing.bezier(0.64, 0.04, 0.35, 1)
        }),
        Animated.timing(this.state.headerTextAppearance, {
          toValue: { x: 1, y: 1 },
          duration: 800,
          easing: Easing.bezier(0.64, 0.04, 0.35, 1)
        })
      ]).start(() => {
        //reset view count trackers
        this.setState({ activeView: 1, viewCount: 1 });
        //reset all animation values
        Animated.parallel([
          Animated.timing(this.state.headerTextAppearance, {
            toValue: { x: 0, y: 0 },
            duration: 0,
          }),
          Animated.timing(this.state.view1Appearance, {
            toValue: { x: 0, y: 0 },
            duration: 0,
          }),
          Animated.timing(this.state.view2Appearance, {
            toValue: { x: 0, y: 0 },
            duration: 0,
          }),
          Animated.timing(this.state.view3Appearance, {
            toValue: { x: 0, y: 0 },
            duration: 0,
          })
        ]).start(() => {
          //replay on mount animation
          Animated.parallel([
            Animated.timing(this.state.headerTextAppearance, {
              toValue: { x: 1, y: 0 },
              duration: 1500,
              easing: Easing.bezier(0.23, 1.25, 0.46, 1)
            }),
            Animated.timing(this.state.view1Appearance, {
              toValue: { x: 1, y: 0 },
              duration: 1500,
              delay: 200,
              easing: Easing.bezier(0.23, 1.25, 0.46, 1)
            }),
            Animated.timing(this.state.view2Appearance, {
              toValue: { x: 1, y: 0 },
              duration: 1500,
              delay: 350,
              easing: Easing.bezier(0.23, 1.25, 0.46, 1)
            }),
            Animated.timing(this.state.view3Appearance, {
              toValue: { x: 1, y: 0 },
              duration: 1500,
              delay: 500,
              easing: Easing.bezier(0.23, 1.25, 0.46, 1)
            })
          ]).start();
        });
      });
    }
  }
  
  render() {
    const { 
      headerTextAppearance,
      view1Appearance,
      view2Appearance,
      view3Appearance,
      viewCount
    } = this.state;

    const headerTextPositionLeft = headerTextAppearance.x.interpolate({
      inputRange: [0, 1],
      outputRange: [-screen.width, 0]
    });
    const headerTextPositionTop = headerTextAppearance.y.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30]
    });
    const headerTextOpacity = headerTextAppearance.y.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0]
    })

    const view1PositionLeft = view1Appearance.x.interpolate({
      inputRange: [0, 1],
      outputRange: [-screen.width, -40]
    })
    const view1PositionTop = view1Appearance.y.interpolate({
      inputRange: [0, 1],
      outputRange: [120, screen.height]
    })

    const view2PositionLeft = view2Appearance.x.interpolate({
      inputRange: [0, 1],
      outputRange: [-screen.width, -30]
    })
    const view2PositionTop = view2Appearance.y.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [60, 80, screen.height]
    })

    const view3PositionLeft = view3Appearance.x.interpolate({
      inputRange: [0, 1],
      outputRange: [-screen.width, -20]
    })
    const view3PositionTop = view3Appearance.y.interpolate({
      inputRange: [0, 0.25, 0.5, 1],
      outputRange: [0, 10, 20, screen.height]
    })
    
    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <SafeAreaView style={{ backgroundColor: "black" }}>
            <Animated.Text style={[styles.headerText, { left: headerTextPositionLeft, top: headerTextPositionTop, opacity: headerTextOpacity }]}>Good morning Charles</Animated.Text>
          </SafeAreaView>
          <View style={{ flex: 1 }}>
            <Animated.View style={[styles.view3, { left: view3PositionLeft, top: view3PositionTop }]}>
              <TouchableOpacity style={{ flex: 1 }}
                activeOpacity={0}
                onPress={this.onView3Click} >

              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.view2, { left: view2PositionLeft, top: view2PositionTop }]}>
              <TouchableOpacity style={{ flex: 1 }}
                activeOpacity={1}
                onPress={this.onView2Click} >
                <Notifications viewCount={viewCount} />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.view1, { left: view1PositionLeft, top: view1PositionTop }]}>
              <TouchableOpacity style={{ flex: 1 }}
                activeOpacity={1}
                onPress={this.onView1Click} >
                <TimeAndDate />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </Fragment>
    );
  }
}

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
  },
  view2: {
    position: "absolute",
    width: screen.width,
    height: screen.height,
    backgroundColor: "#2164E8",
    borderTopRightRadius: 40,
  },
  view3: {
    position: "absolute",
    width: screen.width,
    height: screen.height,
    backgroundColor: "#33E1FF",
    borderTopRightRadius: 46,
  }
});

export default App;
