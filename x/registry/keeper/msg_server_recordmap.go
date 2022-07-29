package keeper

import (
	"context"

	"cns/x/registry/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRecordmap(goCtx context.Context, msg *types.MsgCreateRecordmap) (*types.MsgCreateRecordmapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetRecordmap(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var recordmap = types.Recordmap{
		Creator: msg.Creator,
		Index:   msg.Index,
		Chain:   msg.Chain,
		Address: msg.Address,
	}

	k.SetRecordmap(
		ctx,
		recordmap,
	)
	return &types.MsgCreateRecordmapResponse{}, nil
}

func (k msgServer) UpdateRecordmap(goCtx context.Context, msg *types.MsgUpdateRecordmap) (*types.MsgUpdateRecordmapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRecordmap(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var recordmap = types.Recordmap{
		Creator: msg.Creator,
		Index:   msg.Index,
		Chain:   msg.Chain,
		Address: msg.Address,
	}

	k.SetRecordmap(ctx, recordmap)

	return &types.MsgUpdateRecordmapResponse{}, nil
}

func (k msgServer) DeleteRecordmap(goCtx context.Context, msg *types.MsgDeleteRecordmap) (*types.MsgDeleteRecordmapResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRecordmap(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRecordmap(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteRecordmapResponse{}, nil
}
