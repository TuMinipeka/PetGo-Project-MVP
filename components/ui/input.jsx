import { TextInput, StyleSheet } from 'react-native';

export function Input({ style, ...rest }) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#687076"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#11181C',
  },
});
