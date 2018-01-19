export interface albumResult {
    [index: number]: Photo
}

class Photo {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

export interface albumsResult {
    [index: number]: {
        id: number,
        title: string,
        userId: number
    }
}

export interface userResult {
    [index: number]: {
        id: number,
        name: string,
        username: string,
        email: string,
        phone: string,
        website: string,
        address: Address,
        company: Company
    }
}

class Company {
    name: string;
    bs: string;
    catchPhrase: string;
}

class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: object;
}