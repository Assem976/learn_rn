import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,} from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };
    const validatePassword = (password: string) => {
        return /^(?=.*[a-z])(?=.*\d).{6,}$/.test(password);
    };
    const handleLogin = () => {
        if (!validateEmail(email)) {
            Alert.alert("Please enter a valid email");
            return;
        }
        if (!validatePassword(password)) {
            Alert.alert("Please enter a valid password");
            return;
        }
        Alert.alert("You have successfully logged in.");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <View style={styles.passwordRow}>
                <TextInput
                style={[styles.input, {flex: 1, marginBottom: 0}]}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.eye}
                    onPress={() => setShowPassword((v) => !v)}
                    accessibilityLabel = "Show/HidePassword"
                >
                    <Text>{showPassword ? "🙈" : "👁"}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 24 },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 14,
    },
    passwordRow: { flexDirection: "row", alignItems: "center",marginBottom: 14 },
    eye: {
        marginLeft: 8,
        height: 44,
        width: 44,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
    },
    button: {
        backgroundColor: "#007AFF",
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
    },
    buttonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});