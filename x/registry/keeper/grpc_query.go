package keeper

import (
	"cns/x/registry/types"
)

var _ types.QueryServer = Keeper{}
