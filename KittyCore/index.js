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
    this.contract = tronWeb.contract(contracts.abi, '41b4f8413520f0a92b279c17fae1df92b1883791dc') // core
  }
}


const send = document.querySelector('#send')
const call_0 = document.querySelector('#call_0')
const call_1 = document.querySelector('#call_1')
const call_2 = document.querySelector('#call_2')
const call_3 = document.querySelector('#call_3')
const call_4 = document.querySelector('#call_4')
const call_5 = document.querySelector('#call_5')
const call_6 = document.querySelector('#call_6')
const call_7 = document.querySelector('#call_7')
const call_8 = document.querySelector('#call_8')
const call_9 = document.querySelector('#call_9')
const call_10 = document.querySelector('#call_10')
const call_11 = document.querySelector('#call_11')
const call_12 = document.querySelector('#call_12')
const call_13 = document.querySelector('#call_13')
const call_14 = document.querySelector('#call_14')



send.addEventListener('click', () => {
  send.innerHTML = '发送中....'
  //tronApi.contract.createSiringAuction(5,100000,1000000,36000).send({
  //tronApi.contract.transfer('411E0A50756D04C37DE98F0503A619EEA55EC98618',6).send({
  //tronApi.contract.bidOnSiringAuction(5,6).send({
  //tronApi.contract.createPromoKitty(23575434525,'410948FA8C9DAB10C0DC7A5D7A0C550E99DAFF4D41').send({
  //tronApi.contract.createSaleAuction(18,100000000,100000000,3600).send({
  //tronApi.contract.breedWithAuto(13,15).send({
  tronApi.contract.giveBirth(13).send({  

    shouldPollResponse: true,
    callValue: 2000000,
  }).then(res => {
    send.innerHTML = '已发送'
    console.log('success', res)
  }).catch(err => {
    send.innerHTML = '已发送'
    console.log('error', err)
  })
})

call_0.addEventListener('click', () => {
  tronApi.contract.ownerOf(3).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})

call_1.addEventListener('click', () => {
  tronApi.contract.ownerOf(15).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})

call_2.addEventListener('click', () => {
  tronApi.contract.ownerOf(2).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})

call_3.addEventListener('click', () => {
  tronApi.contract.ownerOf(3).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})

call_4.addEventListener('click', () => {
  tronApi.contract.ownerOf(4).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})

call_5.addEventListener('click', () => {
  tronApi.contract.ownerOf(5).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})

call_6.addEventListener('click', () => {
  tronApi.contract.ownerOf(6).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})

call_7.addEventListener('click', () => {
  tronApi.contract.ownerOf(7).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})


call_8.addEventListener('click', () => {
  tronApi.contract.ownerOf(8).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})


call_9.addEventListener('click', () => {
  tronApi.contract.ownerOf(9).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})

call_10.addEventListener('click', () => {
  tronApi.contract.ownerOf(10).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})
call_11.addEventListener('click', () => {
  tronApi.contract.ownerOf(11).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})
call_12.addEventListener('click', () => {
  tronApi.contract.ownerOf(12).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})
call_13.addEventListener('click', () => {
  tronApi.contract.ownerOf(13).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})
call_14.addEventListener('click', () => {
  tronApi.contract.ownerOf(14).call().then(resp => {
    console.log(resp, 'toNumber')
  })
})
