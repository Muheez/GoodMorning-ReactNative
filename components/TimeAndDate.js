import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated
} from "react-native";

export default class TimeAndDate extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={{ marginBottom: 59 }}>
                   <Text style={{ color: "white", fontSize: 38, fontFamily: "MaisonNeue-Medium", lineHeight: 52, letterSpacing: 1.22 }}>
                       09:26
                    </Text>
                    <Text style={{ color: "white", fontSize: 22, lineHeight: 30, fontFamily: "MaisonNeue-Light", opacity: .8,letterSpacing: 0.71 }}>
                        Wednesday 6th Feb
                    </Text>
                </View>
                <View style={{ marginBottom: 59 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                        <Image style={{ width: 28, height: 28, marginRight: 16 }} 
                            source={require("../assets/icons/sunny.png")} 
                            resizeMethod="auto" 
                            resizeMode="contain" />
                        <Text style={{ fontSize: 26, color: "white", letterSpacing: 1.22, fontFamily: "MaisonNeue-Medium", lineHeight: 36 }}>
                            32°
                        </Text>
                    </View>
                    <Text style={{ color: "white", fontSize: 22, lineHeight: 30, fontFamily: "MaisonNeue-Light", opacity: .8,letterSpacing: 0.71 }}>
                        It's going to be sunny all day long
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 28, height: 28, marginRight: 16 }}
                            source={require("../assets/icons/sunset.png")}
                            resizeMethod="auto"
                            resizeMode="contain" />
                        <Text style={{ fontSize: 26, color: "white", letterSpacing: 1.22, fontFamily: "MaisonNeue-Medium", lineHeight: 36 }}>
                            18:45
                        </Text>
                    </View>
                    <Text style={{ color: "white", fontSize: 22, lineHeight: 30, fontFamily: "MaisonNeue-Light", opacity: .8,letterSpacing: 0.71 }}>
                        Sunset will be clear
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        paddingHorizontal: 78,
        paddingTop: 49
    }
})