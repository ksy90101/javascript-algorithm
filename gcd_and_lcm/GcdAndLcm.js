function solution(n, m) {
  const gcd = getGcd(n, m);
  const lcm = (n * m) / gcd;
  return [gcd, lcm];
}

function getGcd(n, m) {
  while (n > 0) {
    const temp = n;
    n = m % n;
    m = temp;
  }

  return m;
}

const n1 = 3;
const m1 = 12;

const n2 = 2;
const m2 = 5;

console.log(solution(n1, m1));
console.log(solution(n2, m2));
