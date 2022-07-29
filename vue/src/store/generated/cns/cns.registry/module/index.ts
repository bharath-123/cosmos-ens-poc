// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRegisterRecord } from "./types/registry/tx";
import { MsgUpdateRecordmap } from "./types/registry/tx";
import { MsgCreateRecordmap } from "./types/registry/tx";
import { MsgDeleteRecordmap } from "./types/registry/tx";


const types = [
  ["/cns.registry.MsgRegisterRecord", MsgRegisterRecord],
  ["/cns.registry.MsgUpdateRecordmap", MsgUpdateRecordmap],
  ["/cns.registry.MsgCreateRecordmap", MsgCreateRecordmap],
  ["/cns.registry.MsgDeleteRecordmap", MsgDeleteRecordmap],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgRegisterRecord: (data: MsgRegisterRecord): EncodeObject => ({ typeUrl: "/cns.registry.MsgRegisterRecord", value: MsgRegisterRecord.fromPartial( data ) }),
    msgUpdateRecordmap: (data: MsgUpdateRecordmap): EncodeObject => ({ typeUrl: "/cns.registry.MsgUpdateRecordmap", value: MsgUpdateRecordmap.fromPartial( data ) }),
    msgCreateRecordmap: (data: MsgCreateRecordmap): EncodeObject => ({ typeUrl: "/cns.registry.MsgCreateRecordmap", value: MsgCreateRecordmap.fromPartial( data ) }),
    msgDeleteRecordmap: (data: MsgDeleteRecordmap): EncodeObject => ({ typeUrl: "/cns.registry.MsgDeleteRecordmap", value: MsgDeleteRecordmap.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
