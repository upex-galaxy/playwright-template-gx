<!--! MODELO STANDARD de UPEX para Testing Automation (TAUS) -->
# 🧪 Testing Automation - Playwright (TS) 👨🏻‍🚀 CI/CD

[![🧪Pipeline Regression in QA](https://github.com/upex-galaxy/upex-playwright-demo/actions/workflows/regression.yml/badge.svg)](https://github.com/upex-galaxy/upex-playwright-demo/actions/workflows/regression.yml)
<!-- PROJECT LOGO -->
![UPEX_Playwright](https://user-images.githubusercontent.com/91127281/215841865-9732a009-bb36-4742-a516-7c6dcf97114a.png)

<!-- Workspace (Require-Badge) -->
[![vscode-logo]][vscode-site]
[![jira]][jira-docu]
<!-- CI Tool (Require-Badge) -->
[![github-actions]][github-actions-docu]
<!-- Programming Language -->
[![typescript-logo]][typescript-site]
<!-- Testing Frameworks -->
[![playwright-logo]][playwright-docu]
<!-- Package Manager -->
[![node-logo]][node-site]
[![yarn]][yarn-docu]
<!-- Integrations -->
[![eslint]][eslint-site]
[![allure]][allure-docu]

Este repositorio contiene un marco de automatización de pruebas para el proyecto **Playwright (TS)**. El marco está diseñado para ejecutar pruebas de regresión, pruebas de humo y pruebas de integración en un entorno de CI/CD. El marco de automatización está construido con las mejores prácticas y patrones de diseño para garantizar la escalabilidad, mantenibilidad y reutilización del código de prueba.

## Requisitos para Usar el Repositorio

Antes de comenzar a trabajar con el repositorio, asegúrate de cumplir con los siguientes requisitos de software. Estos son esenciales para garantizar un entorno de trabajo fluido y compatible con los estándares de UPEX.

1. **Instalar el Controlador de Versiones y la Terminal**

   - **Git**: Instala Git para la gestión de versiones y colaboración en el repositorio. Es fundamental para clonar, ramificar y contribuir al proyecto.
      - [Instalar Git](https://git-scm.com/downloads)
   - **Terminal de Git (Git Bash)**: Recomendado para usuarios de Windows. Ofrece una experiencia de terminal similar a Unix, facilitando la ejecución de comandos.
      - [Instalar Git Bash](https://gitforwindows.org/)

2. **Instalar el Entorno de Desarrollo**

   - **Visual Studio Code (VSCode)**: El workspace ideal para trabajar localmente en proyectos de automatización de pruebas. VSCode ofrece una integración perfecta con Git, depuración avanzada y un ecosistema robusto de extensiones.
      - [Instalar VSCode](https://code.visualstudio.com/)

3. **Instalar el Gestor de Paquetes y Dependencias**

   Dependiendo del framework de automatización utilizado en el repositorio, asegúrate de instalar el **Package Manager** adecuado para lenguaje de programación y framework de pruebas:

   - **Para Frameworks con JavaScript/TypeScript:**
      - **Node.js**: Requerido si el proyecto utiliza frameworks como WebdriverIO, Cypress, Playwright o SeleniumJS. Instalando Node.js, obtendrás automáticamente npm como gestor de paquetes y JavaScript runtime.
         - [Instalar Node.js (Versión LTS)](https://nodejs.org/)
      - **Gestor de Paquetes Node**: Identifica cuál es el gestor de paquetes adecuado para el repositorio inspeccionando el archivo de bloqueo (`.lock`) en el directorio raíz. Esto te indicará si debes usar `npm`, `pnpm` o `yarn` para ejecutar los scripts del proyecto.
         - **yarn**: Si ves `yarn.lock`, usas `yarn`.
            - Instalación: `npm install -g yarn`
         - [Ver una Comparación entre estos Gestores](https://pnpm.io/feature-comparison)

4. **CLI del Framework de Automatización**
   Por último, asegúrate de instalar la CLI específica del framework de automatización utilizado en el proyecto (preferiblemente de forma global porque podrías necesitarla en diferentes proyectos):
   - **Playwright**: `npm install -g playwright`

---

## Getting Started

Pasos generales para comenzar a trabajar con el repositorio:

1. **Clona este repositorio**:

   ```bash
   git clone {{REPO_URL}} --depth=1
   ```

2. **Navega hasta el directorio del proyecto**:

   ```bash
   cd {{REPO_FOLDER}}
   ```

   >[!TIP]
   > Puedes arrastrar la carpeta del repo hacia dentro del Editor de VsCode para hacer lo mismo

3. **Instala las dependencias con el CLI del package manager**:

   ```bash
   {{package}} install
   ```

4. **Crear el archivo `.env` para guardar tus Variables de Environment**:
   Si el proyecto necesita variables de Ambiente, crea tu archivo `.env` en la directorio root del proyecto para guardar las variables de environment (revisa el el archivo de config del framework para ver qué necesitas) y agregarlo al `.gitignore`.

5. **Conoce y ejecuta scripts del `package.json`**:
   Cada repositorio tiene scripts predefinidos para ejecutar pruebas, suites, y reportes.
   Revisa el archivo `package.json` para ver los scripts disponibles para ejecutar en la terminal.

---

## **📝 Plan de Repositorio QA Automation**

A continuación se presenta el Plan completo de uso del Repositorio de UPEX. Es fundamental seguir todas las directrices y lineamientos establecidos en este documento para garantizar un trabajo eficiente y de calidad en el ámbito de QA Automation. El cumplimiento de estos lineamientos es esencial para el éxito de los proyectos y la mejora continua de los procesos de automatización de pruebas. ¡Tu compromiso y dedicación en seguir estas pautas son clave para el logro de los objetivos establecidos!

### 🛠️ Proceso de Contribución al Repositorio (Flujo de Git)

1. **Crea una Nueva Rama (Nomenclatura de Branching)**

   Antes de comenzar a trabajar, crea una nueva rama para tu tarea o funcionalidad.
   Puedes crear la rama con el comandos `git branch` (para crearlo sin moverte) o `git checkout -b` (para crearlo y moverte a la rama).
   Recuerda crear la rama de tarea siguiendo las Buenas Prácticas y Nomenclaturas de Git bajo el siguiente formato de Nombre de Branch:
      - **Tipo de Branch (type)**:
         - `feature`: tarea de nueva funcionalidad
         - `fix`: tarea de corrección de errores
         - `docs`: tarea de documentación
         - `style`: tarea de estilos
         - `refactor`: tarea de refactorización
         - `test`: tarea de pruebas
         - `chore`: tarea de mantenimiento
      - **ID de Jira (jiraID)**: puede ser el ID de la Tarea o Story (si aplica la trazabilidad), colocándolo después del type, ejemplo `test/GX3-123/`
      - **Nombre de la Rama (branch-name)**: debería ser el mismo nombre de la Tarea o Story (resumido si es largo), en minúsculas y separado por guiones, ejemplo `buy-product`
      - **Formato del Branch**: `"type/jiraID/branch-name"` (cada parte debería estar separada por una barra `/`)
      - **Ejemplo**:

         ```bash
         git checkout -b test/GX3-123/buy-product
         ```

2. **Realiza Cambios (Git Add) y Comitea (Nomenclatura de Commiting)**

   Realiza los cambios necesarios en tu rama y añade los archivos modificados al staging area:

   ```bash
   git add .
   ```

   Realiza un commit con un mensaje claro y descriptivo siguiendo las Buenas Prácticas y Nomenclaturas de Git bajo el siguiente formato de mensaje de commit:
      - **Tipo de Commit (type)**:
         - `feat`: Nuevas features o módulos
         - `fix`: Corrección de errores
         - `docs`: Cambios en la documentación
         - `style`: Cambios en el estilo del código
         - `refactor`: Refactorización del código
         - `test`: Añadir o modificar pruebas
         - `chore`: Tareas de mantenimiento
      - **ID de Jira (jiraID)**: Puede ser el ID de la Tarea o Story (si aplica la trazabilidad), encerrado con paréntesis, ejemplo `(GX3-123)`
      - **Descripción (Desc)**: Verbo en infinitivo + objeto del cambio
      - **Formato del Mensaje**: `"tipo: (jiraID) Desc"`
      - **Ejemplo**:

         ```bash
         git commit -m "test: (GX3-123) add 2 test cases for the login page"
         ```

> [!TIP]
> Recomandamos leer [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))

3. **Actualiza tu Rama (Git Pull)**

   Asegúrate de que tu rama esté actualizada con la rama de integración principal (`QA`):

   ```bash
   git pull origin QA
   ```

> [!IMPORTANT]
> Esto te permitirá resolver cualquier conflicto que pueda surgir antes de subir tus cambios.
> Es importante mantener tu rama actualizada con la rama principal para evitar conflictos y asegurar una integración fluida.

4. **Sube tu Rama al Repositorio Remoto (Git Push)**

   Pushea tu rama al repositorio remoto:

   ```bash
   git push origin nombre-de-la-rama
   ```

> [!IMPORTANT]
> Recuerda que es importante subir tu rama al repositorio remoto para que el equipo pueda revisar tus cambios y realizar la integración.

5. **Crea un Pull Request (PR)**

   Una vez que hayas subido tu rama, crea un Pull Request (PR) en GitHub usando el Template predefinido.
   - **Importante**: Cuando crees un PR, se generará automáticamente un template predefinido. Asegúrate de completar todos los campos requeridos en el template para una correcta revisión del PR (El mismo template de Pull Request está disponible en cada repositorio)

> [!TIP]
>
> - Si quieres saber cómo es el template del PR, lo puedes ver en `docs/pull_request_template.md` en el Repo. Sin embargo, no es necesario copiarlo, ya que se generará automáticamente en tu PR.
> - Recuerda agregar una evidencia de tus resultados de prueba en la sección de "Test Results" del PR. Puedes incluir capturas de pantalla o un enlace al reporte de Allure o al pipeline de SanityTest.

6. **Revisión y Merge**

   El equipo revisará tu PR. Es posible que recibas comentarios o solicitudes de cambio.
   Una vez que el PR sea aprobado, se integrará a la rama `QA` siguiendo el flujo de trabajo establecido.

---

### 🧪 Estrategias para Continuous Integration (CI/CD): GitHub Actions

Este repositorio está configurado para ejecutar pruebas automatizadas mediante diferentes estrategias de ejecución de pruebas utilizando GitHub Actions:

- Ejecutar las pruebas de Sanity (cualquier directorio de pruebas o una suite de pruebas específica) con el pipeline `sanity.yml` (puedes importar los resultados de las pruebas a XRay con este).
- Ejecutar las pruebas de `Smoke` y `Regression` con el pipeline `regression.yml`.

#### **> PIPELINES:**

- **SanityTest** (Activación manual):

    - Esta es una estrategia de ejecución de pruebas para verificar una suite de pruebas específica. Por ejemplo, si solo quieres validar que el conjunto de pruebas para un Módulo de la App funcione como se espera.
    - **Ejecutar**: cualquier tipo de prueba o suite para verificar módulos específicos de la aplicación.
    - **Cuándo**:
        - Se puede activar manualmente desde la interfaz "Run Workflow" de GitHub Actions.

- **SmokeTest** (Activación manual o verificación de Pull-Request):

    - Esta es una estrategia de ejecución de pruebas para verificar los módulos principales de la aplicación. Por ejemplo, antes de ejecutar las pruebas de regresión, queremos asegurarnos de que los módulos principales funcionen como se espera (las principales características de la aplicación deberían funcionar).
    - **Ejecutar**: Pruebas de API o pruebas E2E para verificar los módulos principales de la aplicación.
    - **Cuándo**:
        - Se puede activar manualmente desde la interfaz "Run Workflow" de GitHub Actions.
        - Se puede configurar para que se active automáticamente después de un Deploy de Dev.

- **RegressionTesting** (Activación manual o recomendado después de Smoke):

    - Esta es una estrategia de ejecución de pruebas para verificar todos los módulos de la aplicación. Por ejemplo, después de ejecutar las pruebas de Smoke (los módulos principales funcionan), queremos validar que el resto de las módulos y funcionalidades funcionen como se espera (todos los componentes deberían funcionar).
    - **Ejecutar**: Todas las pruebas candidatas para verificar la mayoría de las características de la aplicación.
    - **Cuándo**:
        - Se puede activar manualmente desde la interfaz "Run Workflow" de GitHub Actions.
            - Comienza siempre luego de un Job de SmokeTest exitoso en el mismo Pipeline de Regresión
        - Se puede configurar para que se active automáticamente cuando se abra un Pull-Request para verificar los nuevos cambios antes del merge.
        - Se puede configurar para que se active automáticamente después de que se hiciera merge los nuevos cambios en la rama principal.
        - Se puede configurar para ejecutarse en un horario específico.

#### **> Manual Trigger de los PIPELINES**

- Directamente en GitHub Actions, puedes activar manualmente el pipeline de Sanity especificando ciertos valores en la interfaz "Run Workflow".
- Para ejecutar manualmente los pipelines, sigue estos pasos:
  1. Navega a la pestaña "Actions" en GitHub.
  2. Selecciona el pipeline que deseas ejecutar (SanityTest, RegressionTesting).
  3. Haz clic en "Run workflow" y configura los parámetros requeridos:
      - Branch: Selecciona la rama desde donde quieres ejecutar las pruebas.
      - OS: Selecciona el sistema operativo.
      - Environment: Elige el ambiente de pruebas (QA, staging, etc.).
      - Test Suite: Especifica la suite que deseas ejecutar colocando el path del archivo.
      - Test Execution ID: Especifica el id del TX de Jira para importar resultados a Jira Xray
      - Project Key: Elige el proyecto de tu TX como requisito final (GX3 es casi siempre)
- **Run Workflow Config**:

  ```yml
   inputs:
   system:
      description: 🚀Select the OS
      required: true
      default: 'ubuntu-latest'
      type: choice
      options:
      - ubuntu-latest
      - ubuntu-22.04
      - macos-latest
      - windows-latest
   environment:
      description: 🚀Select the Test Environment
      required: true
      default: 'QA'
      type: choice
      options: #? Orden de Deployments...
      - DEV #? donde los developers work
      - SANDBOX #? donde los QA realizan smoke y exploratory testing.
      - QA #? donde los QA realizan smoke, sanity y regression testing.
      - STAGING #? donde los QA realizan smoke, sanity o regression testing.
      - UAT #? donde los beta testers realizan acceptance testing.
      - PROD #? donde los usuarios finales usan la App.
   test_run:
      description: 🚀Select the Test Suite to Run
      required: true
      default: 'test/specs/another.e2e.ts' #! Example.
      type: string
   xray_tx:
      description: 🚀Enter the Test Execution ID
      required: true
      default: 'GX3-1526' #! Example.
      type: string
   xray_project:
      description: 🚀Select the Project Key
      required: true
      default: 'GX3' #! Example.
      type: choice
      options:
      - GX1
      - GX2
      - GX3
      - GX4
   ```

> [!NOTE]
> No necesitas cambiar el archivo yml en el repositorio, simplemente utiliza la interfaz "Run Workflow" de GitHub Actions para seleccionar la Suite de Pruebas y el ID de Ejecución de Pruebas de XRay para importarlo a Jira.

#### **> Acciones Extras de los PIPELINES:**

- **Guardar capturas de pantalla** de las pruebas fallidas y subirlas como artefacto de CI
- **Guardar cada archivo de log** en una carpeta y subirlo como artefacto de CI
- **Importar automáticamente los resultados** de las pruebas a XRay con los argumentos dados.
- **Desplegar el Report de Allure** en la rama de GitHubPages (para que puedas ver los resultados en vivo).
- **Enviar una notificación de Slack** (de UPEX) para mostrar un resumen general en el canal de GitHub.

---

### 🧪 Estrategias para Reporte de Pruebas: "Allure History"

Este repositorio utiliza Allure Report para generar reportes detallados de las pruebas ejecutadas.
Los reportes de Allure se generan y se despliegan automáticamente en GitHub Pages después de cada Pipeline.

#### > Dónde ver el Reporte de Allure en GitHub Pages

- Los reportes se pueden visualizar directamente desde el GitHub Pages del Repo:
    - **Para ver el Reporte de Regresión**: Debes ir a la URL de GitHub Pages, en la url principal, disponible cuando termine el Pipeline de RegressionTesting y se ejecute el Deploy.
    - **Para ver el Reporte de SanityTest de tu XRay Test Execution (TX)**: Debes ir al endpoint `sanity/{{xray_tx_id}}` de la URL de GitHub Pages, disponible cuando termine el Pipeline de SanityTest y se ejecute el Deploy.

#### > Cómo ver el Reporte de Allure localmente

1. Asegúrate de tener instalada la CLI de Allure (se necesita JAVA_HOME): [Instalar CLI de Allure](https://docs.qameta.io/allure/#_installing_a_commandline)
2. Ejecuta las pruebas que prefieras
3. Genera y abre el informe de Allure simplemente ejecutando: `pnpm run allure:report`

---

### 🧪 Estrategias y Nomenclaturas para Desarrollo de Pruebas (Archivos)

Para mantener la consistencia y claridad en los repositorios de UPEX, sigue estas guías de estructura y nomenclatura (Los ejemplos pueden variar dependiendo del Lenguaje de Programación y Framework)

#### > **Estructura: Page Object Model (POM) (Patrón de Diseño):**

- Directorio: `.../pageobjects` o `.../pages`
- Nomenclatura: **PascalCase** o **snake_case** según el lenguaje:
    - Para Node (JS/TS): `**Page.js` / `**Page.ts` - ejemplo: `LoginPage.ts`
        - Estructura básica de POM en **Playwright con Typescript:**

          ```typescript
          import { Page } from '@playwright/test';
          export class LoginPage {
            // Tipado de Elementos de la Página
            usernameInput: Locator;
            constructor(page: Page) {
                // Elementos de la Página
                this.page = page;
                this.loginButton = this.page.locator('[form="login"]');
            }
            async submitLogin() { // Método de Acción
                await this.loginButton.click();
            }
          }
          ```

> [!TIP]
>
> - **Propiedades de la Clase son equivalentes a Elementos y Atributos del Page**: Procura usar métodos de localización estratégicos para simplificar el uso de selectores del Framework. Apoya tu POM con los métodos de Test Utility (Locators) para mantener un código limpio y reutilizable.
> - **Métodos de la Clase son equivalentes a Métodos de Acción del Page**: Manten una nomenclatura clara y descriptiva para los métodos de acción en el POM. Usa verbos en infinitivo para describir las acciones que realiza el método como si fuera una instrucción.
> - **Técnica Shortcut**: Puedes crear un método que realice varias acciones en una sola llamada para simplificar el uso del POM. Por ejemplo, un método `login` que realice el llenado de credenciales y el envío del formulario de login.

#### > **Estructura: API Modules (Patrón de Diseño):**

- Directorio: `test/api`
- Carpeta de Interfaces Typescript: `test/api/types`
- Nomenclatura: **PascalCase** con sufijo `.Api.ts` (ejemplo: `Subscriptions.Api.ts`)
- **La Estructura es similar a un Page Object, pero con métodos para realizar peticiones HTTP**.

#### > **Estructura: Test Utility Modules (Locators, Actions, Assertions):**

- Directorio: `test/utils`
- Definición de cada Módulo de Utilidad de Prueba:
    - **Locators**: Métodos para localizar elementos de la página.
    - **Actions**: Métodos para realizar acciones en la página.
    - **Assertions**: Métodos para validar resultados y estados de la página.

> [!NOTE]
> Los Frameworks modernos como Cypress, Playwright y WebdriverIO tienen métodos y funciones integradas para realizar estas acciones y validaciones, por lo que no es necesario crear módulos de utilidad personalizados a menos que sea necesario para métodos específicos que no estén disponibles en el Framework o requiera más personalización situacional.

#### > **Estructura: Técnicas de Test Management (TestBase, TestPlan):**

- **Técnica "TestBase"**:
    - Definición: *Es una técnica común en los frameworks de automatización de pruebas, que consiste en tener un archivo que contiene todos los PageObjects y funciones de utilidad para importarlo en cada archivo de prueba y acceder a los POM y utilidades con mayor facilidad.*
    - Directorio: *Este archivo se puede ubicar en cualquier directorio específico, pero se recomienda en el directorio raíz de pruebas.*
    - Para Node (JS/TS): `/TestBase.ts` (Playwright/WebdriverIO)
        - Ejemplo TestBase en **Playwright con Typescript:**
            - *En Playwright se usa el Fixture del Context de Playwright como el TestBase.*

            ```typescript
            import { test as driver } from '@playwright/test';
            import { LoginPage } from '@pages/LoginPage';
            import { HomePage } from '@pages/HomePage';

            const test = driver.extend<{
                loginPage: LoginPage;
                homePage: HomePage;
            }>({
                // Se instancia cada PageObject individualmente cuando se llama en el test
                loginPage: async ({ page }, use) => await use(new LoginPage(page)),
                homePage: async ({ page }, use) => await use(new HomePage(page)),
            });
            export { test };
            // ---- Uso en archivo de prueba ----: 
            test('test case name', async ({ loginPage }) => {
                await loginPage.submitLogin(); 
            });
            ```

> [!NOTE]
> Este archivo se importa en cada archivo de prueba para acceder a todos los PageObjects (o funciones de utilidad) con mayor facilidad.
> Además, la creación de cada TestBase para cada framework es diferente, por lo que se debe ajustar según el framework. En Playwright, por ejemplo, se usa la técnica Fixture para armar el TestBase. En Cypress, se usa el Commands.js como el TestBase. Y así sucesivamente.

#### > **Estructura: Archivos de Prueba (E2E o Integration):**

- Nomenclatura de Sufijos de Pruebas para E2E o Integration:  
    - para pruebas generales: `**test.{js,ts}` o `**spec.{js,ts}`
    - para pruebas de E2E: `**e2e.test.{js,ts}` (JS/TS)
    - para pruebas de Integration: `**api.test.{js,ts}` (JS/TS)

- Path de Pruebas:
    - **Playwright(TS)**: `test/specs/<component-name>/*.ts` (ejemplo: `test/specs/payment/payByDebit.test.ts`)

- Nomenclatura del Suite de Prueba (describe/class) debería ser:
    - `Jira Story ID` + `Story title`
        - Ejemplo: `GX3-123: Login Page`
- Nomenclatura del Caso de Prueba (it/test/def) debería ser:
    - `Jira Test Set ID` + `TC#` + `TC Title`
        - Ejemplo: `GX3-234 TC1: Should not login with invalid credentials`

#### > **Estructura Matriz de Prueba Automatizada con modelo (Arrange - Act - Assert):**

- Definición: *Es la forma de organizar y estructurar el código de prueba automatizada para mantener un código limpio y fácil de mantener. La estructura de la prueba se divide en tres secciones principales*
- Patrón de Diseño: *Arrange - Act - Assert*
    - **Arrange**: Es la primera sección de la prueba y se utiliza para declarar datos y variables, y configurar el estado inicial de la prueba.
        - Ejemplo con Playwright:

            ```typescript
            test('GX3-234 TC1: Login with valid credentials', async ({ loginPage }) => {
                const username = 'user1';
                const password = 'password1';
                // ...
            });
            ```

    - **Act**: Es la segunda sección de la prueba y se utiliza para realizar acciones y operaciones en la aplicación bajo prueba.
        - Ejemplo con Playwright:

            ```typescript
            // ...
                await loginPage.open();
                await loginPage.fillUsername(username);
                await loginPage.fillPassword(password);
                await loginPage.submitLogin();
            // ...
            ```

    - **Assert**: Es la última sección de la prueba y se utiliza para realizar validaciones y comprobaciones con los expect.
        - Ejemplo con Playwright:

            ```typescript
            // ...
            await expect(loginPage.getErrorMessage()).toHaveText('Invalid credentials');
            ```

    - Ejemplo Completo de la Estructura de Prueba:

        ```typescript
        describe('GX3-123: Login Page', () => {
            beforeEach(() => {
                // acciones de precondición de prueba
            });
            test('GX3-234 TC1: Should not login with invalid credentials', async ({ loginPage }) => {
                // Arrange
                const username = 'user1';
                const password = 'password1';
                // Act
                await loginPage.open();
                await loginPage.fillUsername(username);
                await loginPage.fillPassword(password);
                await loginPage.submitLogin();
                // Assert
                await expect(loginPage.getErrorMessage()).toHaveText('Invalid credentials');
            });
        });
        ```

<!--* MARKDOWN BADGES TEMPLATE (No need to change) -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Workspace -->
[vscode-logo]: https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white
[vscode-site]: https://code.visualstudio.com/
[jira]: https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white
[jira-docu]: https://www.atlassian.com/software/jira
<!-- CI Tool -->
[github-actions]: https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white
[github-actions-docu]: https://docs.github.com/en/actions
<!-- Programming Languages -->
[typescript-logo]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-site]: https://www.typescriptlang.org/

<!-- Testing Frameworks -->
[playwright-logo]: https://img.shields.io/badge/playwright-black?style=for-the-badge
[playwright-docu]: https://playwright.dev/docs/intro

<!-- Package Managers -->
[node-logo]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[node-site]: https://nodejs.org/
[yarn]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white
[yarn-docu]: https://yarnpkg.com/cli

<!-- Integrations -->
[eslint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[eslint-site]: https://eslint.org/
[allure-docu]: https://allurereport.org/docs/
[allure]: https://img.shields.io/badge/allure_report-black?style=for-the-badge

<!-- more badges here https://github.com/Ileriayo/markdown-badges -->
