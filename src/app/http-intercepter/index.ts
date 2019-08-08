import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderIntercepter } from './auth-header-intercepter';

export const httpIntercepterProviders = [
    {provide:HTTP_INTERCEPTORS,useClass: AuthHeaderIntercepter,multi: true}
];