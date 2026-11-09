# Organizador

App personal de calendario y recordatorios para iPhone. Sin cuentas, sin servidor, sin anuncios.
Los datos se guardan **solo en tu teléfono**. Dirección: https://abelper90.github.io/organizador/

## Pantallas
Menú ☰ arriba a la izquierda:
- **Inicio:** calendario de 2 semanas, cuadro **Hoy**, cuadro **Importante** y **Recordatorios** (con casilla para añadir uno al momento).
- **Calendario:** el mes completo. Pulsas un día para ver, añadir, editar o borrar.
- **Recordatorios:** pendientes y hechos.
- **Estudios:** tus asignaturas (salen solas al importar el horario de la UPV, con código, profesores y próxima clase), botón a PoliformaT, y exámenes/entregas con cuenta atrás que también salen en el calendario, en Hoy y en Importante. En cada asignatura puedes pegar el enlace de su página de PoliformaT y apuntar notas.
- **Ajustes y copias:** copias, Calendario del iPhone y preferencias.

No hay conexión automática con PoliformaT ni con la app del Alumno: haría falta tu contraseña y las webs de la UPV no permiten que otra web lea sus datos. Los exámenes y entregas se apuntan a mano.

El botón **+** abre «Apunte rápido» (recordatorio o evento). Al abrir la app sale directamente ese formulario (se puede quitar en Ajustes).

Para añadir una pestaña nueva basta con una entrada más en el menú y una sección en `index.html`.

## Copias
- **Automáticas:** una cada día y otra tras cada cambio (las últimas 30 de cada tipo). Están en el propio móvil (Ajustes y copias → Restaurar). Protegen de borrones y errores, no de borrar la app.
- **En archivo:** Ajustes → «Guardar copia en un archivo». Úsalo de vez en cuando y guarda el `.json` en iCloud Drive.

## Calendario del iPhone
Una web no puede leer ni escribir directo en el Calendario, así que se pasa por archivos.
- **De la app al Calendario:** abre un evento → «Añadir al Calendario del iPhone». En Ajustes hay un botón para pasar todos tus eventos.
- **Del Calendario a la app (horario de la uni):** en Ajustes → «Importar horario (.ics)». El archivo sale de tu enlace personal de calendario (privado: no lo subas a ningún sitio). Importa de hace 30 días a 13 meses vista. Si lo repites se actualiza sin duplicar.

## Instalar en el iPhone
Safari → abrir la dirección → Compartir → **Añadir a pantalla de inicio** (con «Abrir como app web» activado).
Después funciona sin internet. Las actualizaciones llegan al abrir la app con conexión (Ajustes muestra la versión).

## Límites
- No hay avisos sonoros: iOS no permite a una web programar notificaciones sin conexión.
- Un atajo del Centro de control no puede abrir esta app instalada (iOS abre Safari, con datos aparte).

## Archivos
- `index.html` — toda la app
- `sw.js` — disponibilidad sin conexión y actualizaciones (sube el número de `CACHE` al cambiar la app)
- `manifest.json`, `icons/` — instalación e iconos
