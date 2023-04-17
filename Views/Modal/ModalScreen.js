import React, { useState } from 'react'
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const ModalScreen = () => {
    const [modal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(!modal)
    }

    return (
        <View>
            <Modal visible={modal}>
                <View style={style.containerModal}>
                    <View style={style.subContainerModal}>
                        <Text>Abrisiado</Text>
                        <Button title="Cerrar modalsito" onPress={() => handleCloseModal()} />
                    </View>
                </View>
            </Modal>
            <Pressable style={style.buttonOpen} onPress={() => handleOpenModal()}>
                <Text style={style.textButtonOpen}>Modalsito</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    subContainerModal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 50,
    },
    buttonOpen: {
        elevation: 2
    },
    textButtonOpen: {
        textAlign: 'center',
        marginBottom: 15
    }
})

export default ModalScreen