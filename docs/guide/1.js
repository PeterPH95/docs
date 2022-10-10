/**
 * 
 * @param {Array} originalArrayValue 
 * @returns 求集合子集
 */
const findAllSubsetsoOfGivenSet =
originalArrayValue => originalArrayValue.reduce(
   (givenSet, setValue) => givenSet.concat(
      givenSet.map(givenSet => [setValue,...givenSet])
   ),
[[]]
);
// console.log(findAllSubsetsoOfGivenSet([1,2]));//[[]]--->[[],[1]]--->[[],[1],[2],[2,1]]
