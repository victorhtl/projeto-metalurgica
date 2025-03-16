import { Model } from 'objection';

class Ticket extends Model {
  static get tableName() {
    return 'tickets';
  }

  id!: number;
  barcode!: string;
  date!: string;
  value!: number;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['barcode', 'date', 'value'],
      properties: {
        id: { type: 'integer' },
        barcode: { type: 'string' },
        date: { type: 'string' },
        value: { type: 'number' }
      }
    };
  }
}

export default Ticket;