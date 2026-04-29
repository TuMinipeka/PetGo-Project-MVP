import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#faf7f2',
  },
  header: {
    marginBottom: 32,
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
  button: {
    marginTop: 8,
  },
  linkText: {
    marginTop: 18,
    color: '#e07a5f',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  footerText: {
    color: '#8c6a5d',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  footerLink: {
    color: '#e07a5f',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },
  linkPressed: {
    opacity: 0.55,
  },
});
