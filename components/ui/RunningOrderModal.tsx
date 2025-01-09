import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import Button from '../button';

interface Props {
    isVisible: boolean;
    onClose: () => void;
}

const RunningOrderModal = ({ isVisible, onClose }: Props) => {
    const { height, width } = Dimensions.get('window');

    return (
        <Modal
            animationType="slide"
            visible={isVisible}
            transparent={true}
        >
            <View style={styles.overlay}>
                <View style={[styles.modalContent, { width, height: height * 0.8 }]}>
                    <View style={styles.header}>
                        <Text style={styles.title}>20 Running Orders</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.closeText}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listContainer}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={[1, 24, 5, 6, 4]}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.productContainer}>
                                    <View style={styles.imageCon}>
                                        <Image
                                            source={require('../../assets/images/splash.jpeg')}
                                            style={styles.image}
                                        />
                                    </View>


                                    <View style={{ flex: 2 }}>
                                        <Text style={styles.itemName}>Order #{item}</Text>
                                        <Text style={styles.itemId}>ID: #{item}</Text>
                                        <View style={styles.priceContainer}>
                                            <Text style={styles.itemStatus}>$20</Text>
                                            <View style={styles.actionContainer}>
                                                <View>
                                                    <TouchableOpacity>
                                                        <Text style={styles.btn}>Done</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity>
                                                        <Text style={[styles.btn, styles.cancel]}>Cancel</Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default RunningOrderModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        position: 'absolute',
        bottom: 0

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#ccc',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    listContainer: {
        flex: 1,
    },
    productContainer: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        gap: 10
    },
    itemText: {
        fontSize: 16,
    },
    imageCon: {
        flex: 1,
        height: 100,
        overflow: 'hidden',
        borderRadius: 10

    },
    image: {
        width: '100%',
        height: '100%'
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemId: {
        fontSize: 13,
        color: Colors.Monochrome[500]
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1,
    },
    itemStatus: {
        fontSize: 16,
        fontWeight: '600'
    },

    actionContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        // borderWidth: 1
    },
    btn: {
        flex: 1,
        height: 'auto',
        width: 'auto',
        padding: 10,
        backgroundColor: Colors.Custom[50],
        borderRadius: 3,
        color: Colors.Monochrome[100],
        fontWeight: 'bold'
    },
    cancel: {
        backgroundColor: "#fff",
        color: Colors.Custom[50],
        borderWidth: 2,
        borderColor: Colors.Custom[50],
    }
});
