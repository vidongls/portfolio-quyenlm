import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const rules = {
  "@next/next/no-img-element": "off",
  "no-unused-vars": "off",
}

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript"), compat.rules(rules)]

export default eslintConfig
