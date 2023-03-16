import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name').notNullable()
      table.string('second_name').notNullable()
      table.string('surname').notNullable()
      table.string('second_surname').notNullable()
      table.integer('type_document').unsigned()
      table.integer('document_number').notNullable().unsigned().references('id')
        .inTable('type_documents').onDelete('CASCADE')
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.integer('rol_id').notNullable().unsigned().references('id')
        .inTable('roles').onDelete('CASCADE')
      table.string('phone').notNullable()
      table.boolean('state').notNullable()
      
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
