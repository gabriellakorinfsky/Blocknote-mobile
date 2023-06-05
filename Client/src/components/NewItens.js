import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NewItens({ props, funcao }) {
  const [modalVisible, setModalVisible] = useState(false);

  const confirmarExclusao = () => {
    setModalVisible(true);
  };

  const cancelarExclusao = () => {
    setModalVisible(false);
  };

  const excluirItem = () => {
    funcao(props.id);
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={confirmarExclusao}>
      <View style={styles.post}>
        <MaterialIcons name="delete" size={18} color={'gray'} />
        <Text style={styles.texto}>{props.itens}</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelarExclusao}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Tem certeza que deseja excluir o item?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButtonC} onPress={cancelarExclusao}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButtonE} onPress={excluirItem}>
                <Text style={styles.modalButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  post: {
    padding: 16,
    marginTop: 16,
    backgroundColor: '#000',
    borderRadius: 20,
    flexDirection: 'row',
  },
  texto: {
    marginLeft: 30,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButtonC: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  modalButtonE: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
