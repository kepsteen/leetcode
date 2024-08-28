function isPalindrome(x: number): boolean {
    const revString = String(x).split('').reverse().join('');
    return String(x) === revString;
};