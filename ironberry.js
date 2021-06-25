const libraryInfo = {
  version: () => "0.0.3",
  authors: () => "Ray Voice and Anna Voice",
}

// Add more functions to this
module.exports = {
  getLeadingZeros: function (totalShardCount, partNumber) {
    let shardPrefix;
      // make it bigger, it needs to support infinite numbers (ideally)
      // Rename variables so it gets detached from slice-net
      if (totalShardCount >= 100) {
        if (partNumber >= 100) {
	  shardPrefix = "";
        } else if (partNumber >= 10) {
	  shardPrefix = "0";
        } else if (partNumber >= 1) {
	  shardPrefix = "00";
        }
      } else if (totalShardCount >=10) {
        if (partNumber >= 10) {
	  shardPrefix = "";
        } else if (partNumber >= 1) {
	  shardPrefix = "0";
        }
      } else if (totalShardCount >= 1) {
          shardPrefix = "";
      } else {
        hardLog("IronBerry Error: shard length not valid, or too many shards");
        process.exit();
      }
  return shardPrefix;
  }
}

