package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendRecordBroadcast = "send_record_broadcast"

var _ sdk.Msg = &MsgSendRecordBroadcast{}

func NewMsgSendRecordBroadcast(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	userAddress string,
	chain string,
	chainAddress string,
) *MsgSendRecordBroadcast {
	return &MsgSendRecordBroadcast{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		UserAddress:      userAddress,
		Chain:            chain,
		ChainAddress:     chainAddress,
	}
}

func (msg *MsgSendRecordBroadcast) Route() string {
	return RouterKey
}

func (msg *MsgSendRecordBroadcast) Type() string {
	return TypeMsgSendRecordBroadcast
}

func (msg *MsgSendRecordBroadcast) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendRecordBroadcast) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendRecordBroadcast) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
