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
    this.contract = tronWeb.contract(contracts.abi, '41a260aed6724be27b496cfdcda13b9fc1f8fff766') // Sale
  }
}


window.onload = function () {
    const send = document.querySelector('#send')
    const call = document.querySelector('#call')


    send.addEventListener('click', () => {
        send.innerHTML = '发送中....'
        tronApi.contract.cancelAuction(6).send({
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
        let id = document.querySelector('.idolId').value
        console.log(id);

        tronApi.contract.getAuction(id).call().then(resp => {
            console.log(resp,  'toNumber')
        })
    })

}


