import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'currentUser';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    constructor() {
    }

    public signOut(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            localStorage.removeItem(USER_KEY);
            localStorage.removeItem(TOKEN_KEY);
            resolve(true);
        });
    }

    public saveToken(token: string): void {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return localStorage.getItem('token');
    }

    public saveUser(user: any): void {
        localStorage.removeItem(USER_KEY);

        user.picture = user.provider === 'FACEBOOK' ? user.response.picture.data.url :
            user.provider === 'GOOGLE' ? user.photoUrl : user.profile;

        const userData = {
            id: user.id,
            fullName: user.name,
            firstName: user.firstName,
            lastName: user.lastName,
            provider: user.provider,
            picture: user.picture
        };

        localStorage.setItem(USER_KEY, JSON.stringify(userData));
    }

    public getUser(): any {
        const user = localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }

        return false;
    }
}
