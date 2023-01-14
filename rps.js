/*

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:

rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.

*/

const rps = n => {
  const options = ['r', 'p', 's']
  let results = [];

  const permutationAlgo = (output, currentRound) => {
    for (let i = 0; i < options.length; i++){
      //output is the updated option as it is created through the recursive calls; we are pushing the current value in our options array
      output.push(options[i])
      //base case is when the currentRound is equal to the input n
      if (currentRound === n) {
        results.push(output.slice())
      } else {
        permutationAlgo(output, currentRound + 1)
      }
      output.pop() //this is to remove the last item from our array before the next iteration in the for loop
    }
  }
  //1 is the initial round number
  permutationAlgo([], 1)
  return results;
};

console.log(rps(2))
/*

Extension:

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

const passwords = (chars, n) => {
  
};

module.exports = {rps, passwords};
