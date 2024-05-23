import typescriptEslintParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import tseslint from 'typescript-eslint';
import importAccess from "eslint-plugin-import-access/flat-config";

export default [
    {languageOptions: {
        parser: typescriptEslintParser,
        parserOptions: {
          project: true,
          sourceType: "module",
        },
      }
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
          "import-access": importAccess,
        },
    },
   {
       rules: {
            "import-access/jsdoc": ["error",{
              // defaultImportabilityをpackageに設定
              defaultImportability: 'package',
              // rules: [
              //   // {
              //   //   // ディレクトリ名と同じファイルからのインポートを許可
              //   //   from: 'src/sub', // ここを実際のディレクトリパスにする
              //   // }
              // ]
            }],
       }
   }
];