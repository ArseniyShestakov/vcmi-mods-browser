import { AnyMxRecord } from "dns";

export {};

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: any;
  }
}
