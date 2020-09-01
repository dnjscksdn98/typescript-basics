// Generic Utility Types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// Partial
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};  // Partial<T> - makes every props in T optional, so we can access the values

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

// Readonly
const names: Readonly<string[]> = ['alex', 'park'];
// names.push('kim');  // ERROR
// names.pop();  // ERROR