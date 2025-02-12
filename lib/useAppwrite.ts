import { Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

interface UseAppwriteOptions<T> {
  fn: () => Promise<T>;
  skip?: boolean;
}

interface UseAppwriteReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useAppwrite = <T>({
  fn,
  skip = false,
}: UseAppwriteOptions<T>): UseAppwriteReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fn();
      setData(result);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false);
    }
  }, [fn]);

  useEffect(() => {
    if (!skip) {
      fetchData();
    }
  }, []);

  const refetch = async () => await fetchData();

  return { data, loading, error, refetch };
};