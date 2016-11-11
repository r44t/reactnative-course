// import libraries for making components
import React from 'react';
import { Text, View } from 'react-native';

// make a components
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component avaialbe to other parts of the app
export  { Header };
