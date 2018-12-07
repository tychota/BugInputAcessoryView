// @flow
import React from 'react';
import { View, Text, Button, ScrollView, InputAccessoryView, TextInput, Alert } from 'react-native';

export class B extends React.PureComponent {
  state = {
    text: null,
  };
  render() {
    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 26, marginTop: 20 }}>Page B</Text>
          <Button title="Go to C" onPress={() => this.props.navigation.navigate('C')} />
          <ScrollView style={{ flex: 1 }} keyboardDismissMode="interactive">
            {Array(4)
              .fill()
              .map((_, i) => (
                <View
                  style={{
                    backgroundColor: '#2f7bf6',
                    borderRadius: 20,
                    width: 125,
                    margin: 20,
                  }}>
                  <Text
                    style={{
                      padding: 10,
                      color: 'white',
                    }}>
                    Text Message {i}
                  </Text>
                </View>
              ))}
          </ScrollView>
        </View>
        <InputAccessoryView backgroundColor="#fffffff7">
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderTopWidth: 1,
              borderTopColor: '#eee',
              height: 44,
            }}>
            <TextInput
              style={{
                flex: 1,
                paddingLeft: 10,
              }}
              onChangeText={text => {
                this.setState({ text });
              }}
              value={this.state.text}
              placeholder={'Type a message...'}
            />
            <Button
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Send"
            />
          </View>
        </InputAccessoryView>
      </>
    );
  }
}
