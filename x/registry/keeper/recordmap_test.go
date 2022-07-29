package keeper_test

import (
	"strconv"
	"testing"

	keepertest "cns/testutil/keeper"
	"cns/testutil/nullify"
	"cns/x/registry/keeper"
	"cns/x/registry/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNRecordmap(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Recordmap {
	items := make([]types.Recordmap, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetRecordmap(ctx, items[i])
	}
	return items
}

func TestRecordmapGet(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNRecordmap(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetRecordmap(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestRecordmapRemove(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNRecordmap(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRecordmap(ctx,
			item.Index,
		)
		_, found := keeper.GetRecordmap(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestRecordmapGetAll(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNRecordmap(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllRecordmap(ctx)),
	)
}
