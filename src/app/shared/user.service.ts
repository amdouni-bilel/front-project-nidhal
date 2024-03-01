import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[] = [
    { id: '1', NOM: 'Tounsi', PRENOM: 'Ahmed', dateNaissance: '21/12/1997', GENRE: 'M', TELEPHONE: 123456789, ADRESSE: '28 rue mustapha kamel ataturk - 1001 Tunis'},
    { id: '2', NOM: 'Bejaoui', PRENOM: 'Manel', dateNaissance: '21/12/1998', GENRE: 'F', TELEPHONE: 987654321, ADRESSE: '2 rue argentine Belvédère - 1002 Tunis'},
    { id: '3', NOM: 'Mekni', PRENOM: 'Mohamed', dateNaissance: '21/12/1967', GENRE: 'M', TELEPHONE: 26135261, ADRESSE: '28 Rue Ibn Khaldoun - 2100 Gafsa' },
    { id: '4', NOM: 'Dziri', PRENOM: 'Mohamed',dateNaissance: '21/12/1994', GENRE: 'F', TELEPHONE: 987654321, ADRESSE: '2 rue farhat hached - 3070 Karkena'},
    { id: '5', NOM: 'Touati', PRENOM: 'Asma', dateNaissance: '21/12/1997', GENRE: 'F', TELEPHONE: 977654321, ADRESSE: ' Cité 7 Novembre - 4041 Sousse Riadh'},
    { id: '6', NOM: 'fekih', PRENOM: 'Alia', dateNaissance: '21/12/1997', GENRE: 'F', TELEPHONE: 46123984, ADRESSE: ' Cité El Ghazala 2 -2083 Raoued Ariana '},

    ];
    constructor() { }
   addUser(newUser: any) {
    this.users.push(newUser);
    }

}
