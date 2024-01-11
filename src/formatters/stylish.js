export default function stylish(obj) {
  const str = JSON.stringify(obj).replaceAll('"', '');
  return str;
}
