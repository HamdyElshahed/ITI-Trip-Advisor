import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { headerInterceptor } from './header-interceptor';
export const httpInterceptorProviders = {
  provide: HTTP_INTERCEPTORS,
  useClass: headerInterceptor,
  multi: true,
};
