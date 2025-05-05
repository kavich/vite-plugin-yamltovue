import type { Plugin } from "vite";
import { load, DEFAULT_SCHEMA } from 'js-yaml';
export interface molPluginOptions {
    inputDir?: string;
    outputDir?: string;
  }
  

export default function yamltovue(options: molPluginOptions = {}): Plugin {
    return {
        name: 'vite-plugin-yamltovue',
        async buildStart() {
            
        }
    }
}
