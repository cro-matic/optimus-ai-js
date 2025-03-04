import axios, { AxiosResponse } from "axios";

export class OptimusAI {
  private apiKey: string;
  private static readonly BASE_URL =
    "https://api.useoptimus.ai/api/v1/deployments";

  constructor(apiKey: string) {
    if (!apiKey) throw new Error("API key is required");
    this.apiKey = apiKey;
  }

  async invoke<T>(endpoint: string, input: Record<string, any>): Promise<T> {
    const url = `${OptimusAI.BASE_URL}/${endpoint}`;
    try {
      const response: AxiosResponse<T> = await axios.post(url, input, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error in OptimusAI request:", error);
      throw error;
    }
  }
}
