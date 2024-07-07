import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignatureService {

  constructor() { }

  //create function to encrypt the data using rsa algorithm 256
    encryptData(data: string) {
    }

    //create function to decrypt the data using rsa algorithm 256
    decryptData(data: string) {
        return data;
    }
}
