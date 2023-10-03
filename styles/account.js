import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONT } from '../constants'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 35,
    marginBottom: 15,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONT.skia,
    fontSize: 44,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  subheader: {
    color: COLORS.gold,
    fontSize: SIZES.large,
  },
  contentText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    marginVertical: 5,
  },
  usernameButton: {
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    width: 160,
    height: 30,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.tertiary,
  },
  usernameInput: {
    borderWidth: 1,
    borderColor: COLORS.gold,
    backgroundColor: COLORS.dark,
    marginVertical: 5,
    width: 250,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: COLORS.gold,
  },
  usernameButtonText: {
    color: COLORS.white,
    fontSize: 15,
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.dark,
    marginVertical: 5,
    width: 250,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: COLORS.white,
  },
  passwordButton: {
    borderWidth: 1,
    borderColor: COLORS.white,
    width: 160,
    height: 30,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  passwordButtonText: {
    color: COLORS.white,
    fontSize: 15,
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    width: 120,
    height: 40,
    marginVertical: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
  },
  logoutButtonText: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: SIZES.medium,
  },
})

export default styles
