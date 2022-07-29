package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterRecord = "register_record"

var _ sdk.Msg = &MsgRegisterRecord{}

func NewMsgRegisterRecord(creator string, chain string, address string) *MsgRegisterRecord {
	return &MsgRegisterRecord{
		Creator: creator,
		Chain:   chain,
		Address: address,
	}
}

func (msg *MsgRegisterRecord) Route() string {
	return RouterKey
}

func (msg *MsgRegisterRecord) Type() string {
	return TypeMsgRegisterRecord
}

func (msg *MsgRegisterRecord) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterRecord) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterRecord) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
