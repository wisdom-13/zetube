import { useContext } from "react";
import { createContext } from "react";

export const YoutubeApiContext = createContext();

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}