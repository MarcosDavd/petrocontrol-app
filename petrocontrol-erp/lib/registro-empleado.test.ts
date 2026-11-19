import { describe, expect, it } from 'vitest';
import { dniSchema, empleadoSchema, registroEmpleadoSchema } from './validation/maestros';

const valido = { nombre: 'José Pérez', dni: '70123456', estacionId: '1', horarioInicio: '06:00', horarioFin: '14:00' };

describe('registro de empleado', () => {
  it('acepta un registro completo', () => {
    expect(registroEmpleadoSchema.parse(valido)).toMatchObject({ dni: '70123456', estacionId: 1 });
  });

  it('el DNI son exactamente 8 dígitos', () => {
    expect(dniSchema.safeParse(' 70123456 ').success).toBe(true);
    for (const dni of ['7012345', '701234567', '7012345a', '']) {
      expect(dniSchema.safeParse(dni).success, dni).toBe(false);
    }
  });

  it('todos los campos son obligatorios, incluido el horario', () => {
    for (const campo of Object.keys(valido)) {
      const datos = { ...valido, [campo]: '' };
      expect(registroEmpleadoSchema.safeParse(datos).success, campo).toBe(false);
    }
  });

  it('en la edición el DNI puede faltar (empleados anteriores al DNI)', () => {
    expect(empleadoSchema.safeParse({ ...valido, dni: '' }).success).toBe(true);
    expect(empleadoSchema.safeParse({ ...valido, dni: '123' }).success).toBe(false);
  });
});
