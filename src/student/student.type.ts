import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('StudentType')
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}
