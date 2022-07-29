package simulation

import (
	"math/rand"

	"cns/x/registry/keeper"
	"cns/x/registry/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgRegisterRecord(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgRegisterRecord{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the RegisterRecord simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "RegisterRecord simulation not implemented"), nil, nil
	}
}
