import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen(props) {
    const { navigation } = props;
    const title = navigation.getParam('title');
    const abstract = navigation.getParam('abstract');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{abstract}</Text>
        </View>
    );
}

DetailsScreen.navigationOptions = ({ navigation }) => {
    return {
        title: `Details ${navigation.getParam('title', 'A Nested Details Screen')}`,
    };
};
const styles = StyleSheet.create({
    title: { color: "#454545", paddingBottom: 10 },
    container: { flex: 1, padding: 15 }
})