import { BaseResponse } from './base-response';

export interface LoginResponse extends BaseResponse {
    api_key: string;
}
