// @flow
import React from 'react';
import { View, Text, Button } from 'react-native';

export const A = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 26 }}>Page A</Text>
    <Button title="Go to B" onPress={() => navigation.navigate('B')} />
  </View>
);
