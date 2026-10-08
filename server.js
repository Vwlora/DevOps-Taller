const http = require('http');

const VERSION = '2.4.0';
const PUERTO = 3000;

const envios = [
    { guia: 'NR-10231', destino: 'Quetzaltenango', estado: 'En ruta' },
    { guia: 'NR-10232', destino: 'Ciudad de Guatemala', estado: 'Entregado' },
    { guia: 'NR-10233', destino: 'Huehuetenango', estado: 'En bodega' },
    { guia: 'NR-10234', destino: 'Antigua Guatemala', estado: 'En ruta' },
    { guia: 'NR-10235', destino: 'Coban', estado: 'Entregado' }
];

const colores = {
    'En ruta': '#b7791f',
    'Entregado': '#2f855a',
    'En bodega': '#4a5568'
};

function paginaPrincipal() {
    const filas = envios.map((e) => `
                <tr>
                    <td>${e.guia}</td>
                    <td>${e.destino}</td>
                    <td style="color: ${colores[e.estado]}; font-weight: bold;">${e.estado}</td>
                </tr>`).join('');

    return `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>NubeRuta - Panel de envios</title>
    <style>
        body { font-family: sans-serif; background: #f7fafc; color: #1a202c; margin: 0; }
        header { background: #2b6cb0; color: white; padding: 20px 40px; }
        main { max-width: 720px; margin: 30px auto; padding: 0 20px; }
        table { width: 100%; border-collapse: collapse; background: white; }
        th, td { text-align: left; padding: 12px 16px; border-bottom: 1px solid #e2e8f0; }
        th { background: #edf2f7; }
        footer { margin-top: 20px; color: #4a5568; font-size: 14px; }
    </style>
</head>
<body>
    <header>
        <h1>NubeRuta</h1>
        <p>Panel de seguimiento de envios</p>
    </header>
    <main>
        <table>
            <thead>
                <tr><th>Guia</th><th>Destino</th><th>Estado</th></tr>
            </thead>
            <tbody>${filas}
            </tbody>
        </table>
        <footer>Version ${VERSION} | Estado del servicio: <strong>en linea</strong></footer>
    </main>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ estado: 'ok', servicio: 'panel-envios', version: VERSION }));
        return;
    }

    if (req.url === '/api/envios') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(envios));
        return;
    }

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(paginaPrincipal());
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
});

server.listen(PUERTO, () => {
    console.log(`Panel de envios de NubeRuta corriendo en el puerto ${PUERTO}`);
});
