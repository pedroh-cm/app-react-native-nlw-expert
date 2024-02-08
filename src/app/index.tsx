import { useState } from "react";
import { View, FlatList } from "react-native";

import { CATEGORIES } from "@/utils/data/products";

import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  const handleCategorySelected = (category: string) => {
    setSelectedCategory(category);
  }
  
  return (
    <View className="flex-1 pt-8">
      <Header title="Make your order" cartQuantityItems={2} />
      <FlatList 
        data={CATEGORIES}
        keyExtractor={item => item}
        renderItem={({ item }) => <CategoryButton title={item} onPress={() => handleCategorySelected(item)} isSelected={item === selectedCategory} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}