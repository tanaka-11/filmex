# Aplicativo de Filmes com React Native

Aplicativo multiplataforma nativo criado com React Native e Expo.

## Instalações Necessárias

- **Extensão ES7+** para facilitar a programação dos componentes `rnfs`
- **Biblioteca de Icones:** `npm install @expo/vector-icons`
- **Biblioteca de Fontes:** `npx expo install expo-font` ou **_expo google fonts_**
- **Biblioteca de SplashScreen:** `npx expo install expo-splash-screen`
- **Biblioteca de Navegação:** `npm install @react-navigation/native`
- **Biblioteca para Fetch com Promisses:** `npm install axios`

---

## Como utilizar as fontes adicionais

- Download do arquivo de font (Formato TTF ou OTF)
- Colocar na pasta `assets/fonts`
- Instalação da biblioteca de fontes
- Importação com auxilio dos hooks `useFonts` e `useCallback`

Mais detalhes na documentação do Expo Fonts no link

- **https://docs.expo.dev/versions/latest/sdk/font/**

- **https://docs.expo.dev/versions/latest/sdk/splash-screen/**

---

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

---

## Eventos de busca com a biblioteca axios

### Consumo de dados com a api e axios

- Cadastro na API TheMovieDB
- Criação de uma chave de API (API Key)
- Configuração de variável ambiente através do arquivo .env contendo a API Key via Expo. (arquivo ENV são ignorados no versionamento)

---

- Instalação da lib **Axios**
- Configuração do `services/api-moviedb.js` contendo a programação de acesso da API para uso no aplicativo

---

- `onChangeText` no `TextInput` para captura em tempo real do nome do filme digitado e sua atualização no `state` utilizando a função `filmeDigitado`.
- `onPress` no `Pressable` para acionamento da função `aoPressionarProcurar`
- `OnSubmitEditing` no `TextInput` para tambem acionamento da função `aoPressionarProcurar`

### Exibição dos resultados

- Utilização do componente `FlatList` para listagem dinâmica dos resultados
- Criação do componente `CardFilme` com uso da props (`filme`) com carregamento do `title` e do `poster_path` (imagem) com condicional (se existe ou não a imagem) de cada filme
- Loading usando `ActivityIndicator`
- Em `Resultados`, aplicamos na `FlatList` componentes personalizador em caso de não haver filmes na busca (`ListaVazia/ListEmptyComponent`) e (`Separador/ItemSeparatorComponent`) para separar cada elemento da `FlatList`

## Tela de Detalhes do filme

- Adição dela ao `Stack` em `App.js`
- Em `CardFilme`, utilizamos o hook `useNavigation` para a funcionalidade do botão **Leia Mais** (Navegação de tela para componente)
- Dentro da sua `Stack`, adicionamos a props `options` configurada com um `Pressable` responsável por permitir a navegação direta para a tela `Home`

## Tela de Favoritos

- Utilizamos uma lib do Expo chamada `AsyncStorage` que nos permite armazenar dados **offline** em formato `string` no dispositivo do usuário.

## Roteiro geral para o Build com o Expo com CLI do Node

1. Acessar a conta Expo e criar um projeto no Expo EAS `https://expo.dev/accounts/tanaka-11/projects`
2. Instalar o eas-cli
3. Adicionar o id do projeto ao aplicativo
4. Verificar conta logada `eas whoami` caso não esteja logado `eas login` ou quiser deslogar `eas logout`
5. Configurar o build (compilação): `eas build:configure` e escolha a opção `android`
6. Ajustar o arquivo gerado `eas.json`, modificar o `preview` com o codigo abaixo

```json
"developmentClient" : true,
    "android" : {
        "buildType": "apk",
        "gradleCommand": ":app:assembleRelease"
    },
```

7. Iniciar o processo de build `eas build --profile preview`
