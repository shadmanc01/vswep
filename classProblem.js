const studentData = [{ id: 1, name: "Aarav Patel", class: "10-A", marks: { Mathematics: 85, Science: 92, English: 78 } }, { id: 2, name: "Isha Sharma", class: "10-B", marks: { Mathematics: 74, Science: 88, English: 81 } }, { id: 3, name: "Rohan Gupta", class: "10-A", marks: { Mathematics: 95, Science: 90, English: 85 } }, { id: 4, name: "Priya Singh", class: "10-C", marks: { Mathematics: 62, Science: 75, English: 89 } }, { id: 5, name: "Vikram Reddy", class: "10-B", marks: { Mathematics: 88, Science: 82, English: 76 } }, { id: 6, name: "Ananya Desai", class: "10-A", marks: { Mathematics: 91, Science: 94, English: 92 } }, { id: 7, name: "Karan Mehta", class: "10-C", marks: { Mathematics: 55, Science: 68, English: 72 } }, { id: 8, name: "Sanya Kapoor", class: "10-B", marks: { Mathematics: 80, Science: 85, English: 88 } }, { id: 9, name: "Rahul Verma", class: "10-A", marks: { Mathematics: 78, Science: 79, English: 80 } }, { id: 10, name: "Neha Joshi", class: "10-C", marks: { Mathematics: 89, Science: 91, English: 84 } }, { id: 11, name: "Aditya Nair", class: "10-B", marks: { Mathematics: 67, Science: 72, English: 75 } }, { id: 12, name: "Kavya Iyer", class: "10-A", marks: { Mathematics: 98, Science: 96, English: 94 } }, { id: 13, name: "Dev Chauhan", class: "10-C", marks: { Mathematics: 71, Science: 65, English: 82 } }, { id: 14, name: "Meera Das", class: "10-B", marks: { Mathematics: 84, Science: 89, English: 91 } }, { id: 15, name: "Arjun Bhatia", class: "10-A", marks: { Mathematics: 76, Science: 81, English: 79 } }, { id: 16, name: "Zara Khan", class: "10-C", marks: { Mathematics: 92, Science: 87, English: 95 } }, { id: 17, name: "Kabir Singh", class: "10-B", marks: { Mathematics: 60, Science: 58, English: 65 } }, { id: 18, name: "Riya Sen", class: "10-A", marks: { Mathematics: 86, Science: 90, English: 88 } }, { id: 19, name: "Aryan Raj", class: "10-C", marks: { Mathematics: 79, Science: 84, English: 77 } }, { id: 20, name: "Tara Menon", class: "10-B", marks: { Mathematics: 94, Science: 95, English: 90 } }, { id: 21, name: "Yash Tiwari", class: "10-A", marks: { Mathematics: 88, Science: 76, English: 82 } }, { id: 22, name: "Simran Kaur", class: "10-B", marks: { Mathematics: 92, Science: 89, English: 95 } }, { id: 23, name: "Aanya Singh", class: "10-C", marks: { Mathematics: 75, Science: 81, English: 79 } }, { id: 24, name: "Vivaan Kumar", class: "10-A", marks: { Mathematics: 68, Science: 72, English: 70 } }, { id: 25, name: "Diya Chawla", class: "10-B", marks: { Mathematics: 85, Science: 91, English: 88 } }, { id: 26, name: "Reyansh Das", class: "10-C", marks: { Mathematics: 90, Science: 85, English: 92 } }, { id: 27, name: "Kavita Reddy", class: "10-A", marks: { Mathematics: 78, Science: 80, English: 85 } }, { id: 28, name: "Sai Krishna", class: "10-B", marks: { Mathematics: 95, Science: 98, English: 91 } }, { id: 29, name: "Navya Gupta", class: "10-C", marks: { Mathematics: 82, Science: 79, English: 86 } }, { id: 30, name: "Aarohi Patel", class: "10-A", marks: { Mathematics: 91, Science: 94, English: 89 } }, { id: 31, name: "Samarth Jain", class: "10-B", marks: { Mathematics: 74, Science: 68, English: 75 } }, { id: 32, name: "Riya Verma", class: "10-C", marks: { Mathematics: 88, Science: 85, English: 90 } }, { id: 33, name: "Omkar Desai", class: "10-A", marks: { Mathematics: 79, Science: 82, English: 78 } }, { id: 34, name: "Prisha Sharma", class: "10-B", marks: { Mathematics: 96, Science: 92, English: 95 } }, { id: 35, name: "Shaurya Mehra", class: "10-C", marks: { Mathematics: 81, Science: 75, English: 80 } }, { id: 36, name: "Anika Joshi", class: "10-A", marks: { Mathematics: 89, Science: 91, English: 87 } }, { id: 37, name: "Kabir Ahuja", class: "10-B", marks: { Mathematics: 70, Science: 65, English: 72 } }, { id: 38, name: "Kiara Iyer", class: "10-C", marks: { Mathematics: 94, Science: 96, English: 92 } }, { id: 39, name: "Advik Nair", class: "10-A", marks: { Mathematics: 85, Science: 88, English: 84 } }, { id: 40, name: "Meher Khan", class: "10-B", marks: { Mathematics: 90, Science: 87, English: 89 } }];

const topX = 5;

class Students {
    constructor (studentData) {
        this.students = studentData;
    }
    findHighestScorers(students) {
        // keep track of classes, names, and the scores of the students
        const studentMap = {};
        for (let i = 0; i < students.length; i++) {
            if (!studentMap[students[i].class]) {
                studentMap[students[i].class] = [[students[i].name, students[i].marks.Mathematics + students[i].marks.Science + students[i].marks.English]];
            } else {
                studentMap[students[i].class].push([students[i].name, students[i].marks.Mathematics + students[i].marks.Science + students[i].marks.English]);
            }
        }
        for (const keys in studentMap) {
            studentMap[keys].sort((a, b) => b[1] - a[1]);
            console.log(`For Class:${keys}\n `)
            for (let i = 0; i < topX; i++) {

                console.log(studentMap[keys][i][0] + ':' + studentMap[keys][i][1]);
            }
        }

    }
    highestScorerbySubj(students, subject) {
        const subj = subject.toLowerCase();
        const subjectSorted = students.sort((a,b) => b.marks[subject] - a.marks[subject])
        console.log([subjectSorted[0], subjectSorted[1], subjectSorted[2]]);
        return [subjectSorted[0], subjectSorted[1], subjectSorted[2]]
    }
}

const firstSem = new Students(studentData, "Mathematics");
firstSem.highestScorerbySubj(studentData, "Mathematics");
// findHighestScorers(studentData);


// find the highest scorer of each subject
// top x scorers by subject