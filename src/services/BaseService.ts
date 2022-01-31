import { Knex } from "knex";

export abstract class BaseService<T> {
    knex: Knex;
    tbName: string;

    constructor(knex: Knex, tbName: string) {
        this.knex = knex;
        this.tbName = tbName;
    }

    get db(): Knex.QueryBuilder {
        return this.knex(this.tbName)
    }

    abstract getAll(params: any): Promise<T>;

    abstract getById(id: any): Promise<T>;
}