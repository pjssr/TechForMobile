import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CityCard = ({ city, country, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.country}>{country}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10,
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  country: {
    fontSize: 16,
    color: '#666',
  },
});

export default CityCard;
