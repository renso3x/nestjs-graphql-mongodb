import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((_of) => LessonType)
export class LessonResolver {
  @Query((_return) => LessonType)
  lesson() {
    return {
      id: '123',
      name: 'class1',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
