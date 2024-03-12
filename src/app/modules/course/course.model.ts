

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
        id: 1, name: "Python", categoryId: 1, duration: 10, startDate: new Date("2024-03-11"),
        syllabus: ["python basic", "libraries", "maching learning"],
        learningWay: LearningWay.Frontal, lecturerId: 1, image: "https://miro.medium.com/v2/resize:fit:1400/1*m0H6-tUbW6grMlezlb52yw.png"
    },
    {
        id: 2, name: "Real Time", categoryId: 1, duration: 8, startDate: new Date("2024-03-20"),
        syllabus: ["communication", "real time system", "freeRTOS"],
        learningWay: LearningWay.Zoom, lecturerId: 2, image: "https://estuary.dev/static/fde13056c70783b74f41b10d9649f74a/3a40c/dd278b_03_Real_Time_Processing_Benefits_d8291dd351.jpg"
    },
    {
        id: 3, name: "Photoshop", categoryId: 2, duration: 20, startDate: new Date("2024-03-01"),
        syllabus: ["introduction", "clips"],
        learningWay: LearningWay.Frontal, lecturerId: 3, image: "https://img-c.udemycdn.com/course/750x422/5346430_f677.jpg"
    },
    {
        id: 4, name: "Statistic", categoryId: 3, duration: 5, startDate: new Date("2024-04-12"),
        syllabus: ["basic statistic", "external"],
        learningWay: LearningWay.Zoom, lecturerId: 4, image: "https://www.thoughtco.com/thmb/vPZchuBNtuGgiChRefakysv1saQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bar-chart-build-of-multi-colored-rods-114996128-5a787c8743a1030037e79879.jpg"
    }
]