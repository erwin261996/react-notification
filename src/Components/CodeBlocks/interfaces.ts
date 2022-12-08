type CodeKeys = "dependency" | "main" | "app" | "notification" | "badge";
type CodeTypes = "json" | "tsx";

export interface CodeString {
  key: CodeKeys;
  type: CodeTypes;
  title: string;
  code: string;
}
