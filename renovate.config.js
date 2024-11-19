module.exports = {
  allowedPostUpgradeCommands: [
    "install-tool ruby \\d+.\\d+.\\d+ && install-gem cocoapods \\d+.\\d+.\\d+ && pod update \\D+ \\d+.\\d+.\\d+ && find \\w+ -name Podfile -execdir pod update \\D+ \\d+.\\d+.\\d+ \\\\;",
  ],
  allowPostUpgradeCommandTemplating: true,
}
