import UserRepository from "../Repositories/UserRepository"

export default class AuthService {
    public static async login(email: string, password: string) {
        const user = UserRepository.getUser();
        return { token: 'token' }
    }
}