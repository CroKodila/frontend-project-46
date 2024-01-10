import _ from 'lodash';

// Comparison
export default function generateDiff(obj1, obj2) {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const diff = keys.map((key) => {
    if (_.isEqual(obj1[key], obj2[key])) {
      return `  ${key}: ${obj1[key]}`;
    }
    if (!_.has(obj1, key)) {
      return `+ ${key}: ${obj2[key]}`;
    }
    if (!_.has(obj2, key)) {
      return `- ${key}: ${obj1[key]}`;
    }
    return [`- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]}`];
  });
  return `{\n${_.flatten(diff).join('\n')}\n}`;
}

// Reading and parsing data from files
