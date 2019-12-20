import { ApiModelProperty  } from "@nestjs/swagger"

export class CreateTodoDto {
    @ApiModelProperty ({
        type: Number,
    })
    readonly text: string
}


export class UpdateTodoDto {
    @ApiModelProperty ({
        type: Boolean,
        description: 'true: 完成，false：未完成',
        required: true
    })
    readonly completed: boolean
}
