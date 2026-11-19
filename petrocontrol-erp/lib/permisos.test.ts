import { describe, expect, it } from 'vitest';
import {
  esRutaPublica,
  fechaPermitidaParaEmpleado,
  inicioDe,
  permitidaConCambioPendiente,
  puedeEntrar,
  rangoFechaEmpleado,
} from './permisos';
import { nombreUsuarioSchema, sugerirUsuario } from './validation/auth';

describe('puedeEntrar', () => {
  it('el admin entra a todo', () => {
    for (const ruta of ['/home', '/reportes', '/jornadas/5/editar', '/api/empleados', '/empleados']) {
      expect(puedeEntrar('ADMIN', ruta)).toBe(true);
    }
  });

  it('el empleado solo entra a sus jornadas y a su cuenta', () => {
    for (const ruta of ['/jornadas', '/jornadas/', '/jornadas/12', '/cuenta']) {
      expect(puedeEntrar('EMPLEADO', ruta)).toBe(true);
    }
  });

  it('el empleado no edita jornadas ni ve administración o API', () => {
    for (const ruta of [
      '/',
      '/home',
      '/jornadas/12/editar',
      '/jornadas/abc',
      '/reportes',
      '/inventario',
      '/empleados',
      '/estaciones',
      '/estaciones/maquinas/3',
      '/productos',
      '/api/jornadas',
      '/api/jornadas/12/pagos',
      '/api/reportes/jornadas',
      '/cuentas',
      '/jornadas-x',
    ]) {
      expect(puedeEntrar('EMPLEADO', ruta), ruta).toBe(false);
    }
  });
});

describe('rutas públicas y de cambio pendiente', () => {
  it('login y recursos de marca no piden sesión', () => {
    expect(esRutaPublica('/login')).toBe(true);
    expect(esRutaPublica('/brand/logo.svg')).toBe(true);
    expect(esRutaPublica('/jornadas')).toBe(false);
    expect(esRutaPublica('/api/empleados')).toBe(false);
  });

  it('con contraseña temporal solo se puede ir a la cuenta o salir', () => {
    expect(permitidaConCambioPendiente('/cuenta')).toBe(true);
    expect(permitidaConCambioPendiente('/api/auth/logout')).toBe(true);
    expect(permitidaConCambioPendiente('/jornadas')).toBe(false);
  });

  it('cada rol tiene su página de inicio', () => {
    expect(inicioDe('ADMIN')).toBe('/home');
    expect(inicioDe('EMPLEADO')).toBe('/jornadas');
  });
});

describe('usuario de empleado', () => {
  it('se sugiere a partir del nombre, sin tildes ni espacios', () => {
    expect(sugerirUsuario('José  Pérez Ñaupari')).toBe('jose.perez.naupari');
    expect(sugerirUsuario('  María ')).toBe('maria');
  });

  it('se normaliza a minúsculas y no admite "@"', () => {
    expect(nombreUsuarioSchema.parse(' Jose.Perez ')).toBe('jose.perez');
    expect(nombreUsuarioSchema.parse('70123456')).toBe('70123456');
    expect(nombreUsuarioSchema.safeParse('jose@grifo').success).toBe(false);
    expect(nombreUsuarioSchema.safeParse('ab').success).toBe(false);
  });
});

describe('fecha de jornada de un empleado', () => {
  const madrugada = new Date('2026-11-18T06:30:00Z'); // 18 de noviembre, 01:30 en Perú
  // 18 de noviembre, 21:00 en Perú, pero en UTC (la hora del servidor) ya es 19: debe valer la de Perú
  const noche = new Date('2026-11-19T02:00:00Z');

  it('solo hoy o ayer, en hora de Perú', () => {
    expect(rangoFechaEmpleado(madrugada)).toEqual({ min: '2026-11-17', max: '2026-11-18' });
    expect(rangoFechaEmpleado(noche)).toEqual({ min: '2026-11-17', max: '2026-11-18' });
  });

  it('rechaza fechas pasadas, futuras o mal formadas', () => {
    expect(fechaPermitidaParaEmpleado('2026-11-18', noche)).toBe(true);
    expect(fechaPermitidaParaEmpleado('2026-11-17', noche)).toBe(true);
    expect(fechaPermitidaParaEmpleado('2026-11-16', noche)).toBe(false);
    expect(fechaPermitidaParaEmpleado('2026-11-19', noche)).toBe(false);
    expect(fechaPermitidaParaEmpleado('18/11/2026', noche)).toBe(false);
  });
});
