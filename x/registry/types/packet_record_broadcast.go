package types

// ValidateBasic is used for validating the packet
func (p RecordBroadcastPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p RecordBroadcastPacketData) GetBytes() ([]byte, error) {
	var modulePacket RegistryPacketData

	modulePacket.Packet = &RegistryPacketData_RecordBroadcastPacket{&p}

	return modulePacket.Marshal()
}
