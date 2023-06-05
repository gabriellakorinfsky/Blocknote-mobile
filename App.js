import { StyleSheet, ImageBackground, View} from 'react-native';
import Home from './src/components/Home';
import Inserir from './src/components/Inserir'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Cabecalho from './src/components/Cabecalho';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer> 
      <ImageBackground
        source={require('./assets/backgroundblack.png')}
      >
       <Cabecalho/>
      </ImageBackground>
      
                <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Inserir" component={Inserir} />
            </Stack.Navigator>
    </NavigationContainer> 
    
     
  );
}

const styles = StyleSheet.create({

});
