/// <reference types="vite/client" />

declare module "*.pdf" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
