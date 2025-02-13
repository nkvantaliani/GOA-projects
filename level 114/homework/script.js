// 1

class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }

    get temperature() {
        return (this._celsius * 9/5) + 32;
    }

    set temperature(celsius) {
        if (typeof celsius !== 'number') {
            console.log("Enter number");
            return;
        }
        this._celsius = celsius;
    }
}
const temp = new Temperature(25);
console.log(temp.temperature);
temp.temperature = 30;
console.log(temp.temperature);

// 2

class Grade {
    constructor(score) {
        this._score = score;
    }

    get grade() {
        if (this._score >= 90) return 'A';
        if (this._score >= 80) return 'B';
        if (this._score >= 70) return 'C';
        if (this._score >= 60) return 'D';
        return 'F';
    }

    set grade(score) {
        if (typeof score !== 'number' || score < 0 || score > 100) {
            console.error("enter number betwwen 0...100");
            return;
        }
        this._score = score;
    }
}
const student = new Grade(85);
console.log(student.grade);
student.grade = 92; 
console.log(student.grade);

// 3


