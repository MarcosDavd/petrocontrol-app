import { describe, expect, it } from 'vitest';
import { ipDeLaPeticion, mensajeDeEspera, segundosDeBloqueo } from './limite-login';

describe('ipDeLaPeticion', () => {
  it('prefiere la IP que pone Netlify, que el cliente no puede falsificar', () => {
    const headers = new Headers({ 'x-nf-client-connection-ip': '200.1.1.1', 'x-forwarded-for': '6.6.6.6' });
    expect(ipDeLaPeticion(headers)).toBe('200.1.1.1');
  });

  it('usa el primer valor de x-forwarded-for como respaldo', () => {
    expect(ipDeLaPeticion(new Headers({ 'x-forwarded-for': ' 10.0.0.1 , 10.0.0.2' }))).toBe('10.0.0.1');
  });

  it('sin encabezados no hay IP', () => {
    expect(ipDeLaPeticion(new Headers())).toBeNull();
  });
});

describe('bloqueo', () => {
  const ahora = new Date('2026-11-18T12:00:00Z');

  it('calcula los segundos que faltan', () => {
    expect(segundosDeBloqueo(null, ahora)).toBe(0);
    expect(segundosDeBloqueo(new Date('2026-11-18T11:59:00Z'), ahora)).toBe(0);
    expect(segundosDeBloqueo(new Date('2026-11-18T12:15:00Z'), ahora)).toBe(900);
  });

  it('redondea la espera a minutos hacia arriba', () => {
    expect(mensajeDeEspera(900)).toContain('15 minutos');
    expect(mensajeDeEspera(61)).toContain('2 minutos');
    expect(mensajeDeEspera(5)).toContain('1 minuto ');
  });
});
