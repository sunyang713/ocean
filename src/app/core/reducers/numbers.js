



// sort, filter, get primes, etc

// be careful that the actions associated with these reducer handlers aren't misinterpreted
// as specific to this reducer.

// if 'numbers' is a global list that is used everwhere, and "sort," "filter" actions are 
// global actions that are state agnostic, this will make sense/work.




const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  .filter(x => x % 2 !== 0)
  .map(x => x * x)


