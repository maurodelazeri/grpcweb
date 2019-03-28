/* eslint-disable */

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

goog.exportSymbol("proto.alaska.Action", null, global);
goog.exportSymbol("proto.alaska.BacktestingCode", null, global);
goog.exportSymbol("proto.alaska.CandleGroupBy", null, global);
goog.exportSymbol("proto.alaska.DealType", null, global);
goog.exportSymbol("proto.alaska.GranularityMoney", null, global);
goog.exportSymbol("proto.alaska.GranularityTick", null, global);
goog.exportSymbol("proto.alaska.GranularityTime", null, global);
goog.exportSymbol("proto.alaska.GranularityVolume", null, global);
goog.exportSymbol("proto.alaska.OrderEntryType", null, global);
goog.exportSymbol("proto.alaska.OrderState", null, global);
goog.exportSymbol("proto.alaska.OrderType", null, global);
goog.exportSymbol("proto.alaska.OrderTypeFilling", null, global);
goog.exportSymbol("proto.alaska.OrderTypeTime", null, global);
goog.exportSymbol("proto.alaska.Reason", null, global);
goog.exportSymbol("proto.alaska.Retcode", null, global);
goog.exportSymbol("proto.alaska.Side", null, global);
goog.exportSymbol("proto.alaska.SystemMode", null, global);
goog.exportSymbol("proto.alaska.TradeAction", null, global);
goog.exportSymbol("proto.alaska.VenueType", null, global);
goog.exportSymbol("proto.alaska.Venues", null, global);
/**
 * @enum {number}
 */
proto.alaska.Venues = {
  DARKPOOL: 0,
  COINBASEPRO: 1,
  BITMEX: 2,
  BITFINEX: 3,
  BINANCE: 4,
  GEMINI: 5,
  OKEX_INTERNATIONAL_SPOT: 6,
  OKEX_INTERNATIONAL_FUT: 7,
  HUOBIPRO: 8,
  GATEIO: 9,
  POLONIEX: 10,
  ZB: 11,
  FOXBIT: 12,
  BITCOINTOYOU: 13,
  BITCAMBIO: 14,
  DERIBIT: 15
};

/**
 * @enum {number}
 */
proto.alaska.SystemMode = {
  DEMO: 0,
  LIVE: 1,
  BACKTESTING: 2
};

/**
 * @enum {number}
 */
proto.alaska.VenueType = {
  SPOT: 0,
  FUTURES: 1,
  OPTIONS: 2
};

/**
 * @enum {number}
 */
proto.alaska.OrderState = {
  STARTED: 0,
  PLACED: 1,
  CANCELED: 2,
  PARTIAL: 3,
  FILLED: 4,
  REJECTED: 5,
  EXPIRED: 6,
  REQUEST_ADD: 7,
  REQUEST_MODIFY: 8,
  REQUEST_CANCEL: 9
};

/**
 * @enum {number}
 */
proto.alaska.OrderTypeFilling = {
  FOK: 0,
  IOC: 1,
  RETURN: 2
};

/**
 * @enum {number}
 */
proto.alaska.Reason = {
  ORDER_CLIENT: 0,
  ORDER_MOBILE: 1,
  ORDER_WEB: 2,
  ORDER_STRATEGY: 3,
  ORDER_SL: 4,
  ORDER_TP: 5,
  ORDER_SO: 6
};

/**
 * @enum {number}
 */
proto.alaska.OrderTypeTime = {
  GTC: 0,
  DAY: 1,
  SPECIFIED: 2,
  SPECIFIED_DAY: 3
};

/**
 * @enum {number}
 */
proto.alaska.OrderEntryType = {
  IN: 0,
  OUT: 1,
  INOUT: 2,
  OUT_BY: 3
};

/**
 * @enum {number}
 */
proto.alaska.Side = {
  BUY: 0,
  SELL: 1
};

/**
 * @enum {number}
 */
proto.alaska.OrderType = {
  MARKET: 0,
  LIMIT: 1,
  STOP: 2,
  STOP_LIMIT: 3,
  CLOSING_BY: 4
};

/**
 * @enum {number}
 */
proto.alaska.DealType = {
  POSITION: 0,
  BALANCE: 1,
  CREDIT: 2,
  CHARGE: 3,
  CORRECTION: 4,
  BONUS: 5,
  COMMISSION: 6,
  INTEREST: 7,
  BUY_CANCELED: 8,
  SELL_CANCELED: 9,
  DIVIDEND: 10
};

/**
 * @enum {number}
 */
proto.alaska.TradeAction = {
  DEAL: 0,
  PENDING: 1,
  SLTP: 2,
  MODIFY: 3,
  REMOVE: 4,
  CLOSE_BY: 5
};

/**
 * @enum {number}
 */
proto.alaska.Retcode = {
  DONE: 0,
  REQUEST_WITH_NO_TOKEN: 1,
  INVALID_TOKEN: 2,
  INVALID_REQUEST: 3,
  TOKEN_EXPIRED: 4,
  REJECTX: 5,
  REJECT: 6,
  CANCEL: 7,
  PLACED_TRADE: 8,
  DONE_PARTIAL: 9,
  ERROR: 10,
  TIMEOUT: 11,
  INVALID: 12,
  INVALID_VOLUME: 13,
  INVALID_PRICE: 14,
  INVALID_STOPS: 15,
  TRADE_DISABLED: 16,
  MARKET_CLOSED: 17,
  NO_MONEY: 18,
  PRICE_CHANGED: 19,
  PRICE_OFF: 20,
  INVALID_EXPIRATION: 21,
  ORDER_CHANGED: 22,
  TOO_MANY_REQUESTS: 23,
  NO_CHANGES: 24,
  SERVER_DISABLES_AT: 25,
  CLIENT_DISABLES_AT: 26,
  LOCKED: 27,
  FROZEN: 28,
  INVALID_FILL: 29,
  CONNECTION: 30,
  ONLY_REAL: 31,
  LIMIT_ORDERS: 32,
  LIMIT_VOLUME: 33,
  INVALID_ORDER: 34,
  POSITION_CLOSED: 35,
  CLOSE_ORDER_EXIST: 36,
  LIMIT_POSITIONS: 37,
  REJECT_CANCEL: 38,
  LONG_ONLY: 39,
  SHORT_ONLY: 40,
  CLOSE_ONLY: 41
};

/**
 * @enum {number}
 */
proto.alaska.GranularityTime = {
  TIME_0: 0,
  TIME_5S: 5,
  TIME_10S: 10,
  TIME_15S: 15,
  TIME_30S: 30,
  TIME_1M: 60,
  TIME_2M: 120,
  TIME_3M: 180,
  TIME_4M: 240,
  TIME_5M: 300,
  TIME_6M: 360,
  TIME_7M: 420,
  TIME_8M: 480,
  TIME_9M: 540,
  TIME_10M: 600,
  TIME_15M: 900,
  TIME_20M: 1200,
  TIME_30M: 1800,
  TIME_40M: 2400,
  TIME_50M: 3000,
  TIME_1H: 3600,
  TIME_2H: 7200,
  TIME_3H: 10800,
  TIME_4H: 14400,
  TIME_5H: 18000,
  TIME_6H: 21600,
  TIME_7H: 25200,
  TIME_8H: 28800,
  TIME_9H: 32400,
  TIME_10H: 36000,
  TIME_11H: 39600,
  TIME_12H: 43200,
  TIME_1D: 86400
};

/**
 * @enum {number}
 */
proto.alaska.GranularityTick = {
  TICK_0: 0,
  TICK_1: 1,
  TICK_5: 5,
  TICK_10: 10,
  TICK_15: 15,
  TICK_20: 20,
  TICK_30: 30,
  TICK_50: 50,
  TICK_100: 100,
  TICK_150: 150,
  TICK_200: 200,
  TICK_250: 250,
  TICK_300: 300,
  TICK_350: 350,
  TICK_400: 400,
  TICK_450: 450,
  TICK_500: 500,
  TICK_1000: 1000,
  TICK_1500: 1500,
  TICK_2000: 2000,
  TICK_3000: 3000,
  TICK_4000: 4000,
  TICK_5000: 5000,
  TICK_10000: 10000
};

/**
 * @enum {number}
 */
proto.alaska.GranularityVolume = {
  VOL_0: 0,
  VOL_1: 1,
  VOL_5: 5,
  VOL_10: 10,
  VOL_15: 15,
  VOL_20: 20,
  VOL_30: 30,
  VOL_50: 50,
  VOL_100: 100,
  VOL_150: 150,
  VOL_200: 200,
  VOL_250: 250,
  VOL_300: 300,
  VOL_350: 350,
  VOL_400: 400,
  VOL_450: 450,
  VOL_500: 500,
  VOL_1000: 1000,
  VOL_1500: 1500,
  VOL_2000: 2000,
  VOL_3000: 3000,
  VOL_4000: 4000,
  VOL_5000: 5000,
  VOL_10000: 10000
};

/**
 * @enum {number}
 */
proto.alaska.GranularityMoney = {
  MONEY_0: 0,
  MONEY_100: 1000,
  MONEY_5000: 5000,
  MONEY_10000: 10000,
  MONEY_15000: 15000,
  MONEY_30000: 30000,
  MONEY_60000: 60000,
  MONEY_100000: 100000,
  MONEY_150000: 150000,
  MONEY_200000: 200000,
  MONEY_250000: 250000,
  MONEY_300000: 300000,
  MONEY_400000: 400000,
  MONEY_500000: 500000,
  MONEY_1000000: 1000000,
  MONEY_1500000: 1500000,
  MONEY_2000000: 2000000,
  MONEY_2500000: 2500000,
  MONEY_3000000: 3000000,
  MONEY_3500000: 3500000,
  MONEY_4000000: 4000000,
  MONEY_4500000: 4500000,
  MONEY_5000000: 5000000,
  MONEY_10000000: 10000000
};

/**
 * @enum {number}
 */
proto.alaska.CandleGroupBy = {
  TIME: 0,
  TICK: 1,
  VOLUME: 2,
  MONEY: 3
};

/**
 * @enum {number}
 */
proto.alaska.BacktestingCode = {
  START: 0,
  NEXT: 1,
  FINISHED: 2
};

/**
 * @enum {number}
 */
proto.alaska.Action = {
  INSERT: 0,
  UPDATE: 1,
  DELETE: 2,
  RELOAD: 3
};

goog.object.extend(exports, proto.alaska);
