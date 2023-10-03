import { StyleSheet } from 'react-native'
import { COLORS } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  photoDeetsContainer: {
    backgroundColor: COLORS.primary,
  },
  photoDeetsImageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  photoDeetsFooterContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.dark,
    marginVertical: 5,
    width: 240,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: COLORS.gold,
  },
  inputPressableEdit: {
    flex: 3 / 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gold,
    borderRadius: 5,
    height: 40,
  },
  inputPressableSave: {
    flex: 3 / 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 5,
    height: 40,
  },
  inputPressableText: {
    color: COLORS.white,
  },
  addMoreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gold,
    borderRadius: 5,
    width: 180,
    height: 40,
    marginTop: 10,
  },
  addMoreText: {
    color: COLORS.dark,
    fontWeight: 'bold',
  },
  saveHuntButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 5,
    width: 120,
    height: 40,
    marginTop: 10,
  },
  saveHuntText: {
    color: COLORS.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

export default styles
