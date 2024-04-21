import axios, { AxiosInstance } from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";

const POKEMON_API = "https://api.pokemontcg.io/v2";

const pokemonInstance = axios.create({ baseURL: POKEMON_API });

interface GetConfig {
  params?: Record<string, string>;
  url?: string;
}
async function apiGet(instance: AxiosInstance, config: GetConfig) {
  return await instance.request({ method: "GET", ...config });
}

async function pokemonGet(config: GetConfig) {
  return await apiGet(pokemonInstance, config);
}

export function useGetPokemon<T = unknown>(config: GetConfig) {
  async function queryFn() {
    return await pokemonGet(config)
      .then((response) => ({
        res: response.data as T,
        ...response,
      }))
      .catch((error) => {
        throw new Error("get pokemon error");
      });
  }
  return useSuspenseQuery({ queryKey: ["pokemon", config], queryFn });
}
