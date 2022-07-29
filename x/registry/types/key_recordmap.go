package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// RecordmapKeyPrefix is the prefix to retrieve all Recordmap
	RecordmapKeyPrefix = "Recordmap/value/"
)

// RecordmapKey returns the store key to retrieve a Recordmap from the index fields
func RecordmapKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
