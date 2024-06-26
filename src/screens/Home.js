import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../components/Header';
import Balance from '../components/Balance';
import Moviments from '../components/Moviments';
import Actions from '../components/Actions';

const list = [
    {
        id: 1,
        label: 'Conta de Luz',
        value: '300,90',
        date: '16/05/2024',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Cliente 1',
        value: '50,00',
        date: '17/05/2024',
        type: 1 // receita
    },
    {
        id: 3,
        label: 'Salário',
        value: '3500,00',
        date: '18/05/2024',
        type: 1 // receita
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="João Pedro" />
      <Balance saldo="9.250,50" gastos="-527,00" />

      <Actions />
      <Text style={styles.title}>Últimas Movimentações</Text>

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Moviments data={item} /> }
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
