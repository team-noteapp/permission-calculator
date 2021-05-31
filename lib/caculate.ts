import { PERMISSION } from './permsision';

export function calculate(...permissions: (keyof typeof PERMISSION)[]) {
  let total = 0x0000000;
  permissions.forEach((permission) => {
    total |= PERMISSION[permission];
  });

  return total;
}
