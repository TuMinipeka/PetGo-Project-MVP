import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf7f2',
    justifyContent: 'space-between',
  },

  // ── Sección superior ──
  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    overflow: 'hidden',
  },
  // ── Logo ──
  logoShadow: {
    marginBottom: 16,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 14,
  },
  logoClip: {
    width: 125,
    height: 125,
    borderRadius: 24,
    overflow: 'hidden',
  },
  logo: {
    width: 125,
    height: 125,
  },

  // ── Título ──
  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  titlePet: {
    fontSize: 52,
    fontFamily: 'Fraunces-Bold',
    color: '#3d2b1f',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },
  titleGo: {
    fontSize: 52,
    fontFamily: 'Fraunces-Bold',
    color: '#e07a5f',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },

  // ── Panel inferior ──
  bottomPanel: {
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 650,
  },
  panelContent: {
    paddingHorizontal: 32,
    paddingTop: 42,
    gap: 30,
  },
  textContent: {
    gap: 5,
  },
  welcome: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    color: '#3d2b1f',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#8c6a5d',
    lineHeight: 24,
  },

  // ── Botones ──
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
  },
  btnSignIn: {
    flex: 1,
    backgroundColor: '#3d2b1f',
    paddingVertical: 16,
    borderRadius: 77,
    alignItems: 'center',
  },
  btnSignInText: {
    color: '#f8eae0',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  btnSignUp: {
    flex: 1,
    backgroundColor: '#f8eae0',
    paddingVertical: 16,
    borderRadius: 77,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(248,234,224,0.6)',
  },
  btnSignUpText: {
    color: '#7d6e83',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
});
