package keeper

import (
	"context"

	"cns/x/registry/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
)

func (k msgServer) SendRecordBroadcast(goCtx context.Context, msg *types.MsgSendRecordBroadcast) (*types.MsgSendRecordBroadcastResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.RecordBroadcastPacketData

	packet.UserAddress = msg.UserAddress
	packet.Chain = msg.Chain
	packet.ChainAddress = msg.ChainAddress

	// Transmit the packet
	err := k.TransmitRecordBroadcastPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendRecordBroadcastResponse{}, nil
}
