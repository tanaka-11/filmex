# Aplicativo de Filmes com React Native

Aplicativo multiplataforma nativo criado com React Native e Expo.

## Instalações Necessárias

- **Extensão ES7+** para facilitar a programação dos componentes
- **Biblioteca de Icones:** `npm install @expo/vector-icons`
- **Biblioteca de Fontes:** `npx expo install expo-font` ou **_expo google fonts_**
- **Biblioteca de SplashScreen:** `npx expo install expo-splash-screen`
- **Biblioteca de Navegação:** `npm install @react-navigation/native`

## Como utilizar as fontes adicionais

- Download do arquivo de font (Formato TTF ou OTF)
- Colocar na pasta `assets/fonts`
- Instalação da biblioteca de fontes
- Importação com auxilio dos hooks `useFonts` e `useCallback`

Mais detalhes na documentação do Expo Fonts no link

- **https://docs.expo.dev/versions/latest/sdk/font/**

- **https://docs.expo.dev/versions/latest/sdk/splash-screen/**

## Gerenciamento dos recursos de navegação

É necessário utilizar uma biblioteca como **React Navigatiom** ou **Expo Router**.
Atualmente (Fevereiro/2024) a mais usada e utilizada como padrão é a **React Navigation**

Mais detalhes nas documentações

- React: **https://reactnavigation.org/**

- Expo: **https://docs.expo.dev/router/installation/#quick-start**

### Como utilizar o React Navigation com navegação Stack

#### Dependências para navegação:

- `npx expo install react-native-screens react-native-safe-area-context`

- Mecanismo de navegação: `npm install @react-navigation/native-stack`

#### Programação utilizada:

No `App.js` fizemos a importação do `NavigationContainer` e `createNativeStackNavigator`, em seguida os configuramos para determinar as telas `Stack.Screen` e seus componentes correspondentes (Home, Privacidade e Sobre).
