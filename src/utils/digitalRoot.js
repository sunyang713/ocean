
/*
 * The digital root (also repeated digital sum) of a non-negative integer is the (single digit)
 * value obtained by an iterative process of summing digits, on each iteration using the result
 * from the previous iteration to compute a digit sum. The process continues until a single-digit
 * number is reached. 
 */
export default function dr(n) {
  return (n - 9) * Math.floor((n - 1) / 9)
}
