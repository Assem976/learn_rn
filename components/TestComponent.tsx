import {Text, StyleSheet, Animated, Dimensions, Image, Button, TouchableOpacity} from "react-native";
import ScrollView = Animated.ScrollView;
import {View} from "react-native";

export function TestComponent() {
    const onButtonPress = () => {
        alert("test");
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <View style={styles.subContainer1}></View>
                <View style={styles.subContainer2}></View>
            </View>
            <View style={[styles.section, styles.sectionMiddle]}>
                <Text style={styles.text}>Test text</Text>
            </View>
            <View style={styles.section}>
                <Image
                    style={{width: 200, height: 200, resizeMode: 'contain'}}
                    source={{uri: 'https://www.dimins.com/online-help/diveport-admin/70/resources/images/rgb-color.png'}}
                />
                <Button title={'tets'}/>
                <TouchableOpacity onPress={onButtonPress}>
                    <Text>test</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {
        height: Dimensions.get("window").height * .3,
        borderWidth: 1,
        margin: 8,
        borderRadius: 8,
    },
    sectionMiddle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginVertical: 16,
        shadowColor: '#a0a0a0',
        shadowOpacity: 0.4,
        borderWidth: 0,
        shadowOffset: {
            width: 2,
            height: 2,
        }
    },
    subContainer1: {
        flex: 1,
        backgroundColor: '#a35629',
    },
    subContainer2: {
        flex: 1,
        backgroundColor: '#535629',
    },
    text: {
        fontSize: 38,
    }
})