// Helper function to normalize API base URL
const normalizeApiBaseUrl = (url: string | undefined): string => {
  if (!url) {
    return 'https://mini-projeto-posgre-sql.vercel.app/';
  }
  
  // Remove trailing slash
  const trimmedUrl = url.trim().replace(/\/+$/, '');
  
  // If URL doesn't start with http:// or https://, prepend https://
  if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
    return `https://${trimmedUrl}/`;
  }
  
  // Ensure trailing slash
  return `${trimmedUrl}/`;
};

export const API_BASE_URL = normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL);
//export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'; 

export const FREQUENCY_OPTIONS: Array<'Diário' | 'Semanal' | 'Quinzenal' | 'Mensal'> = [
  'Diário',
  'Semanal',
  'Quinzenal',
  'Mensal',
];

