/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { PaperProvider } from 'react-native-paper';
import { UserProvider } from './src/presentation/state/UserContext';

export const Main = () => {
    return (
        <UserProvider>
            <PaperProvider>

                <App />

            </PaperProvider >
        </UserProvider>

    );
}

AppRegistry.registerComponent(appName, () => Main);
