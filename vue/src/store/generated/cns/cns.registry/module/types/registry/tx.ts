/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "cns.registry";

export interface MsgRegisterRecord {
  creator: string;
  chain: string;
  address: string;
}

export interface MsgRegisterRecordResponse {}

const baseMsgRegisterRecord: object = { creator: "", chain: "", address: "" };

export const MsgRegisterRecord = {
  encode(message: MsgRegisterRecord, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterRecord {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterRecord } as MsgRegisterRecord;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterRecord {
    const message = { ...baseMsgRegisterRecord } as MsgRegisterRecord;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterRecord): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterRecord>): MsgRegisterRecord {
    const message = { ...baseMsgRegisterRecord } as MsgRegisterRecord;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgRegisterRecordResponse: object = {};

export const MsgRegisterRecordResponse = {
  encode(
    _: MsgRegisterRecordResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterRecordResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterRecordResponse,
    } as MsgRegisterRecordResponse;
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

  fromJSON(_: any): MsgRegisterRecordResponse {
    const message = {
      ...baseMsgRegisterRecordResponse,
    } as MsgRegisterRecordResponse;
    return message;
  },

  toJSON(_: MsgRegisterRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterRecordResponse>
  ): MsgRegisterRecordResponse {
    const message = {
      ...baseMsgRegisterRecordResponse,
    } as MsgRegisterRecordResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RegisterRecord(
    request: MsgRegisterRecord
  ): Promise<MsgRegisterRecordResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RegisterRecord(
    request: MsgRegisterRecord
  ): Promise<MsgRegisterRecordResponse> {
    const data = MsgRegisterRecord.encode(request).finish();
    const promise = this.rpc.request(
      "cns.registry.Msg",
      "RegisterRecord",
      data
    );
    return promise.then((data) =>
      MsgRegisterRecordResponse.decode(new Reader(data))
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
