declare module 'express-react-views' {
  interface EngineOptions {
    doctype?: string;
    beautify?: boolean;
    transformViews?: boolean;
    babel?: Record<string, any>;
  }
  function createEngine(options?: EngineOptions): (filePath: string, options: object, callback: (err: Error | null, rendered?: string) => void) => void;
}