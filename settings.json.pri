{
    "public":{
        "chainName": "Dipper Network",
        "chainId": "dipperhub1",
        "gtm": "",
        "slashingWindow": 1000,
        "uptimeWindow": 1000,
        "initialPageSize": 30,
        "secp256k1": false,
        "bech32PrefixAccAddr": "dip",
        "bech32PrefixAccPub": "dippub",
        "bech32PrefixValAddr": "dipvaloper",
        "bech32PrefixValPub": "dipvaloperpub",
        "bech32PrefixConsAddr": "dipvalcons",
        "bech32PrefixConsPub": "dipvalconspub",
        "bondDenom": "pdip",
        "powerReduction": 1000000,
        "coins": [
            {
                "denom": "pdip",
                "displayName": "DIP",
                "displayNamePlural": "pdip",
                "fraction": 1000000000000
            } 
        ],
        "gasPrice": 0.000006,
        "coingeckoId": "dipper-network"
    },
    "genesisFile": "https://raw.githubusercontent.com/cpucorecore/dip-prinet/master/config/genesis.json",
    "remote":{
        "rpc":"http://localhost:26657",
        "lcd":"http://localhost:1317"
    },
    "debug": {
        "startTimer": true,
        "readGenesis": true
    },
    "params":{
        "startHeight": 0,
        "defaultBlockTime": 5000,
        "blockInterval": 15000,
        "consensusInterval": 1000,
        "statusInterval":7500,
        "signingInfoInterval": 1800000,
        "proposalInterval": 5000,
        "missedBlocksInterval": 60000,
        "delegationInterval": 900000
    }
}


