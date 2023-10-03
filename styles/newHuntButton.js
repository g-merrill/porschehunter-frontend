import { StyleSheet } from 'react-native'
import { COLORS } from '../constants'

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    height: 50,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 5,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.gold
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: COLORS.dark,
    fontSize: 16,
  },
})

export default styles
