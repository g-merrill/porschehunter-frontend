import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  questionText: {
    color: COLORS.white,
    fontFamily: FONT.skia,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 120,
    marginBottom: 30,
    fontSize: SIZES.large,
  },
  passwordText: {
    color: COLORS.gold,
    fontFamily: FONT.skia,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 120,
    marginBottom: 30,
    fontSize: SIZES.large,
  },
  textInput: {
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
  continueButton: {
    borderWidth: 1,
    borderColor: COLORS.red,
    width: 90,
    height: 40,
    marginVertical: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red,
  },
  continueButtonText: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: SIZES.medium,
  },
})

export default styles
