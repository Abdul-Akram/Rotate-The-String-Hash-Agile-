function rotateString(s: string, k: number) {
  let n = s.length;
  let charArray: string[] = new Array(n);
  // Copy the characters of s into charArray
  for (let i = 0; i < n; i++) {
    charArray[i] = s[i];
  }
  // Rotation Logics
  while (k > 0) {
    let temp: string = charArray[0];
    for (let i = 0; i < n - 1; i++) {
      charArray[i] = charArray[i + 1];
    }
    charArray[n - 1] = temp;
    k--;
  }

  return charArray.join("");
}

// Initilization
const originalString1: string = "abcdef";
const originalString2: string = "defofdcs";
const originalString3: string = "ad";
const k1: number = 2;
const k2: number = 4;
const k3: number = 1;
const rotatedString1: string = rotateString(originalString1, k1);
const rotatedString2: string = rotateString(originalString2, k2);
const rotatedString3: string = rotateString(originalString3, k3);
console.log("K = ", k1);
console.log(`Input = ${originalString1} <----> Output = ${rotatedString1}`);
console.log("K = ", k2);
console.log(`Input = ${originalString2} <----> Output = ${rotatedString2}`);
console.log("K = ", k3);
console.log(`Input = ${originalString3} <----> Output = ${rotatedString3}`);
