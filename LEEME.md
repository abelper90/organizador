# Organizador

App personal de calendario y recordatorios para iPhone. Sin cuentas, sin servidor, sin anuncios.
Los datos se guardan **solo en tu teléfono**.

## Qué hace ahora
- Calendario mensual. Pulsas un día y se abre su ficha: añadir, editar, borrar y marcar como hecho.
- Panel junto al calendario (debajo en móvil vertical): **Hoy** e **Importante · próximos 30 días**.
- Botón **+** para apuntar algo al vuelo. Abrir la app con `?rapido=1` va directo a ese formulario.
- Copia de seguridad en un archivo `.json` (Ajustes ⚙︎) y aviso si pasan 14 días sin copia.

## Instalarla en el iPhone (una sola vez)
Para que iOS la instale hace falta que se sirva por **https** una primera vez. Después funciona sin internet.
1. Ya está publicada en https://abelper90.github.io/organizador/ (GitHub Pages). Solo contiene el código; nunca tus datos.
2. Abre la dirección en **Safari** → Compartir → **Añadir a pantalla de inicio**.
3. Abre la app desde el icono. Quedan guardados el código y los datos en el teléfono; sin Wi-Fi ni datos sigue funcionando.

## Calendario del iPhone (Google / Outlook)
Una web no puede leer ni escribir directo en el Calendario, así que se pasa en cada sentido por separado.
- **De la app al Calendario:** abre un evento → «Añadir al Calendario del iPhone» → en el menú de compartir elige Calendario. En Ajustes hay otro botón para pasar todos tus eventos de golpe.
- **Del Calendario a la app (horario de la uni):** el servidor de la uni no permite que una web lea el calendario por sí sola, así que se hace con el archivo. En el iPhone abre en **Safari** tu enlace personal de calendario de la uni (guárdalo en Notas; no lo compartas ni lo subas a ningún sitio, es privado). Se descarga un archivo `.ics`: guárdalo en Archivos. Luego en la app: Ajustes → «Importar horario (.ics)» → elige ese archivo. Se importan las clases de hace 30 días a 13 meses vista, con hora, aula y profesor. Si lo vuelves a importar se actualiza sin duplicar, y «Borrar eventos importados» limpia solo lo importado.
- No es automático: hay que repetir la importación si cambia el horario.

## Centro de control
Un atajo del Centro de control no puede abrir esta app instalada (iOS solo abre Safari, que guarda los datos aparte). Por eso no hay atajo: abre la app desde su icono y sale directamente «Apunte rápido».

## Para no perder datos
- iOS puede borrar los datos de una web que no uses en semanas. Instalada en la pantalla de inicio está protegida, pero haz una copia de vez en cuando (la app te lo recuerda).
- Guarda el `.json` en iCloud Drive o en Archivos.
- Para restaurar: Ajustes ⚙︎ → Restaurar desde copia.

## Archivos
- `index.html` — toda la app
- `sw.js` — la deja disponible sin conexión (si cambias la app, sube el número de `CACHE`)
- `manifest.json`, `icons/` — instalación e iconos
