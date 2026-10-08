# NubeRuta - Panel de envios

> NubeRuta es una empresa ficticia creada para este taller de DevOps y CI/CD.

## Incidente INC-2031

**Viernes, 17:45.** NubeRuta es una empresa de mensajeria que entrega paquetes en toda
Guatemala. A las 18:00 arranca la campana "Envio gratis de fin de mes" y miles de clientes
van a entrar al panel para rastrear sus paquetes.

La version 2.4.0 del panel deberia estar ya en produccion, pero el pipeline de despliegue
esta fallando. El ingeniero que lo configuro salio de vacaciones esta manana y no contesta.

Hoy es tu primer dia en el equipo de DevOps. Tienes 15 minutos.

## Tu mision

Dejar el pipeline en verde y confirmar que el panel responde.

## Que hay en este repositorio

| Archivo | Para que sirve |
|---|---|
| `server.js` | La aplicacion: el panel de seguimiento de envios |
| `Dockerfile` | La receta para empaquetar la aplicacion en un contenedor |
| `.github/workflows/pipeline.yml` | El pipeline que valida, construye, despliega y monitorea |

## Pasos

1. Haz clic en **Fork** (arriba a la derecha) y luego en **Create fork**.
2. En tu copia, entra a la pestana **Actions** y presiona el boton verde para habilitar los workflows.
3. En la lista de la izquierda elige **CI/CD Pipeline - NubeRuta** y presiona **Run workflow**.
4. Cuando aparezca la X roja, entra a la ejecucion y lee el log: ahi esta la pista.
5. Corrige el archivo que causa el error (icono de lapiz) y presiona **Commit changes**.
   El pipeline se vuelve a ejecutar solo.
6. Repite hasta que todo quede en verde.

Hay tres errores escondidos y cada uno es de una sola letra.

## Como saber que ganaste

En la pagina de la ejecucion en verde aparece el reporte **Despliegue exitoso - NubeRuta**.
