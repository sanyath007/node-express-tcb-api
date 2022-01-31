import { Knex } from 'knex';
import { BaseService } from './BaseService';

interface Patient {
    hn: string
}

interface PatientWithPagination {
    currentPage: number;
    data: Patient[];
}

export default class PatientService extends BaseService<Patient> {
    constructor(db: Knex, tbName: string) {
        super(db, tbName);
    }

    getAll(params: any): Promise<Patient> {
        const { page, ...rest } = params;
        
        return this.db
                    .select("*")
                    .orderBy("hn", "desc")
                    // .paginate({
                    //     perPage: 20,
                    //     currentPage: page !== '' ? page : 1,
                    //     isLengthAware: true
                    // });
    }

    getById(hn: string): Promise<Patient> {
        return this.db
                    .select("*")
                    .where("hn", hn)
                    .first();
    }
}