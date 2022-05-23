import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint:string='http://localhost:4000/api'
  headers= new HttpHeaders().set('Content-Type','application/json')
  currentUser={}
  authToken = localStorage.getItem('access-token');
  constructor(private http:HttpClient,private router:Router) { }
  signUp(user:any):Observable<any>{
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api,user).pipe(catchError(this.handleError))
  }
  signIn(user:User){
    return this.http.post<User>(`${this.endpoint}/signin`,user).subscribe((res:any)=>{
      localStorage.setItem('access-token',res.token);
      this.getUserProfile(res._id).subscribe(data=>{
        this.currentUser=data.msg
        this.router.navigate(['user/profile/'+res._id])
      })
    })
  }
  getToken(){
    return localStorage.getItem('access-token')
  }
  get isLoggedIn():boolean{
    let authentication = localStorage.getItem('access-token');
    return authentication !== null?true:false
  }
  doLogout(){
    let removeToken = localStorage.removeItem('access-token');
    if(removeToken==null){
      this.router.navigate(['log-in'])
    }
  }
  getUserProfile(id:any):Observable<any>{
    let api=`${this.endpoint}/user-profile/${id}`
    return this.http.get(api,{headers:this.headers}).pipe(
      map(data=>{
        return data||{}
      }),
      catchError(this.handleError)
    )
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
