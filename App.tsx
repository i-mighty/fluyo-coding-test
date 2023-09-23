import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, useToast } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./app/hooks/useCachedResources";
import useColorScheme from "./app/hooks/useColorScheme";
import Navigation from "./app/navigation/RootNavigator";
import { theme } from "./app/theme";
import Toast from "react-native-toast-message";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const toast = useToast();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme} isSSR={false}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </NativeBaseProvider>
        </SafeAreaProvider>
        <Toast />
      </>
    );
  }
}
