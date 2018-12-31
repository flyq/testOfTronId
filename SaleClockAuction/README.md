# 波场合约和前端交互


## 安装谷歌TronPay钱包

```javascript
// chrome网上应用店
https://chrome.google.com/webstore/detail/tronpay/gjdneabihbmcpobmfhcnljaojmgoihfk

// github
https://github.com/tronpay/TronPay-Extension
```

## 全局声明

```javascript
const tronWeb = window.tronWeb
const contract = tronWeb.contract(合约abi, 合约哈希)
```

## call合约消息

```javascript
contract.getuint256(1).call().then(resp => {
  console.log(resp)
})

// getuint256 为合约里面的函数 后面的1 为给合约函数传参,参数是1
// 成功就会打印
```

## send合约消息

```javascript
contract.teststore().send({
  shouldPollResponse: true,
  callValue: 2000000000,
}).then(res => {
  console.log('success', res)
})

// teststore 为合约里面的函数,如果有参数则传递在teststore函数里面就行
// 成功就会打印success

// shouldPollResponse 如果设置为true，则会等到区块链节点确认后在返回消息
// callValue 如果需要用户支付钱 则设置 数量，如果不需要支付钱则是0,单位为SUN
// 1000000 SUN = 1 TRX
```




# 联系方式
anmingzhe@me.com
