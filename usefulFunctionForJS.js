//to get the gcd, greatest common divisor
function gcd(x, y) {    // Implements the Euclidean Algorithm
  if (y === 0) {
    return x;
  } else {
    return gcd(y, x%y);
  }
}
