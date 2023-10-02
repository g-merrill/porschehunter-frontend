import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  titleContainer: {
    marginTop: 35,
    marginBottom: 15,
  },
  loginTitle: {
    color: COLORS.gold,
    fontFamily: FONT.skia,
    fontSize: 44,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  loginTitleTwo: {
    marginLeft: -5,
    color: COLORS.lightWhite,
    fontFamily: FONT.skia,
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  formContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  formInput: {
    marginVertical: 5,
    width: 250,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: COLORS.tertiary,
    color: COLORS.dark,
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  loginButton: {
    borderWidth: 1,
    borderColor: 'white',
    width: 250,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  loginButtonText: {
    color: COLORS.gold,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: SIZES.medium,
  },
  signupButton: {
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderWidth: 0,
    borderColor: COLORS.gold,
    backgroundColor: COLORS.dark,
  },
  signupButtonText: {
    color: COLORS.gold,
    textDecorationLine: 'underline',
  },
})

export default styles
