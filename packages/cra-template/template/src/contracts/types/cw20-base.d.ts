export interface AllAccountsResponse {
  accounts: string[];
  [k: string]: unknown;
}

export interface AllAllowancesResponse {
  allowances: {
    allowance: string;
    /**
     * Expiration represents a point in time when some event happens. It can compare with a BlockInfo and will return is_expired() == true once the condition is hit (and for every block in the future)
     */
    expires:
      | {
          at_height: number;
          [k: string]: unknown;
        }
      | {
          at_time: number;
          [k: string]: unknown;
        }
      | {
          never: {
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
    spender: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}

export interface AllowanceResponse {
  allowance: string;
  /**
   * Expiration represents a point in time when some event happens. It can compare with a BlockInfo and will return is_expired() == true once the condition is hit (and for every block in the future)
   */
  expires:
    | {
        at_height: number;
        [k: string]: unknown;
      }
    | {
        at_time: number;
        [k: string]: unknown;
      }
    | {
        never: {
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
  [k: string]: unknown;
}

export interface BalanceResponse {
  balance: string;
  [k: string]: unknown;
}

export type HandleMsg =
  | {
      transfer: {
        amount: string;
        recipient: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      burn: {
        amount: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      send: {
        amount: string;
        contract: string;
        msg?: string | null;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      mint: {
        amount: string;
        recipient: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      increase_allowance: {
        amount: string;
        expires?:
          | (
              | {
                  at_height: number;
                  [k: string]: unknown;
                }
              | {
                  at_time: number;
                  [k: string]: unknown;
                }
              | {
                  never: {
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }
            )
          | null;
        spender: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      decrease_allowance: {
        amount: string;
        expires?:
          | (
              | {
                  at_height: number;
                  [k: string]: unknown;
                }
              | {
                  at_time: number;
                  [k: string]: unknown;
                }
              | {
                  never: {
                    [k: string]: unknown;
                  };
                  [k: string]: unknown;
                }
            )
          | null;
        spender: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      transfer_from: {
        amount: string;
        owner: string;
        recipient: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      send_from: {
        amount: string;
        contract: string;
        msg?: string | null;
        owner: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      burn_from: {
        amount: string;
        owner: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };

export interface InitMsg {
  decimals: number;
  initial_balances: {
    address: string;
    amount: string;
    [k: string]: unknown;
  }[];
  mint?: {
    /**
     * cap is how many more tokens can be issued by the minter
     */
    cap?: string | null;
    minter: string;
    [k: string]: unknown;
  } | null;
  name: string;
  symbol: string;
  [k: string]: unknown;
}

/**
 * We currently take no arguments for migrations
 */
export interface MigrateMsg {
  [k: string]: unknown;
}

export type QueryMsg =
  | {
      balance: {
        address: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      token_info: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      minter: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      allowance: {
        owner: string;
        spender: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      all_allowances: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      all_accounts: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };

export interface TokenInfoResponse {
  decimals: number;
  name: string;
  symbol: string;
  total_supply: string;
  [k: string]: unknown;
}

