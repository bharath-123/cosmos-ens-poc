package keeper

import (
	"context"

	"cns/x/registry/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) RegisterRecord(goCtx context.Context, msg *types.MsgRegisterRecord) (*types.MsgRegisterRecordResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	k.CreateRecordmap(goCtx, &types.MsgCreateRecordmap{
		Creator: msg.GetCreator(),
		Index:   msg.GetCreator(),
		Chain:   msg.GetChain(),
		Address: msg.GetAddress(),
	})

	_ = ctx

	return &types.MsgRegisterRecordResponse{}, nil
}
