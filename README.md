# Fluyo Coding Test

## Features

- Expo SDK `47`
- [Supabase](https://github.com/supabase/supabase)
- [Zustand](https://github.com/pmndrs/zustand)
- [NativeBase](https://github.com/GeekyAnts/NativeBase)
- [React Navigation](https://github.com/react-navigation/react-navigation)
- [React Native Popover View](https://www.npmjs.com/package/react-native-popover-view)
- [React Native Toast Message](https://www.npmjs.com/package/react-native-toast-message)

## Installation

1. Clone this project

```bash
git clone https://github.com/i-mighty/fluyo-coding-test
```

2. Change into the directory and install the dependencies

```bash
cd fluyo-coding-test

yarn install
```

3. Update `/app/config/config.base.ts` with your own configuration, e.g.:
   (This step can be ignored. Valid supabase credentials are included)

```shell
# Replace XXXX's with your own Supabase keys
SUPABASE_URL: "XXXX",
SUPABASE_ANON_KEY: "XXXX",
```

4. Start the project:

- `yarn start`

## File Structure

```shell
Expo Starter/
├─ app/
│  ├─ components/
│  ├─ config/
│  ├─ constants/
│  ├─ hooks/
│  ├─ navigation/
│  ├─ screens/
│  ├─ services/
├─ assets/
│  ├─ fonts/
│  ├─ images/
├─ supabase/
│  ├─ functions/
│  ├─ types/
App.tsx

```

## Screens

Main screens:

- Test Screen

Made with ❤️ by Josiah Adegboye
