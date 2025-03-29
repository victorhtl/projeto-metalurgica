import { Model } from 'objection';
import Client from './client';

export enum BudgetStatus {
  PaymentPending = 'payment_pending',
  Approved = 'approved',
  Delivered = 'delivered',
  CustomerCanceled = 'customer_canceled',
}

class Budget extends Model {
  static get tableName() {
    return 'budgets';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['short_description', 'description', 'status'],
      properties: {
        id: { type: 'integer' },
        short_description: {type: 'string'},
        description: {type: 'string'},
        value: {type: 'number'},
        status: { type: 'string', enum: Object.values(BudgetStatus) },
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