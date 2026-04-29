import { Pressable, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export function BackButton({ onPress }) {
  const router = useRouter();
  const handlePress = onPress ?? (() => router.back());

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={handlePress}
      hitSlop={8}
    >
      <Text style={styles.arrow}>←</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#f8eae0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(61,43,31,0.12)',
    shadowColor: '#3d2b1f',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.95 }],
  },
  arrow: {
    fontSize: 22,
    color: '#3d2b1f',
    lineHeight: 26,
    fontFamily: 'Poppins-Medium',
  },
});
