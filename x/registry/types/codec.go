package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRegisterRecord{}, "registry/RegisterRecord", nil)
	cdc.RegisterConcrete(&MsgCreateRecordmap{}, "registry/CreateRecordmap", nil)
	cdc.RegisterConcrete(&MsgUpdateRecordmap{}, "registry/UpdateRecordmap", nil)
	cdc.RegisterConcrete(&MsgDeleteRecordmap{}, "registry/DeleteRecordmap", nil)
	cdc.RegisterConcrete(&MsgSendRecordBroadcast{}, "registry/SendRecordBroadcast", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterRecord{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRecordmap{},
		&MsgUpdateRecordmap{},
		&MsgDeleteRecordmap{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendRecordBroadcast{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
