export type BuildModeType = "production" | "development";
export interface BuildPathsType {
  entry: string;
  build: string;
  html: string;
}
export interface BuildOptions {
  mode: BuildModeType;
  paths: BuildPathsType;
}
