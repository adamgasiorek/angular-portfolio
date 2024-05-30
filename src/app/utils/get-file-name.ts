export function getFileNameWithoutExtension(filename: string) {
  const parts = filename.split('.');
  parts.pop();
  return parts.join('.');
}
