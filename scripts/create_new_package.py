#!/usr/bin/env python3

"""
Creates a new package.

=====================================

Command:
* create_new_package.py <package_name>

It supports 1 argument:
* packageName

Expected result:
* Creates a new package with the name packageName
create a tree as follows:

```
📦 client
└─ src
   └─ packageName
      ├─ assets
      │  └─ .gitkeep
      ├─ interfaces
      │  └─ .gitkeep
      ├─ services
      │  └─ .gitkeep
      ├─ i18n
      │  ├─ index.ts
      │  ├─ fr.json
      │  └─ en.json
      ├─ helpers
      │  └─ .gitkeep
      ├─ hooks
      │  └─ .gitkeep
      ├─ components
      │  ├─ index.ts
      │  └─ PackageName.tsx
      └─ index.ts
```
"""
import sys
import os
from os import makedirs, mkdir

def create_git_keep_folders():
    # Add a .gitkeep file to each folder
    mkdir("assets")
    with open("assets/.gitkeep", "w") as f:
        f.write("")

    mkdir("interfaces")
    with open("interfaces/.gitkeep", "w") as f:
        f.write("")

    mkdir("services")
    with open("services/.gitkeep", "w") as f:
        f.write("")

    mkdir("helpers")
    with open("helpers/.gitkeep", "w") as f:
        f.write("")

def create_hooks_folder(component_name):
    mkdir("hooks")
    with open('hooks/use' + component_name + '.tsx', "w") as f:
        f.write('import { useTranslation } from "react-i18next";\n\nimport { usePageTitle } from "../../core";\n\nexport const use' + component_name + ' = () => {\n  const { t } = useTranslation("' + component_name + '"\n);\n  usePageTitle(t("title"));\n};\n')
    with open('hooks/index.ts', "w") as f:
        f.write('export { use' + component_name + ' } from "./use' + component_name + '";\n')

def create_i18n_folder(component_name):
    mkdir("i18n")
    with open("i18n/index.ts", "w") as f:
        f.write('import en from "./en.json";\nimport fr from "./fr.json";\n\nexport { en, fr };\n')
    with open("i18n/fr.json", "w") as f:
        f.write('{\n  "title": "' + component_name + '"\n}\n')
    with open("i18n/en.json", "w") as f:
        f.write('{\n  "title": "' + component_name + '"\n}\n')
    with open("index.ts", "w") as f:
        f.write('export * as i18n from "./i18n";\n')

def create_components_folder(component_name):
    mkdir("components")
    with open("components/" + component_name + ".tsx", "w") as f:
        f.write('/** @jsxImportSource @emotion/react */\nimport { css } from "@emotion/react";\nimport { FC } from "react";\nimport { Container } from "react-bootstrap";\nimport { useTranslation } from "react-i18next";\n\nimport { use' + component_name + ' } from "../hooks";\n\nexport const SignUpPage: FC = () => {\n  const { t } = useTranslation("SignUpPage");\n\n  use' + component_name + '();\n\n  return (\n    <Container\n      css={css`\n        padding: 5vw;\n      `}\n    >\n      <h1>SignUpPage page</h1>\n      <p>{t("title")}</p>\n    </Container>\n  );\n};\n')
    with open("components/index.ts", "w") as f:
        f.write('export { ' + component_name + ' } from "./' + component_name + '";\n')
    with open("index.ts", "a") as f:
        f.write('export { ' + component_name + ' } from "./components";\n')

def main():
    package_name = sys.argv[1]
    os.makedirs("client/src/" + package_name, 493)
    os.chdir("client/src/" + package_name)
    
    component_name = package_name[:1].upper() + package_name[1:]

    create_git_keep_folders()
    create_i18n_folder(component_name)
    create_components_folder(component_name)
    create_hooks_folder(component_name)

    print("Created client/src/" + package_name + " successfully")

if __name__ == '__main__':
    main()
