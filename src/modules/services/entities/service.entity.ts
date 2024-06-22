import { ApiProperty } from '@nestjs/swagger';

export class Service {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isParent: boolean;

  @ApiProperty()
  parent: string;
}
