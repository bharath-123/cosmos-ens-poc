package types

import (
	"testing"

	"cns/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateRecordmap_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateRecordmap
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateRecordmap{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateRecordmap{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateRecordmap_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateRecordmap
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateRecordmap{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateRecordmap{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteRecordmap_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteRecordmap
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteRecordmap{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteRecordmap{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
