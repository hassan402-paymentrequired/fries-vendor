import { Dimensions, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../constants/theme";
import ProductCard from "../ProductCard";


const BeansData = [
    {
        id: 'B1',
        name: 'Robusta Beans',
        imagelink_square: require("../../assets/images/splash.jpeg"),
        imagelink_portrait: require("../../assets/images/splash.jpeg"),
        special_ingredient: 'From Africa',
        prices: [
            { size: '250gm', price: '5.50', currency: '$' },
            { size: '500gm', price: '10.50', currency: '$' },
            { size: '1Kg', price: '18.50', currency: '$' },
        ],
        average_rating: 4.7,
    },
    {
        id: 'B2',
        name: 'Arabica Beans',
        imagelink_square: require("../../assets/images/splash.jpeg"),
        imagelink_portrait: require("../../assets/images/splash.jpeg"),
        special_ingredient: 'From Africa',
        prices: [
            { size: '250gm', price: '5.50', currency: '$' },
            { size: '500gm', price: '10.50', currency: '$' },
            { size: '1Kg', price: '18.50', currency: '$' },
        ],
        average_rating: 4.7,
    },
    {
        id: 'B3',
        name: 'Liberica Beans',
        imagelink_square: require("../../assets/images/splash.jpeg"),
        imagelink_portrait: require("../../assets/images/splash.jpeg"),
        special_ingredient: 'From Africa',
        prices: [
            { size: '250gm', price: '5.50', currency: '$' },
            { size: '500gm', price: '10.50', currency: '$' },
            { size: '1Kg', price: '18.50', currency: '$' },
        ],
        average_rating: 4.7,
    },
    {
        id: 'B4',
        name: 'Excelsa Beans',
        imagelink_square: require("../../assets/images/splash.jpeg"),
        imagelink_portrait: require("../../assets/images/splash.jpeg"),
        special_ingredient: 'From Africa',
        prices: [
            { size: '250gm', price: '5.50', currency: '$' },
            { size: '500gm', price: '10.50', currency: '$' },
            { size: '1Kg', price: '18.50', currency: '$' },
        ],
        average_rating: 4.7,
    },
];


export const ProductList = () => {
    return (

        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={BeansData}
            contentContainerStyle={[
                styles.FlatListContainer,
                {marginBottom: 20}
            ]}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity>
                        <ProductCard
                            id={item.id}
                            index={item.index}
                            type={item.type}
                            roasted={item.roasted}
                            imagelink_square={item.imagelink_square}
                            name={item.name}
                            special_ingredient={item.special_ingredient}
                            average_rating={item.average_rating}
                            price={item.prices[2]}
                        />
                    </TouchableOpacity>
                );
            }}
        />
    )
}








const styles = StyleSheet.create({

    FlatListContainer: {
        gap: SPACING.space_20,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

});