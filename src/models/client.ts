import { Model } from 'objection';
import Budget from './budget';

class Client extends Model {
  static get tableName() {
    return 'clients';
  }

  id!: number;
  name!: string;
  email!: string;
  created_at!: string;
  updated_at!: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', format: 'email' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' },
      },
    };
  }

  static get relationMappings() {
    return {
      budgets: {
        relation: Model.HasManyRelation,
        modelClass: Budget,
        join: {
          from: 'client.id',
          to: 'budgets.client_id'
        }
      }
    };
  }
}

export default Client;