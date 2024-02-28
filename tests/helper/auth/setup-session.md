En este directorio es donde se guarda automáticamente las cookies del inicio de sesión del Setup Test: user.json
Mira la configuración en el archivo `playwright.config.ts`...

Ejemplo:
Este es el archivo de prueba del GlobalSetup como precondición:
tests/specs/example/orange-hrm/loginSession.test.setup.ts

Y este es un ejemplo donde se usa ese Global Setup:
tests/specs/example/orange-hrm/checkingPages.test.prc.ts

En la última linea de código de prueba del archivo test.setup, se agrega la opción:
`await page.context().storageState({ path: STORAGE_STATE });`
El método storageState guarda la sesión en un archivo json cuya ruta está declarada en el playwright.config.ts así:
export const STORAGE_STATE = 'tests/helper/auth/user.json';
Y se usa como parámetro en las opciones del project, ejemplo:
``` javascript:
projects:[
	{
		name: 'setup',
		testMatch: /.*\.(test)\.(setup)\.(js|ts)/, // Es necesario diferenciar el test de Setup del resto.
	},
	{
		name: 'nombre-del-browser',
		use: { 
			...devices['Desktop Chrome'], 
			channel: 'chrome', 
			storageState: STORAGE_STATE, // Requerido para guarde la sesión del setup y lo use en el resto de los tests
		},
	}
]
```