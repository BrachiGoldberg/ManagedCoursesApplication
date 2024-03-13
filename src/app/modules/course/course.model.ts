

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
