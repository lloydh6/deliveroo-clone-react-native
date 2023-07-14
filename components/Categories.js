import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
    >
      {/* Category Card */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing 5" />
    </ScrollView>
  )
}

export default Categories