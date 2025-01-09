import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../constants/Colors'
import { ProductList } from '../../components/ui/ProductList';
import RunningOrderModal from '../../components/ui/RunningOrderModal';
import RequestOrderModal from '../../components/ui/RequestOrderModal';

const Index = () => {
    const { height, width } = Dimensions.get("window");
    const [runningOrderOpen, setRunningOrderOpen] = useState(false)
    const [requestOrderOpen, setRequestOrderOpen] = useState(false)

    const handleModalClose = () => {
        setRunningOrderOpen(false)
        setRequestOrderOpen(false)
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.profileImageContainer}>
                        <View>
                            <AntDesign name="menuunfold" size={24} color="black" />
                        </View>

                        <View style={styles.profileInfoContainer}>
                            <Text style={styles.location}>LOCATION</Text>
                            <Text style={styles.address}>Pedro Iwaya</Text>
                        </View>

                    </View>
                    <View style={styles.notifIcon}>
                        {/* notif icon */}
                    </View>

                </View>

                <View style={[styles.CardContainer, { width: width * 0.95 }]}>
                    <Pressable style={[styles.card]} onPress={() => setRunningOrderOpen(!runningOrderOpen)}>
                        <Text style={styles.cardText}>21</Text>
                        <Text>RUNNING ORDERS</Text>
                    </Pressable>

                    <Pressable style={[styles.card]} onPress={() => setRequestOrderOpen(!requestOrderOpen)}>
                        <Text style={styles.cardText}>07</Text>
                        <Text>ORDERS REQUEST</Text>
                    </Pressable>

                </View>

                <View>
                    <Text style={styles.title}>cart later on</Text>
                </View>

                <View style={[styles.reviweContainer, { width: width * 0.95 }]}>
                    <View style={[styles.reviweText, { width: '100%', }]}>
                        <Text style={styles.text}>Reviews</Text>
                        <Pressable>
                            <Text style={styles.link}>See All Reviews</Text>
                        </Pressable>
                    </View>
                    <View style={styles.reviweList}>
                        <View style={styles.reviweItem}>
                            <AntDesign size={20} color={Colors.Custom[50]} name='star' />
                            <Text style={styles.reviwe}>4.5</Text>
                        </View>
                        <Text style={styles.review}>Total Reviews: 12</Text>

                    </View>
                </View>

                <ScrollView style={styles.itemContainer}>
                    <View style={[styles.reviweText, { width: '100%', }]}>
                        <Text style={styles.text}>Popular Items THis Weeks</Text>
                        <Pressable>
                            <Text style={styles.link}>See All</Text>
                        </Pressable>
                    </View>
                    <ProductList />
                </ScrollView>

            </View>
            <RunningOrderModal isVisible={runningOrderOpen} onClose={handleModalClose} />
            <RequestOrderModal isVisible={requestOrderOpen} onClose={handleModalClose} />
        </SafeAreaView>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Custom[100],
        padding: 10
    },
    profileContainer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    profileImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notifIcon: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileInfoContainer:
    {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1

    },
    location: {
        fontSize: 12,
        color: Colors.Custom[50],
        fontWeight: 'bold',
    },
    address: {
        fontSize: 15,
        color: Colors.Monochrome[200],
    },
    CardContainer: {
        height: 100,
        gap: 10,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    card: {
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 10,
        flex: 1
    },
    cardText: {
        fontSize: 50,
        fontWeight: 'bold',

    },
    subText: {
        fontSize: 15,
        color: Colors.Monochrome[200],
    },
    reviweContainer: {
        height: 80,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 6,
        padding: 10,
        marginHorizontal: 'auto'
    },
    reviweText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
    },
    link: {
        fontSize: 16,
        color: Colors.Custom[50],
        textDecorationLine: 'underline'
    },
    reviweList: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 10
    },
    reviweItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    itemContainer: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    },
    reviwe: {
        color: Colors.Custom[50],
        fontSize: 18,
        fontWeight: 'bold'
    }

})