import { useRef, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem from './CarouselCardItem'
import CarouselHuntItem from './CarouselHuntItem'
import data from '../../data'
import styles from '../../styles/carousel'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = () => {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)
  const route = useRoute()

  const isHome = () => route.name === 'Home'

  return (
    <View style={isHome() ? styles.carouselWrapper : styles.carouselHuntWrapper}>
      <Carousel
        layout='tinder'
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={isHome() ? CarouselCardItem : CarouselHuntItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(187, 157, 114, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

export default CarouselCards
