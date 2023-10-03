import { Dimensions, StyleSheet } from 'react-native'
import { COLORS, FONT } from '../constants'

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const styles = StyleSheet.create({
  carouselWrapper: {
    marginTop: 20,
  },
  carouselHuntWrapper: {
    marginTop: 10,
  },
  container: {
    backgroundColor: '#082131',
    borderRadius: 8,
    width: ITEM_WIDTH,
    marginTop: 10,
    paddingTop: 0,
    paddingBottom: 20,
    shadowColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  huntContainer: {
    backgroundColor: '#082131',
    borderRadius: 8,
    width: ITEM_WIDTH,
    marginTop: 10,
    paddingTop: 0,
    paddingBottom: 12,
    shadowColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  header: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerHunt: {
    color: COLORS.gold,
    fontSize: 20,
    fontFamily: FONT.skia,
    paddingHorizontal: 20,
    paddingTop: 15,
    textAlign: 'center'
  },
  body: {
    color: COLORS.gold,
    fontSize: 18,
    paddingHorizontal: 20,
  },
})

export default styles
