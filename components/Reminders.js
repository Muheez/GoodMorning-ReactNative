import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated,
    ImageBackground,
    Easing
} from "react-native";

export default class Reminders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerAppearance: new Animated.Value(1),
            dividerAppearance: new Animated.Value(0),
            jamsAppearance: new Animated.Value(0),
            cloudAppearance: new Animated.Value(0),
            animationAppearance: new Animated.Value(0),
            dekkersAppearance: new Animated.Value(0)
        }
    }

    componentDidUpdate() {
        if(this.props.viewCount === 3) {
            Animated.parallel([
                Animated.timing(this.state.headerAppearance, {
                    toValue: 0,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1)
                }),
                Animated.timing(this.state.dividerAppearance, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1)
                }),
                Animated.timing(this.state.jamsAppearance, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1)
                }),
                Animated.timing(this.state.cloudAppearance, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1),
                    delay: 100
                }),
                Animated.timing(this.state.animationAppearance, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1),
                    delay: 200
                }),
                Animated.timing(this.state.dekkersAppearance, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.bezier(0.64, 0.04, 0.35, 1),
                    delay: 300
                })
            ]).start();
        }

        if(this.props.viewCount === 1) {
            Animated.parallel([
                Animated.timing(this.state.headerAppearance, {
                    toValue: 1,
                    duration: 0
                }),
                Animated.timing(this.state.dividerAppearance, {
                    toValue: 0,
                    duration: 0
                }),
                Animated.timing(this.state.jamsAppearance, {
                    toValue: 0,
                    duration: 0,
                }),
                Animated.timing(this.state.cloudAppearance, {
                    toValue: 0,
                    duration: 0
                }),
                Animated.timing(this.state.animationAppearance, {
                    toValue: 0,
                    duration: 0
                }),
                Animated.timing(this.state.dekkersAppearance, {
                    toValue: 0,
                    duration: 0
                })
            ]).start();
        }
    }
    
    render() {
        const {
            headerAppearance,
            dividerAppearance,
            jamsAppearance,
            cloudAppearance,
            animationAppearance,
            dekkersAppearance
        } = this.state

        const dividerMarginTop = dividerAppearance.interpolate({
            inputRange: [0, 1],
            outputRange: [10, 40]
        })
        const jamsPositionTop = jamsAppearance.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25]
        })
        const cloudPositionTop = cloudAppearance.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25]
        })
        const animationPositionTop = animationAppearance.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25]
        })
        const dekkersPositionTop = dekkersAppearance.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25]
        })

        return(
            <View style={{ flex: 1, paddingHorizontal: 58, paddingTop: 18 }}>
                <Animated.Text style={{ color: "white", fontSize: 20, lineHeight: 28, fontFamily: "MaisonNeue-Light", opacity: headerAppearance, marginBottom: 5 }}>
                    Reminders
                </Animated.Text>
                <View style={{ flexDirection: "row" }}>
                    <Animated.View style={{ flexDirection: "column", alignItems: "center", marginTop: dividerMarginTop, marginRight: 18, opacity: dividerAppearance }}>
                        <View style={styles.ball}></View>
                        <View style={styles.line}></View>
                        <View style={styles.ball}></View>
                        <View style={styles.line}></View>
                        <View style={styles.ball}></View>
                        <View style={styles.line}></View>
                        <View style={styles.ball}></View>
                    </Animated.View>
                    <View style={{ flex: 1 }}>
                        <Animated.View style={{ paddingHorizontal: 12, marginTop: 0, top: jamsPositionTop, opacity: jamsAppearance }}>
                            <Text style={styles.smallText}>
                                12:00 meeting
                            </Text>
                            <Text style={styles.bigText}>
                                Studio Jams
                            </Text>
                        </Animated.View>
                        <Animated.View style={{ paddingHorizontal: 12, marginTop: 72, top: cloudPositionTop, opacity: cloudAppearance }}>
                            <Text style={styles.smallText}>
                                12:30 reminder
                            </Text>
                            <Text style={styles.bigText}>
                                Cloud testing
                            </Text>
                        </Animated.View>
                        <Animated.View style={{ paddingHorizontal: 12, marginTop: 72, top: cloudPositionTop, opacity: cloudAppearance }}>
                            <Text style={styles.smallText}>
                                16:30 meeting
                            </Text>
                            <Text style={styles.bigText}>
                                Animation preset
                            </Text>
                        </Animated.View>
                        <Animated.View style={{ marginTop: 55, height: 86, position: "relative", opacity: dekkersAppearance, top: dekkersPositionTop }}>
                            <ImageBackground style={{ flex: 1, height: 86, paddingHorizontal: 12, paddingTop: 17 }}
                                resizeMethod="auto"
                                resizeMode="contain"
                                source={require("../assets/images/bg1.png")}>
                                <Text style={styles.smallText}>
                                    16:30 meeting
                                </Text>
                                <Text style={styles.bigText}>
                                    Animation preset
                                </Text>
                            </ImageBackground>
                        </Animated.View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ball: {
        width: 8,
        height: 8,
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 2,
        marginBottom: 22
    },
    line: {
        width: 1,
        height: 70,
        backgroundColor: "white",
        marginBottom: 22
    },
    smallText: {
        color: "white",
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.51,
        opacity: .8,
        fontFamily: "MaisonNeue-Medium"
    },
    bigText: {
        color: "white",
        fontSize: 22, 
        lineHeight: 30,
        letterSpacing: .71,
        fontFamily: "MaisonNeue-Medium"
    }
})