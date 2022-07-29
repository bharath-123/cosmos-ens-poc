package keeper

import (
	"context"

	"cns/x/registry/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RecordmapAll(c context.Context, req *types.QueryAllRecordmapRequest) (*types.QueryAllRecordmapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var recordmaps []types.Recordmap
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	recordmapStore := prefix.NewStore(store, types.KeyPrefix(types.RecordmapKeyPrefix))

	pageRes, err := query.Paginate(recordmapStore, req.Pagination, func(key []byte, value []byte) error {
		var recordmap types.Recordmap
		if err := k.cdc.Unmarshal(value, &recordmap); err != nil {
			return err
		}

		recordmaps = append(recordmaps, recordmap)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRecordmapResponse{Recordmap: recordmaps, Pagination: pageRes}, nil
}

func (k Keeper) Recordmap(c context.Context, req *types.QueryGetRecordmapRequest) (*types.QueryGetRecordmapResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetRecordmap(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetRecordmapResponse{Recordmap: val}, nil
}
