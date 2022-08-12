package keeper

import (
	"context"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"

	"cns/x/registry/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RegisterRecord(goCtx context.Context, msg *types.MsgRegisterRecord) (*types.MsgRegisterRecordResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_, err := k.CreateRecordmap(goCtx, &types.MsgCreateRecordmap{
		Creator: msg.GetCreator(),
		Index:   msg.GetCreator(),
		Chain:   msg.GetChain(),
		Address: msg.GetAddress(),
	})
	if err != nil {
		return nil, err
	}

	err = k.TransmitRecordBroadcastPacket(ctx, types.RecordBroadcastPacketData{
		UserAddress:  msg.GetCreator(),
		Chain:        msg.GetChain(),
		ChainAddress: msg.GetAddress(),
	}, "registry", "channel-7", clienttypes.ZeroHeight(), 1660000000000000000)
	if err != nil {
		return nil, err
	}

	_ = ctx

	return &types.MsgRegisterRecordResponse{}, nil
}
