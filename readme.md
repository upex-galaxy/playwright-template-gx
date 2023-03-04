<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![vscode-logo]][vscode-site] [![playwright-logo]][playwright-site] [![javascript-logo]][javascript-site] [![typescript-logo]][typescript-site]

<h1 align="center">🧪QA Automation: 🎭Playwright TypeScript📘</h1>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a>
    <img src="https://user-images.githubusercontent.com/91127281/215841865-9732a009-bb36-4742-a516-7c6dcf97114a.png" alt="Logo" width="" height="400">
  </a>

<h2 align="center">🧪PLAYPEX🧪</h2>

  <p align="center">
    <h3><strong>APRENDE Y GANA EXPERIENCIA TRABAJANDO EN UPEX GALAXY</strong></h3>
    <br />
    <a href="https://github.com/upex-galaxy/playwright-cucumber"><strong>PLAYWRIGHT AL GRANO »</strong></a>
    <br />
    <br />
    <a href="https://playwright.dev/docs/getting-started-vscode">Getting Started Docs »</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

# 🧪Framework: Playwright🎭

## 🏹ORGANIZACIÓN Y ESTRUCTURA DE PROYECTO

Ahora el Directorio de UPEX Galaxy, será mucho más simple.

# CÓMO EMPEZAR:

1. **📡 Clona el Repositorio del Proyecto**:
    ```
    git clone https://github.com/upex-galaxy/playwright-typescript.git
    ```
2. **❗💿 Instala todas las Dependencias del Proyecto**:
    ```
    npm ci
    ```
3. **🧪 Corre toda la Regresión de Pruebas para Verificar**:
    ```
    npm run regression
    ```
4. **📊 Puedes Generar siempre un Reporte de Pruebas con Allure**:
    ```
    npm run allure
    ```
5. **❗ Recuerda ACTUALIZAR tu Repo todos los días con**:

    ```
    primero corre:
    git fetch origin QA

    (opcional) para revisar los nuevos cambios entrantes:
    git diff origin/QA

    y luego para actualizar tu local branch:
    git merge origin/QA
    ```

---

# Command Lines para Playwright:

Opciones comunes disponibles en la línea de comando:

-   ### Ejecutar todas las pruebas

    `npx playwright test`

-   ### Ejecutar un solo archivo de prueba

    `npx playwright test tests/todo-page.spec.ts`

-   ### Ejecutar un conjunto de archivos de prueba

    `npx playwright test tests/todo-page/ tests/landing-page/`

-   ### Ejecutar archivos que tengan my-spec o my-spec-2 en el nombre del archivo

    `npx playwright test my-spec my-spec-2`

-   ### Ejecutar pruebas en la línea 42 de my-spec.ts

    `npx playwright test my-spec.ts:42`

-   ### Ejecutar la prueba con el título

    `npx playwright test -g "add a todo item"`

-   ### Ejecutar pruebas en navegadores con cabecera

    `npx playwright test --headed`

-   ### Ejecutar todas las pruebas contra un proyecto específico

    `npx playwright test --project=chromium`

-   ### Desactivar la paralelización

    `npx playwright test --workers=1`

-   ### Elija un informador

    `npx playwright test --reporter=dot`

-   ### Ejecutar en modo de depuración con el inspector de Playwright

    `npx playwright test --debug`

-   ### Pida ayuda
    `npx playwright test --help`

## TUTORIAL COMPLETO PASO A PASO CREACIÓN DE PROYECTO:

### LEE ESTA GUÍA: [PLAYWRIGHT AL GRANO](https://upexgalaxy9.atlassian.net/wiki/spaces/UG/pages/1083226)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[vscode-logo]: https://img.shields.io/badge/VSCode-black?logo=visualstudiocode&style=for-the-badge
[vscode-site]: https://code.visualstudio.com/
[playwright-logo]: https://img.shields.io/badge/Playwright-black?logo=playwright&style=for-the-badge
[playwright-site]: https://playwright.dev/docs/writing-tests
[javascript-logo]: https://img.shields.io/badge/JavaScript-black?logo=javascript&style=for-the-badge
[javascript-site]: https://www.javascript.com/
[typescript-logo]: https://img.shields.io/badge/TypeScript-black?logo=typescript&style=for-the-badge
[typescript-site]: https://www.typescriptlang.org

Visit https://playwright.dev/docs/intro for more information. ✨

# Happy hacking! 🎭
