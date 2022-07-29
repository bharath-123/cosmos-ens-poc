package keeper_test

import (
	"context"
	"testing"

	keepertest "cns/testutil/keeper"
	"cns/x/registry/keeper"
	"cns/x/registry/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.RegistryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
