import { describe, expect, it } from 'vitest';
import { urlConError } from './respuesta-formulario';

const API = 'http://localhost:3000/api/maquinas/2';

describe('urlConError', () => {
  it('vuelve a la página de origen con el mensaje', () => {
    const url = urlConError(API, 'http://localhost:3000/estaciones/maquinas/2', 'El nombre es obligatorio.');
    expect(url.pathname).toBe('/estaciones/maquinas/2');
    expect(url.searchParams.get('error')).toBe('El nombre es obligatorio.');
  });

  it('conserva los parámetros de la página y reemplaza un error anterior', () => {
    const url = urlConError(API, 'http://localhost:3000/inventario?estacion=1&error=viejo', 'nuevo');
    expect(url.searchParams.get('estacion')).toBe('1');
    expect(url.searchParams.getAll('error')).toEqual(['nuevo']);
  });

  it('ignora un Referer de otro sitio o mal formado', () => {
    expect(urlConError(API, 'https://otro-sitio.com/x', 'e').href).toBe('http://localhost:3000/home?error=e');
    expect(urlConError(API, 'no es una url', 'e').pathname).toBe('/home');
    expect(urlConError(API, null, 'e', '/estaciones').pathname).toBe('/estaciones');
  });
});
