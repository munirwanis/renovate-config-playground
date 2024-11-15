module.exports = {
  allowedPostUpgradeCommands: [
    "install-tool ruby \\d+.\\d+.\\d+ && install-gem cocoapods \\d+.\\d+.\\d+ && pod install",
  ],
  allowPostUpgradeCommandTemplating: true,
}
