import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'currentUser';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    constructor() {
    }

    signOut(): void {
        window.sessionStorage.clear();
    }

    public saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return sessionStorage.getItem('token');
    }

    public saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);

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

        window.sessionStorage.setItem(USER_KEY, JSON.stringify(userData));
    }

    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }

        return false;
    }
}
