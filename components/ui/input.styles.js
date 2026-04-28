import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#11181C',
  },
  inputWithToggle: {
    paddingRight: 44,
  },
  inputError: {
    borderColor: '#ef4444',
  },
  toggle: {
    position: 'absolute',
    right: 12,
    padding: 4,
  },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 5,
    marginLeft: 2,
    backgroundColor: '#fef2f2',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
  },
});
