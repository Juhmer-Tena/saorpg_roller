import { SanitizeInput } from "./input_utils";

class RollRequest {
    roll_name: string;
    roll_url: string;
    roll_purpose: string;
    roll_count: number;

    constructor(name: string, url: string, purpose: string, count: number) {
        this.roll_name = this._SanitizeInput(name);
        this.roll_url = this._SanitizeInput(url);
        this.roll_purpose = this._SanitizeInput(purpose);
        this.roll_count = 1;
      }

    _SanitizeInput(input: string){
      return SanitizeInput(input);
    }
}

export function CreateRollRequest(name: string, url: string, purpose: string, count: number){
  let rollRequest = new RollRequest(name, url, purpose, count);
    // inject roll loading html (?)
    // submit roll request to api
    // on receiving api return, refresh page.
}