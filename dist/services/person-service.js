"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class PersonService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.db)('personal')
                .select('*')
                .join('position', 'personal.position_id', '=', 'position.position_id')
                .join('academic', 'personal.ac_id', '=', 'academic.ac_id');
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.db)('personal')
                .select()
                .join('position', 'personal.position_id', '=', 'position.position_id')
                .join('academic', 'personal.ac_id', '=', 'academic.ac_id')
                .where('person_id', id);
        });
    }
}
exports.default = PersonService;
