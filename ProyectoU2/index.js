import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent llama a AppRegistry.registerComponent('main', () => App);
// Asegura que el entorno se configure correctamente ya sea en Expo Go o build nativo.
registerRootComponent(App);
