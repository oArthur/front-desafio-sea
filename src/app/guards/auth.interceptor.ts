import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('id_token');

    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Ikx1Y2FzIiwiZXhwIjoxNzEzMzg2NTk5fQ.4LaYhqff4nPSRSVkyHP84KNn1J_ysPXGYSlKCnoKC08`)
    });

    return next.handle(authReq)
  }
}
