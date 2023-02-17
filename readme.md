# 🧪Testing Automation: 🎭Playwright TypeScript📘


✔ Success! Created a Playwright Test project at
``<directory>playwright-ts``

# Command Lines:
Opciones comunes disponibles en la línea de comando:

- ### Ejecutar todas las pruebas
  `npx playwright test`

- ### Ejecutar un solo archivo de prueba
  `npx playwright test tests/todo-page.spec.ts`

- ### Ejecutar un conjunto de archivos de prueba
  `npx playwright test tests/todo-page/ tests/landing-page/`

- ### Ejecutar archivos que tengan my-spec o my-spec-2 en el nombre del archivo
  `npx playwright test my-spec my-spec-2`

- ### Ejecutar pruebas en la línea 42 de my-spec.ts
  `npx playwright test my-spec.ts:42`

- ### Ejecutar la prueba con el título
  `npx playwright test -g "add a todo item"`

- ### Ejecutar pruebas en navegadores con cabecera
  `npx playwright test --headed`

- ### Ejecutar todas las pruebas contra un proyecto específico
  `npx playwright test --project=chromium`

- ### Desactivar la paralelización
  `npx playwright test --workers=1`

- ### Elija un informador
  `npx playwright test --reporter=dot`

- ### Ejecutar en modo de depuración con el inspector de Playwright
  `npx playwright test --debug`

- ### Pida ayuda
  `npx playwright test --help`

We suggest that you begin by typing:

    ``npx playwright test``

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭