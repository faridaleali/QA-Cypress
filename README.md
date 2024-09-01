# Proyecto de QA - Pruebas Automatizadas de Compra de Usuarios

## Descripción del Proyecto

Este proyecto está enfocado en la automatización de pruebas de calidad para el flujo de compra de usuarios en la plataforma Sauce Demo. Las pruebas fueron implementadas utilizando Cypress, un framework de testing de extremo a extremo. El objetivo principal es asegurar que diferentes configuraciones de usuarios puedan realizar compras sin problemas, identificando y documentando posibles errores en el proceso.

## Estructura del Repositorio

- **cypress/integration/**: Contiene los archivos de prueba automatizados.
- **cypress/fixtures/**: Contiene los datos de prueba, como usuarios y productos.
- **cypress/plugins/**: Archivos de configuración de Cypress.
- **cypress/support/**: Funciones y comandos personalizados para las pruebas.
- **mochawesome-report/**: Reportes generados después de la ejecución de las pruebas.

## Casos de Prueba

### Caso 1: Compra con usuario con standard_user
- **JIRA ID**: SD-101
- **Descripción**: Verificar que el usuario standard_user puede realizar una compra con éxito, identificando posibles errores.

### Caso 2: Compra con usuario con problem_user
- **JIRA ID**: SD-102
- **Descripción**: Verificar que el usuario problem_user puede realizar una compra con éxito, identificando posibles errores.

## Instalación y Ejecución

### Requisitos Previos
- Node.js (v14 o superior)
- Cypress (v10 o superior)

### Instalación
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/FaridAleAli/proyecto-qa.git
2. Instalar dependencias:
   ```bash
   npm install

## Ejecución de las Pruebas
Para ejecutar todas las pruebas automatizadas, utiliza el siguiente comando:

1. ```bash
   npx cypress run

Para ejecutar pruebas específicas o visualizar el proceso en el navegador, usa:

1. ```bash
   npx cypress open

### Generación de Reportes
Los reportes de las pruebas se generan automáticamente al finalizar la ejecución y se encuentran en el directorio mochawesome-report.

### Resultados Esperados
Cada prueba generará un informe detallado que incluye:

- **Resultado**: Pasó o falló.

- **Capturas de pantalla**: Si alguna prueba falla.

- **Detalles de la ejecución**: Pasos realizados y tiempos de ejecución.

### Contribuciones
Este proyecto fue realizado por Farid Ale Ali como parte de una presentación de proyecto QA. Las contribuciones adicionales y sugerencias para mejorar son bienvenidas. Puedes abrir un issue o enviar un pull request para cualquier mejora o corrección.

### Contacto
Si tienes alguna pregunta o comentario sobre este proyecto, puedes contactarme a través de **https://www.linkedin.com/in/alealifarid/**.
