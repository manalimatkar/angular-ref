export class User{
    firstname: string;
    lastname:string;
    email:string;
    wfcontext: string;
    applist: AppList[];
}

export class AppList{
    name:string;
    wfcontexts: [{
        name:string;
        wfcontext:string;
        url:string;
    }]   
}