type HTTPMethod =
  | "get"
  | "head"
  | "patch"
  | "post"
  | "put"
  | "delete"
  | "connect"
  | "options"
  | "trace";

interface RequestFetch {
  path: string;
  method: HTTPMethod;
  body?: object;
  encodedBody?: { [key: string]: string };
  baseURL?: string;
}

export async function useImageFetch<T>(request: RequestFetch): Promise<T> {
  try {
    const response = await $fetch<T>(request.path, {
      method: request.method,
      baseURL: "http://127.0.0.1:2500",
      body: request.body,
      retry: 3,
      retryDelay: 500,
    });

    return response;
  } catch (error: any) {
    throw error.data;
  }
}
