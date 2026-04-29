import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import fondo from '../assets/FondoIndexPetgo.png';
import logo from '../assets/LogoPetGo.png';
import { styles } from './index.styles';


export default function HomeScreen() {
  const router = useRouter();
  const insets  = useSafeAreaInsets();

  // — Entrance animations -------—
  const logoOpacity      = useSharedValue(0);
  const logoScale        = useSharedValue(0.72);
  const titleOpacity     = useSharedValue(0);
  const titleTranslateY  = useSharedValue(-28);
  const panelOpacity     = useSharedValue(0);
  const panelTranslateY  = useSharedValue(70);

  // — Background scroll —
  const bgTranslateY = useSharedValue(0);

  useEffect(() => {
    logoOpacity.value     = withTiming(1, { duration: 700 });
    logoScale.value       = withTiming(1, { duration: 700, easing: Easing.out(Easing.back(1.15)) });

    titleOpacity.value    = withDelay(280, withTiming(1, { duration: 600 }));
    titleTranslateY.value = withDelay(280, withTiming(0, { duration: 600, easing: Easing.out(Easing.quad) }));

    panelOpacity.value    = withDelay(480, withTiming(1, { duration: 700 }));
    panelTranslateY.value = withDelay(480, withTiming(0, { duration: 700, easing: Easing.out(Easing.quad) }));

    bgTranslateY.value = withRepeat(
      withTiming(-130, { duration: 9000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, []);

  const logoAnimStyle = useAnimatedStyle(() => ({
    opacity:   logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }));

  const titleAnimStyle = useAnimatedStyle(() => ({
    opacity:   titleOpacity.value,
    transform: [{ translateY: titleTranslateY.value }],
  }));

  const panelAnimStyle = useAnimatedStyle(() => ({
    opacity:   panelOpacity.value,
    transform: [{ translateY: panelTranslateY.value }],
  }));

  const bgAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bgTranslateY.value }],
  }));
// --------------------- animations
  return (
    <View style={styles.container}>
      {/* ── Sección superior ── */}
      <View style={[styles.topSection, { paddingTop: insets.top }]}>
        <Animated.View style={logoAnimStyle}>
          <View style={styles.logoShadow}>
            <View style={styles.logoClip}>
              <Animated.Image source={logo} style={styles.logo} />
            </View>
          </View>
        </Animated.View>

        <Animated.View style={[styles.titleRow, titleAnimStyle]}>
          <Text style={styles.titlePet}>Pet</Text>
          <Text style={styles.titleGo}>Go</Text>
        </Animated.View>
      </View>

      {/* ── Panel inferior ── */}
      <Animated.View style={[styles.bottomPanel, panelAnimStyle]}>
        <Animated.Image
          source={fondo}
          style={[styles.bgImage, bgAnimStyle]}
          resizeMode="cover"
        />
        <View style={[styles.panelContent, { paddingBottom: insets.bottom + 32 }]}>
          <View style={styles.textContent}>
            <Text style={styles.welcome}>Bienvenido!</Text>
            <Text style={styles.subtitle}>
              Respeto, amor y cuidado para tus mascotas.
            </Text>
          </View>
          <View style={styles.buttonRow}>
            <Pressable
              style={({ pressed }) => [styles.btnSignIn, pressed && styles.pressed]}
              onPress={() => router.push('/login')}
            >
              <Text style={styles.btnSignInText}>Sign in</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [styles.btnSignUp, pressed && styles.pressed]}
              onPress={() => router.push('/register')}
            >
              <Text style={styles.btnSignUpText}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
