package keeper

import (
	"cns/x/registry/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetRecordmap set a specific recordmap in the store from its index
func (k Keeper) SetRecordmap(ctx sdk.Context, recordmap types.Recordmap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RecordmapKeyPrefix))
	b := k.cdc.MustMarshal(&recordmap)
	store.Set(types.RecordmapKey(
		recordmap.Index,
	), b)
}

// GetRecordmap returns a recordmap from its index
func (k Keeper) GetRecordmap(
	ctx sdk.Context,
	index string,

) (val types.Recordmap, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RecordmapKeyPrefix))

	b := store.Get(types.RecordmapKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRecordmap removes a recordmap from the store
func (k Keeper) RemoveRecordmap(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RecordmapKeyPrefix))
	store.Delete(types.RecordmapKey(
		index,
	))
}

// GetAllRecordmap returns all recordmap
func (k Keeper) GetAllRecordmap(ctx sdk.Context) (list []types.Recordmap) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RecordmapKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Recordmap
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
