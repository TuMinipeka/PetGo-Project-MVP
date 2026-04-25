import { Image, StyleSheet, Text, View } from 'react-native';
import backgroundImage from '../assets/fondo.png';
import icon from '../assets/LogoPetGo.png';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.logo}/>
      {/* Ahora styles.title sí existe */}
      <Text style={styles.title}>PetGo</Text>
      <Text style={styles.text}>Respeto, amor y cuidado.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    experimental_backgroundImage: backgroundImage
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Un poco de espacio extra
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    color: 'white',
    marginBottom:`100px`, // Un poco de espacio extra
  }
});