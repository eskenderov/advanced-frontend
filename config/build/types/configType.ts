export type BuildModeType = "production" | "development";
export interface BuildPathsType {
  entry: string;
  build: string;
  html: string;
}
export interface BuildOptions {
  mode: BuildModeType;
  paths: BuildPathsType;
  port: number;
  isDev: boolean;
}

export interface envType {
  port: number;
  mode: BuildModeType;
}
