export default function lifeCount(person) {
  if (person.health < 15) {
    return 'critical';
  }
  if (person.health < 50) {
    return 'wounded';
  }
  return 'healthy';
}
