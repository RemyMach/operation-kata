import { OperationCommand, stringToOperand } from "../../../services/do-operation.service";

export function mapDtoToCommand(dto: any): OperationCommand {
  return {
    operand: stringToOperand(dto.operand),
    value: dto.value,
  }
}

