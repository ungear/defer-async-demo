export enum ScriptType {
  None,
  Defer,
  Async,
}

export interface Script {
  type: ScriptType,
  delay: number,
  id: number;
}