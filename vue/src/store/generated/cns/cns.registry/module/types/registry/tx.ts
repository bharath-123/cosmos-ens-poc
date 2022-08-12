/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "cns.registry";

export interface MsgRegisterRecord {
  creator: string;
  chain: string;
  address: string;
}

export interface MsgRegisterRecordResponse {}

export interface MsgCreateRecordmap {
  creator: string;
  index: string;
  chain: string;
  address: string;
}

export interface MsgCreateRecordmapResponse {}

export interface MsgUpdateRecordmap {
  creator: string;
  index: string;
  chain: string;
  address: string;
}

export interface MsgUpdateRecordmapResponse {}

export interface MsgDeleteRecordmap {
  creator: string;
  index: string;
}

export interface MsgDeleteRecordmapResponse {}

export interface MsgSendRecordBroadcast {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  userAddress: string;
  chain: string;
  chainAddress: string;
}

export interface MsgSendRecordBroadcastResponse {}

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

const baseMsgCreateRecordmap: object = {
  creator: "",
  index: "",
  chain: "",
  address: "",
};

export const MsgCreateRecordmap = {
  encode(
    message: MsgCreateRecordmap,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.chain !== "") {
      writer.uint32(26).string(message.chain);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRecordmap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRecordmap } as MsgCreateRecordmap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.chain = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRecordmap {
    const message = { ...baseMsgCreateRecordmap } as MsgCreateRecordmap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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

  toJSON(message: MsgCreateRecordmap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRecordmap>): MsgCreateRecordmap {
    const message = { ...baseMsgCreateRecordmap } as MsgCreateRecordmap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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

const baseMsgCreateRecordmapResponse: object = {};

export const MsgCreateRecordmapResponse = {
  encode(
    _: MsgCreateRecordmapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateRecordmapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRecordmapResponse,
    } as MsgCreateRecordmapResponse;
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

  fromJSON(_: any): MsgCreateRecordmapResponse {
    const message = {
      ...baseMsgCreateRecordmapResponse,
    } as MsgCreateRecordmapResponse;
    return message;
  },

  toJSON(_: MsgCreateRecordmapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateRecordmapResponse>
  ): MsgCreateRecordmapResponse {
    const message = {
      ...baseMsgCreateRecordmapResponse,
    } as MsgCreateRecordmapResponse;
    return message;
  },
};

const baseMsgUpdateRecordmap: object = {
  creator: "",
  index: "",
  chain: "",
  address: "",
};

export const MsgUpdateRecordmap = {
  encode(
    message: MsgUpdateRecordmap,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.chain !== "") {
      writer.uint32(26).string(message.chain);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateRecordmap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRecordmap } as MsgUpdateRecordmap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.chain = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRecordmap {
    const message = { ...baseMsgUpdateRecordmap } as MsgUpdateRecordmap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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

  toJSON(message: MsgUpdateRecordmap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRecordmap>): MsgUpdateRecordmap {
    const message = { ...baseMsgUpdateRecordmap } as MsgUpdateRecordmap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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

const baseMsgUpdateRecordmapResponse: object = {};

export const MsgUpdateRecordmapResponse = {
  encode(
    _: MsgUpdateRecordmapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateRecordmapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRecordmapResponse,
    } as MsgUpdateRecordmapResponse;
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

  fromJSON(_: any): MsgUpdateRecordmapResponse {
    const message = {
      ...baseMsgUpdateRecordmapResponse,
    } as MsgUpdateRecordmapResponse;
    return message;
  },

  toJSON(_: MsgUpdateRecordmapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateRecordmapResponse>
  ): MsgUpdateRecordmapResponse {
    const message = {
      ...baseMsgUpdateRecordmapResponse,
    } as MsgUpdateRecordmapResponse;
    return message;
  },
};

const baseMsgDeleteRecordmap: object = { creator: "", index: "" };

export const MsgDeleteRecordmap = {
  encode(
    message: MsgDeleteRecordmap,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRecordmap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteRecordmap } as MsgDeleteRecordmap;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRecordmap {
    const message = { ...baseMsgDeleteRecordmap } as MsgDeleteRecordmap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteRecordmap): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteRecordmap>): MsgDeleteRecordmap {
    const message = { ...baseMsgDeleteRecordmap } as MsgDeleteRecordmap;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteRecordmapResponse: object = {};

export const MsgDeleteRecordmapResponse = {
  encode(
    _: MsgDeleteRecordmapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteRecordmapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRecordmapResponse,
    } as MsgDeleteRecordmapResponse;
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

  fromJSON(_: any): MsgDeleteRecordmapResponse {
    const message = {
      ...baseMsgDeleteRecordmapResponse,
    } as MsgDeleteRecordmapResponse;
    return message;
  },

  toJSON(_: MsgDeleteRecordmapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteRecordmapResponse>
  ): MsgDeleteRecordmapResponse {
    const message = {
      ...baseMsgDeleteRecordmapResponse,
    } as MsgDeleteRecordmapResponse;
    return message;
  },
};

const baseMsgSendRecordBroadcast: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  userAddress: "",
  chain: "",
  chainAddress: "",
};

export const MsgSendRecordBroadcast = {
  encode(
    message: MsgSendRecordBroadcast,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.userAddress !== "") {
      writer.uint32(42).string(message.userAddress);
    }
    if (message.chain !== "") {
      writer.uint32(50).string(message.chain);
    }
    if (message.chainAddress !== "") {
      writer.uint32(58).string(message.chainAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendRecordBroadcast {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendRecordBroadcast } as MsgSendRecordBroadcast;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.userAddress = reader.string();
          break;
        case 6:
          message.chain = reader.string();
          break;
        case 7:
          message.chainAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRecordBroadcast {
    const message = { ...baseMsgSendRecordBroadcast } as MsgSendRecordBroadcast;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.userAddress !== undefined && object.userAddress !== null) {
      message.userAddress = String(object.userAddress);
    } else {
      message.userAddress = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = String(object.chain);
    } else {
      message.chain = "";
    }
    if (object.chainAddress !== undefined && object.chainAddress !== null) {
      message.chainAddress = String(object.chainAddress);
    } else {
      message.chainAddress = "";
    }
    return message;
  },

  toJSON(message: MsgSendRecordBroadcast): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.chain !== undefined && (obj.chain = message.chain);
    message.chainAddress !== undefined &&
      (obj.chainAddress = message.chainAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendRecordBroadcast>
  ): MsgSendRecordBroadcast {
    const message = { ...baseMsgSendRecordBroadcast } as MsgSendRecordBroadcast;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.userAddress !== undefined && object.userAddress !== null) {
      message.userAddress = object.userAddress;
    } else {
      message.userAddress = "";
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = object.chain;
    } else {
      message.chain = "";
    }
    if (object.chainAddress !== undefined && object.chainAddress !== null) {
      message.chainAddress = object.chainAddress;
    } else {
      message.chainAddress = "";
    }
    return message;
  },
};

const baseMsgSendRecordBroadcastResponse: object = {};

export const MsgSendRecordBroadcastResponse = {
  encode(
    _: MsgSendRecordBroadcastResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendRecordBroadcastResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendRecordBroadcastResponse,
    } as MsgSendRecordBroadcastResponse;
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

  fromJSON(_: any): MsgSendRecordBroadcastResponse {
    const message = {
      ...baseMsgSendRecordBroadcastResponse,
    } as MsgSendRecordBroadcastResponse;
    return message;
  },

  toJSON(_: MsgSendRecordBroadcastResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendRecordBroadcastResponse>
  ): MsgSendRecordBroadcastResponse {
    const message = {
      ...baseMsgSendRecordBroadcastResponse,
    } as MsgSendRecordBroadcastResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RegisterRecord(
    request: MsgRegisterRecord
  ): Promise<MsgRegisterRecordResponse>;
  CreateRecordmap(
    request: MsgCreateRecordmap
  ): Promise<MsgCreateRecordmapResponse>;
  UpdateRecordmap(
    request: MsgUpdateRecordmap
  ): Promise<MsgUpdateRecordmapResponse>;
  DeleteRecordmap(
    request: MsgDeleteRecordmap
  ): Promise<MsgDeleteRecordmapResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendRecordBroadcast(
    request: MsgSendRecordBroadcast
  ): Promise<MsgSendRecordBroadcastResponse>;
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

  CreateRecordmap(
    request: MsgCreateRecordmap
  ): Promise<MsgCreateRecordmapResponse> {
    const data = MsgCreateRecordmap.encode(request).finish();
    const promise = this.rpc.request(
      "cns.registry.Msg",
      "CreateRecordmap",
      data
    );
    return promise.then((data) =>
      MsgCreateRecordmapResponse.decode(new Reader(data))
    );
  }

  UpdateRecordmap(
    request: MsgUpdateRecordmap
  ): Promise<MsgUpdateRecordmapResponse> {
    const data = MsgUpdateRecordmap.encode(request).finish();
    const promise = this.rpc.request(
      "cns.registry.Msg",
      "UpdateRecordmap",
      data
    );
    return promise.then((data) =>
      MsgUpdateRecordmapResponse.decode(new Reader(data))
    );
  }

  DeleteRecordmap(
    request: MsgDeleteRecordmap
  ): Promise<MsgDeleteRecordmapResponse> {
    const data = MsgDeleteRecordmap.encode(request).finish();
    const promise = this.rpc.request(
      "cns.registry.Msg",
      "DeleteRecordmap",
      data
    );
    return promise.then((data) =>
      MsgDeleteRecordmapResponse.decode(new Reader(data))
    );
  }

  SendRecordBroadcast(
    request: MsgSendRecordBroadcast
  ): Promise<MsgSendRecordBroadcastResponse> {
    const data = MsgSendRecordBroadcast.encode(request).finish();
    const promise = this.rpc.request(
      "cns.registry.Msg",
      "SendRecordBroadcast",
      data
    );
    return promise.then((data) =>
      MsgSendRecordBroadcastResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
