export class CreateTodoDto {
    readonly text: string;
    readonly completed: boolean;
    readonly actived: boolean;
}


export class UpdateTodoDto {
    readonly actived: boolean
}
