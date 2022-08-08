#!/usr/bin/env python3

"""
Creates a new package.

=====================================

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
from os import makedirs, mkdir
import sys


""" 
    with open("i18n/index.ts", "w") as f:
        f.write("")
    with open("i18n/fr.json", "w") as f:
        f.write("")
    with open("i18n/en.json", "w") as f:
        f.write("")
    with open("hooks/index.ts", "w") as f:
        f.write("")
    with open("hooks/usePackageName.tsx", "w") as f:
        f.write("")
    with open("components/index.ts", "w") as f:
        f.write("")
    with open("components/PackageName.tsx", "w") as f:
        f.write("")
    with open("index.ts", "w") as f:
        f.write("")


 """
import os
import sys

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

    mkdir("hooks")
    with open("hooks/.gitkeep", "w") as f:
        f.write("")

def create_i18n_folder():
    mkdir("i18n")
    with open("i18n/index.ts", "w") as f:
        f.write('import en from "./en.json";\nimport fr from "./fr.json";\n\nexport { en, fr };\n')
    with open("i18n/fr.json", "w") as f:
        f.write('{\n  "hello": "Monde"\n}')
    with open("i18n/en.json", "w") as f:
        f.write('{\n  "hello": "World"\n}')
    with open("index.ts", "w") as f:
        f.write('export * as i18n from "./i18n";\n\n')

def create_components_folder(component_name):
    component_name = component_name.capitalize()

    mkdir("components")
    with open("components/" + component_name + ".tsx", "w") as f:
        f.write('/** @jsxImportSource @emotion/react */\nimport { css } from "@emotion/react";\nimport { FC } from "react";\nimport { Container } from "react-bootstrap";\nimport { useTranslation } from "react-i18next";\n\nexport const ' + component_name + ': FC = () => {\n  const { t } = useTranslation("' + component_name + '");\n\n  return (\n    <Container\n      css={css`\n        padding: 5vw;\n      `}\n    >\n      <h1>' + component_name + ' page</h1>\n      <p>{t("hello")}</p>\n    </Container>\n  );\n};')
    with open("components/index.ts", "w") as f:
        f.write('export { ' + component_name + ' } from "./' + component_name + '";')
    with open("index.ts", "a") as f:
        f.write('export { ' + component_name + ' } from "./components";')

def main():
    package_name = sys.argv[1]
    os.makedirs("client/src/" + package_name, 493)
    os.chdir("client/src/" + package_name)

    create_git_keep_folders()
    create_i18n_folder()
    create_components_folder(package_name)

    print("Created client/src/" + package_name + " successfully")

if __name__ == '__main__':
    main()