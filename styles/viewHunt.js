import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 35,
    marginBottom: 15,
  },
  homeTitle: {
    color: COLORS.gold,
    fontFamily: FONT.skia,
    fontSize: 44,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  homeTitleTwo: {
    marginLeft: -5,
    color: COLORS.lightWhite,
    fontFamily: FONT.skia,
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  editHuntButton: {
    borderWidth: 1,
    borderColor: COLORS.gold,
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gold,
  },
  editHuntButtonText: {
    textAlign: 'center',
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: SIZES.small,
  },
  deleteHuntButton: {
    borderWidth: 1,
    borderColor: COLORS.red,
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red,
  },
  deleteHuntButtonText: {
    textAlign: 'center',
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: SIZES.small,
  },
  textContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  huntTitle: {
    color: COLORS.white,
    fontSize: SIZES.xLarge,
  },
  huntLocation: {
    color: COLORS.gold,
    fontSize: 16,
  },
  carouselContainer: {
    flex: 1,
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
})

export default styles
