import { Knex } from 'knex';
import { BaseService } from './BaseService';

export default class PatientService implements BaseService {
    db: Knex;

    constructor(db: Knex) {
        this.db = db;
    }

    getAll(params: any): Promise<any> {
        const { page, ...rest } = params;
        
        return this.db('data_cancer')
                    .select(
                        "data_cancer.*","data_patient.card_id",
                        "bd_title.TitleName","data_patient.fname","data_patient.lname"
                    )
                    .join("data_patient", "data_patient.patient_id", "=", "data_cancer.patient_id")
                    .leftJoin("bd_title", "bd_title.TitleCode", "=", "data_patient.title_code")
                    .orderBy("cancer_id", "desc")
                    .paginate({
                        perPage: 20,
                        currentPage: page !== '' ? page : 1,
                        isLengthAware: true
                    });
    }

    getById(id: number): Promise<any> {
        return this.db('data_cancer')
                    .select(
                        "data_cancer.*","data_patient.card_id",
                        "bd_title.TitleName","data_patient.fname","data_patient.lname"
                    )
                    .join("data_patient", "data_patient.patient_id", "=", "data_cancer.patient_id")
                    .leftJoin("bd_title", "bd_title.TitleCode", "=", "data_patient.title_code")
                    .where("cancer_id", id);
    }
}