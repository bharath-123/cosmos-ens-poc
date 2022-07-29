package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateRecordmap = "create_recordmap"
	TypeMsgUpdateRecordmap = "update_recordmap"
	TypeMsgDeleteRecordmap = "delete_recordmap"
)

var _ sdk.Msg = &MsgCreateRecordmap{}

func NewMsgCreateRecordmap(
	creator string,
	index string,
	chain string,
	address string,

) *MsgCreateRecordmap {
	return &MsgCreateRecordmap{
		Creator: creator,
		Index:   index,
		Chain:   chain,
		Address: address,
	}
}

func (msg *MsgCreateRecordmap) Route() string {
	return RouterKey
}

func (msg *MsgCreateRecordmap) Type() string {
	return TypeMsgCreateRecordmap
}

func (msg *MsgCreateRecordmap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRecordmap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRecordmap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRecordmap{}

func NewMsgUpdateRecordmap(
	creator string,
	index string,
	chain string,
	address string,

) *MsgUpdateRecordmap {
	return &MsgUpdateRecordmap{
		Creator: creator,
		Index:   index,
		Chain:   chain,
		Address: address,
	}
}

func (msg *MsgUpdateRecordmap) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRecordmap) Type() string {
	return TypeMsgUpdateRecordmap
}

func (msg *MsgUpdateRecordmap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRecordmap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRecordmap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRecordmap{}

func NewMsgDeleteRecordmap(
	creator string,
	index string,

) *MsgDeleteRecordmap {
	return &MsgDeleteRecordmap{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteRecordmap) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRecordmap) Type() string {
	return TypeMsgDeleteRecordmap
}

func (msg *MsgDeleteRecordmap) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRecordmap) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRecordmap) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
