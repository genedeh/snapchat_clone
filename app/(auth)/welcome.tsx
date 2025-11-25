import { SNAP_YELLOW } from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function WelcomeScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={{ uri: "https://dummyimage.com/600x600/cccccc/ffffff" }}
                    style={styles.image}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Your Title Goes{"\n"}<Text style={styles.accent}>Here!</Text></Text>

                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum.
                </Text>

                <TouchableOpacity style={styles.registerButton} >
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    topSection: {
        height: height * 0.60, 
        backgroundColor: "#e5e5e5",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    card: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        paddingHorizontal: 25,
        paddingTop: 20,
        alignItems: "center",
    },

    title: {
        fontSize: 26,
        fontWeight: "800",
        textAlign: "center",
        color: "#1c1c1c",
    },

    accent: {
        color: SNAP_YELLOW,
    },

    subtitle: {
        textAlign: "center",
        color: "#777",
        marginTop: 10,
        fontSize: 14,
        lineHeight: 20,
    },

    loginButton: {
        marginTop: 25,
        width: "80%",
        paddingVertical: 12,
        backgroundColor: "#0d0d0d",
        borderRadius: 30,
        alignItems: "center",
    },

    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    registerButton: {
        marginTop: 25,
        width: "95%",
        paddingVertical: 12,
        backgroundColor: SNAP_YELLOW,
        borderRadius: 30,
        alignItems: "center",
    },

    registerButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
    },
});
