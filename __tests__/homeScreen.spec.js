import 'react-native';
import React from 'react';
import HomeScreen from '../pages/homeScreen';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
jest.mock('../components/reduxAPI', () => () => (comp) => comp);

it('home screen test case', () => {

    const response = [
        { title: "My title 1", byline: "By DAVID D. KIRKPATRICK", id: 100000006527721, abstract:"abstract 1"},
        { title: "My title 2", byline: "By DAVID D. ", id: 100000006527722, abstract:"abstract 2"},
    ]
    let newScreen;
    let newScreenDetail;
    const navigation = {navigate:(screen, detail)=>{
        newScreen = screen;
        newScreenDetail= detail;
    }};
    const testRenderer = renderer.create(<HomeScreen navigation={navigation} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
    testRenderer.update(<HomeScreen navigation={navigation} isFetching />)
    expect(testRenderer.toJSON()).toMatchSnapshot();
    testRenderer.update(<HomeScreen navigation={navigation} isFetching={false} response={response} />)
    expect(testRenderer.toJSON()).toMatchSnapshot();
    const testInstance=testRenderer.root;
    testInstance.findAllByType(TouchableOpacity)[0].props.onPress();
    expect(newScreen).toBe('Details');
    const expectedNextScreen={
        title: response[0].title,
        id:response[0].id,
        abstract:response[0].abstract
    }
    expect(newScreenDetail).toEqual(expectedNextScreen);

    const navigationOptions=HomeScreen.navigationOptions({navigation});
    expect(navigationOptions.title).toBe('NY Times Most Popular');
    
    expect(renderer.create(navigationOptions.headerLeft).toJSON()).toMatchSnapshot();
});