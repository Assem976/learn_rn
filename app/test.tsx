import { View, StyleSheet } from "react-native";
import {Stack} from "expo-router";
import {TestComponent} from "@/components/TestComponent";

export default function TestScreen() {
    return (
        <>
            <Stack.Screen options={{title: 'Test!'}}/>
            <View style={styles.container}>
                <TestComponent/>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30
    }
})