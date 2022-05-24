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
    return this.http.post(`${this.endpoint}/signin`,user).subscribe((res:any)=>{
      localStorage.setItem('access-token',res.token);
      localStorage.setItem('id',res._id)
      this.getUserProfile(res._id).subscribe(data=>{
        this.router.navigate(['user/profile/'+res._id])
        return data.msg
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
    let removeId = localStorage.removeItem('id');
    if(removeToken==null && removeId ==null){
      this.router.navigate(['user/log-in'])
    }
  }
  getUserProfile(id:any):Observable<any>{
    let api=`${this.endpoint}/user-profile/${id}`
    return this.http.get(api,{headers:this.headers}).pipe(
      map(data=>{
        return data
      }),
      catchError(this.handleError)
    )
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.statusText}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
