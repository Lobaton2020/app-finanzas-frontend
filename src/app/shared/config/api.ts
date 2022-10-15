import { environment } from "src/environments/environment";

export const BaseApi = environment.apiBaseUrl; // http://server:puerto/api/v1

export const ModuleAuth = "auth";
export const EndpointLogin = "signin";
export const EndpointRegister = "signup";
export const EndpointrRecoveryPassword = "recoveryPassword";
export const EndpointRefreshToken = "refreshToken";

export const ModuleInflows = "inflows";
export const EndpointDeposit = "deposits";
export const EndpointType = "types";

export const ModuleOutflows = "outflows";

