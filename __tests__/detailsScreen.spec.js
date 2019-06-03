import 'react-native';
import React from 'react';
import DetailScreen from '../pages/detailScreen';
import renderer from 'react-test-renderer';

it('Detail screen test case', () => {
    const details = {
        title: "my title",
        abstract: "My abstract"
    }
    const navigation = { getParam: (name) => details[name], navigate: jest.fn() };
    const tree = renderer.create(<DetailScreen navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
    const {title} = DetailScreen.navigationOptions({navigation});
    expect(title).toBe("Details my title")
});