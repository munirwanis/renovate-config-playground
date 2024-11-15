module.exports = {
  allowedPostUpgradeCommands: [
    "install-tool ruby \\d+.\\d+.\\d+ && install-gem cocoapods \\d+.\\d+.\\d+ && pod install && find \\w+ -name Podfile -execdir pod install \\;",
  ],
  allowPostUpgradeCommandTemplating: true,
}
