import AsyncStorage from '@react-native-async-storage/async-storage';



class Storage {
    storeData = async (key,value) => {
        const newValue = JSON.stringify(value)
        try {
            const result = await AsyncStorage.setItem(key, newValue)
            console.log(result);
        } catch (e) {
          console.log(e);
        }
        }


        getData = async () => {

          let keys = []
          let result
          try {
            keys = await AsyncStorage.getAllKeys();
            result = await AsyncStorage.multiGet(keys);   
          } catch (error) {
            console.error(error)
          }

          return result;

          
          }

          remove = async ()=>{
            let keys= []
            try {
              AsyncStorage.clear()
              // keys = await AsyncStorage.getAllKeys()
              // const re = await AsyncStorage.multiRemove(JSON.stringify(keys))
              // console.log(re);
              
            } catch (error) {
              console.log(error);
              
            }
          }
}

export default Storage;