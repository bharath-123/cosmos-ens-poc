/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cns.registry";

export interface RegistryPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  recordBroadcastPacket: RecordBroadcastPacketData | undefined;
}

export interface NoData {}

/** RecordBroadcastPacketData defines a struct for the packet payload */
export interface RecordBroadcastPacketData {
  userAddress: string;
  chain: string;
  chainAddress: string;
}

/** RecordBroadcastPacketAck defines a struct for the packet acknowledgment */
export interface RecordBroadcastPacketAck {
  address: string;
}

const baseRegistryPacketData: object = {};

export const RegistryPacketData = {
  encode(
    message: RegistryPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.recordBroadcastPacket !== undefined) {
      RecordBroadcastPacketData.encode(
        message.recordBroadcastPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegistryPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegistryPacketData } as RegistryPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.recordBroadcastPacket = RecordBroadcastPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegistryPacketData {
    const message = { ...baseRegistryPacketData } as RegistryPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.recordBroadcastPacket !== undefined &&
      object.recordBroadcastPacket !== null
    ) {
      message.recordBroadcastPacket = RecordBroadcastPacketData.fromJSON(
        object.recordBroadcastPacket
      );
    } else {
      message.recordBroadcastPacket = undefined;
    }
    return message;
  },

  toJSON(message: RegistryPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.recordBroadcastPacket !== undefined &&
      (obj.recordBroadcastPacket = message.recordBroadcastPacket
        ? RecordBroadcastPacketData.toJSON(message.recordBroadcastPacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RegistryPacketData>): RegistryPacketData {
    const message = { ...baseRegistryPacketData } as RegistryPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.recordBroadcastPacket !== undefined &&
      object.recordBroadcastPacket !== null
    ) {
      message.recordBroadcastPacket = RecordBroadcastPacketData.fromPartial(
        object.recordBroadcastPacket
      );
    } else {
      message.recordBroadcastPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseRecordBroadcastPacketData: object = {
  userAddress: "",
  chain: "",
  chainAddress: "",
};

export const RecordBroadcastPacketData = {
  encode(
    message: RecordBroadcastPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.chainAddress !== "") {
      writer.uint32(26).string(message.chainAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RecordBroadcastPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordBroadcastPacketData,
    } as RecordBroadcastPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userAddress = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.chainAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordBroadcastPacketData {
    const message = {
      ...baseRecordBroadcastPacketData,
    } as RecordBroadcastPacketData;
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

  toJSON(message: RecordBroadcastPacketData): unknown {
    const obj: any = {};
    message.userAddress !== undefined &&
      (obj.userAddress = message.userAddress);
    message.chain !== undefined && (obj.chain = message.chain);
    message.chainAddress !== undefined &&
      (obj.chainAddress = message.chainAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordBroadcastPacketData>
  ): RecordBroadcastPacketData {
    const message = {
      ...baseRecordBroadcastPacketData,
    } as RecordBroadcastPacketData;
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

const baseRecordBroadcastPacketAck: object = { address: "" };

export const RecordBroadcastPacketAck = {
  encode(
    message: RecordBroadcastPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RecordBroadcastPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRecordBroadcastPacketAck,
    } as RecordBroadcastPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecordBroadcastPacketAck {
    const message = {
      ...baseRecordBroadcastPacketAck,
    } as RecordBroadcastPacketAck;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: RecordBroadcastPacketAck): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RecordBroadcastPacketAck>
  ): RecordBroadcastPacketAck {
    const message = {
      ...baseRecordBroadcastPacketAck,
    } as RecordBroadcastPacketAck;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

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
