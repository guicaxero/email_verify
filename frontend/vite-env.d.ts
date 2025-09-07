/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_VERIFY_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
