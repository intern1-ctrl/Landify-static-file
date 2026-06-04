/**
 * Landify API Service Configuration & Client
 * 
 * This service handles HTTP requests to the Landify staging backend,
 * automatically applying the required Authorization token and headers.
 */

// Staging Backend & Swagger Base URL Configuration
export const API_BASE_URL = 'https://landify-backend-stagging-services-612299373064.asia-south2.run.app';
export const SWAGGER_DOCS_URL = `${API_BASE_URL}/docs`;

// Swagger Credentials for staging/testing environment loaded dynamically from environment variables
const SWAGGER_USERNAME = import.meta.env.VITE_SWAGGER_USERNAME || 'landify-dev';
const SWAGGER_PASSWORD = import.meta.env.VITE_SWAGGER_PASSWORD || 'landify-dev@999';

// Safe dynamic generation of Basic Auth header using btoa
const getBasicAuthHeader = (): string => {
  try {
    return `Basic ${btoa(`${SWAGGER_USERNAME}:${SWAGGER_PASSWORD}`)}`;
  } catch (error) {
    console.error('Failed to generate Basic Auth header dynamically:', error);
    return 'Basic bGFuZGlmeS1kZXY6bGFuZGlmeS1kZXZAOTk5'; // Fallback to landify-dev:landify-dev@999
  }
};

// Default Headers as requested
export const DEFAULT_HEADERS: Record<string, string> = {
  'Authorization': getBasicAuthHeader(),
  'Content-Type': 'application/json',
};

// Define types for custom options
export interface FetchOptions extends Omit<RequestInit, 'headers'> {
  headers?: Record<string, string>;
  body?: any;
}

/**
 * Custom wrapper around native fetch that handles standard behavior,
 * prepends the base URL, and includes the default headers.
 * 
 * @param endpoint The path of the endpoint (e.g., '/contact' or 'farmers')
 * @param options Standard RequestInit configurations
 */
export async function apiRequest<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  // Normalize the endpoint format (ensuring a leading slash)
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE_URL}${normalizedEndpoint}`;

  // Merge custom headers with the default ones
  const headers = {
    ...DEFAULT_HEADERS,
    ...options.headers,
  };

  // If calling the farmers or enquiries endpoint, use the master bearer token
  if (normalizedEndpoint.includes('/farmers') || normalizedEndpoint.includes('/enquiries')) {
    const token = import.meta.env.VITE_MASTER_BEARER_TOKEN || import.meta.env.MASTER_BEARER_TOKEN || 'Lnd1fy@M@st3rMrk2025$Secure!K3y';
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Convert body to string if it is an object and content type is JSON
  let body = options.body;
  if (body && typeof body === 'object' && headers['Content-Type'] === 'application/json') {
    body = JSON.stringify(body);
  }

  const response = await fetch(url, {
    ...options,
    headers,
    body,
  });

  if (!response.ok) {
    let errorDetail = 'API Request Failed';
    try {
      const errorJson = await response.json();
      errorDetail = errorJson.detail || errorJson.message || errorDetail;
    } catch {
      try {
        errorDetail = await response.text() || errorDetail;
      } catch {}
    }
    throw new Error(errorDetail);
  }

  // Handle empty or text responses gracefully
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json() as Promise<T>;
  }

  return response.text() as unknown as Promise<T>;
}

// Convenient helper functions for standard REST operations
export const api = {
  get: <T = any>(endpoint: string, options?: FetchOptions) => 
    apiRequest<T>(endpoint, { ...options, method: 'GET' }),
  
  post: <T = any>(endpoint: string, body: any, options?: FetchOptions) => 
    apiRequest<T>(endpoint, { ...options, method: 'POST', body }),
  
  put: <T = any>(endpoint: string, body: any, options?: FetchOptions) => 
    apiRequest<T>(endpoint, { ...options, method: 'PUT', body }),
  
  delete: <T = any>(endpoint: string, options?: FetchOptions) => 
    apiRequest<T>(endpoint, { ...options, method: 'DELETE' }),
};

export default api;
