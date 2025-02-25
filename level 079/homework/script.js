function countArea(...size) {
    if (size.length === 1) {
        let radius = size[0];
        let area = Math.PI * (radius ** 2);
        return `area is ${area}`;
    } else if (size.length === 2) {
        let [length, width] = size;
        let area = length * width;
        return `area is ${area}`;
    } else if (size.length === 3) {
        let [a, b, c] = size;
        let s = (a + b + c) / 2;
        let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return `area is ${area}`;
    }
}