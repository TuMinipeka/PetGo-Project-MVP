import { Pressable, Text, StyleSheet } from 'react-native';

export function Button({ title, style, ...rest }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F97316',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#EA580C',
    shadowColor: '#EA580C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.97 }],
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
});
