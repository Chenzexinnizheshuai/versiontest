class versionPlugin {
  constructor(version) {
    this.version = version
  }
  apply (compiler) {
    compiler.hooks.emit.tapAsync('陈泽鑫', (compilation, callback) => {
      const fileContent = JSON.stringify({
        version: this.version
      })

      compilation.assets["version.json"] = {
        source () {
          return fileContent
        },
        size () {
          return fileContent.length
        }
      }
      callback()
    })
  }
}
module.exports = versionPlugin