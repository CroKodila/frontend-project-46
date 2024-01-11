import _ from 'lodash';

// Comparison
export default function generateDiff(obj1, obj2) {
  const buildDiff = (innerObj1, innerObj2) => {
    const keys = _.sortBy(_.union(Object.keys(innerObj1), Object.keys(innerObj2)));

    return keys.reduce((acc, key) => {
      const value1 = innerObj1[key];
      const value2 = innerObj2[key];

      if (_.isObject(value1) && _.isObject(value2)) {
        acc[`  ${key}`] = buildDiff(value1, value2);
      } else if (_.isEqual(value1, value2)) {
        acc[`  ${key}`] = value1;
      } else if (!_.has(innerObj1, key)) {
        acc[`+ ${key}`] = value2;
      } else if (!_.has(innerObj2, key)) {
        acc[`- ${key}`] = value1;
      } else {
        acc[`- ${key}`] = value1;
        acc[`+ ${key}`] = value2;
      }

      return acc;
    }, {});
  };

  return buildDiff(obj1, obj2);
}
