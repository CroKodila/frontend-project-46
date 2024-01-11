
export default function stylish(obj) {
    let str = JSON.stringify(obj).replaceAll('"','');
    return str;
}