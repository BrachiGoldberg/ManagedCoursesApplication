

export class Course {
    id: number | undefined;
    name: string | undefined;
    categoryId: number | undefined;
    duration: number | undefined;
    startDate: Date | undefined;
    syllabus: string[] | undefined;
    learningWay: LearningWay | undefined;
    lecturerId: number | undefined;
    image: string | undefined;

}


export enum LearningWay {
    Frontal, Zoom
}

export let COURSES: Course[] = [
    {
        id: 1, name: "Python", categoryId: 1, duration: 10, startDate: new Date(11, 3, 2024),
        syllabus: ["python basic", "libraries", "maching learning"],
        learningWay: LearningWay.Frontal, lecturerId: 1, image: "path to python image"
    },
    {
        id: 2, name: "Real Time", categoryId: 1, duration: 8, startDate: new Date(20, 3, 2024),
        syllabus: ["communication", "real time system", "freeRTOS"],
        learningWay: LearningWay.Zoom, lecturerId: 2, image: "path to real time image"
    },
    {
        id: 3, name: "Photoshop", categoryId: 2, duration: 20, startDate: new Date(1, 3, 2024),
        syllabus: ["introduction", "clips"],
        learningWay: LearningWay.Frontal, lecturerId: 3, image: "path to photoshop image"
    },
    {
        id: 4, name: "Statistic", categoryId: 3, duration: 5, startDate: new Date(11, 4, 2024),
        syllabus: ["basic statistic", "external"],
        learningWay: LearningWay.Zoom, lecturerId: 4, image: "path to statistic image"
    }
]