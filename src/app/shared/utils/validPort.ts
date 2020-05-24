import { createServer } from "net";
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";


/**
 * 检查端口是否可用
 * @param port
 */
export function validPort(port: number): Promise<boolean> {
  const server = createServer().listen(port);
  return new Promise((resolve, reject) => {
    server.once("listening", () => {
      server.close();
      resolve(true);
    });
    server.once("error", (err) => {
      console.log(err);
      server.close();
      resolve(false);
    });
  });
}
