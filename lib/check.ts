import { PERMISSION } from './permsision';

export function check(
  user_permission: number,
  permission: ReturnType<PERMISSION[keyof PERMISSION]>,
): boolean {
  if (typeof permission === 'string') return false;
  return (user_permission & permission) === permission;
}
