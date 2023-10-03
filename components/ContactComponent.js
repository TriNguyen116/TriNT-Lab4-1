import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
  render() {
    return (
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
        <Card style={styles.card}>
          <View style={styles.lineTitle}>
            <Text style={styles.title}>Contact Information</Text>
          </View>
          <View style={styles.flexText}>
            <Text style={styles.text}>121, Clear Water Bay Road</Text>
            <Text style={styles.text}>Clear Water Bay, Kowloon</Text>
            <Text style={styles.text}>HONG KONG</Text>
            <Text style={styles.text}>Tel: +852 1234 5678</Text>
            <Text style={styles.text}>Fax: +852 8765 4321</Text>
            <Text style={styles.text}>Email:confusion@food.net</Text>
          </View>
          <Button title=' Compose Email' buttonStyle={{ backgroundColor: '#7cc' }}
            icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
            onPress={this.composeMail} />
        </Card>
      </Animatable.View>
    );
  }
  composeMail() {
    MailComposer.composeAsync({
      recipients: ['nguyentantri.a4@gmail.com'],
      subject: 'From Confusion',
      body: 'Hello my friends ...'
    });
  }
}
const styles = StyleSheet.create({
  lineTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
  },

  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 15,
  },

flexText: {
  display: 'flex',
  gap: 15,
  marginBottom: 15,
},

text: {
  color: 'black',
}
})
export default Contact;