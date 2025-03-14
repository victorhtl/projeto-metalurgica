import { Model } from 'objection';
import Client from './client';

class Budget extends Model {
  static get tableName() {
    return 'budgets';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['client_id', 'short_description', 'description', 'status'],
      properties: {
        id: { type: 'integer' },
      }
    };
  }

  static get relationMappings() {
    return {
      clients: {
        relation: Model.BelongsToOneRelation,
        modelClass: Client,
        join: {
          from: 'budgets.client_id',
          to: 'client.id'
        }
      }
    };
  }
}

export default Budget;