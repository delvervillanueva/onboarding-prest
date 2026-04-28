import { EventEmitter } from '../../stencil-public-runtime';
export declare class StdPasswordValidationComponent {
    password: string;
    status: EventEmitter;
    hasLowercase: boolean;
    hasUppercase: boolean;
    hasNumber: boolean;
    isValidLength: boolean;
    completed: number;
    validatePassword(newValue: string): void;
    render(): any;
}
