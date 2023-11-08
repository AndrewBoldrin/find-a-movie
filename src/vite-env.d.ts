/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string
  readonly VITE_API_KEY: string
  readonly VITE_API_TOKEN: string

  readonly VITE_FIREBASE_APIKEY: string
  readonly VITE_FIREBASE_AUTHDOMAIN: string
  readonly VITE_FIREBASE_PROJECTID: string
  readonly VITE_FIREBASE_STORAGEBUCKET: string
  readonly VITE_FIREBASE_MESSAGINGSENDERID: string
  readonly VITE_FIREBASE_APPID: string
  readonly VITE_FIREBASE_MEASUREMENTID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
