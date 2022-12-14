/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../registry/params";
import { Recordmap } from "../registry/recordmap";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "cns.registry";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetRecordmapRequest {
  index: string;
}

export interface QueryGetRecordmapResponse {
  recordmap: Recordmap | undefined;
}

export interface QueryAllRecordmapRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRecordmapResponse {
  recordmap: Recordmap[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetRecordmapRequest: object = { index: "" };

export const QueryGetRecordmapRequest = {
  encode(
    message: QueryGetRecordmapRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRecordmapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRecordmapRequest,
    } as QueryGetRecordmapRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRecordmapRequest {
    const message = {
      ...baseQueryGetRecordmapRequest,
    } as QueryGetRecordmapRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetRecordmapRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRecordmapRequest>
  ): QueryGetRecordmapRequest {
    const message = {
      ...baseQueryGetRecordmapRequest,
    } as QueryGetRecordmapRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetRecordmapResponse: object = {};

export const QueryGetRecordmapResponse = {
  encode(
    message: QueryGetRecordmapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.recordmap !== undefined) {
      Recordmap.encode(message.recordmap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRecordmapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRecordmapResponse,
    } as QueryGetRecordmapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordmap = Recordmap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRecordmapResponse {
    const message = {
      ...baseQueryGetRecordmapResponse,
    } as QueryGetRecordmapResponse;
    if (object.recordmap !== undefined && object.recordmap !== null) {
      message.recordmap = Recordmap.fromJSON(object.recordmap);
    } else {
      message.recordmap = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRecordmapResponse): unknown {
    const obj: any = {};
    message.recordmap !== undefined &&
      (obj.recordmap = message.recordmap
        ? Recordmap.toJSON(message.recordmap)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRecordmapResponse>
  ): QueryGetRecordmapResponse {
    const message = {
      ...baseQueryGetRecordmapResponse,
    } as QueryGetRecordmapResponse;
    if (object.recordmap !== undefined && object.recordmap !== null) {
      message.recordmap = Recordmap.fromPartial(object.recordmap);
    } else {
      message.recordmap = undefined;
    }
    return message;
  },
};

const baseQueryAllRecordmapRequest: object = {};

export const QueryAllRecordmapRequest = {
  encode(
    message: QueryAllRecordmapRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllRecordmapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRecordmapRequest,
    } as QueryAllRecordmapRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRecordmapRequest {
    const message = {
      ...baseQueryAllRecordmapRequest,
    } as QueryAllRecordmapRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRecordmapRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRecordmapRequest>
  ): QueryAllRecordmapRequest {
    const message = {
      ...baseQueryAllRecordmapRequest,
    } as QueryAllRecordmapRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRecordmapResponse: object = {};

export const QueryAllRecordmapResponse = {
  encode(
    message: QueryAllRecordmapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.recordmap) {
      Recordmap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllRecordmapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRecordmapResponse,
    } as QueryAllRecordmapResponse;
    message.recordmap = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordmap.push(Recordmap.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRecordmapResponse {
    const message = {
      ...baseQueryAllRecordmapResponse,
    } as QueryAllRecordmapResponse;
    message.recordmap = [];
    if (object.recordmap !== undefined && object.recordmap !== null) {
      for (const e of object.recordmap) {
        message.recordmap.push(Recordmap.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRecordmapResponse): unknown {
    const obj: any = {};
    if (message.recordmap) {
      obj.recordmap = message.recordmap.map((e) =>
        e ? Recordmap.toJSON(e) : undefined
      );
    } else {
      obj.recordmap = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRecordmapResponse>
  ): QueryAllRecordmapResponse {
    const message = {
      ...baseQueryAllRecordmapResponse,
    } as QueryAllRecordmapResponse;
    message.recordmap = [];
    if (object.recordmap !== undefined && object.recordmap !== null) {
      for (const e of object.recordmap) {
        message.recordmap.push(Recordmap.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Recordmap by index. */
  Recordmap(
    request: QueryGetRecordmapRequest
  ): Promise<QueryGetRecordmapResponse>;
  /** Queries a list of Recordmap items. */
  RecordmapAll(
    request: QueryAllRecordmapRequest
  ): Promise<QueryAllRecordmapResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cns.registry.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Recordmap(
    request: QueryGetRecordmapRequest
  ): Promise<QueryGetRecordmapResponse> {
    const data = QueryGetRecordmapRequest.encode(request).finish();
    const promise = this.rpc.request("cns.registry.Query", "Recordmap", data);
    return promise.then((data) =>
      QueryGetRecordmapResponse.decode(new Reader(data))
    );
  }

  RecordmapAll(
    request: QueryAllRecordmapRequest
  ): Promise<QueryAllRecordmapResponse> {
    const data = QueryAllRecordmapRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cns.registry.Query",
      "RecordmapAll",
      data
    );
    return promise.then((data) =>
      QueryAllRecordmapResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
