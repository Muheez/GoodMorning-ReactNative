import React, {Component} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    Easing
} from "react-native";

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerAppearance: new Animated.Value(0),
            slackAppearance: new Animated.Value(0),
            twitterAppearance: new Animated.Value(0),
            dribbleAppearance: new Animated.Value(0)
        }
    }

    componentDidUpdate() {
        if(this.props.viewCount === 2) {
            Animated.parallel([
                Animated.timing(this.state.headerAppearance, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1)
                }),
                Animated.timing(this.state.slackAppearance, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1)
                }),
                Animated.timing(this.state.twitterAppearance, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1),
                    delay: 100
                }),
                Animated.timing(this.state.dribbleAppearance, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1),
                    delay: 200
                })
            ]).start();
        }

        if(this.props.viewCount === 1) {
            Animated.parallel([
                Animated.timing(this.state.headerAppearance, {
                    toValue: 0,
                    duration: 0
                }),
                Animated.timing(this.state.slackAppearance, {
                    toValue: 0,
                    duration: 0
                }),
                Animated.timing(this.state.twitterAppearance, {
                    toValue: 0,
                    duration: 0
                }),
                Animated.timing(this.state.dribbleAppearance, {
                    toValue: 0,
                    duration: 0
                })
            ]).start();
        }
    }
    
    render() {
        const {
            headerAppearance,
            slackAppearance,
            twitterAppearance,
            dribbleAppearance
        } = this.state;

        const headerOpacity = headerAppearance.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        });

        const slackMarginTop = slackAppearance.interpolate({
            inputRange: [0, 1], 
            outputRange: [0, 15]
        })

        const slackImageMarginRight = slackAppearance.interpolate({
            inputRange: [0, 1], 
            outputRange: [0, 9]
        })

        const twitterMarginTop = twitterAppearance.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50]
        })

        const dribbleMarginTop = dribbleAppearance.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 50]
        })
        
        return(
            <View style={{ flex: 1, paddingHorizontal: 68, paddingTop: 15.5 }}>
                <Animated.Text style={{ color: "white", fontSize: 20, lineHeight: 28, fontFamily: "MaisonNeue-Light", opacity: headerOpacity }}>
                    Notifications
                </Animated.Text>
                <Animated.View style={{ marginTop: slackMarginTop, opacity: slackAppearance }}>
                    <Image style={{ width: 30, height: 30, marginBottom: 14 }}
                        resizeMethod="auto" 
                        resizeMode="contain"
                        source={require("../assets/icons/slack.png")} />
                    <Text style={styles.lightText}>
                        26 new messages
                    </Text>
                    <View style={{ flexDirection: "row", alignContent: "center", marginTop: 15 }}>
                        <Animated.Image style={{ width: 28, height: 28, marginRight: slackImageMarginRight }}
                            resizeMethod="auto"
                            resizeMode="contain"
                            source={require("../assets/images/img1.png")} />
                        <Animated.Image style={{ width: 28, height: 28, marginRight: slackImageMarginRight }}
                            resizeMethod="auto"
                            resizeMode="contain"
                            source={require("../assets/images/img2.png")} />
                        <Animated.Image style={{ width: 28, height: 28, marginRight: slackImageMarginRight }}
                            resizeMethod="auto"
                            resizeMode="contain"
                            source={require("../assets/images/img3.png")} />
                        <Animated.Image style={{ width: 28, height: 28, marginRight: slackImageMarginRight }}
                            resizeMethod="auto"
                            resizeMode="contain"
                            source={require("../assets/images/img4.png")} />
                    </View>
                </Animated.View>
                <Animated.View style={{ marginTop: twitterMarginTop, opacity: twitterAppearance }}>
                    <Image style={{ width: 33, height: 33, marginBottom: 12 }}
                        resizeMethod="auto"
                        resizeMode="contain"
                        source={require("../assets/icons/twitter.png")} />
                    <Text style={styles.lightText}>
                        132 notifications
                    </Text>
                    <Text style={styles.lightText}>
                        23 new messages
                    </Text>
                </Animated.View>
                <Animated.View style={{ opacity: dribbleAppearance, marginTop: dribbleMarginTop }}>
                    <Image style={{ width: 33, height: 33, marginBottom: 12 }}
                        resizeMethod="auto"
                        resizeMode="contain"
                        source={require("../assets/icons/dribble.png")} />
                    <Text style={styles.lightText}>
                        127 notifications
                    </Text>
                    <Text style={styles.lightText}>
                        1 new messages
                    </Text>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    lightText: {
        fontSize: 22,
        lineHeight: 30,
        letterSpacing: 0.71,
        fontFamily: "MaisonNeue-Medium",
        opacity: .8,
        color: "white"
    }
})