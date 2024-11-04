function rotateString(s, k) {
    var n = s.length;
    var charArray = new Array(n);
    // Copy the characters of s into charArray
    for (var i = 0; i < n; i++) {
        charArray[i] = s[i];
    }
    // Rotation Logics
    while (k > 0) {
        var temp = charArray[0];
        for (var i = 0; i < n - 1; i++) {
            charArray[i] = charArray[i + 1];
        }
        charArray[n - 1] = temp;
        k--;
    }
    return charArray.join("");
}
// Initilization
var originalString1 = "abcdef";
var originalString2 = "defofdcs";
var originalString3 = "ad";
var k1 = 2;
var k2 = 4;
var k3 = 1;
var rotatedString1 = rotateString(originalString1, k1);
var rotatedString2 = rotateString(originalString2, k2);
var rotatedString3 = rotateString(originalString3, k3);
console.log("K = ", k1);
console.log("Input = ".concat(originalString1, " <----> Output = ").concat(rotatedString1));
console.log("K = ", k2);
console.log("Input = ".concat(originalString2, " <----> Output = ").concat(rotatedString2));
console.log("K = ", k3);
console.log("Input = ".concat(originalString3, " <----> Output = ").concat(rotatedString3));
