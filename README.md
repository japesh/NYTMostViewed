# React Native New York Tmes Most Viewed Demo Application

This demo application that uses New york times Most viewed API. If you want to change the api key of this you will have to create api key at [developer New york times](https://developer.nytimes.com/indexV2.html) and it in config file.



## Getting started

1. Install React Native as described at [https://facebook.github.io/react-native/docs/getting-started.html#content](https://facebook.github.io/react-native/docs/getting-started.html#content)
2. Clone this repository
3. Run `yarn install` , all required components will be installed automatically

    ### Android
    
    no steps required
   
4. It is recommended to run `react-native start` command from root project directory.
5. use `react-native run-android` to run your project on Android.

## Demo project dependencies

The demo project uses the following third-party dependencies:
- "react-native-vector-icons" - to implement icon buttons
- "react-navigation" - to define routes and navigation

## Adding New Route

[React Navigation](https://reactjs.org/docs/test-renderer.html#testinstancefindbytype) has been used for implementing routes. If new route has to be defined please add it in navigator/index.js

## Test case
All test case has been defined in \_\_test__ folder. run `npm run test -- --coverage` to run all the test case and check the coverage.

If any of the snapshot has to be updated please run `npm run test -- -u`

## Useful links
Official guides:
- [Using React Native SDK guide](https://voximplant.com/blog/using-react-native-sdk)
- [React Navigation](https://reactnavigation.org/docs/en/getting-started.html)
- [Redux](https://redux.js.org/introduction/getting-started)
- [React Test Renderer](https://reactjs.org/docs/test-renderer.html#testinstancefindbytype)