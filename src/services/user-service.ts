import { dbTcb } from "../config/database";

export default class UserService {
    async authenticate(username: string, password: string): Promise<any> {
        return await dbTcb('user')
                        .select('*')
                        .where('user_id', username)
                        .where('user_password', password);
    }
}