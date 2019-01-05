// 环境检查 
const waitForGlobal = async () => {
  if (window.tronWeb) {
    const tronWeb = window.tronWeb
    const nodes = await tronWeb.isConnected()
    const connected = !Object.entries(nodes).map(([key, value]) => {
      if (!value) {
        console.error(`Error: ${key} is not connected`)
      }
      return value
    }).includes(false)
    if (connected) {
      const tronWeb = tronPay.tronWeb || tronWeb
      tronApi.setTronWeb(tronWeb)
    } else {
      console.error('Error: TRON node is not connected')
      console.error('wait for tronLink')
      setTimeout(async () => {
        await waitForGlobal()
      }, 100)
    }
  } else {
    console.error('wait for tronLink')
    setTimeout(async () => {
      await waitForGlobal()
    }, 100)
  }
}

waitForGlobal().then()


const tronApi = {
  tronWeb: false,
  contract: false,
  setTronWeb (tronWeb) {
    this.tronWeb = tronWeb;
    this.contract = tronWeb.contract(contracts.abi, '416730b9f6b9c92676f125cae9aa847c2152d1e8b5') // Siring
  }
}


const send = document.querySelector('#send')
const call = document.querySelector('#call')
const call_1 = document.querySelector('#call1')
const call_2 = document.querySelector('#call2')


send.addEventListener('click', () => {
  send.innerHTML = '发送中....'
  tronApi.contract.cancelAuction(3).send({
    shouldPollResponse: true,
    callValue: 0,
  }).then(res => {
    send.innerHTML = '已发送'
    console.log('success', res)
  }).catch(err => {
    send.innerHTML = '已发送'
    console.log('error', err)
  })
})

call.addEventListener('click', () => {
  tronApi.contract.nonFungibleContract().call().then(resp => {
    console.log(resp, 'toNumber')
  })
})


call_1.addEventListener('click', () => {
  tronApi.contract.getAuction(3).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})


call_2.addEventListener('click', () => {
  tronApi.contract.getCurrentPrice(3).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})



