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
1. Sube la carpeta `Organizador` a un hosting estático (GitHub Pages, Netlify, Cloudflare Pages). Solo subes el código; nunca tus datos.
2. Abre la dirección en **Safari** → Compartir → **Añadir a pantalla de inicio**.
3. Abre la app desde el icono. Quedan guardados el código y los datos en el teléfono; sin Wi-Fi ni datos sigue funcionando.

## Botón en el Centro de control (iOS 18 o superior)
1. App **Atajos** → nuevo atajo → acción **Abrir URL** con `https://TU-DIRECCION/?rapido=1`.
   (O mejor aún: acción **Añadir nuevo recordatorio** de Recordatorios si quieres que salga en la app de Apple.)
2. Ajustes → Centro de control → **Añadir un control** → Atajos → elige ese atajo.
3. Desliza hacia abajo desde arriba a la derecha y pulsa el control: se abre el formulario rápido.

## Para no perder datos
- iOS puede borrar los datos de una web que no uses en semanas. Instalada en la pantalla de inicio está protegida, pero haz una copia de vez en cuando (la app te lo recuerda).
- Guarda el `.json` en iCloud Drive o en Archivos.
- Para restaurar: Ajustes ⚙︎ → Restaurar desde copia.

## Archivos
- `index.html` — toda la app
- `sw.js` — la deja disponible sin conexión (si cambias la app, sube el número de `CACHE`)
- `manifest.json`, `icons/` — instalación e iconos
