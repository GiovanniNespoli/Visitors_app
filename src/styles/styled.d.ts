import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type AppTheme = typeof theme;
  export interface DefaultTheme extends AppTheme {}
}
