import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red_dark: string,
      white: string,
      background: string,
      gray_line: string,
      text: string,
      text_highlight: string,
      title: string,
      red: string,
      green: string,
      green_dark: string,
      blue: string,
      blue_dark: string,
      blue_twitter: string,
    }
  }
}