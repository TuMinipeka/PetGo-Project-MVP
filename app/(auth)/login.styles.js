import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color: '#0a7ea4',
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 24,
  },
  field: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  linkText: {
    marginTop: 18,
    color: '#F97316',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  footer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  footerText: {
    color: '#64748b',
  },
  footerLink: {
    color: '#F97316',
    fontWeight: '700',
  },
  linkPressed: {
    opacity: 0.55,
  },
});
