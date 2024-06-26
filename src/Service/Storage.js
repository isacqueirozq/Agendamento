import AsyncStorage from '@react-native-async-storage/async-storage';

/*
************

************
*/
const BDPessoa = '@pessoa'
export const getPessoa = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(BDPessoa);
    if (jsonValue != null) {
      return JSON.parse(jsonValue)
    }
    return [];
  } catch (e) {
    console.log(e);
  }
}
// export const setCandidatos = async (newCandidatos) => {
//   const existente = await getCandidato()
//   existente.push(newCandidatos)
//   const jsonValue = JSON.stringify(existente)
//   try{
//     await AsyncStorage.setItem('@candidatos', jsonValue)
//   console.log("adicionados", existente)
//   } catch (e) {
//     console.log('Erro ao gravar',e);
//   }
// }
// export const editCandidato = async (dados,newDados) => {
//   try {

//     // Obtemos as congregações já cadastradas
//       const candidatos = await getCandidato();
//     // Procuramos a congregação pelo ID
//       const index = candidatos.findIndex(cand => cand.cod === dados.cod);

//       if (index !== -1) {
//         if (newDados) {
//           // Atualizamos os dados da congregação
//           candidatos[index] = newDados;
//         }else{
//           // Atualizamos os dados da congregação
//           candidatos[index] = dados;
//         }
        
//         // Salvamos o array atualizado no AsyncStorage
//         await AsyncStorage.setItem('@candidatos', JSON.stringify(candidatos));
//         console.log('Alterado - Candidato '+ dados.nome);
//       } else {
//         console.log('Candidato não encontrado.');
//       }
   
//   } catch (error) {
//     console.log('Erro ao editar candidato:', error);
//   }
// };
// export const RemoveCandidatos = async () => {
//   try {
//     await AsyncStorage.removeItem('@candidatos')
//   } catch(e) {
//     // remove error
//   }
//   console.log('Limpo')
// }
// export const RemoveCandidatoItem = async (item) => {
//   try {
//     // Obtemos as congregações já cadastradas
//     const candidatos = await getCandidato();
    
//     // Filtramos o array de congregações, removendo a congregação com o ID fornecido
//     const updatedCandidatos = candidatos.filter(pessoa => pessoa.cod !== item);
//     console.log(updatedCandidatos);
//     // Salvamos o array atualizado no AsyncStorage
//       await AsyncStorage.setItem('@candidatos', JSON.stringify(updatedCandidatos));
//       console.log('Excluído - Candidato'+ item);
//   } catch (error) {
//     console.log('Erro ao excluir candidato:', error); 
//   }
// };

/*
************

************
*/

// export const getVotos = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('@votos');
//     if (jsonValue != null) {
//       return JSON.parse(jsonValue)
//     }
//     return [];
//   } catch (e) {
//     Alert.alert('Erro ao carregar',e.message);
//   }
// };
// export const setVotos = async (newVotos) => {
//   try {
//     const oldvotos = await getVotos();
//     oldvotos.push(newVotos)

//     const jsonValue = JSON.stringify(oldvotos);
//     await AsyncStorage.setItem('@votos', jsonValue);
    
//     console.log('Gravado: '+ jsonValue);
//   } catch (e) {
//     console.log('Erro ao gravar',e);
//   }
// };
// export const RemoveVotos = async () => {
//   try {
//     await AsyncStorage.removeItem('@votos')
//   } catch(e) {
//     // remove error
//   }

//   console.log('Limpo')
// }