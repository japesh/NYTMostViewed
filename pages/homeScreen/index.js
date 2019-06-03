import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import reduxAPI from '../../components/reduxAPI';
const keyExtractor = (item) => `${item.id}`;
let HomeScreen = ({ isFetching, response, navigation }) => {
    let content;
    if (isFetching || isFetching === undefined) {
        content = <ActivityIndicator size="large" color="#47e4c2" />
    } else if (response) {
        content = <FlatList
            data={response}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Details', {
                        id: item.id,
                        title: item.title,
                        abstract: item.abstract
                    })
                }}
            >
                <View style={styles.rowContainer}>
                    <View style={styles.rowCaption}></View>
                    <View style={styles.rowBody}>
                        <Text numberOfLines={2} style={styles.rowTitle}>{item.title}</Text>
                        <Text numberOfLines={2}>{item.byline}</Text>
                    </View>
                    <Icon name="chevron-right" size={15} color="#727272" style={styles.rowArrowRight} />
                </View>
            </TouchableOpacity>}

        />
    }
    return <View style={styles.container}>
        {content}
    </View>
}
HomeScreen = reduxAPI({ url: "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=YhWtZFAEDdXf9VDXwSUa6G1nOUYttXJz", name: "most-viewed" })(HomeScreen)


HomeScreen.navigationOptions = ({ navigation }) => (
    {
        title: 'NY Times Most Popular',
        headerLeft: (
            <TouchableOpacity onPress={() => {
                navigation.openDrawer()
            }}>
                <Icon name="bars" size={20} color="#fff" style={{ paddingLeft: 10 }} />
            </TouchableOpacity>
        ),
    }
);

const styles = StyleSheet.create({
    container: { flex: 1, overflow: "hidden" },
    rowContainer: { padding: 15, flexDirection: "row" },
    rowTitle: { color: "#454545", paddingBottom: 10 },
    rowBody: { marginLeft: 10, flex: 1, alignItems: "stretch" },
    rowCaption: { alignSelf: "center", height: 30, width: 30, borderRadius: 15, backgroundColor: "#9a9a9a", marginLeft: 15 },
    rowArrowRight: { alignSelf: "center", marginLeft: 20, marginRight: 10 }
})
export default HomeScreen