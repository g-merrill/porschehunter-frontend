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
  newHuntButton: {
    borderWidth: 1,
    borderColor: COLORS.gold,
    // width: 90,
    height: 40,
    marginVertical: 5,
    paddingRight: 20,
    paddingLeft: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gold,
  },
  newHuntButtonText: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: SIZES.medium,
  },
  huntListContainer: {
    width: '100%',
    paddingBottom: 100,
    borderWidth: 3,
    borderColor: COLORS.red,
    flexGrow: 1,
  },
  huntList: {
    flex: 1,
    flexGrow: 1,
    borderWidth: 3,
    borderColor: COLORS.gold,
  },
  huntItem: {
    flex: 1,
    borderWidth: 3,
    borderColor: COLORS.red,
    marginVertical: 60,
    color: COLORS.white,
    textAlign: 'center',
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
