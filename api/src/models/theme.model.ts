import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Theme extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'object',
    required: true,
  })
  theme: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Theme>) {
    super(data);
  }
}

export interface ThemeRelations {
  // describe navigational properties here
}

export type ThemeWithRelations = Theme & ThemeRelations;
