import type { FormInstance } from 'element-plus'
import { ref } from 'vue'


export interface LoginFromInt {
    userName: string
    password: string
}
export class IntData {
    loginFrom: LoginFromInt = {
        userName: '',
        password: ''
    }
    loginFromRef = ref<FormInstance>()
}