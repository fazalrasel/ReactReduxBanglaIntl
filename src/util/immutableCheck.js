export function isImmutableMap(map) {
  return typeof map.get === 'function';
}