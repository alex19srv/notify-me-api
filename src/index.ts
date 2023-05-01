/*
 * Copyright 2023 Alex Syrnikov <alex.syrnikov19@gmail.com>
 * SPDX-License-Identifier: Apache-2.0
 */
export class NotifyMe {
  static async sendMessage( url: string, token: string, message: string ): Promise<QueryResult>
  {
    const data = {token, message};

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    const result: QueryResult = await response.json();

    if( !result?.status ) {
      console.error("returned object have not valid format. Object:", result );
      throw new RangeError( "returned object have not valid format" );
    }
    const status = result.status;
    if( status === "OK" ) {
      return result;
    }

    if( result.message ) {
      throw new Error( status + ": " + result.message );
    } else {
      throw new Error( "" + status );
    }
  }

  static createSender( url: string, token: string ): (message: string) => Promise<QueryResult>
  {
    return (message: string) => NotifyMe.sendMessage(url, token, message);
  }
}

export interface QueryResult {
  status: string;
  message?: string;
}
