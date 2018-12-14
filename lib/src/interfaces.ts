export interface LazyResult {
  path: string;
  loaded: boolean;
  status: 'ok' | 'error';
  error?: {};
}
