function solution(w, h) {
  const gcd = getGcd(w, h);
  return w * h - (w / gcd + h / gcd - 1) * gcd;
}

function getGcd(n, m) {
  while (n > 0) {
    const temp = n;
    n = m % n;
    m = temp;
  }

  return m;
}

console.log(solution(8, 12));
