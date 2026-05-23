export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  error?: string;
}
