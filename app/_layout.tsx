import FontAwesome from '@expo/vector-icons/FontAwesome';
import { configureFonts, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    'DM-Sans': require('@/assets/fonts/DMSans.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const fontConfig = {
    customVariant: {
      fontFamily: Platform.select({
        web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        android:'DM-Sans',
        ios: 'DM-Sans',
        default: 'sans-serif',
      }),
      // fontWeight: '400',
      // letterSpacing: 0.5,
      // lineHeight: 22,
      // fontSize: 20,
    }
  };

  let theme = {
    ...MD3LightTheme,
    fonts: configureFonts({config: fontConfig}),
  };
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme} >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="camera" options={{ headerShown: false }} />
          <Stack.Screen name="result" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
