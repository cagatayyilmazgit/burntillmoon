    export async function getBurnedTokenBscScan(crypto,contractAdress,walletAdress,apiKey){
        const profileResponse = await fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + contractAdress + '&address=' + walletAdress + '&apikey=' + apiKey);
        const profile = await profileResponse.json();
        document.getElementById(crypto).innerHTML = '%' + profile.result.slice(0,3)/10 + ' BURNED';
    }
    export async function getTotalSupplyEtherScan(crypto,contractAdress,apiKey){
        const totalSupplyResponse = fetch('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=' + contractAdress + '&apikey=' + apiKey)
        .then(response => response.json())
        .then(data => String(data.result))
        .then(stringData => parseInt(stringData.slice(0,9)))
        .then(result =>  document.getElementById(crypto).innerHTML = '%' + (100 * ((200000000 - result) / 200000000)).toFixed(1) + ' BURNED')
    }



