import { StyleSheet } from 'react-native'
import { COLORS, FONT } from '../constants'

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
  huntListContainer: {
    width: '100%',
    paddingBottom: 100,
  },
  huntList: {
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  huntItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginVertical: 60,
    color: COLORS.white,
    textAlign: 'center',
  },
})

export default styles
