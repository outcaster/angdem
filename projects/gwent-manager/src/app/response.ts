import { BaseResponse } from './base-response';

export interface Response<T> extends BaseResponse {
    result: T[];
}
