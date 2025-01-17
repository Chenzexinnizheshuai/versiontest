const asfn = () => new Promise((res) => {
  setTimeout(() => {
    res()
  }, 1000);
})
module.exports = function (content) {
  const cb = this.async()
    ; (async () => {
      await asfn()
      content = content.replace(/chenzexin/g, '陈泽鑫')
      console.log('陈泽鑫', content)

      cb(null, content)
    })();
}