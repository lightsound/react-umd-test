export const STORAGE_KEY = "MPLPForm";
export const MPLP = window.MPLP;

declare global {
  interface Window {
    MPLP: {
      id: string;
      formUrl?: string;
      confirmUrl?: string;
    };
  }
}
