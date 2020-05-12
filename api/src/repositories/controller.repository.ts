import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {UsersDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ControllerRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.users') dataSource: UsersDataSource,
  ) {
    super(User, dataSource);
  }
}
