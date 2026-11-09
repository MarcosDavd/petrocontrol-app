import { Building2, ChartColumn, Clock, Fuel, LayoutDashboard, Tag, UsersRound, type LucideIcon } from 'lucide-react';

export type NavItem = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    title: 'General',
    items: [
      { href: '/home', label: 'Dashboard', description: 'Resumen general del negocio', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Operación',
    items: [
      { href: '/jornadas', label: 'Jornadas', description: 'Lecturas de contadores y cuadre de caja', icon: Clock },
      { href: '/inventario', label: 'Inventario', description: 'Estado de tanques y recargas', icon: Fuel },
    ],
  },
  {
    title: 'Administración',
    items: [
      { href: '/reportes', label: 'Reportes', description: 'Ventas, faltantes y alertas', icon: ChartColumn },
    ],
  },
  {
    title: 'Configuración',
    items: [
      { href: '/empleados', label: 'Empleados', description: 'Personal y horarios de trabajo', icon: UsersRound },
      { href: '/estaciones', label: 'Estaciones y máquinas', description: 'Máquinas y los productos que despachan', icon: Building2 },
      { href: '/productos', label: 'Productos y precios', description: 'Combustibles y precio por galón', icon: Tag },
    ],
  },
];

export const NAV_ITEMS = NAV_GROUPS.flatMap((group) => group.items);
