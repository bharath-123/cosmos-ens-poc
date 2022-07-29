package registry

import (
	"math/rand"

	"cns/testutil/sample"
	registrysimulation "cns/x/registry/simulation"
	"cns/x/registry/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = registrysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgRegisterRecord = "op_weight_msg_register_record"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRegisterRecord int = 100

	opWeightMsgCreateRecordmap = "op_weight_msg_recordmap"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateRecordmap int = 100

	opWeightMsgUpdateRecordmap = "op_weight_msg_recordmap"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateRecordmap int = 100

	opWeightMsgDeleteRecordmap = "op_weight_msg_recordmap"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteRecordmap int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	registryGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		RecordmapList: []types.Recordmap{
			{
				Creator: sample.AccAddress(),
				Index:   "0",
			},
			{
				Creator: sample.AccAddress(),
				Index:   "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&registryGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgRegisterRecord int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRegisterRecord, &weightMsgRegisterRecord, nil,
		func(_ *rand.Rand) {
			weightMsgRegisterRecord = defaultWeightMsgRegisterRecord
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRegisterRecord,
		registrysimulation.SimulateMsgRegisterRecord(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateRecordmap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateRecordmap, &weightMsgCreateRecordmap, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRecordmap = defaultWeightMsgCreateRecordmap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRecordmap,
		registrysimulation.SimulateMsgCreateRecordmap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateRecordmap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateRecordmap, &weightMsgUpdateRecordmap, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateRecordmap = defaultWeightMsgUpdateRecordmap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateRecordmap,
		registrysimulation.SimulateMsgUpdateRecordmap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteRecordmap int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteRecordmap, &weightMsgDeleteRecordmap, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteRecordmap = defaultWeightMsgDeleteRecordmap
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteRecordmap,
		registrysimulation.SimulateMsgDeleteRecordmap(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
