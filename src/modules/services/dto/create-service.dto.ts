import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  isParent: boolean;

  @ApiProperty({required:false})
  parent?: string;
}
