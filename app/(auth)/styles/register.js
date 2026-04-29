import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#faf7f2',
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#3d2b1f',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#8c6a5d',
  },
  field: {
    marginBottom: 16,
  },
  hint: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8c6a5d',
    marginTop: 4,
    marginLeft: 2,
  },
  button: {
    marginTop: 8,
  },
  loader: {
    marginTop: 16,
  },
  loginLink: {
    marginTop: 24,
    color: '#e07a5f',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  linkPressed: {
    opacity: 0.55,
  },
});
