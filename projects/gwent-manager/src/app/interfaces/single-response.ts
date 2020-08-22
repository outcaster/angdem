import { BaseResponse } from './base-response';

export interface SingleResponse<T> extends BaseResponse {
    result: T;
}
