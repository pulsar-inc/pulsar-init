module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
    // FIXME:
    // 'pre-commit': 'npm run test -u && git add *.md *.snap',
    // 'pre-push': 'npm run lint && npm run test'
  }
}
