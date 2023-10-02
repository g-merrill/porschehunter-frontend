import { StyleSheet } from 'react-native'
import { COLORS } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  headerButton: {
    borderWidth: 0,
    borderColor: COLORS.white,
    marginHorizontal: 5,
    paddingHorizontal: 30,
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    color: COLORS.white,
  },
})

export default styles
